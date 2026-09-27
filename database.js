const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

function initDB() {
  db.serialize(() => {
    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      level INTEGER DEFAULT 1,
      totalXPEarned INTEGER DEFAULT 0,
      currentXP INTEGER DEFAULT 0,
      nextLevelXP INTEGER DEFAULT 500,
      questsClearedCount INTEGER DEFAULT 0,
      focusMinutes INTEGER DEFAULT 0,
      streakDays INTEGER DEFAULT 1,
      lastActiveDate INTEGER,
      guild_id INTEGER
    )`);

    // Quests table
    db.run(`CREATE TABLE IF NOT EXISTS quests (
      id TEXT PRIMARY KEY,
      username TEXT,
      title TEXT,
      difficulty TEXT,
      tierLabel TEXT,
      xp INTEGER,
      isCompleted BOOLEAN DEFAULT 0,
      createdAt INTEGER,
      completedAt INTEGER
    )`);

    // Guilds table
    db.run(`CREATE TABLE IF NOT EXISTS guilds (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE,
      tag TEXT UNIQUE,
      totalXP INTEGER DEFAULT 0,
      createdAt INTEGER
    )`);

    // Assignments table
    db.run(`CREATE TABLE IF NOT EXISTS assignments (
      id TEXT PRIMARY KEY,
      title TEXT,
      description TEXT,
      subject TEXT,
      teacher TEXT,
      deadline TEXT,
      priority TEXT,
      xp INTEGER,
      attachment TEXT,
      targetYear TEXT,
      targetBranch TEXT,
      isPublished INTEGER DEFAULT 1,
      createdAt INTEGER
    )`);

    // Notifications table
    db.run(`CREATE TABLE IF NOT EXISTS notifications (
      id TEXT PRIMARY KEY,
      title TEXT,
      message TEXT,
      priority TEXT,
      targetAudience TEXT,
      expiry TEXT,
      createdAt INTEGER
    )`);

    // Exams table
    db.run(`CREATE TABLE IF NOT EXISTS exams (
      id TEXT PRIMARY KEY,
      subject TEXT,
      examType TEXT,
      date TEXT,
      time TEXT,
      room TEXT,
      syllabus TEXT,
      targetAudience TEXT,
      createdAt INTEGER
    )`);

    // Events table
    db.run(`CREATE TABLE IF NOT EXISTS events (
      id TEXT PRIMARY KEY,
      name TEXT,
      date TEXT,
      time TEXT,
      venue TEXT,
      description TEXT,
      registrationLink TEXT,
      createdAt INTEGER
    )`);

    // Alerts table
    db.run(`CREATE TABLE IF NOT EXISTS alerts (
      id TEXT PRIMARY KEY,
      message TEXT,
      priority TEXT,
      expiry TEXT,
      targetAudience TEXT,
      isActive INTEGER DEFAULT 1,
      createdAt INTEGER
    )`);

    // Opportunities table
    db.run(`CREATE TABLE IF NOT EXISTS opportunities (
      id TEXT PRIMARY KEY,
      title TEXT,
      type TEXT,
      organization TEXT,
      deadline TEXT,
      stipend TEXT,
      description TEXT,
      link TEXT,
      tags TEXT,
      createdAt INTEGER
    )`);

    // Communication table
    db.run(`CREATE TABLE IF NOT EXISTS communication (
      id TEXT PRIMARY KEY,
      sender TEXT,
      groupName TEXT,
      message TEXT,
      timestamp TEXT,
      category TEXT,
      priority TEXT,
      extractedData TEXT,
      isParsed INTEGER DEFAULT 0
    )`);
  });
}

initDB();

module.exports = {
  db,
  
  // USER METHODS
  getUser(username) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) return reject(err);
        resolve(row);
      });
    });
  },

  getAllUsers() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM users ORDER BY totalXPEarned DESC', (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  },

  createUser(username) {
    return new Promise((resolve, reject) => {
      const now = Date.now();
      db.run('INSERT INTO users (username, lastActiveDate) VALUES (?, ?)', [username, now], function(err) {
        if (err) return reject(err);
        resolve({ username, level: 1, totalXPEarned: 0, currentXP: 0, nextLevelXP: 500, questsClearedCount: 0, focusMinutes: 0, streakDays: 1, lastActiveDate: now, guild_id: null });
      });
    });
  },

  updateUser(username, data) {
    return new Promise((resolve, reject) => {
      const { level, totalXPEarned, currentXP, nextLevelXP, questsClearedCount, focusMinutes, streakDays, lastActiveDate, guild_id } = data;
      db.run(
        `UPDATE users SET level = ?, totalXPEarned = ?, currentXP = ?, nextLevelXP = ?, questsClearedCount = ?, focusMinutes = ?, streakDays = ?, lastActiveDate = ?, guild_id = ? WHERE username = ?`,
        [level, totalXPEarned, currentXP, nextLevelXP, questsClearedCount, focusMinutes, streakDays, lastActiveDate, guild_id, username],
        (err) => {
          if (err) return reject(err);
          resolve(true);
        }
      );
    });
  },

  // QUEST METHODS
  getQuests(username) {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM quests WHERE username = ?', [username], (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  },

  saveQuest(quest) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT OR REPLACE INTO quests (id, username, title, difficulty, tierLabel, xp, isCompleted, createdAt, completedAt) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [quest.id, quest.username, quest.title, quest.difficulty, quest.tierLabel, quest.xp, quest.isCompleted ? 1 : 0, quest.createdAt, quest.completedAt],
        (err) => {
          if (err) return reject(err);
          resolve(true);
        }
      );
    });
  },

  deleteQuest(id) {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM quests WHERE id = ?', [id], (err) => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  },

  // GUILD METHODS
  getAllGuilds() {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM guilds ORDER BY totalXP DESC', (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  },

  getGuild(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM guilds WHERE id = ?', [id], (err, row) => {
        if (err) return reject(err);
        resolve(row);
      });
    });
  },

  getGuildMembers(guild_id) {
    return new Promise((resolve, reject) => {
      db.all('SELECT username, level, totalXPEarned FROM users WHERE guild_id = ? ORDER BY totalXPEarned DESC', [guild_id], (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  },

  createGuild(name, tag) {
    return new Promise((resolve, reject) => {
      const now = Date.now();
      db.run('INSERT INTO guilds (name, tag, createdAt) VALUES (?, ?, ?)', [name, tag, now], function(err) {
        if (err) return reject(err);
        resolve(this.lastID);
      });
    });
  },

  updateGuildXP(guild_id, xpToAdd) {
    return new Promise((resolve, reject) => {
      db.run('UPDATE guilds SET totalXP = totalXP + ? WHERE id = ?', [xpToAdd, guild_id], (err) => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  },

  // CONTENT MANAGEMENT METHODS
  getAll(table, orderBy = 'createdAt DESC') {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM ${table} ORDER BY ${orderBy}`, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  },

  saveAssignment(data) {
    return new Promise((resolve, reject) => {
      const id = data.id || `asg-${Date.now()}`;
      db.run(
        `INSERT OR REPLACE INTO assignments (id, title, description, subject, teacher, deadline, priority, xp, attachment, targetYear, targetBranch, isPublished, createdAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, data.title, data.description, data.subject, data.teacher, data.deadline, data.priority || 'Normal', data.xp || 100, data.attachment || '', data.targetYear || 'All Years', data.targetBranch || 'All Branches', data.isPublished ? 1 : 0, data.createdAt || Date.now()],
        (err) => {
          if (err) return reject(err);
          resolve({ id });
        }
      );
    });
  },

  deleteRecord(table, id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM ${table} WHERE id = ?`, [id], (err) => {
        if (err) return reject(err);
        resolve(true);
      });
    });
  }
};
