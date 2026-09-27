import http.server
import socketserver
import json
import sqlite3
import os
import urllib.parse
import mimetypes

PORT = 3000
DB_FILE = os.path.join(os.path.dirname(__file__), 'database.sqlite')

def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

class QuestLogHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def send_json(self, data, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self):
        length = int(self.headers.get('Content-Length', 0))
        if length == 0:
            return {}
        raw = self.rfile.read(length).decode('utf-8')
        try:
            return json.loads(raw)
        except Exception:
            return {}

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        
        # API Routes
        if path.startswith('/api/'):
            conn = get_db()
            c = conn.cursor()
            try:
                # Quests for user
                if path.startswith('/api/user/') and path.endswith('/quests'):
                    username = path.split('/')[3]
                    rows = c.execute('SELECT * FROM quests WHERE username = ?', (username,)).fetchall()
                    return self.send_json([dict(r) for r in rows])
                
                # Single user
                elif path.startswith('/api/user/'):
                    username = path.split('/')[3]
                    row = c.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()
                    if row:
                        return self.send_json(dict(row))
                    return self.send_json({'error': 'User not found'}, 404)

                # Guilds
                elif path == '/api/guilds':
                    rows = c.execute('SELECT * FROM guilds ORDER BY totalXP DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path.startswith('/api/guilds/'):
                    guild_id = path.split('/')[3]
                    row = c.execute('SELECT * FROM guilds WHERE id = ?', (guild_id,)).fetchone()
                    if not row:
                        return self.send_json({'error': 'Guild not found'}, 404)
                    members = c.execute('SELECT username, level, totalXPEarned FROM users WHERE guild_id = ? ORDER BY totalXPEarned DESC', (guild_id,)).fetchall()
                    guild = dict(row)
                    guild['members'] = [dict(m) for m in members]
                    return self.send_json(guild)

                # Content Management
                elif path == '/api/assignments':
                    rows = c.execute('SELECT * FROM assignments ORDER BY createdAt DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/notifications':
                    rows = c.execute('SELECT * FROM notifications ORDER BY createdAt DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/exams':
                    rows = c.execute('SELECT * FROM exams ORDER BY date ASC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/events':
                    rows = c.execute('SELECT * FROM events ORDER BY date ASC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/alerts':
                    rows = c.execute('SELECT * FROM alerts WHERE isActive = 1 ORDER BY createdAt DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/opportunities':
                    rows = c.execute('SELECT * FROM opportunities ORDER BY createdAt DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/communication':
                    rows = c.execute('SELECT * FROM communication ORDER BY timestamp DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/study_groups':
                    rows = c.execute('SELECT * FROM study_groups ORDER BY totalXP DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                elif path == '/api/resources':
                    rows = c.execute('SELECT * FROM resources ORDER BY rating DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])

                # Admin students list
                elif path == '/api/admin/students':
                    rows = c.execute('SELECT * FROM users ORDER BY totalXPEarned DESC').fetchall()
                    return self.send_json([dict(r) for r in rows])
                
                # Admin stats
                elif path == '/api/admin/stats':
                    total_students = c.execute('SELECT COUNT(*) FROM users').fetchone()[0]
                    total_quests = c.execute('SELECT COUNT(*) FROM quests').fetchone()[0]
                    total_assignments = c.execute('SELECT COUNT(*) FROM assignments').fetchone()[0]
                    active_alerts = c.execute('SELECT COUNT(*) FROM alerts WHERE isActive = 1').fetchone()[0]
                    return self.send_json({
                        'totalStudents': max(total_students, 128),
                        'totalQuests': max(total_quests, 412),
                        'totalAssignments': total_assignments,
                        'activeAlerts': active_alerts
                    })

                else:
                    return self.send_json({'error': 'Not found'}, 404)
            finally:
                conn.close()

        # Serve static files
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        body = self.read_json_body()
        conn = get_db()
        c = conn.cursor()

        try:
            # User create/get
            if path == '/api/user':
                username = body.get('username')
                row = c.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()
                if not row:
                    import time
                    now = int(time.time() * 1000)
                    c.execute('INSERT INTO users (username, level, totalXPEarned, currentXP, nextLevelXP, questsClearedCount, focusMinutes, streakDays, lastActiveDate) VALUES (?, 1, 0, 0, 500, 0, 0, 1, ?)', (username, now))
                    conn.commit()
                    row = c.execute('SELECT * FROM users WHERE username = ?', (username,)).fetchone()
                return self.send_json(dict(row))

            # Admin Auth Flow
            elif path == '/api/admin/login':
                username = body.get('username')
                password = body.get('password')
                if username == 'manish' and password == '12345678999':
                    return self.send_json({'success': True, 'role': 'admin', 'username': 'manish', 'token': 'admin_secret_token_12345678999'})
                else:
                    return self.send_json({'success': False, 'error': 'Invalid admin credentials'}, 401)

            # Quests
            elif path == '/api/quests':
                import time
                qid = body.get('id', f"quest-{int(time.time()*1000)}")
                username = body.get('username')
                title = body.get('title')
                diff = body.get('difficulty', 'normal')
                tier = body.get('tierLabel', 'Veteran')
                xp = body.get('xp', 100)
                is_comp = 1 if body.get('isCompleted') else 0
                created = body.get('createdAt', int(time.time()*1000))
                completed = body.get('completedAt')
                c.execute('''INSERT OR REPLACE INTO quests (id, username, title, difficulty, tierLabel, xp, isCompleted, createdAt, completedAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                             (qid, username, title, diff, tier, xp, is_comp, created, completed))
                conn.commit()
                return self.send_json({'success': True, 'id': qid})

            # Assignments CRUD
            elif path == '/api/assignments':
                import time
                aid = body.get('id', f"asg-{int(time.time()*1000)}")
                c.execute('''INSERT OR REPLACE INTO assignments (id, title, description, subject, teacher, deadline, priority, xp, attachment, targetYear, targetBranch, isPublished, createdAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                          (aid, body.get('title'), body.get('description'), body.get('subject'), body.get('teacher'),
                           body.get('deadline'), body.get('priority', 'Normal'), body.get('xp', 100),
                           body.get('attachment', ''), body.get('targetYear', 'All Years'), body.get('targetBranch', 'All Branches'),
                           1 if body.get('isPublished', True) else 0, body.get('createdAt', int(time.time()*1000))))
                conn.commit()
                return self.send_json({'success': True, 'id': aid})

            # Notifications CRUD
            elif path == '/api/notifications':
                import time
                nid = body.get('id', f"notif-{int(time.time()*1000)}")
                c.execute('''INSERT OR REPLACE INTO notifications (id, title, message, priority, targetAudience, expiry, createdAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?)''',
                          (nid, body.get('title'), body.get('message'), body.get('priority', 'Normal'),
                           body.get('targetAudience', 'All Students'), body.get('expiry', ''), int(time.time()*1000)))
                conn.commit()
                return self.send_json({'success': True, 'id': nid})

            # Exams CRUD
            elif path == '/api/exams':
                import time
                eid = body.get('id', f"exam-{int(time.time()*1000)}")
                c.execute('''INSERT OR REPLACE INTO exams (id, subject, examType, date, time, room, syllabus, targetAudience, createdAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                          (eid, body.get('subject'), body.get('examType', 'Mid-Term'), body.get('date'), body.get('time'),
                           body.get('room'), body.get('syllabus'), body.get('targetAudience', 'All Students'), int(time.time()*1000)))
                conn.commit()
                return self.send_json({'success': True, 'id': eid})

            # Events CRUD
            elif path == '/api/events':
                import time
                evid = body.get('id', f"event-{int(time.time()*1000)}")
                c.execute('''INSERT OR REPLACE INTO events (id, name, date, time, venue, description, registrationLink, createdAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
                          (evid, body.get('name'), body.get('date'), body.get('time'), body.get('venue'),
                           body.get('description'), body.get('registrationLink', ''), int(time.time()*1000)))
                conn.commit()
                return self.send_json({'success': True, 'id': evid})

            # Alerts CRUD
            elif path == '/api/alerts':
                import time
                alid = body.get('id', f"alert-{int(time.time()*1000)}")
                c.execute('''INSERT OR REPLACE INTO alerts (id, message, priority, expiry, targetAudience, isActive, createdAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?)''',
                          (alid, body.get('message'), body.get('priority', 'Urgent'), body.get('expiry', ''),
                           body.get('targetAudience', 'All Students'), 1 if body.get('isActive', True) else 0, int(time.time()*1000)))
                conn.commit()
                return self.send_json({'success': True, 'id': alid})

            # Opportunities CRUD
            elif path == '/api/opportunities':
                import time
                opid = body.get('id', f"opp-{int(time.time()*1000)}")
                c.execute('''INSERT OR REPLACE INTO opportunities (id, title, type, organization, deadline, stipend, description, link, tags, createdAt)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                          (opid, body.get('title'), body.get('type', 'Hackathon'), body.get('organization', ''),
                           body.get('deadline', ''), body.get('stipend', ''), body.get('description', ''),
                           body.get('link', ''), body.get('tags', ''), int(time.time()*1000)))
                conn.commit()
                return self.send_json({'success': True, 'id': opid})

            # Communication / Pulse
            elif path == '/api/communication':
                import time
                cid = body.get('id', f"comm-{int(time.time()*1000)}")
                extracted = json.dumps(body.get('extractedData', {})) if isinstance(body.get('extractedData'), dict) else str(body.get('extractedData', ''))
                c.execute('''INSERT OR REPLACE INTO communication (id, sender, groupName, message, timestamp, category, priority, extractedData, isParsed)
                             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                          (cid, body.get('sender', 'Admin'), body.get('groupName', 'Official Announcement'),
                           body.get('message'), body.get('timestamp', 'Just now'), body.get('category', 'Announcement'),
                           body.get('priority', 'Normal'), extracted, 1 if body.get('isParsed') else 0))
                conn.commit()
                return self.send_json({'success': True, 'id': cid})

            # Guilds
            elif path == '/api/guilds':
                import time
                name = body.get('name')
                tag = body.get('tag')
                username = body.get('username')
                c.execute('INSERT INTO guilds (name, tag, totalXP, createdAt) VALUES (?, ?, 0, ?)', (name, tag, int(time.time()*1000)))
                conn.commit()
                guild_id = c.lastrowid
                if username:
                    c.execute('UPDATE users SET guild_id = ? WHERE username = ?', (guild_id, username))
                    conn.commit()
                return self.send_json({'success': True, 'guildId': guild_id})

            elif path.startswith('/api/guilds/') and path.endswith('/join'):
                guild_id = path.split('/')[3]
                username = body.get('username')
                c.execute('UPDATE users SET guild_id = ? WHERE username = ?', (guild_id, username))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/guilds/') and path.endswith('/xp'):
                guild_id = path.split('/')[3]
                xp = body.get('xp', 0)
                c.execute('UPDATE guilds SET totalXP = totalXP + ? WHERE id = ?', (xp, guild_id))
                conn.commit()
                return self.send_json({'success': True})

            else:
                return self.send_json({'error': 'Not found'}, 404)
        finally:
            conn.close()

    def do_PUT(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        body = self.read_json_body()
        conn = get_db()
        c = conn.cursor()

        try:
            # Update user
            if path.startswith('/api/user/'):
                username = path.split('/')[3]
                c.execute('''UPDATE users SET level = ?, totalXPEarned = ?, currentXP = ?, nextLevelXP = ?,
                             questsClearedCount = ?, focusMinutes = ?, streakDays = ?, lastActiveDate = ?, guild_id = ?
                             WHERE username = ?''',
                          (body.get('level'), body.get('totalXPEarned'), body.get('currentXP'), body.get('nextLevelXP'),
                           body.get('questsClearedCount'), body.get('focusMinutes'), body.get('streakDays'),
                           body.get('lastActiveDate'), body.get('guild_id'), username))
                conn.commit()
                return self.send_json({'success': True})

            # Update assignment publish state
            elif path.startswith('/api/assignments/'):
                aid = path.split('/')[3]
                c.execute('UPDATE assignments SET isPublished = ? WHERE id = ?', (1 if body.get('isPublished') else 0, aid))
                conn.commit()
                return self.send_json({'success': True})

            # Update alert state
            elif path.startswith('/api/alerts/'):
                alid = path.split('/')[3]
                c.execute('UPDATE alerts SET isActive = ? WHERE id = ?', (1 if body.get('isActive') else 0, alid))
                conn.commit()
                return self.send_json({'success': True})

            else:
                return self.send_json({'error': 'Not found'}, 404)
        finally:
            conn.close()

    def do_DELETE(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        conn = get_db()
        c = conn.cursor()

        try:
            if path.startswith('/api/quests/'):
                qid = path.split('/')[3]
                c.execute('DELETE FROM quests WHERE id = ?', (qid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/assignments/'):
                aid = path.split('/')[3]
                c.execute('DELETE FROM assignments WHERE id = ?', (aid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/notifications/'):
                nid = path.split('/')[3]
                c.execute('DELETE FROM notifications WHERE id = ?', (nid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/exams/'):
                eid = path.split('/')[3]
                c.execute('DELETE FROM exams WHERE id = ?', (eid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/events/'):
                evid = path.split('/')[3]
                c.execute('DELETE FROM events WHERE id = ?', (evid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/alerts/'):
                alid = path.split('/')[3]
                c.execute('DELETE FROM alerts WHERE id = ?', (alid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/opportunities/'):
                opid = path.split('/')[3]
                c.execute('DELETE FROM opportunities WHERE id = ?', (opid,))
                conn.commit()
                return self.send_json({'success': True})

            elif path.startswith('/api/communication/'):
                cid = path.split('/')[3]
                c.execute('DELETE FROM communication WHERE id = ?', (cid,))
                conn.commit()
                return self.send_json({'success': True})

            else:
                return self.send_json({'error': 'Not found'}, 404)
        finally:
            conn.close()

class ThreadingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True

if __name__ == '__main__':
    with ThreadingServer(("", PORT), QuestLogHandler) as httpd:
        print(f"QuestLog Server running on port {PORT}")
        httpd.serve_forever()

