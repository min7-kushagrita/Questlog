const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, '')));

// ==========================================
// USER ENDPOINTS
// ==========================================
app.post('/api/user', async (req, res) => {
  try {
    const { username } = req.body;
    let user = await db.getUser(username);
    if (!user) {
      user = await db.createUser(username);
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/user/:username', async (req, res) => {
  try {
    await db.updateUser(req.params.username, req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// ADMIN AUTH ENDPOINT
// ==========================================
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'manish' && password === '12345678999') {
    res.json({ success: true, role: 'admin', username: 'manish', token: 'admin_secret_token_12345678999' });
  } else {
    res.status(401).json({ success: false, error: 'Invalid admin credentials' });
  }
});

app.get('/api/admin/students', async (req, res) => {
  try {
    const students = await db.getAllUsers();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// QUEST ENDPOINTS
// ==========================================
app.get('/api/user/:username/quests', async (req, res) => {
  try {
    const quests = await db.getQuests(req.params.username);
    res.json(quests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/quests', async (req, res) => {
  try {
    await db.saveQuest(req.body);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/quests/:id', async (req, res) => {
  try {
    await db.deleteQuest(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// CONTENT MANAGEMENT ENDPOINTS
// ==========================================
app.get('/api/assignments', async (req, res) => {
  try {
    const rows = await db.getAll('assignments', 'createdAt DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/assignments', async (req, res) => {
  try {
    const result = await db.saveAssignment(req.body);
    res.json({ success: true, ...result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/assignments/:id', async (req, res) => {
  try {
    await db.deleteRecord('assignments', req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/notifications', async (req, res) => {
  try {
    const rows = await db.getAll('notifications', 'createdAt DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/exams', async (req, res) => {
  try {
    const rows = await db.getAll('exams', 'date ASC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const rows = await db.getAll('events', 'date ASC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/alerts', async (req, res) => {
  try {
    const rows = await db.getAll('alerts', 'createdAt DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/opportunities', async (req, res) => {
  try {
    const rows = await db.getAll('opportunities', 'createdAt DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/communication', async (req, res) => {
  try {
    const rows = await db.getAll('communication', 'timestamp DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==========================================
// GUILD ENDPOINTS
// ==========================================
app.get('/api/guilds', async (req, res) => {
  try {
    const guilds = await db.getAllGuilds();
    res.json(guilds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/guilds/:id', async (req, res) => {
  try {
    const guild = await db.getGuild(req.params.id);
    if (!guild) return res.status(404).json({ error: 'Guild not found' });
    const members = await db.getGuildMembers(req.params.id);
    res.json({ ...guild, members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/guilds', async (req, res) => {
  try {
    const { name, tag, username } = req.body;
    const guildId = await db.createGuild(name, tag);
    const user = await db.getUser(username);
    if (user) {
      user.guild_id = guildId;
      await db.updateUser(username, user);
    }
    res.json({ success: true, guildId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/guilds/:id/join', async (req, res) => {
  try {
    const { username } = req.body;
    const user = await db.getUser(username);
    if (user) {
      user.guild_id = req.params.id;
      await db.updateUser(username, user);
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/guilds/:id/xp', async (req, res) => {
  try {
    const { xp } = req.body;
    await db.updateGuildXP(req.params.id, xp);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fallback to index.html for SPA
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
