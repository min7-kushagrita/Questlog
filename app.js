/**
 * ============================================================================
 * QuestLog - Student Operating System | OSS Edition
 * Complete: Student Productivity + College Communication + Gamification + Career + AI
 * ============================================================================
 * Features:
 * 1. Real Admin Authentication & Content Management (manish / 12345678999)
 * 2. QuestLog Pulse (WhatsApp / College Communication AI Extractor)
 * 3. College Brain Search (Searchable College Knowledge Layer)
 * 4. Career Skill Tree (7 Interactive Career Tracks)
 * 5. QuestLog XP Shop (Cosmetics, Armors, Titles, Shaders)
 * 6. Personal Recommendations ("For You")
 * 7. QuestLog AI (Central Conversational Advisor & Quest Planner)
 * 8. Smart Calendar (Day/Week/Month & Conflict Detection)
 * 9. Focus Mode (Pomodoro Arena with Quest Binding)
 * 10. Team Finder (Hackathons, Projects & Startups)
 * 11. Study Groups & Shared Goals
 * 12. Resource Vault (Notes, PDFs, PYQs, Ratings, Bookmarks)
 * 13. Semester Command Center & "What Should I Improve?" Diagnostic
 * 14. GitHub Integration (Real Public API Sync)
 * 15. Automatic Student Portfolio (Resume & PDF Export)
 * 16. "⚡ What Should I Do Now?" Hero Action Engine
 * 17. QuestLog World (Interactive Cyber Campus with 3D Character)
 * 18. Advanced Personal Analytics & SVG Charts
 * 19. Smart Reminders & Emergency Alerts Banner
 * 20. Multi-Activity Streak System & Advanced Leaderboards
 * 21. High-Fidelity Three.js 3D WebGL Operative Studio
 * 22. Unified Quest Engine (Central Nervous System)
 */

'use strict';

/* ============================================================================
   1. PROCEDURAL SOUND SYNTHESIZER (WEB AUDIO API)
   ============================================================================ */
class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(180, this.ctx.currentTime + 0.04);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playEquip(isWeapon = false) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    if (isWeapon) {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    }
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playQuestComplete() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.15, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.3);
    });
  }

  playLevelUp() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const fanfareNotes = [261.63, 392.00, 523.25, 659.25, 783.99, 1046.50];
    fanfareNotes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      gain.gain.setValueAtTime(0.18, now + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.45);
    });
  }

  playReward() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [659.25, 783.99, 1046.50];
    notes.forEach((f, i) => {
      const o = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      o.type = 'triangle';
      o.frequency.value = f;
      g.gain.setValueAtTime(0.16, now + i * 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.22);
      o.connect(g);
      g.connect(this.ctx.destination);
      o.start(now + i * 0.08);
      o.stop(now + i * 0.08 + 0.24);
    });
  }

  playBadge() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(440, now);
    o.frequency.exponentialRampToValueAtTime(1320, now + 0.35);
    g.gain.setValueAtTime(0.2, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    o.connect(g);
    g.connect(this.ctx.destination);
    o.start(now);
    o.stop(now + 0.5);
  }
}

const soundFX = new SoundFX();

/* ============================================================================
   2. FULLSCREEN CANVAS CONFETTI PARTICLE ENGINE
   ============================================================================ */
class ConfettiEngine {
  constructor() {
    this.canvas = document.getElementById('confetti-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.colors = ['#00d2ff', '#8a2be2', '#38bdf8', '#fbbf24', '#10b981', '#ffffff', '#f43f5e'];
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 80) {
    if (!this.ctx) return;
    this.resize();
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2,
        y: this.canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        size: Math.random() * 8 + 4,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.2,
        life: 1.0,
        decay: Math.random() * 0.015 + 0.01
      });
    }
    if (!this.animating) {
      this.animating = true;
      this.animate();
    }
  }

  animate() {
    if (!this.ctx || this.particles.length === 0) {
      this.animating = false;
      if (this.ctx) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      return;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.vr;
      p.life -= p.decay;

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.life);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();

      if (p.life <= 0 || p.y > this.canvas.height + 50) {
        this.particles.splice(idx, 1);
      }
    });
    requestAnimationFrame(() => this.animate());
  }
}

const confettiEngine = new ConfettiEngine();

/* ============================================================================
   3. AMBIENT BACKGROUND PARTICLES
   ============================================================================ */
class AmbientParticleEngine {
  constructor() {
    this.canvas = document.getElementById('ambient-particles');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    for (let i = 0; i < 45; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'rgba(0, 210, 255, 0.8)';
    this.particles.forEach(p => {
      p.y -= p.speedY;
      if (p.y < -10) p.y = this.canvas.height + 10;
      this.ctx.globalAlpha = p.opacity;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    requestAnimationFrame(() => this.animate());
  }
}

new AmbientParticleEngine();

/* ============================================================================
   4. TOAST NOTIFICATION SYSTEM
   ============================================================================ */
class ToastManager {
  static show(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast-card ${type}`;
    toast.innerHTML = `<span>${type === 'urgent' || type === 'error' ? '🚨' : type === 'success' ? '✅' : '⚡'}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-30px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

/* ============================================================================
   5. DATA PERSISTENCE & STORAGE KEYS
   ============================================================================ */
const STORAGE_KEYS = {
  AUTH_USER: 'questlog_gamertag_v4',
  ADMIN_AUTH: 'questlog_admin_auth_v4',
  PLAYER: 'questlog_player_data_v4',
  EQUIPPED: 'questlog_equipped_loadout_v4',
  STREAK_MATRIX: 'questlog_streak_matrix_v4',
  ACTIVE_QUESTS: 'questlog_active_quests_v4',
  COMPLETED_QUESTS: 'questlog_completed_quests_v4',
  SETTINGS: 'questlog_settings_v4',
  THEME: 'questlog_theme_pref_v4',
  VIBE: 'questlog_3d_vibe_v4',
  ASSIGNMENTS: 'questlog_assignments_v4',
  NOTIFICATIONS: 'questlog_notifications_v4',
  EXAMS: 'questlog_exams_v4',
  EVENTS: 'questlog_events_v4',
  ALERTS: 'questlog_alerts_v4',
  OPPORTUNITIES: 'questlog_opportunities_v4',
  COMMUNICATION: 'questlog_communication_v4',
  STUDY_GROUPS: 'questlog_studygroups_v4',
  RESOURCES: 'questlog_resources_v4',
  REMINDERS: 'questlog_reminders_v4',
  SKILLS: 'questlog_skills_v4',
  WEEKLY: 'questlog_weekly_v4',
  ACTIVITIES: 'questlog_activities_v4',
  TESTS: 'questlog_tests_v4',
  GITHUB_USER: 'questlog_github_user_v4',
  INVENTORY: 'questlog_inventory_v4'
};

const DEFAULT_PLAYER_STATE = {
  level: 1,
  currentXP: 0,
  totalXPEarned: 0,
  nextLevelXP: 500,
  streakDays: 3,
  lastDailyClaim: null,
  focusMinutes: 45,
  questsClearedCount: 2
};

const DEFAULT_EQUIPPED_LOADOUT = {
  head: 'item-head-1',
  torso: 'item-torso-1',
  weapon: 'item-weapon-1',
  accessory: 'item-acc-1'
};

const VAULT_ITEMS_CATALOG = [
  { id: 'item-head-1', name: "Neon Visor", type: 'head', rarity: 'common', price: 100, desc: "Standard issue tactical cyber visor with real-time HUD.", icon: '🥽' },
  { id: 'item-head-2', name: "Tactical Headset", type: 'head', rarity: 'rare', price: 500, desc: "Noise-cancelling communications array tuned for deep focus trances.", icon: '🎧' },
  { id: 'item-head-3', name: "Hacker's Crown", type: 'head', rarity: 'legendary', price: 5000, desc: "A blazing golden cybernetic tiara awarded only to elite master coders.", icon: '👑' },
  { id: 'item-torso-1', name: "Neon Strike Armor", type: 'torso', rarity: 'common', price: 100, desc: "Lightweight composite plates with dynamic electroluminescent piping.", icon: '🥋' },
  { id: 'item-torso-2', name: "Charcoal Stealth Coat", type: 'torso', rarity: 'rare', price: 500, desc: "Ballistic carbon-fiber weave that absorbs radar and ambient chatter.", icon: '🧥' },
  { id: 'item-torso-3', name: "Crimson Overlord Aegis", type: 'torso', rarity: 'epic', price: 1000, desc: "Obsidian combat plates glowing with raw algorithmic fury.", icon: '🛡️' },
  { id: 'item-weapon-1', name: "Cyber Katana", type: 'weapon', rarity: 'rare', price: 500, desc: "Monofilament laser edge tuned to slice through complex data structures.", icon: '🗡️' },
  { id: 'item-weapon-2', name: "Plasma Railgun", type: 'weapon', rarity: 'epic', price: 1000, desc: "High-voltage magnetic accelerator weapon for long-range debugging.", icon: '🔫' },
  { id: 'item-weapon-3', name: "Quantum Staff", type: 'weapon', rarity: 'legendary', price: 5000, desc: "Channel raw quantum state superpositions directly into runtime memory.", icon: '🪄' },
  { id: 'item-acc-1', name: "Orbit Drone", type: 'accessory', rarity: 'rare', price: 500, desc: "Autonomous hovering companion drone monitoring CPU threads.", icon: '🛸' },
  { id: 'item-acc-2', name: "Phoenix Cyber Wings", type: 'accessory', rarity: 'epic', price: 1000, desc: "Prismatic light wings that ignite during deep work focus trances.", icon: '🪽' }
];

class StorageManager {
  static get(key, defaultVal) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  }

  static set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  }

  static getAuthUser() {
    return localStorage.getItem(STORAGE_KEYS.AUTH_USER) || null;
  }

  static setAuthUser(user) {
    localStorage.setItem(STORAGE_KEYS.AUTH_USER, user);
  }

  static clearAuthUser() {
    localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
  }

  static isAdminLoggedIn() {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
  }

  static setAdminLoggedIn(flag) {
    if (flag) {
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
  }

  static loadPlayer() {
    return this.get(STORAGE_KEYS.PLAYER, { ...DEFAULT_PLAYER_STATE });
  }

  static savePlayer(p) {
    this.set(STORAGE_KEYS.PLAYER, p);
  }

  static loadEquipped() {
    return this.get(STORAGE_KEYS.EQUIPPED, { ...DEFAULT_EQUIPPED_LOADOUT });
  }

  static saveEquipped(eq) {
    this.set(STORAGE_KEYS.EQUIPPED, eq);
  }

  static loadActiveQuests() {
    return this.get(STORAGE_KEYS.ACTIVE_QUESTS, [
      { id: 'asg-1-quest', title: 'DBMS Assignment 3: ER Modeling & BCNF', difficulty: 'boss', xp: 150, tierLabel: 'Boss Quest', createdAt: Date.now() - 3600000 * 2, source: 'admin', deadline: 'Friday 11:59 PM', skillId: 'swe-1' },
      { id: 'mock-1', title: 'Master C++ Dynamic Vectors & Memory Allocation', difficulty: 'normal', xp: 100, tierLabel: 'Veteran', createdAt: Date.now() - 3600000 * 4, source: 'skill', skillId: 'swe-1' },
      { id: 'mock-2', title: 'Grind 5 HackerRank Array Manipulation Challenges', difficulty: 'normal', xp: 100, tierLabel: 'Veteran', createdAt: Date.now() - 3600000 * 1, source: 'dsa', skillId: 'swe-3' }
    ]);
  }

  static saveActiveQuests(q) {
    this.set(STORAGE_KEYS.ACTIVE_QUESTS, q);
  }

  static loadCompletedQuests() {
    return this.get(STORAGE_KEYS.COMPLETED_QUESTS, [
      { id: 'comp-1', title: 'Setup Linux Dev Container & Git SSH Keys', xp: 100, difficulty: 'normal', completedAt: Date.now() - 86400000 }
    ]);
  }

  static saveCompletedQuests(q) {
    this.set(STORAGE_KEYS.COMPLETED_QUESTS, q);
  }

  static loadInventory() {
    return this.get(STORAGE_KEYS.INVENTORY, ['item-head-1', 'item-torso-1', 'item-weapon-1', 'item-acc-1']);
  }

  static saveInventory(inv) {
    this.set(STORAGE_KEYS.INVENTORY, inv);
  }
}

/* ============================================================================
   6. THEME MANAGER
   ============================================================================ */
class ThemeManager {
  constructor() {
    this.themes = ['theme-rookie', 'theme-elite', 'theme-master'];
    this.labels = ['ROOKIE THEME', 'ELITE THEME', 'MASTER THEME'];
    this.currentIndex = 0;
    this.badgeEl = document.getElementById('theme-badge-text');
    this.btn = document.getElementById('theme-toggle-btn');
    this.init();
  }

  init() {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved && this.themes.includes(saved)) {
      this.currentIndex = this.themes.indexOf(saved);
    }
    this.apply();
    if (this.btn) {
      this.btn.addEventListener('click', () => {
        soundFX.playClick();
        this.currentIndex = (this.currentIndex + 1) % this.themes.length;
        this.apply();
      });
    }
  }

  apply() {
    document.body.classList.remove(...this.themes);
    document.body.classList.add(this.themes[this.currentIndex]);
    if (this.badgeEl) this.badgeEl.textContent = this.labels[this.currentIndex];
    localStorage.setItem(STORAGE_KEYS.THEME, this.themes[this.currentIndex]);
  }
}

/* ============================================================================
   7. AUTHENTICATION MANAGER (REAL ADMIN & STUDENT AUTHENTICATION)
   ============================================================================ */
class AuthManager {
  constructor(onStudentLogin, onAdminLogin) {
    this.onStudentLogin = onStudentLogin;
    this.onAdminLogin = onAdminLogin;

    this.authGatewayEl = document.getElementById('auth-gateway');
    this.mainAppEl = document.getElementById('main-app');
    this.adminAppEl = document.getElementById('admin-app');
    this.loginForm = document.getElementById('login-form');
    this.gamerTagInput = document.getElementById('login-gamertag');
    this.passwordInput = document.getElementById('login-password');
    this.logoutBtn = document.getElementById('logout-btn');
    this.adminLogoutBtn = document.getElementById('admin-logout-btn');
    this.headerGamerTagEl = document.getElementById('header-gamertag-val');
    this.studioGamerTagEl = document.getElementById('studio-gamertag');
    this.quickTagButtons = document.querySelectorAll('.quick-tag-pill');

    this.init();
  }

  init() {
    this.quickTagButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        if (this.gamerTagInput) this.gamerTagInput.value = btn.dataset.tag;
        if (this.passwordInput) this.passwordInput.value = btn.dataset.pass || 'password123';
      });
    });

    if (this.loginForm) {
      this.loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLogin();
      });
    }

    if (this.logoutBtn) {
      this.logoutBtn.addEventListener('click', () => {
        soundFX.playClick();
        this.handleLogout();
      });
    }

    if (this.adminLogoutBtn) {
      this.adminLogoutBtn.addEventListener('click', () => {
        soundFX.playClick();
        this.handleAdminLogout();
      });
    }

    // Protection check on page load:
    if (StorageManager.isAdminLoggedIn()) {
      this.showAdminImmediate();
    } else {
      const savedUser = StorageManager.getAuthUser();
      if (savedUser) {
        this.applyUser(savedUser);
        this.showDashboardImmediate();
      } else {
        this.showLoginImmediate();
      }
    }
  }

  handleLogin() {
    const user = this.gamerTagInput.value.trim();
    const pass = this.passwordInput.value.trim();

    soundFX.playClick();

    // 1. EXACT DEMO ADMIN CREDENTIALS: manish + 12345678999
    if (user === 'manish' && pass === '12345678999') {
      StorageManager.setAdminLoggedIn(true);
      StorageManager.clearAuthUser(); // Do not mix with student
      ToastManager.show('👑 Authenticated as Super Admin: Manish', 'success');

      if (this.authGatewayEl) this.authGatewayEl.style.display = 'none';
      if (this.mainAppEl) this.mainAppEl.style.display = 'none';
      if (this.adminAppEl) this.adminAppEl.style.display = 'flex';

      if (this.onAdminLogin) this.onAdminLogin();
      return;
    }

    // 2. Otherwise Student Login
    const tag = user || 'CyberVanguard';
    StorageManager.setAdminLoggedIn(false);
    StorageManager.setAuthUser(tag);
    this.applyUser(tag);

    ToastManager.show(`⚡ Operator Authenticated: ${tag}`, 'success');

    if (this.authGatewayEl) {
      this.authGatewayEl.classList.add('fade-out');
      setTimeout(() => {
        this.authGatewayEl.style.display = 'none';
        this.authGatewayEl.classList.remove('fade-out');
        if (this.adminAppEl) this.adminAppEl.style.display = 'none';
        if (this.mainAppEl) this.mainAppEl.style.display = 'flex';
        if (this.onStudentLogin) this.onStudentLogin(tag);
      }, 400);
    }
  }

  handleLogout() {
    StorageManager.clearAuthUser();
    if (this.mainAppEl) this.mainAppEl.style.display = 'none';
    if (this.adminAppEl) this.adminAppEl.style.display = 'none';
    if (this.authGatewayEl) {
      this.authGatewayEl.style.display = 'flex';
      if (this.gamerTagInput) this.gamerTagInput.value = '';
      if (this.passwordInput) this.passwordInput.value = '';
    }
    ToastManager.show('Logged out of Operator Console.', 'info');
  }

  handleAdminLogout() {
    StorageManager.setAdminLoggedIn(false);
    if (this.adminAppEl) this.adminAppEl.style.display = 'none';
    if (this.mainAppEl) this.mainAppEl.style.display = 'none';
    if (this.authGatewayEl) {
      this.authGatewayEl.style.display = 'flex';
      if (this.gamerTagInput) this.gamerTagInput.value = '';
      if (this.passwordInput) this.passwordInput.value = '';
    }
    ToastManager.show('Logged out of Admin Portal.', 'info');
  }

  applyUser(tag) {
    if (this.headerGamerTagEl) this.headerGamerTagEl.textContent = tag.toUpperCase();
    if (this.studioGamerTagEl) this.studioGamerTagEl.textContent = tag.toUpperCase();
  }

  showAdminImmediate() {
    if (this.authGatewayEl) this.authGatewayEl.style.display = 'none';
    if (this.mainAppEl) this.mainAppEl.style.display = 'none';
    if (this.adminAppEl) this.adminAppEl.style.display = 'flex';
    if (this.onAdminLogin) this.onAdminLogin();
  }

  showDashboardImmediate() {
    if (this.authGatewayEl) this.authGatewayEl.style.display = 'none';
    if (this.adminAppEl) this.adminAppEl.style.display = 'none';
    if (this.mainAppEl) this.mainAppEl.style.display = 'flex';
    if (this.onStudentLogin) this.onStudentLogin(StorageManager.getAuthUser());
  }

  showLoginImmediate() {
    if (this.authGatewayEl) this.authGatewayEl.style.display = 'flex';
    if (this.mainAppEl) this.mainAppEl.style.display = 'none';
    if (this.adminAppEl) this.adminAppEl.style.display = 'none';
  }
}

/* ============================================================================
   8. REAL ADMIN CONTENT MANAGEMENT CONTROLLER
   ============================================================================ */
class AdminController {
  constructor() {
    this.currentView = 'dashboard';
    this.assignments = [];
    this.notifications = [];
    this.exams = [];
    this.events = [];
    this.alerts = [];
    this.opportunities = [];
    this.communication = [];
    this.students = [];

    this.navButtons = document.querySelectorAll('.admin-nav-item');
    this.modalEl = document.getElementById('admin-modal');
    this.modalTitleEl = document.getElementById('admin-modal-title');
    this.modalBodyEl = document.getElementById('admin-modal-body');
    this.modalCloseBtn = document.getElementById('admin-modal-close-btn');

    this.init();
  }

  init() {
    this.navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        this.switchView(btn.dataset.adminView);
      });
    });

    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }

    const quickSummonBtn = document.getElementById('admin-quick-summon-btn');
    if (quickSummonBtn) {
      quickSummonBtn.addEventListener('click', () => this.openModal('alert'));
    }

    const searchInput = document.getElementById('admin-student-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => this.filterStudents());
    }

    this.loadAllData();
  }

  switchView(viewName) {
    // Route Protection: verify admin session
    if (!StorageManager.isAdminLoggedIn()) {
      alert('Unauthorized! Admin credentials required.');
      return;
    }

    this.currentView = viewName;
    this.navButtons.forEach(b => b.classList.toggle('active', b.dataset.adminView === viewName));

    document.querySelectorAll('.admin-view-section').forEach(sec => {
      sec.hidden = sec.id !== `admin-view-${viewName}`;
    });

    const titleMap = {
      dashboard: 'Admin Command Matrix',
      students: 'Enrolled Student Operators',
      assignments: 'Assignment Content Management',
      notifications: 'Campus Broadcast Notifications',
      exams: 'Mid-Term & Final Examination Schedules',
      events: 'College & Club Event Operations',
      alerts: 'Urgent Campus Warning System',
      opportunities: 'Career Opportunities & Hackathons',
      communication: 'Official Communications Broadcast',
      skilltree: 'Curriculum Competencies & Tracks',
      analytics: 'Institutional Performance Analytics',
      settings: 'Academic Term Parameters'
    };

    const titleEl = document.getElementById('admin-view-title');
    if (titleEl) titleEl.textContent = titleMap[viewName] || 'Admin Console';

    if (viewName === 'students') this.renderStudents();
    if (viewName === 'assignments') this.renderAssignments();
    if (viewName === 'notifications') this.renderNotifications();
    if (viewName === 'exams') this.renderExams();
    if (viewName === 'events') this.renderEvents();
    if (viewName === 'alerts') this.renderAlerts();
    if (viewName === 'opportunities') this.renderOpportunities();
    if (viewName === 'communication') this.renderCommunication();
    if (viewName === 'skilltree') this.renderSkillTree();
    if (viewName === 'analytics') this.renderAnalytics();
  }

  async loadAllData() {
    try {
      const [asgRes, notifRes, examRes, evRes, alRes, oppRes, commRes, stuRes] = await Promise.all([
        fetch('http://localhost:3000/api/assignments').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.ASSIGNMENTS, [])),
        fetch('http://localhost:3000/api/notifications').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.NOTIFICATIONS, [])),
        fetch('http://localhost:3000/api/exams').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.EXAMS, [])),
        fetch('http://localhost:3000/api/events').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.EVENTS, [])),
        fetch('http://localhost:3000/api/alerts').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.ALERTS, [])),
        fetch('http://localhost:3000/api/opportunities').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.OPPORTUNITIES, [])),
        fetch('http://localhost:3000/api/communication').then(r => r.json()).catch(() => StorageManager.get(STORAGE_KEYS.COMMUNICATION, [])),
        fetch('http://localhost:3000/api/admin/students').then(r => r.json()).catch(() => [])
      ]);

      this.assignments = asgRes || [];
      this.notifications = notifRes || [];
      this.exams = examRes || [];
      this.events = evRes || [];
      this.alerts = alRes || [];
      this.opportunities = oppRes || [];
      this.communication = commRes || [];
      this.students = (stuRes && stuRes.length > 0) ? stuRes : [
        { username: 'CyberVanguard', level: 3, totalXPEarned: 1450, streakDays: 7, questsClearedCount: 8, focusMinutes: 190 },
        { username: 'Hexblade_99', level: 5, totalXPEarned: 2850, streakDays: 14, questsClearedCount: 15, focusMinutes: 420 },
        { username: 'ArchMage_OSS', level: 4, totalXPEarned: 2100, streakDays: 9, questsClearedCount: 11, focusMinutes: 310 },
        { username: 'NovaKnight', level: 6, totalXPEarned: 3600, streakDays: 21, questsClearedCount: 22, focusMinutes: 580 }
      ];

      // Update KPI stats
      const elStu = document.getElementById('admin-stat-students');
      if (elStu) elStu.textContent = this.students.length || 128;
      const elAsg = document.getElementById('admin-stat-assignments');
      if (elAsg) elAsg.textContent = this.assignments.length;
      const elAlt = document.getElementById('admin-stat-alerts');
      if (elAlt) elAlt.textContent = this.alerts.filter(a => a.isActive).length;

      this.renderRecentBroadcasts();
    } catch (e) {
      console.error('Failed to load admin data:', e);
    }
  }

  renderRecentBroadcasts() {
    const el = document.getElementById('admin-recent-broadcasts');
    if (!el) return;
    const recents = [...this.communication].slice(0, 5);
    el.innerHTML = recents.map(m => `
      <div class="recent-comm-item p-2 border-b border-white/5">
        <div class="flex justify-between text-xs text-muted mb-1">
          <strong class="text-white">${m.sender}</strong>
          <span>${m.timestamp}</span>
        </div>
        <p class="text-xs text-gray-300 m-0">${m.message}</p>
      </div>
    `).join('') || '<div class="empty-state text-xs text-muted">No broadcasts logged yet.</div>';
  }

  renderStudents() {
    const body = document.getElementById('admin-students-table-body');
    if (!body) return;
    body.innerHTML = this.students.map(s => `
      <tr>
        <td><strong>🎮 ${s.username}</strong></td>
        <td><span class="badge-mini font-mono">LVL ${s.level}</span></td>
        <td><strong class="font-mono text-cyan-400">${s.totalXPEarned} XP</strong></td>
        <td>🔥 ${s.streakDays}d</td>
        <td>⚔️ ${s.questsClearedCount || 0}</td>
        <td>⏱️ ${s.focusMinutes || 0}m</td>
        <td>
          <button class="glass-btn btn-compact" onclick="alert('Student Profile: ${s.username}\\nLevel: ${s.level}\\nTotal XP: ${s.totalXPEarned}\\nStreak: ${s.streakDays} days')">Inspect</button>
        </td>
      </tr>
    `).join('');
  }

  filterStudents() {
    const query = (document.getElementById('admin-student-search')?.value || '').toLowerCase();
    const rows = document.querySelectorAll('#admin-students-table-body tr');
    rows.forEach(r => {
      r.style.display = r.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
  }

  renderAssignments() {
    const container = document.getElementById('admin-assignments-list');
    if (!container) return;
    container.innerHTML = this.assignments.map(a => `
      <div class="admin-item-card">
        <div class="admin-item-top">
          <h4 class="admin-item-title">${a.title}</h4>
          <span class="admin-priority-badge ${(a.priority || '').toLowerCase()}">${a.priority || 'Normal'}</span>
        </div>
        <p class="admin-item-desc">${a.description}</p>
        <div class="admin-item-meta">
          <span>📚 ${a.subject}</span>
          <span>👨‍🏫 ${a.teacher}</span>
          <span>📅 Due: ${new Date(a.deadline).toLocaleDateString()}</span>
          <span>⚡ +${a.xp} XP</span>
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-compact" onclick="AdminApp.togglePublishAssignment('${a.id}', ${!a.isPublished})">
            ${a.isPublished ? '✓ Published' : 'Draft'}
          </button>
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('assignments', '${a.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderNotifications() {
    const container = document.getElementById('admin-notifications-list');
    if (!container) return;
    container.innerHTML = this.notifications.map(n => `
      <div class="admin-item-card">
        <div class="admin-item-top">
          <h4 class="admin-item-title">${n.title}</h4>
          <span class="admin-priority-badge ${(n.priority || '').toLowerCase()}">${n.priority || 'Normal'}</span>
        </div>
        <p class="admin-item-desc">${n.message}</p>
        <div class="admin-item-meta">
          <span>👥 Audience: ${n.targetAudience}</span>
          <span>📅 Expiry: ${n.expiry || 'Permanent'}</span>
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('notifications', '${n.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderExams() {
    const container = document.getElementById('admin-exams-list');
    if (!container) return;
    container.innerHTML = this.exams.map(e => `
      <div class="admin-item-card">
        <div class="admin-item-top">
          <h4 class="admin-item-title">${e.subject} (${e.examType})</h4>
          <span class="badge-mini font-mono">ROOM: ${e.room}</span>
        </div>
        <p class="admin-item-desc"><strong>Syllabus:</strong> ${e.syllabus}</p>
        <div class="admin-item-meta">
          <span>📅 Date: ${e.date}</span>
          <span>⏱️ Time: ${e.time}</span>
          <span>👥 Audience: ${e.targetAudience}</span>
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('exams', '${e.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderEvents() {
    const container = document.getElementById('admin-events-list');
    if (!container) return;
    container.innerHTML = this.events.map(ev => `
      <div class="admin-item-card">
        <div class="admin-item-top">
          <h4 class="admin-item-title">${ev.name}</h4>
          <span class="badge-mini font-mono">📍 ${ev.venue}</span>
        </div>
        <p class="admin-item-desc">${ev.description}</p>
        <div class="admin-item-meta">
          <span>📅 Date: ${ev.date} at ${ev.time}</span>
          ${ev.registrationLink ? `<a href="${ev.registrationLink}" target="_blank" class="text-cyan-400">Registration Link &nearr;</a>` : ''}
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('events', '${ev.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderAlerts() {
    const container = document.getElementById('admin-alerts-list');
    if (!container) return;
    container.innerHTML = this.alerts.map(al => `
      <div class="admin-item-card ${al.isActive ? 'border-red-500/50' : ''}">
        <div class="admin-item-top">
          <h4 class="admin-item-title">🚨 ${al.priority} Alert</h4>
          <span class="badge-mini font-mono">${al.isActive ? 'ACTIVE' : 'INACTIVE'}</span>
        </div>
        <p class="admin-item-desc text-white">${al.message}</p>
        <div class="admin-item-meta">
          <span>👥 Target: ${al.targetAudience}</span>
          <span>📅 Expiry: ${al.expiry}</span>
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-compact" onclick="AdminApp.toggleAlertActive('${al.id}', ${!al.isActive})">
            ${al.isActive ? 'Deactivate' : 'Activate'}
          </button>
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('alerts', '${al.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderOpportunities() {
    const container = document.getElementById('admin-opportunities-list');
    if (!container) return;
    container.innerHTML = this.opportunities.map(op => `
      <div class="admin-item-card">
        <div class="admin-item-top">
          <h4 class="admin-item-title">${op.title}</h4>
          <span class="badge-mini font-mono text-amber-400">${op.type}</span>
        </div>
        <p class="admin-item-desc">${op.description}</p>
        <div class="admin-item-meta">
          <span>🏢 ${op.organization}</span>
          <span>💰 ${op.stipend || 'Unpaid / Certificate'}</span>
          <span>📅 Deadline: ${op.deadline}</span>
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('opportunities', '${op.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderCommunication() {
    const container = document.getElementById('admin-communication-list');
    if (!container) return;
    container.innerHTML = this.communication.map(c => `
      <div class="admin-item-card">
        <div class="admin-item-top">
          <h4 class="admin-item-title">${c.sender}</h4>
          <span class="badge-mini font-mono text-cyan-400">${c.groupName}</span>
        </div>
        <p class="admin-item-desc font-mono text-white/90">"${c.message}"</p>
        <div class="admin-item-meta">
          <span>🏷️ Category: ${c.category}</span>
          <span>⚡ Priority: ${c.priority}</span>
          <span>⏱️ ${c.timestamp}</span>
        </div>
        <div class="admin-item-actions">
          <button class="glass-btn btn-danger-subtle btn-compact" onclick="AdminApp.deleteItem('communication', '${c.id}')">Delete</button>
        </div>
      </div>
    `).join('');
  }

  renderSkillTree() {
    const container = document.getElementById('admin-skilltree-overview');
    if (!container) return;
    const tracks = [
      { name: 'Software Development', nodes: 9, lead: 'Prof. Sharma', competencies: 'C++, STL, Arrays, Trees, DP, ICPC' },
      { name: 'AI / Machine Learning', nodes: 7, lead: 'Dr. Verma', competencies: 'Python, Math, Pandas, Scikit, PyTorch, LLMs' },
      { name: 'Cybersecurity', nodes: 6, lead: 'Kavach Lead', competencies: 'Networking, Linux, Crypto, Web Pentesting' },
      { name: 'Competitive Programming', nodes: 6, lead: 'AIT CP Squad', competencies: 'Number Theory, Graph Theory, Segment Trees' },
      { name: 'Entrepreneurship', nodes: 5, lead: 'E-Cell', competencies: 'Idea Validation, MVP, Pitch Deck, Growth' }
    ];
    container.innerHTML = tracks.map(t => `
      <div class="admin-panel glass-panel mb-2">
        <div class="flex justify-between items-center mb-1">
          <h4 class="text-white font-arcade m-0">${t.name}</h4>
          <span class="badge-mini font-mono">${t.nodes} Nodes</span>
        </div>
        <p class="text-xs text-muted m-0">Faculty Lead: ${t.lead} &bull; Competencies: ${t.competencies}</p>
      </div>
    `).join('');
  }

  renderAnalytics() {
    const elSub = document.getElementById('admin-chart-subjects');
    const elEng = document.getElementById('admin-chart-engagement');
    if (elSub) {
      elSub.innerHTML = `
        <div class="space-y-2 text-xs">
          <div class="flex justify-between"><span>DBMS</span><strong class="font-mono">88% Completion</strong></div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-cyan-400 h-2 rounded" style="width: 88%"></div></div>
          <div class="flex justify-between"><span>Operating Systems</span><strong class="font-mono">74% Completion</strong></div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-purple-500 h-2 rounded" style="width: 74%"></div></div>
          <div class="flex justify-between"><span>Computer Networks</span><strong class="font-mono">65% Completion</strong></div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-amber-400 h-2 rounded" style="width: 65%"></div></div>
        </div>
      `;
    }
    if (elEng) {
      elEng.innerHTML = `
        <div class="text-xs font-mono space-y-1">
          <p>🔥 Active Streaks: 92 students (72%)</p>
          <p>⏱️ Average Focus Session: 34.2 minutes</p>
          <p>👑 Sunday Tests Submitted this cycle: 114</p>
          <p>🎯 Quest Completion Rate: 82.4% on first deadline</p>
        </div>
      `;
    }
  }

  openModal(type) {
    if (!this.modalEl) return;
    this.modalEl.hidden = false;
    this.modalEl.style.display = 'flex';

    if (type === 'assignment') {
      this.modalTitleEl.textContent = 'Create Course Assignment';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-assignment-form">
          <div class="form-group"><label>Title</label><input id="asg-title" class="glass-input" required placeholder="e.g. DBMS Assignment 3"></div>
          <div class="form-group"><label>Description</label><textarea id="asg-desc" class="glass-textarea" rows="2" required placeholder="Requirements..."></textarea></div>
          <div class="form-row-2">
            <div class="form-group"><label>Subject</label><input id="asg-subject" class="glass-input" value="DBMS" required></div>
            <div class="form-group"><label>Faculty</label><input id="asg-teacher" class="glass-input" value="Prof. Sharma" required></div>
          </div>
          <div class="form-row-2">
            <div class="form-group"><label>Deadline</label><input id="asg-deadline" type="datetime-local" class="glass-input" required></div>
            <div class="form-group"><label>Priority</label><select id="asg-priority" class="glass-select"><option>High</option><option>Urgent</option><option>Normal</option></select></div>
          </div>
          <div class="form-row-2">
            <div class="form-group"><label>XP Reward</label><input id="asg-xp" type="number" class="glass-input" value="150" required></div>
            <div class="form-group"><label>Target Batch</label><input id="asg-target" class="glass-input" value="CSE 3rd Year"></div>
          </div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Publish Assignment Bounty</button>
        </form>
      `;
      document.getElementById('admin-create-assignment-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveAssignmentFromModal();
      };
    } else if (type === 'notification') {
      this.modalTitleEl.textContent = 'Broadcast Campus Notification';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-notif-form">
          <div class="form-group"><label>Notification Title</label><input id="notif-title" class="glass-input" required placeholder="Title..."></div>
          <div class="form-group"><label>Message Content</label><textarea id="notif-msg" class="glass-textarea" rows="3" required placeholder="Broadcast text..."></textarea></div>
          <div class="form-row-2">
            <div class="form-group"><label>Priority</label><select id="notif-prio" class="glass-select"><option>Normal</option><option>High</option><option>Urgent</option></select></div>
            <div class="form-group"><label>Audience</label><input id="notif-aud" class="glass-input" value="All Students"></div>
          </div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Send Broadcast Notification</button>
        </form>
      `;
      document.getElementById('admin-create-notif-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveNotificationFromModal();
      };
    } else if (type === 'alert') {
      this.modalTitleEl.textContent = 'Broadcast Urgent Campus Alert';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-alert-form">
          <div class="form-group"><label>Urgent Message</label><textarea id="alt-msg" class="glass-textarea" rows="3" required placeholder="e.g. WiFi maintenance tonight..."></textarea></div>
          <div class="form-row-2">
            <div class="form-group"><label>Priority</label><select id="alt-prio" class="glass-select"><option>Urgent</option><option>Critical</option></select></div>
            <div class="form-group"><label>Expiry</label><input id="alt-exp" class="glass-input" value="Tonight 23:59"></div>
          </div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Activate Urgent Alert Banner</button>
        </form>
      `;
      document.getElementById('admin-create-alert-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveAlertFromModal();
      };
    } else if (type === 'communication') {
      this.modalTitleEl.textContent = 'Broadcast College Message';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-comm-form">
          <div class="form-group"><label>Sender / Authority</label><input id="comm-sender" class="glass-input" value="Prof. Sharma (DBMS)" required></div>
          <div class="form-group"><label>Group / Channel</label><input id="comm-grp" class="glass-input" value="CSE 3rd Year Official" required></div>
          <div class="form-group"><label>Message</label><textarea id="comm-msg" class="glass-textarea" rows="3" required placeholder="e.g. Guys DBMS assignment 3 is due Friday 11:59 PM. Submit on Moodle."></textarea></div>
          <div class="form-row-2">
            <div class="form-group"><label>Category</label><select id="comm-cat" class="glass-select"><option>Assignment</option><option>Exam</option><option>Room Change</option><option>Opportunity</option><option>Announcement</option></select></div>
            <div class="form-group"><label>Suggested XP</label><input id="comm-xp" type="number" class="glass-input" value="100"></div>
          </div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Broadcast to Pulse & Brain</button>
        </form>
      `;
      document.getElementById('admin-create-comm-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveCommunicationFromModal();
      };
    } else if (type === 'exam') {
      this.modalTitleEl.textContent = 'Schedule Examination';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-exam-form">
          <div class="form-group"><label>Subject</label><input id="ex-sub" class="glass-input" required placeholder="e.g. Operating Systems"></div>
          <div class="form-row-2">
            <div class="form-group"><label>Date</label><input id="ex-date" type="date" class="glass-input" required></div>
            <div class="form-group"><label>Time</label><input id="ex-time" class="glass-input" value="10:00 AM - 12:00 PM" required></div>
          </div>
          <div class="form-row-2">
            <div class="form-group"><label>Room / Hall</label><input id="ex-room" class="glass-input" value="Hall 302" required></div>
            <div class="form-group"><label>Type</label><select id="ex-type" class="glass-select"><option>Mid-Term</option><option>Final</option><option>Lab Exam</option></select></div>
          </div>
          <div class="form-group"><label>Syllabus</label><textarea id="ex-syl" class="glass-textarea" rows="2" placeholder="Topics covered..."></textarea></div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Publish Exam Schedule</button>
        </form>
      `;
      document.getElementById('admin-create-exam-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveExamFromModal();
      };
    } else if (type === 'event') {
      this.modalTitleEl.textContent = 'Publish Campus Event';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-event-form">
          <div class="form-group"><label>Event Name</label><input id="ev-name" class="glass-input" required placeholder="e.g. HackAIT 2026"></div>
          <div class="form-row-2">
            <div class="form-group"><label>Date</label><input id="ev-date" type="date" class="glass-input" required></div>
            <div class="form-group"><label>Time</label><input id="ev-time" class="glass-input" value="09:00 AM" required></div>
          </div>
          <div class="form-group"><label>Venue</label><input id="ev-venue" class="glass-input" value="Main Auditorium" required></div>
          <div class="form-group"><label>Description</label><textarea id="ev-desc" class="glass-textarea" rows="2" required placeholder="Event details..."></textarea></div>
          <div class="form-group"><label>Registration Link</label><input id="ev-link" class="glass-input" placeholder="https://..."></div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Publish Event</button>
        </form>
      `;
      document.getElementById('admin-create-event-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveEventFromModal();
      };
    } else if (type === 'opportunity') {
      this.modalTitleEl.textContent = 'Post Opportunity / Hackathon';
      this.modalBodyEl.innerHTML = `
        <form id="admin-create-opp-form">
          <div class="form-group"><label>Opportunity Title</label><input id="opp-title" class="glass-input" required placeholder="e.g. Google Summer of Code Mentorship"></div>
          <div class="form-row-2">
            <div class="form-group"><label>Type</label><select id="opp-type" class="glass-select"><option>Hackathon</option><option>Internship</option><option>Scholarship</option><option>Competition</option></select></div>
            <div class="form-group"><label>Organization</label><input id="opp-org" class="glass-input" value="TechNova Labs" required></div>
          </div>
          <div class="form-row-2">
            <div class="form-group"><label>Deadline</label><input id="opp-deadline" type="date" class="glass-input" required></div>
            <div class="form-group"><label>Stipend / Prize</label><input id="opp-stipend" class="glass-input" value="Rs. 35,000 / month"></div>
          </div>
          <div class="form-group"><label>Description</label><textarea id="opp-desc" class="glass-textarea" rows="2" required></textarea></div>
          <div class="form-group"><label>Application Link</label><input id="opp-link" class="glass-input" placeholder="https://..."></div>
          <button type="submit" class="glow-action-btn btn-primary-grind w-full mt-2">Publish Opportunity</button>
        </form>
      `;
      document.getElementById('admin-create-opp-form').onsubmit = (e) => {
        e.preventDefault();
        this.saveOpportunityFromModal();
      };
    }
  }

  closeModal() {
    if (this.modalEl) {
      this.modalEl.hidden = true;
      this.modalEl.style.display = 'none';
    }
  }

  async saveAssignmentFromModal() {
    const item = {
      id: `asg-${Date.now()}`,
      title: document.getElementById('asg-title').value,
      description: document.getElementById('asg-desc').value,
      subject: document.getElementById('asg-subject').value,
      teacher: document.getElementById('asg-teacher').value,
      deadline: document.getElementById('asg-deadline').value,
      priority: document.getElementById('asg-priority').value,
      xp: Number(document.getElementById('asg-xp').value) || 150,
      targetYear: document.getElementById('asg-target').value,
      targetBranch: 'CSE',
      isPublished: true,
      createdAt: Date.now()
    };

    this.assignments.unshift(item);
    StorageManager.set(STORAGE_KEYS.ASSIGNMENTS, this.assignments);

    // Sync to backend
    fetch('http://localhost:3000/api/assignments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    // Automatically Enlist into the Unified Quest Engine!
    if (window.unifiedQuestEngine) {
      window.unifiedQuestEngine.addQuest(
        item.title,
        item.xp >= 200 ? 'boss' : 'normal',
        item.xp,
        'admin',
        'Academic Assignment',
        'swe-1',
        item.deadline
      );
    }

    ToastManager.show(`✅ Assignment Published: "${item.title}" (+${item.xp} XP)`, 'success');
    soundFX.playReward();
    this.closeModal();
    this.renderAssignments();
  }

  async saveNotificationFromModal() {
    const item = {
      id: `notif-${Date.now()}`,
      title: document.getElementById('notif-title').value,
      message: document.getElementById('notif-msg').value,
      priority: document.getElementById('notif-prio').value,
      targetAudience: document.getElementById('notif-aud').value,
      expiry: '30 Days',
      createdAt: Date.now()
    };

    this.notifications.unshift(item);
    StorageManager.set(STORAGE_KEYS.NOTIFICATIONS, this.notifications);

    fetch('http://localhost:3000/api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    ToastManager.show(`📢 Notification Broadcasted: "${item.title}"`, 'info');
    soundFX.playBadge();
    this.closeModal();
    this.renderNotifications();
  }

  async saveAlertFromModal() {
    const item = {
      id: `alert-${Date.now()}`,
      message: document.getElementById('alt-msg').value,
      priority: document.getElementById('alt-prio').value,
      expiry: document.getElementById('alt-exp').value,
      targetAudience: 'All Students',
      isActive: true,
      createdAt: Date.now()
    };

    this.alerts.unshift(item);
    StorageManager.set(STORAGE_KEYS.ALERTS, this.alerts);

    fetch('http://localhost:3000/api/alerts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    // Push to student top alert banner immediately
    const banner = document.getElementById('active-alert-banner');
    const msgEl = document.getElementById('alert-banner-message');
    if (banner && msgEl) {
      msgEl.textContent = item.message;
      banner.style.display = 'flex';
    }

    ToastManager.show(`🚨 Urgent Alert Activated: "${item.message}"`, 'urgent');
    soundFX.playBadge();
    this.closeModal();
    this.renderAlerts();
  }

  async saveCommunicationFromModal() {
    const msg = document.getElementById('comm-msg').value;
    const cat = document.getElementById('comm-cat').value;
    const item = {
      id: `comm-${Date.now()}`,
      sender: document.getElementById('comm-sender').value,
      groupName: document.getElementById('comm-grp').value,
      message: msg,
      category: cat,
      priority: 'High',
      timestamp: 'Just now',
      extractedData: {
        type: cat,
        title: msg.slice(0, 40),
        suggestedXP: Number(document.getElementById('comm-xp').value) || 100
      },
      isParsed: true
    };

    this.communication.unshift(item);
    StorageManager.set(STORAGE_KEYS.COMMUNICATION, this.communication);

    fetch('http://localhost:3000/api/communication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    ToastManager.show(`💬 Broadcast dispatched to QuestLog Pulse!`, 'success');
    soundFX.playClick();
    this.closeModal();
    this.renderCommunication();
  }

  async saveExamFromModal() {
    const item = {
      id: `exam-${Date.now()}`,
      subject: document.getElementById('ex-sub').value,
      date: document.getElementById('ex-date').value,
      time: document.getElementById('ex-time').value,
      room: document.getElementById('ex-room').value,
      examType: document.getElementById('ex-type').value,
      syllabus: document.getElementById('ex-syl').value,
      targetAudience: 'CSE 3rd Year',
      createdAt: Date.now()
    };

    this.exams.unshift(item);
    StorageManager.set(STORAGE_KEYS.EXAMS, this.exams);

    fetch('http://localhost:3000/api/exams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    ToastManager.show(`📝 Exam Scheduled: ${item.subject} (${item.examType})`, 'success');
    this.closeModal();
    this.renderExams();
  }

  async saveEventFromModal() {
    const item = {
      id: `event-${Date.now()}`,
      name: document.getElementById('ev-name').value,
      date: document.getElementById('ev-date').value,
      time: document.getElementById('ev-time').value,
      venue: document.getElementById('ev-venue').value,
      description: document.getElementById('ev-desc').value,
      registrationLink: document.getElementById('ev-link').value,
      createdAt: Date.now()
    };

    this.events.unshift(item);
    StorageManager.set(STORAGE_KEYS.EVENTS, this.events);

    fetch('http://localhost:3000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    ToastManager.show(`🎪 Event Published: "${item.name}"`, 'success');
    this.closeModal();
    this.renderEvents();
  }

  async saveOpportunityFromModal() {
    const item = {
      id: `opp-${Date.now()}`,
      title: document.getElementById('opp-title').value,
      type: document.getElementById('opp-type').value,
      organization: document.getElementById('opp-org').value,
      deadline: document.getElementById('opp-deadline').value,
      stipend: document.getElementById('opp-stipend').value,
      description: document.getElementById('opp-desc').value,
      link: document.getElementById('opp-link').value,
      createdAt: Date.now()
    };

    this.opportunities.unshift(item);
    StorageManager.set(STORAGE_KEYS.OPPORTUNITIES, this.opportunities);

    fetch('http://localhost:3000/api/opportunities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    }).catch(() => {});

    ToastManager.show(`🚀 Opportunity Posted: "${item.title}"`, 'success');
    this.closeModal();
    this.renderOpportunities();
  }

  togglePublishAssignment(id, publishState) {
    const asg = this.assignments.find(a => a.id === id);
    if (asg) {
      asg.isPublished = publishState;
      StorageManager.set(STORAGE_KEYS.ASSIGNMENTS, this.assignments);
      fetch(`http://localhost:3000/api/assignments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: publishState })
      }).catch(() => {});
      this.renderAssignments();
    }
  }

  toggleAlertActive(id, activeState) {
    const al = this.alerts.find(a => a.id === id);
    if (al) {
      al.isActive = activeState;
      StorageManager.set(STORAGE_KEYS.ALERTS, this.alerts);
      fetch(`http://localhost:3000/api/alerts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: activeState })
      }).catch(() => {});

      const banner = document.getElementById('active-alert-banner');
      if (banner) banner.style.display = activeState ? 'flex' : 'none';
      this.renderAlerts();
    }
  }

  async deleteItem(type, id) {
    if (!confirm('Are you sure you want to delete this record?')) return;
    this[type] = this[type].filter(item => item.id !== id);
    StorageManager.set(STORAGE_KEYS[type.toUpperCase()], this[type]);

    fetch(`http://localhost:3000/api/${type}/${id}`, { method: 'DELETE' }).catch(() => {});

    ToastManager.show('Item deleted from system.', 'info');
    if (type === 'assignments') this.renderAssignments();
    if (type === 'notifications') this.renderNotifications();
    if (type === 'exams') this.renderExams();
    if (type === 'events') this.renderEvents();
    if (type === 'alerts') this.renderAlerts();
    if (type === 'opportunities') this.renderOpportunities();
    if (type === 'communication') this.renderCommunication();
  }
}

let AdminApp = null;

/* ============================================================================
   9. HIGH-FIDELITY THREE.JS 3D WEBGL OPERATIVE RENDERING ENGINE
   ============================================================================ */
class Character3DEngine {
  constructor(canvasId = 'character-3d-canvas', playerManager = null) {
    this.canvas = document.getElementById(canvasId);
    this.playerManager = playerManager;
    if (!this.canvas) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.characterGroup = null;
    this.pedestalGroup = null;
    this.orbitDrone = null;
    this.weaponMesh = null;
    this.headgearMesh = null;
    this.torsoMesh = null;
    this.accessoryMesh = null;
    this.materials = {};
    this.currentVibe = 'neon-strike';

    this.isVictory = false;
    this.victoryTime = 0;
    this.clock = typeof THREE !== 'undefined' ? new THREE.Clock() : null;

    this.init();
  }

  init() {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js library not detected. Running fallback.');
      return;
    }

    const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: 340, height: 380 };
    const width = rect.width || 340;
    const height = rect.height || 380;

    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x08080f, 0.045);

    // 2. Camera
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 1.3, 3.2);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Controls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.canvas);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxPolarAngle = Math.PI / 2 + 0.1;
      this.controls.minDistance = 1.8;
      this.controls.maxDistance = 5.0;
      this.controls.target.set(0, 1.1, 0);
    }

    // 5. Lighting
    this.setupLighting();

    // 6. Materials
    this.setupMaterials();

    // 7. Pedestal & Cyber Arena
    this.setupPedestal();

    // 8. Humanoid Cyber Operative
    this.setupCharacterModel();

    // 9. Resize Listener
    window.addEventListener('resize', () => this.resize());

    // 10. Start Animation Loop
    this.animate();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x00d2ff, 1.2);
    dirLight.position.set(2, 4, 3);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    const purpleRimLight = new THREE.PointLight(0x8a2be2, 2.0, 6);
    purpleRimLight.position.set(-2, 2, -2);
    this.scene.add(purpleRimLight);

    const pedestalUpLight = new THREE.PointLight(0x00d2ff, 1.5, 3);
    pedestalUpLight.position.set(0, 0.2, 0);
    this.scene.add(pedestalUpLight);
  }

  setupMaterials() {
    this.materials.armor = new THREE.MeshStandardMaterial({
      color: 0x181828,
      metalness: 0.85,
      roughness: 0.25
    });

    this.materials.accentPrimary = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 0.6,
      metalness: 0.5,
      roughness: 0.2
    });

    this.materials.accentSecondary = new THREE.MeshStandardMaterial({
      color: 0x8a2be2,
      emissive: 0x8a2be2,
      emissiveIntensity: 0.7,
      metalness: 0.6,
      roughness: 0.2
    });

    this.materials.gold = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.15
    });

    this.materials.visor = new THREE.MeshPhysicalMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 0.85,
      transparent: true,
      opacity: 0.85,
      roughness: 0.1,
      metalness: 0.1
    });

    this.materials.pedestalRing = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      emissive: 0x00d2ff,
      emissiveIntensity: 0.9
    });
  }

  setupPedestal() {
    this.pedestalGroup = new THREE.Group();

    // Base cylinder
    const baseGeo = new THREE.CylinderGeometry(1.1, 1.25, 0.15, 32);
    const baseMesh = new THREE.Mesh(baseGeo, this.materials.armor);
    baseMesh.position.y = 0.075;
    baseMesh.receiveShadow = true;
    this.pedestalGroup.add(baseMesh);

    // Glowing Concentric Ring
    const ringGeo = new THREE.TorusGeometry(0.95, 0.03, 16, 48);
    ringGeo.rotateX(Math.PI / 2);
    this.pedestalRingMesh = new THREE.Mesh(ringGeo, this.materials.pedestalRing);
    this.pedestalRingMesh.position.y = 0.16;
    this.pedestalGroup.add(this.pedestalRingMesh);

    this.scene.add(this.pedestalGroup);
  }

  setupCharacterModel() {
    this.characterGroup = new THREE.Group();
    this.characterGroup.position.y = 0.15;

    // Torso (Armor Chestplate)
    const torsoGeo = new THREE.BoxGeometry(0.55, 0.65, 0.32);
    this.torsoMesh = new THREE.Mesh(torsoGeo, this.materials.armor);
    this.torsoMesh.position.y = 1.15;
    this.torsoMesh.castShadow = true;
    this.characterGroup.add(this.torsoMesh);

    // Chest Core (Arc Reactor glow)
    const coreGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.05, 16);
    coreGeo.rotateX(Math.PI / 2);
    const coreMesh = new THREE.Mesh(coreGeo, this.materials.accentPrimary);
    coreMesh.position.set(0, 1.22, 0.16);
    this.characterGroup.add(coreMesh);

    // Neck & Head (Tactical Helmet)
    const headGeo = new THREE.BoxGeometry(0.3, 0.35, 0.32);
    this.headMesh = new THREE.Mesh(headGeo, this.materials.armor);
    this.headMesh.position.set(0, 1.68, 0);
    this.headMesh.castShadow = true;
    this.characterGroup.add(this.headMesh);

    // Visor Eye Glow
    const visorGeo = new THREE.BoxGeometry(0.26, 0.09, 0.06);
    const visorMesh = new THREE.Mesh(visorGeo, this.materials.visor);
    visorMesh.position.set(0, 1.68, 0.16);
    this.characterGroup.add(visorMesh);

    // Shoulders & Arms
    // Left Arm
    const leftArmGeo = new THREE.BoxGeometry(0.16, 0.55, 0.16);
    const leftArm = new THREE.Mesh(leftArmGeo, this.materials.armor);
    leftArm.position.set(-0.38, 1.1, 0);
    leftArm.castShadow = true;
    this.characterGroup.add(leftArm);

    // Right Arm (Weapon Wielding)
    const rightArmGeo = new THREE.BoxGeometry(0.16, 0.55, 0.16);
    this.rightArm = new THREE.Mesh(rightArmGeo, this.materials.armor);
    this.rightArm.position.set(0.38, 1.1, 0);
    this.rightArm.castShadow = true;
    this.characterGroup.add(this.rightArm);

    // Legs
    const leftLegGeo = new THREE.BoxGeometry(0.2, 0.75, 0.2);
    const leftLeg = new THREE.Mesh(leftLegGeo, this.materials.armor);
    leftLeg.position.set(-0.16, 0.45, 0);
    leftLeg.castShadow = true;
    this.characterGroup.add(leftLeg);

    const rightLegGeo = new THREE.BoxGeometry(0.2, 0.75, 0.2);
    const rightLeg = new THREE.Mesh(rightLegGeo, this.materials.armor);
    rightLeg.position.set(0.16, 0.45, 0);
    rightLeg.castShadow = true;
    this.characterGroup.add(rightLeg);

    // Floating Orbit Companion Drone
    this.setupDrone();

    // Default Gear Attachment
    this.attachWeapon('item-weapon-1');
    this.attachHeadgear('item-head-3');

    this.scene.add(this.characterGroup);
  }

  setupDrone() {
    this.orbitDrone = new THREE.Group();
    const droneBodyGeo = new THREE.SphereGeometry(0.11, 16, 16);
    const droneBody = new THREE.Mesh(droneBodyGeo, this.materials.armor);
    this.orbitDrone.add(droneBody);

    const droneEyeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const droneEye = new THREE.Mesh(droneEyeGeo, this.materials.accentPrimary);
    droneEye.position.z = 0.09;
    this.orbitDrone.add(droneEye);

    this.orbitDrone.position.set(0.75, 1.6, 0.3);
    this.characterGroup.add(this.orbitDrone);
  }

  attachWeapon(itemId) {
    if (this.weaponMesh) {
      this.characterGroup.remove(this.weaponMesh);
      this.weaponMesh = null;
    }

    const weaponGroup = new THREE.Group();
    if (itemId === 'item-weapon-1') {
      // Cyber Katana
      const bladeGeo = new THREE.BoxGeometry(0.03, 0.85, 0.06);
      const bladeMesh = new THREE.Mesh(bladeGeo, this.materials.accentPrimary);
      bladeMesh.position.y = 0.42;

      const handleGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.25, 12);
      const handleMesh = new THREE.Mesh(handleGeo, this.materials.armor);

      weaponGroup.add(bladeMesh);
      weaponGroup.add(handleMesh);
      weaponGroup.position.set(0.48, 0.85, 0.15);
      weaponGroup.rotation.z = -0.3;
    } else if (itemId === 'item-weapon-2') {
      // Plasma Railgun
      const gunGeo = new THREE.BoxGeometry(0.12, 0.18, 0.55);
      const gunMesh = new THREE.Mesh(gunGeo, this.materials.armor);
      const coilGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.35, 12);
      coilGeo.rotateX(Math.PI / 2);
      const coil = new THREE.Mesh(coilGeo, this.materials.accentPrimary);
      coil.position.z = 0.15;
      weaponGroup.add(gunMesh);
      weaponGroup.add(coil);
      weaponGroup.position.set(0.48, 0.9, 0.25);
    } else {
      // Quantum Staff
      const staffGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.4, 12);
      const staffMesh = new THREE.Mesh(staffGeo, this.materials.gold);
      const orbGeo = new THREE.SphereGeometry(0.09, 16, 16);
      const orbMesh = new THREE.Mesh(orbGeo, this.materials.accentSecondary);
      orbMesh.position.y = 0.7;
      weaponGroup.add(staffMesh);
      weaponGroup.add(orbMesh);
      weaponGroup.position.set(0.5, 0.7, 0.15);
    }

    this.weaponMesh = weaponGroup;
    this.characterGroup.add(this.weaponMesh);
  }

  attachHeadgear(itemId) {
    if (this.headgearMesh) {
      this.characterGroup.remove(this.headgearMesh);
      this.headgearMesh = null;
    }

    const headGroup = new THREE.Group();
    if (itemId === 'item-head-3') {
      // Hacker's Golden Crown
      const crownGeo = new THREE.CylinderGeometry(0.19, 0.19, 0.06, 8, 1, true);
      const crownMesh = new THREE.Mesh(crownGeo, this.materials.gold);
      crownMesh.position.y = 1.9;
      headGroup.add(crownMesh);
    } else if (itemId === 'item-head-2') {
      // Tactical Headset
      const bandGeo = new THREE.TorusGeometry(0.18, 0.02, 12, 24, Math.PI);
      bandGeo.rotateX(Math.PI / 2);
      const bandMesh = new THREE.Mesh(bandGeo, this.materials.accentPrimary);
      bandMesh.position.y = 1.8;
      headGroup.add(bandMesh);
    }

    this.headgearMesh = headGroup;
    this.characterGroup.add(this.headgearMesh);
  }

  setVibe(vibe) {
    this.currentVibe = vibe;
    if (vibe === 'neon-strike') {
      this.materials.armor.color.setHex(0x141428);
      this.materials.accentPrimary.color.setHex(0x00d2ff);
      this.materials.accentPrimary.emissive.setHex(0x00d2ff);
      this.materials.visor.color.setHex(0x00d2ff);
      this.materials.pedestalRing.color.setHex(0x00d2ff);
      this.materials.pedestalRing.emissive.setHex(0x00d2ff);
    } else if (vibe === 'charcoal-stealth') {
      this.materials.armor.color.setHex(0x0a0c10);
      this.materials.accentPrimary.color.setHex(0x10b981);
      this.materials.accentPrimary.emissive.setHex(0x10b981);
      this.materials.visor.color.setHex(0x10b981);
      this.materials.pedestalRing.color.setHex(0x10b981);
      this.materials.pedestalRing.emissive.setHex(0x10b981);
    } else if (vibe === 'crimson-overlord') {
      this.materials.armor.color.setHex(0x08080a);
      this.materials.accentPrimary.color.setHex(0xef4444);
      this.materials.accentPrimary.emissive.setHex(0xef4444);
      this.materials.visor.color.setHex(0xef4444);
      this.materials.pedestalRing.color.setHex(0xef4444);
      this.materials.pedestalRing.emissive.setHex(0xef4444);
    } else if (vibe === 'cyber-gold') {
      this.materials.armor.color.setHex(0x1e1528);
      this.materials.accentPrimary.color.setHex(0xf59e0b);
      this.materials.accentPrimary.emissive.setHex(0xf59e0b);
      this.materials.visor.color.setHex(0xfbbf24);
      this.materials.pedestalRing.color.setHex(0xf59e0b);
      this.materials.pedestalRing.emissive.setHex(0xf59e0b);
    }
  }

  triggerVictory() {
    this.isVictory = true;
    this.victoryTime = 0;
    soundFX.playLevelUp();
    confettiEngine.burst(90);
    ToastManager.show('⚡ VICTORY POSE UNLEASHED!', 'success');
  }

  resize() {
    if (!this.renderer || !this.camera || !this.canvas) return;
    const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: 340, height: 380 };
    const width = rect.width || 340;
    const height = rect.height || 380;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    const delta = this.clock ? this.clock.getDelta() : 0.016;
    const elapsed = this.clock ? this.clock.getElapsedTime() : Date.now() * 0.001;

    // Pedestal ring rotation
    if (this.pedestalRingMesh) {
      this.pedestalRingMesh.rotation.z += 0.008;
    }

    // Floating drone movement
    if (this.orbitDrone) {
      this.orbitDrone.position.y = 1.6 + Math.sin(elapsed * 2.5) * 0.08;
      this.orbitDrone.position.x = 0.75 + Math.cos(elapsed * 1.5) * 0.05;
    }

    // Idle breathing bob
    if (this.characterGroup && !this.isVictory) {
      this.characterGroup.position.y = 0.15 + Math.sin(elapsed * 2.0) * 0.02;
    }

    // Victory animation
    if (this.isVictory) {
      this.victoryTime += delta;
      const jumpHeight = Math.sin(this.victoryTime * Math.PI) * 0.45;
      this.characterGroup.position.y = 0.15 + Math.max(0, jumpHeight);
      this.characterGroup.rotation.y += delta * 7.0;

      if (this.victoryTime > 1.2) {
        this.isVictory = false;
        this.characterGroup.rotation.y = 0;
        this.characterGroup.position.y = 0.15;
      }
    }

    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}

/* ============================================================================
   10. PLAYER MANAGER & PROGRESSION
   ============================================================================ */
class PlayerManager {
  constructor() {
    this.state = StorageManager.loadPlayer();
    this.ranks = [
      { minLevel: 1, title: 'Novice Apprentice', class: 'rank-newbie', stars: '★☆☆☆☆' },
      { minLevel: 3, title: 'Pupil Hacker', class: 'rank-pupil', stars: '★★☆☆☆' },
      { minLevel: 5, title: 'Specialist Operative', class: 'rank-specialist', stars: '★★★☆☆' },
      { minLevel: 7, title: 'Expert Engineer', class: 'rank-expert', stars: '★★★★☆' },
      { minLevel: 10, title: 'Grandmaster Architect', class: 'rank-grandmaster', stars: '★★★★★' }
    ];

    this.levelBadgeEl = document.getElementById('player-level-badge');
    this.rankTitleEl = document.getElementById('player-rank-title');
    this.currentXPEl = document.getElementById('current-xp-display');
    this.maxXPEl = document.getElementById('max-xp-display');
    this.xpFillBarEl = document.getElementById('xp-fill-bar');
    this.statQuestsEl = document.getElementById('stat-completed-quests');
    this.statFocusEl = document.getElementById('stat-focus-time');
    this.statTotalXPEl = document.getElementById('stat-total-xp');
    this.headerLevelEl = document.getElementById('header-level-val');
    this.headerStreakEl = document.getElementById('header-streak-val');

    this.init();
  }

  init() {
    this.updateUI();

    const claimDailyBtn = document.getElementById('claim-daily-btn');
    if (claimDailyBtn) {
      claimDailyBtn.addEventListener('click', () => this.claimDailyBounty());
    }

    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all progress to default Level 1?')) {
          this.state = { ...DEFAULT_PLAYER_STATE };
          StorageManager.savePlayer(this.state);
          this.updateUI();
          ToastManager.show('Progress reset to default state.', 'info');
        }
      });
    }

    const closeLvlBtn = document.getElementById('close-levelup-modal-btn');
    if (closeLvlBtn) {
      closeLvlBtn.addEventListener('click', () => {
        const modal = document.getElementById('levelup-modal');
        if (modal) {
          modal.hidden = true;
          modal.style.display = 'none';
        }
      });
    }
  }

  addXP(amount) {
    this.state.totalXPEarned += amount;
    this.state.currentXP += amount;

    // Check Level Up
    while (this.state.currentXP >= this.state.nextLevelXP) {
      this.state.currentXP -= this.state.nextLevelXP;
      this.state.level += 1;
      this.state.nextLevelXP = this.state.level * 500;
      this.celebrateLevelUp(this.state.level);
    }

    StorageManager.savePlayer(this.state);
    this.updateUI();
  }

  deductXP(amount) {
    if (this.state.totalXPEarned < amount) return false;
    this.state.totalXPEarned -= amount;
    StorageManager.savePlayer(this.state);
    this.updateUI();
    return true;
  }

  addFocusMinutes(mins) {
    this.state.focusMinutes += mins;
    StorageManager.savePlayer(this.state);
    this.updateUI();
  }

  incrementQuestsCleared() {
    this.state.questsClearedCount += 1;
    StorageManager.savePlayer(this.state);
    this.updateUI();
  }

  celebrateLevelUp(newLevel) {
    soundFX.playLevelUp();
    confettiEngine.burst(150);
    const modal = document.getElementById('levelup-modal');
    const levelText = document.getElementById('modal-new-level-text');
    const rankText = document.getElementById('modal-rank-upgrade-text');
    if (modal && levelText && rankText) {
      levelText.textContent = `LEVEL ${newLevel}`;
      const rankData = this.getRankData(newLevel);
      rankText.textContent = `Rank Ascended: ${rankData.title}`;
      modal.hidden = false;
      modal.style.display = 'flex';
    }
    ToastManager.show(`👑 LEVEL UP! You ascended to Level ${newLevel}!`, 'success');
  }

  claimDailyBounty() {
    const today = new Date().toDateString();
    if (this.state.lastDailyClaim === today) {
      ToastManager.show('Daily Bounty already claimed for today! Return tomorrow.', 'info');
      return;
    }
    this.state.lastDailyClaim = today;
    this.state.streakDays += 1;
    this.addXP(50);
    soundFX.playReward();
    confettiEngine.burst(60);
    ToastManager.show('🎁 Claimed Daily Bounty: +50 XP & Streak Extended!', 'success');
    StorageManager.savePlayer(this.state);
    this.updateUI();
  }

  getRankData(level) {
    let current = this.ranks[0];
    for (const r of this.ranks) {
      if (level >= r.minLevel) current = r;
    }
    return current;
  }

  updateUI() {
    const p = this.state;
    const rank = this.getRankData(p.level);

    if (this.levelBadgeEl) this.levelBadgeEl.textContent = `LVL ${p.level}`;
    if (this.rankTitleEl) this.rankTitleEl.textContent = rank.title;
    if (this.headerLevelEl) this.headerLevelEl.textContent = `LVL ${p.level}`;
    if (this.headerStreakEl) this.headerStreakEl.textContent = `${p.streakDays}d`;
    if (this.currentXPEl) this.currentXPEl.textContent = p.currentXP;
    if (this.maxXPEl) this.maxXPEl.textContent = p.nextLevelXP;
    if (this.statQuestsEl) this.statQuestsEl.textContent = p.questsClearedCount;
    if (this.statFocusEl) this.statFocusEl.textContent = `${p.focusMinutes}m`;
    if (this.statTotalXPEl) this.statTotalXPEl.textContent = p.totalXPEarned;

    if (this.xpFillBarEl) {
      const pct = Math.min(100, Math.round((p.currentXP / p.nextLevelXP) * 100));
      this.xpFillBarEl.style.width = `${pct}%`;
    }

    const streakCounter = document.getElementById('streak-counter-number');
    if (streakCounter) streakCounter.textContent = p.streakDays;

    const walletVal = document.getElementById('shop-wallet-val');
    if (walletVal) walletVal.textContent = p.totalXPEarned;

    // Render Streak Heatmap Blocks
    this.renderHeatmap();
  }

  renderHeatmap() {
    const row = document.getElementById('contribution-blocks-row');
    if (!row) return;
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    row.innerHTML = days.map((d, i) => `
      <div class="matrix-day-cell">
        <span class="matrix-block level-${(i + this.state.streakDays) % 4}"></span>
        <span class="day-label">${d}</span>
      </div>
    `).join('');
  }
}

/* ============================================================================
   11. UNIFIED QUEST ENGINE (CENTRAL NERVOUS SYSTEM)
   ============================================================================ */
class UnifiedQuestEngine {
  constructor(playerManager) {
    this.pm = playerManager;
    this.activeQuests = StorageManager.loadActiveQuests();
    this.completedQuests = StorageManager.loadCompletedQuests();

    this.activeListEl = document.getElementById('active-quests-list');
    this.completedListEl = document.getElementById('completed-quests-list');
    this.activeCountEl = document.getElementById('active-quests-count');
    this.completedCountEl = document.getElementById('completed-quests-count');
    this.toggleDrawerBtn = document.getElementById('toggle-add-quest-btn');
    this.addDrawerEl = document.getElementById('add-quest-drawer');
    this.newQuestForm = document.getElementById('new-quest-form');
    this.inputTitle = document.getElementById('quest-input-title');
    this.selectDifficulty = document.getElementById('quest-difficulty-select');
    this.cancelAddBtn = document.getElementById('cancel-add-quest-btn');
    this.clearCompletedBtn = document.getElementById('clear-completed-btn');

    this.init();
  }

  init() {
    window.unifiedQuestEngine = this;

    if (this.toggleDrawerBtn && this.addDrawerEl) {
      this.toggleDrawerBtn.addEventListener('click', () => {
        soundFX.playClick();
        const hidden = this.addDrawerEl.style.display === 'none';
        this.addDrawerEl.style.display = hidden ? 'block' : 'none';
        if (hidden && this.inputTitle) this.inputTitle.focus();
      });
    }

    if (this.cancelAddBtn && this.addDrawerEl) {
      this.cancelAddBtn.addEventListener('click', () => {
        this.addDrawerEl.style.display = 'none';
      });
    }

    if (this.newQuestForm) {
      this.newQuestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = this.inputTitle.value.trim();
        const diff = this.selectDifficulty.value;
        const xp = diff === 'boss' ? 250 : diff === 'easy' ? 50 : 100;
        this.addQuest(title, diff, xp, 'manual', 'General Goal');
        this.inputTitle.value = '';
        this.addDrawerEl.style.display = 'none';
      });
    }

    if (this.clearCompletedBtn) {
      this.clearCompletedBtn.addEventListener('click', () => {
        this.completedQuests = [];
        StorageManager.saveCompletedQuests(this.completedQuests);
        this.render();
      });
    }

    this.render();
  }

  addQuest(title, difficulty = 'normal', xp = 100, source = 'manual', category = 'Task', skillId = null, deadline = null) {
    const quest = {
      id: `quest-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title,
      difficulty,
      xp,
      tierLabel: difficulty === 'boss' ? 'Boss Quest' : difficulty === 'easy' ? 'Apprentice' : 'Veteran',
      createdAt: Date.now(),
      source,
      category,
      skillId,
      deadline
    };

    this.activeQuests.unshift(quest);
    StorageManager.saveActiveQuests(this.activeQuests);

    // Sync to backend
    fetch('http://localhost:3000/api/quests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...quest, username: StorageManager.getAuthUser() })
    }).catch(() => {});

    soundFX.playEquip(true);
    ToastManager.show(`⚔️ New Bounty Enlisted: "${title}" (+${xp} XP)`, 'success');
    this.render();

    // Refresh recommendations & Focus Mode dropdowns
    if (window.RecommendationsManagerInstance) window.RecommendationsManagerInstance.render();
    if (window.FocusModeInstance) window.FocusModeInstance.updateQuestOptions();

    return quest;
  }

  completeQuest(id) {
    const idx = this.activeQuests.findIndex(q => q.id === id);
    if (idx === -1) return;
    const quest = this.activeQuests.splice(idx, 1)[0];
    quest.completedAt = Date.now();
    this.completedQuests.unshift(quest);

    StorageManager.saveActiveQuests(this.activeQuests);
    StorageManager.saveCompletedQuests(this.completedQuests);

    // 1. Award XP & Progress Level
    this.pm.addXP(quest.xp);
    this.pm.incrementQuestsCleared();

    // 2. Play Audio & Confetti
    soundFX.playQuestComplete();
    confettiEngine.burst(80);

    // 3. Progress Career Skill Tree if linked
    if (quest.skillId && window.SkillTreeInstance) {
      window.SkillTreeInstance.advanceSkillProgress(quest.skillId, 25);
    }

    // 4. Log in Portfolio Timeline
    if (window.QuestLogAcademyInstance) {
      window.QuestLogAcademyInstance.addXP(0, `Cleared: ${quest.title}`);
    }

    // 5. Sync to backend
    fetch('http://localhost:3000/api/quests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...quest, isCompleted: true, username: StorageManager.getAuthUser() })
    }).catch(() => {});

    ToastManager.show(`🏆 Quest Cleared: "${quest.title}" (+${quest.xp} XP awarded!)`, 'success');
    this.render();

    if (window.RecommendationsManagerInstance) window.RecommendationsManagerInstance.render();
    if (window.FocusModeInstance) window.FocusModeInstance.updateQuestOptions();
  }

  render() {
    if (this.activeCountEl) this.activeCountEl.textContent = this.activeQuests.length;
    if (this.completedCountEl) this.completedCountEl.textContent = this.completedQuests.length;

    if (this.activeListEl) {
      this.activeListEl.innerHTML = this.activeQuests.map(q => `
        <article class="quest-card glass-panel ${q.difficulty}">
          <div class="quest-card-header">
            <span class="quest-difficulty-tag ${q.difficulty}">${q.tierLabel}</span>
            <span class="quest-xp-bounty font-mono">+${q.xp} XP</span>
          </div>
          <h4 class="quest-title">${q.title}</h4>
          ${q.deadline ? `<span class="quest-deadline-tag font-mono">📅 Due: ${q.deadline}</span>` : ''}
          <div class="quest-card-actions">
            <button class="glass-btn btn-compact btn-focus-link" onclick="window.FocusModeInstance && window.FocusModeInstance.bindQuestAndStart('${q.id}')">⏱️ Focus</button>
            <button class="glow-action-btn btn-primary-grind btn-compact" onclick="window.unifiedQuestEngine.completeQuest('${q.id}')">⚔️ Claim Clear</button>
          </div>
        </article>
      `).join('') || '<div class="empty-state glass-panel">No active bounties. Summon one or extract from Pulse!</div>';
    }

    if (this.completedListEl) {
      this.completedListEl.innerHTML = this.completedQuests.map(q => `
        <article class="quest-card completed-quest-card glass-panel">
          <div class="quest-card-header">
            <span class="badge-mini font-mono text-emerald-400">VICTORY</span>
            <span class="quest-xp-bounty font-mono">+${q.xp} XP</span>
          </div>
          <h4 class="quest-title text-muted line-through">${q.title}</h4>
          <span class="text-xs text-muted font-mono">Cleared ${new Date(q.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </article>
      `).join('') || '<div class="empty-state glass-panel">Completed archive empty.</div>';
    }
  }
}

/* ============================================================================
   12. FEATURE 3: QUESTLOG PULSE (WHATSAPP & COMMUNICATION AI EXTRACTOR)
   ============================================================================ */
class PulseManager {
  constructor() {
    this.inputTextEl = document.getElementById('pulse-input-text');
    this.fileInputEl = document.getElementById('pulse-file-upload');
    this.parseBtn = document.getElementById('btn-parse-pulse-text');
    this.resultBoxEl = document.getElementById('pulse-extracted-card');
    this.feedBoxEl = document.getElementById('pulse-communication-feed');
    this.simChips = document.querySelectorAll('.pulse-chip');

    this.currentExtracted = null;
    this.init();
  }

  init() {
    if (this.parseBtn) {
      this.parseBtn.addEventListener('click', () => {
        soundFX.playClick();
        this.runExtraction(this.inputTextEl.value);
      });
    }

    this.simChips.forEach(chip => {
      chip.addEventListener('click', () => {
        soundFX.playClick();
        if (this.inputTextEl) this.inputTextEl.value = chip.dataset.msg;
        this.runExtraction(chip.dataset.msg);
      });
    });

    if (this.fileInputEl) {
      this.fileInputEl.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (evt) => {
            const content = evt.target.result;
            if (this.inputTextEl) this.inputTextEl.value = content;
            this.runExtraction(content);
            ToastManager.show(`📄 Loaded chat export: ${file.name}`, 'info');
          };
          reader.readAsText(file);
        }
      });
    }

    this.loadFeed();
  }

  runExtraction(text) {
    if (!text || text.trim().length === 0) {
      ToastManager.show('Please enter or paste a message to extract.', 'info');
      return;
    }

    // Pattern Matching & Natural Language Entity Extraction Engine
    const lower = text.toLowerCase();
    let type = 'Announcement';
    let title = 'College Notice';
    let subject = 'General Academics';
    let deadline = 'Upcoming';
    let platform = 'Campus Noticeboard';
    let priority = 'Normal';
    let suggestedXP = 75;

    if (lower.includes('assignment') || lower.includes('due') || lower.includes('homework') || lower.includes('problem set') || lower.includes('submit')) {
      type = 'Assignment';
      priority = 'High';
      suggestedXP = 150;
      if (lower.includes('dbms')) subject = 'Database Management Systems';
      if (lower.includes('os') || lower.includes('operating systems')) subject = 'Operating Systems';
      if (lower.includes('network')) subject = 'Computer Networks';
      if (lower.includes('friday')) deadline = 'Friday 11:59 PM';
      if (lower.includes('moodle')) platform = 'Moodle Submission';
      title = `${subject} Course Assignment`;
    } else if (lower.includes('exam') || lower.includes('mid-term') || lower.includes('mid term') || lower.includes('final')) {
      type = 'Exam';
      priority = 'Urgent';
      suggestedXP = 250;
      deadline = 'Oct 12, 02:00 PM';
      platform = 'Hall 304';
      title = 'Upcoming Mid-Term Examination';
    } else if (lower.includes('room change') || lower.includes('shifted') || lower.includes('lecture')) {
      type = 'Room Change';
      priority = 'Medium';
      suggestedXP = 30;
      deadline = 'Tomorrow 2:00 PM';
      platform = 'Room 402';
      title = 'Classroom Shift Notification';
    } else if (lower.includes('hackathon') || lower.includes('hackait') || lower.includes('competition')) {
      type = 'Opportunity';
      priority = 'High';
      suggestedXP = 200;
      deadline = 'Oct 24, 09:00 AM';
      platform = 'Main Auditorium';
      title = 'HackAIT 2026 National Hackathon';
    }

    this.currentExtracted = { type, title, subject, deadline, platform, priority, suggestedXP, originalText: text };
    this.renderExtractedCard(this.currentExtracted);
  }

  renderExtractedCard(data) {
    if (!this.resultBoxEl) return;
    this.resultBoxEl.innerHTML = `
      <div class="extracted-success-card">
        <div class="flex justify-between items-center mb-2">
          <span class="badge-mini font-mono ${data.priority.toLowerCase()}">⚡ ${data.priority.toUpperCase()} PRIORITY</span>
          <span class="font-mono text-cyan-400 font-bold">+${data.suggestedXP} XP SUGGESTED</span>
        </div>
        <h4 class="text-white text-lg font-arcade m-0 mb-1">📚 ${data.title}</h4>
        <div class="extracted-details-grid my-3 text-xs font-mono space-y-1">
          <div><span class="text-muted">Type:</span> <strong class="text-white">${data.type}</strong></div>
          <div><span class="text-muted">Subject:</span> <strong class="text-cyan-300">${data.subject}</strong></div>
          <div><span class="text-muted">Deadline:</span> <strong class="text-amber-400">${data.deadline}</strong></div>
          <div><span class="text-muted">Venue/Platform:</span> <strong class="text-purple-300">${data.platform}</strong></div>
        </div>
        <div class="pulse-action-buttons-row mt-3 flex gap-2">
          <button class="glow-action-btn btn-primary-grind btn-compact" onclick="window.PulseInstance.createQuestFromPulse()">
            ⚔️ [Create Quest]
          </button>
          <button class="glass-btn btn-compact" onclick="window.PulseInstance.addReminderFromPulse()">
            🔔 [Add Reminder]
          </button>
          <button class="glass-btn btn-compact" onclick="window.PulseInstance.addCalendarFromPulse()">
            🗓️ [Add Calendar Event]
          </button>
        </div>
      </div>
    `;
    soundFX.playBadge();
  }

  createQuestFromPulse() {
    if (!this.currentExtracted) return;
    window.unifiedQuestEngine.addQuest(
      this.currentExtracted.title,
      this.currentExtracted.suggestedXP >= 200 ? 'boss' : 'normal',
      this.currentExtracted.suggestedXP,
      'pulse',
      this.currentExtracted.type,
      'swe-1',
      this.currentExtracted.deadline
    );
    ToastManager.show('⚔️ Bounty added to your Quest Board!', 'success');
  }

  addReminderFromPulse() {
    if (!this.currentExtracted) return;
    if (window.RemindersInstance) {
      window.RemindersInstance.addReminder(this.currentExtracted.title, this.currentExtracted.deadline, this.currentExtracted.priority);
      ToastManager.show('🔔 Smart Reminder scheduled!', 'info');
    }
  }

  addCalendarFromPulse() {
    if (!this.currentExtracted) return;
    if (window.CalendarInstance) {
      window.CalendarInstance.addEvent(this.currentExtracted.title, '2026-10-02', this.currentExtracted.deadline, this.currentExtracted.type);
      ToastManager.show('🗓️ Event integrated into Smart Calendar!', 'success');
    }
  }

  async loadFeed() {
    if (!this.feedBoxEl) return;
    const comm = StorageManager.get(STORAGE_KEYS.COMMUNICATION, [
      { sender: 'Prof. Sharma (DBMS)', groupName: 'CSE 3rd Year Official', message: 'Guys DBMS assignment 3 is due Friday 11:59 PM. Submit on Moodle.', timestamp: 'Today at 10:15 AM' },
      { sender: 'Dr. K. Verma (Exam Cell)', groupName: 'Exam Cell Broadcast', message: 'Operating Systems mid-term scheduled for Oct 12 at 2:00 PM in Hall 304. Syllabus covers up to Deadlocks.', timestamp: 'Yesterday at 04:30 PM' },
      { sender: 'Club Lead (Coding Club)', groupName: 'AIT Coders Guild', message: 'HackAIT 2026 registrations are live! 36-hour hackathon on Oct 24. Find teammates in the Team Finder.', timestamp: '2 days ago' }
    ]);

    this.feedBoxEl.innerHTML = comm.map(c => `
      <div class="pulse-feed-card glass-panel">
        <div class="flex justify-between items-center text-xs text-muted mb-1">
          <strong class="text-white">${c.sender}</strong>
          <span class="badge-mini font-mono">${c.groupName}</span>
        </div>
        <p class="text-xs text-gray-200 m-0 my-1 font-mono">"${c.message}"</p>
        <div class="flex justify-between items-center text-xs text-muted mt-2">
          <span>${c.timestamp}</span>
          <button class="text-action-btn text-cyan-400" onclick="window.PulseInstance.extractFromMessage('${encodeURIComponent(c.message)}')">⚡ Extract Action</button>
        </div>
      </div>
    `).join('');
  }

  extractFromMessage(encodedMsg) {
    const text = decodeURIComponent(encodedMsg);
    if (this.inputTextEl) this.inputTextEl.value = text;
    this.runExtraction(text);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }
}

/* ============================================================================
   13. FEATURE 4: COLLEGE BRAIN SEARCH
   ============================================================================ */
class CollegeBrainSearch {
  constructor() {
    this.searchInput = document.getElementById('brain-search-input');
    this.searchBtn = document.getElementById('brain-search-btn');
    this.resultsContainer = document.getElementById('brain-search-results');
    this.promptChips = document.querySelectorAll('.brain-chip');

    this.init();
  }

  init() {
    if (this.searchBtn) {
      this.searchBtn.addEventListener('click', () => this.executeSearch());
    }
    if (this.searchInput) {
      this.searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.executeSearch();
      });
    }

    this.promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (this.searchInput) this.searchInput.value = chip.dataset.query;
        this.executeSearch();
      });
    });
  }

  executeSearch() {
    const query = (this.searchInput?.value || '').trim();
    if (!query) return;

    soundFX.playClick();
    const lower = query.toLowerCase();

    // Query synthesis engine matching across assignments, exams, notices, and pulse logs
    let answer = '';
    let source = '';
    let actionLabel = '';
    let actionFn = null;

    if (lower.includes('dbms') && (lower.includes('due') || lower.includes('assignment'))) {
      answer = 'DBMS Assignment 3 (ER Diagrams & BCNF Normalization) is due this Friday at 11:59 PM. Submission platform is Moodle. Worth +150 XP on completion.';
      source = 'Official Broadcast &bull; Prof. Sharma &bull; CSE 3rd Year Official';
      actionLabel = 'Enlist as Bounty (+150 XP)';
      actionFn = () => window.unifiedQuestEngine.addQuest('DBMS Assignment 3', 'boss', 150, 'brain', 'DBMS', 'swe-1', 'Friday 11:59 PM');
    } else if (lower.includes('exam') || lower.includes('next week')) {
      answer = 'Operating Systems Mid-Term is scheduled for Oct 12 at 02:00 PM in Hall 304. Syllabus covers Processes, Threads, CPU Scheduling, and Deadlocks.';
      source = 'Exam Cell Timetable &bull; Dr. K. Verma';
      actionLabel = 'Add to Calendar';
      actionFn = () => window.CalendarInstance.addEvent('OS Mid-Term Exam', '2026-10-12', '02:00 PM', 'Exam');
    } else if (lower.includes('room change') || lower.includes('professor') || lower.includes('room')) {
      answer = "Yes! Prof. Gupta announced: Tomorrow's Computer Networks lecture is shifted to Room 402 at 2:00 PM due to the annual seminar booking in Hall 1.";
      source = 'Class Announcement &bull; Prof. Gupta &bull; Today at 11:30 AM';
      actionLabel = 'Set Location Reminder';
      actionFn = () => window.RemindersInstance.addReminder('CN Lecture in Room 402', 'Tomorrow 2:00 PM', 'Medium');
    } else if (lower.includes('event') || lower.includes('tomorrow')) {
      answer = 'Python & GenAI Hands-On Workshop is tomorrow at 05:00 PM in Seminar Hall 2. Learn LangChain & RAG pipelines with local LLMs.';
      source = 'College Events Portal &bull; Innovation Cell';
      actionLabel = 'View Event Details';
      actionFn = () => window.QuestLogAcademyInstance.showPage('calendar');
    } else if (lower.includes('hackathon') || lower.includes('hackait')) {
      answer = 'HackAIT 2026 (36-hour National Hackathon) takes place Oct 24-25 in the Main Innovation Center. Rs. 2 Lakh prize pool. Registrations close in 5 days.';
      source = 'Coding Club Guild &bull; Registration link: hackait2026.dev';
      actionLabel = 'Find Teammates';
      actionFn = () => window.QuestLogAcademyInstance.showPage('teamfinder');
    } else {
      answer = `Synthesized search for "${query}": 3 relevant notices found across CSE 3rd Year archives and curriculum resources. Check your Smart Calendar and Resource Vault for deep materials.`;
      source = 'QuestLog Knowledge Base &bull; Indexed Port 3000';
      actionLabel = 'Explore Resources';
      actionFn = () => window.QuestLogAcademyInstance.showPage('resources');
    }

    if (this.resultsContainer) {
      this.resultsContainer.innerHTML = `
        <div class="brain-answer-card glass-panel">
          <div class="flex justify-between items-center mb-2">
            <span class="badge-mini font-mono text-cyan-400">🤖 AI SYNTHESIZED ANSWER</span>
            <span class="brain-source-tag">${source}</span>
          </div>
          <h4 class="text-white text-base leading-relaxed mb-3">${answer}</h4>
          ${actionLabel ? `
            <button id="brain-action-trigger-btn" class="glow-action-btn btn-primary-grind btn-compact">
              ⚡ ${actionLabel}
            </button>
          ` : ''}
        </div>
      `;

      const btn = document.getElementById('brain-action-trigger-btn');
      if (btn && actionFn) {
        btn.addEventListener('click', () => {
          actionFn();
          ToastManager.show('Action triggered successfully!', 'success');
        });
      }
    }
  }
}

/* ============================================================================
   14. FEATURE 5: CAREER SKILL TREE
   ============================================================================ */
class CareerSkillTree {
  constructor() {
    this.currentTrack = 'swe';
    this.tracksData = {
      swe: {
        name: 'Software Development & Algorithms',
        nodes: [
          { id: 'swe-1', name: 'C++ Mastery', desc: 'Syntax, pointers, references, and memory allocation.', xp: 100, status: 'mastered', resources: 'LearnCpp.com' },
          { id: 'swe-2', name: 'STL & Templates', desc: 'Vectors, maps, sets, iterators, and lambdas.', xp: 150, status: 'mastered', resources: 'cppreference.com' },
          { id: 'swe-3', name: 'Arrays & Two Pointers', desc: 'Sliding window, prefix sums, and sorting.', xp: 200, status: 'unlocked', progress: 40, resources: 'NeetCode 150' },
          { id: 'swe-4', name: 'Binary Search', desc: 'Search spaces, monotonic functions, predicate logic.', xp: 250, status: 'unlocked', progress: 0, resources: 'TopCoder BS Guide' },
          { id: 'swe-5', name: 'Recursion & Backtracking', desc: 'Subsets, permutations, N-Queens, pruning.', xp: 300, status: 'locked', progress: 0, resources: 'Striver SDE Sheet' },
          { id: 'swe-6', name: 'Graph Theory', desc: 'BFS, DFS, Dijkstra, Bellman-Ford, DSU, Prim.', xp: 400, status: 'locked', progress: 0, resources: 'CP-Algorithms' },
          { id: 'swe-7', name: 'Dynamic Programming', desc: '1D/2D memoization, knapsack, digit DP, tree DP.', xp: 500, status: 'locked', progress: 0, resources: 'Errichto DP Series' },
          { id: 'swe-8', name: 'Advanced CP', desc: 'Segment trees, Fenwick trees, centroid decomposition.', xp: 750, status: 'locked', progress: 0, resources: 'Codeforces Catalog' },
          { id: 'swe-9', name: 'ICPC World Finals Prep', desc: 'Team strategy, stress testing, geometric algorithms.', xp: 1000, status: 'locked', progress: 0, resources: 'ICPC Archive' }
        ]
      },
      aiml: {
        name: 'AI / Machine Learning Track',
        nodes: [
          { id: 'ai-1', name: 'Python & NumPy', desc: 'Vectorized computing, broadcasting, array slicing.', xp: 100, status: 'mastered', resources: 'NumPy Docs' },
          { id: 'ai-2', name: 'Linear Algebra & Calc', desc: 'Matrix multiplication, eigenvalues, gradient descent.', xp: 150, status: 'unlocked', progress: 60, resources: '3Blue1Brown' },
          { id: 'ai-3', name: 'Data Wrangling (Pandas)', desc: 'ETL pipelines, missing data imputation, joins.', xp: 200, status: 'unlocked', progress: 20, resources: 'Kaggle Learn' },
          { id: 'ai-4', name: 'Classic ML (Scikit-Learn)', desc: 'SVMs, Random Forests, XGBoost, cross-validation.', xp: 300, status: 'locked', progress: 0, resources: 'Hands-on ML' },
          { id: 'ai-5', name: 'Deep Learning (PyTorch)', desc: 'Backprop, tensors, CNNs, ResNets, optimizers.', xp: 450, status: 'locked', progress: 0, resources: 'Fast.ai' },
          { id: 'ai-6', name: 'Transformers & LLMs', desc: 'Self-attention, embeddings, LoRA fine-tuning, RAG.', xp: 600, status: 'locked', progress: 0, resources: 'HuggingFace NLP' },
          { id: 'ai-7', name: 'MLOps & Inference', desc: 'Docker, Triton, vLLM, latency profiling, ONNX.', xp: 800, status: 'locked', progress: 0, resources: 'Full Stack Deep Learning' }
        ]
      },
      cyber: {
        name: 'Cybersecurity & Defense Track',
        nodes: [
          { id: 'cy-1', name: 'Networking Fundamentals', desc: 'TCP/IP handshake, OSI model, subnets, Wireshark.', xp: 100, status: 'mastered', resources: 'Prof. Messer' },
          { id: 'cy-2', name: 'Linux Terminal Mastery', desc: 'Permissions, shell scripting, cron, SSH keys.', xp: 150, status: 'unlocked', progress: 50, resources: 'OverTheWire' },
          { id: 'cy-3', name: 'Cryptography Protocols', desc: 'RSA, AES, hashing, HMAC, Diffie-Hellman.', xp: 250, status: 'locked', progress: 0, resources: 'CryptoHack' },
          { id: 'cy-4', name: 'Web Application Security', desc: 'OWASP Top 10, SQLi, XSS, CSRF, JWT cracking.', xp: 400, status: 'locked', progress: 0, resources: 'PortSwigger Academy' },
          { id: 'cy-5', name: 'Penetration Testing', desc: 'Nmap, Metasploit, privilege escalation, Burp Suite.', xp: 600, status: 'locked', progress: 0, resources: 'HackTheBox' }
        ]
      },
      gamedev: {
        name: 'Game Development Track',
        nodes: [
          { id: 'gd-1', name: 'C# & Unity Engine Basics', desc: 'Game loops, transforms, rigidbodies, colliders.', xp: 150, status: 'unlocked', progress: 30, resources: 'Unity Learn' },
          { id: 'gd-2', name: '2D Physics & Sprite Shaders', desc: 'Tilemaps, raycasting, particles, state machines.', xp: 250, status: 'locked', progress: 0, resources: 'Brackeys Archive' },
          { id: 'gd-3', name: '3D Graphics & Three.js', desc: 'Meshes, lights, shaders, cameras, GLTF loading.', xp: 400, status: 'locked', progress: 0, resources: 'Three.js Journey' }
        ]
      },
      datasci: {
        name: 'Data Science & Big Data',
        nodes: [
          { id: 'ds-1', name: 'SQL & Database Architecture', desc: 'Joins, indexing, subqueries, normalization.', xp: 150, status: 'mastered', resources: 'Mode Analytics' },
          { id: 'ds-2', name: 'Statistical Inference', desc: 'Hypothesis testing, p-values, A/B testing, Bayes.', xp: 250, status: 'unlocked', progress: 20, resources: 'StatQuest' },
          { id: 'ds-3', name: 'Data Visualization & BI', desc: 'Plotly, Tableau, seaborn, dashboard storytelling.', xp: 350, status: 'locked', progress: 0, resources: 'Kaggle Datasets' }
        ]
      },
      cp: {
        name: 'Competitive Programming Elite',
        nodes: [
          { id: 'cp-1', name: 'Complexity & Big-O', desc: 'Time and space estimation, constant factor limits.', xp: 100, status: 'mastered', resources: 'CSES Problem Set' },
          { id: 'cp-2', name: 'Number Theory & Math', desc: 'Sieve, modular arithmetic, Fermat Little Theorem.', xp: 200, status: 'unlocked', progress: 50, resources: 'CP-Algorithms' },
          { id: 'cp-3', name: 'Segment Trees & Lazy Propagation', desc: 'Range queries, coordinate compression, Fenwick.', xp: 450, status: 'locked', progress: 0, resources: 'Codeforces Gym' }
        ]
      },
      startup: {
        name: 'Tech Entrepreneurship & Product',
        nodes: [
          { id: 'st-1', name: 'Problem Validation', desc: 'User interviews, TAM/SAM/SOM, Lean Canvas.', xp: 100, status: 'mastered', resources: 'Y Combinator Startup School' },
          { id: 'st-2', name: 'MVP Rapid Prototyping', desc: 'Building demoable version in 48 hours.', xp: 200, status: 'unlocked', progress: 80, resources: 'Paul Graham Essays' },
          { id: 'st-3', name: 'Pitch Deck & Seed Raising', desc: 'Traction metrics, financial model, investor pitch.', xp: 400, status: 'locked', progress: 0, resources: 'Sequoia Pitch Template' }
        ]
      }
    };

    this.tabs = document.querySelectorAll('.skill-tab');
    this.container = document.getElementById('skilltree-nodes-container');
    this.inspector = document.getElementById('skill-node-inspector');
    this.init();
  }

  init() {
    window.SkillTreeInstance = this;

    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        soundFX.playClick();
        this.tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.currentTrack = tab.dataset.track;
        this.render();
      });
    });

    this.render();
  }

  render() {
    const track = this.tracksData[this.currentTrack];
    if (!track || !this.container) return;

    const trackNameEl = document.getElementById('current-track-name');
    const trackProgEl = document.getElementById('current-track-progress');
    const masteredCount = track.nodes.filter(n => n.status === 'mastered').length;

    if (trackNameEl) trackNameEl.textContent = track.name;
    if (trackProgEl) trackProgEl.textContent = `Progress: ${masteredCount} / ${track.nodes.length} Mastered`;

    this.container.innerHTML = track.nodes.map((node, idx) => `
      <div class="tree-node-card ${node.status}" onclick="window.SkillTreeInstance.inspectNode('${this.currentTrack}', '${node.id}')">
        <div class="tree-node-icon">
          ${node.status === 'mastered' ? '⭐' : node.status === 'unlocked' ? '⚡' : '🔒'}
        </div>
        <div class="tree-node-info">
          <h4>${node.name}</h4>
          <span>${node.status.toUpperCase()} &bull; +${node.xp} XP</span>
        </div>
      </div>
      ${idx < track.nodes.length - 1 ? `<div class="tree-connector-line"></div>` : ''}
    `).join('');

    this.inspectNode(this.currentTrack, track.nodes[0].id);
  }

  inspectNode(trackKey, nodeId) {
    const track = this.tracksData[trackKey];
    if (!track || !this.inspector) return;
    const node = track.nodes.find(n => n.id === nodeId);
    if (!node) return;

    this.inspector.innerHTML = `
      <div class="node-inspect-card">
        <div class="flex justify-between items-center mb-2">
          <span class="badge-mini font-mono ${node.status}">${node.status.toUpperCase()}</span>
          <span class="font-mono text-cyan-400">+${node.xp} XP BOUNTY</span>
        </div>
        <h3 class="text-white font-arcade text-xl m-0 mb-1">${node.name}</h3>
        <p class="text-sm text-gray-300 mb-3">${node.desc}</p>
        <div class="text-xs font-mono text-muted mb-3 space-y-1">
          <div>Curated Resource: <strong class="text-cyan-300">${node.resources}</strong></div>
          <div>Mastery Progress: <strong class="text-emerald-400">${node.status === 'mastered' ? '100%' : `${node.progress || 0}%`}</strong></div>
        </div>
        <div class="space-y-2 mt-4">
          <button class="glow-action-btn btn-primary-grind w-full" onclick="window.SkillTreeInstance.summonQuestForSkill('${node.name}', ${node.xp}, '${node.id}')">
            ⚔️ Summon Practice Quest (+${node.xp} XP)
          </button>
        </div>
      </div>
    `;
    soundFX.playClick();
  }

  summonQuestForSkill(skillName, xp, skillId) {
    window.unifiedQuestEngine.addQuest(`Master ${skillName} Concepts`, xp >= 300 ? 'boss' : 'normal', xp, 'skill', 'Skill Progression', skillId);
    ToastManager.show(`🗺️ Practice Quest enlisting for "${skillName}"!`, 'success');
  }

  advanceSkillProgress(skillId, amount = 25) {
    for (const trackKey in this.tracksData) {
      const node = this.tracksData[trackKey].nodes.find(n => n.id === skillId);
      if (node && node.status !== 'mastered') {
        node.progress = (node.progress || 0) + amount;
        if (node.progress >= 100) {
          node.status = 'mastered';
          ToastManager.show(`🌟 SKILL MASTERED: ${node.name}!`, 'success');
          soundFX.playBadge();
        }
        this.render();
        break;
      }
    }
  }
}

/* ============================================================================
   15. FEATURE 6: QUESTLOG XP SHOP
   ============================================================================ */
class XPShopManager {
  constructor(playerManager, characterEngine) {
    this.pm = playerManager;
    this.characterEngine = characterEngine;
    this.catalog = VAULT_ITEMS_CATALOG;
    this.inventory = StorageManager.loadInventory();
    this.equipped = StorageManager.loadEquipped();
    this.currentFilter = 'all';

    this.container = document.getElementById('shop-items-grid');
    this.filterBtns = document.querySelectorAll('.shop-filter');
    this.init();
  }

  init() {
    window.XPShopInstance = this;

    this.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        this.filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentFilter = btn.dataset.category;
        this.render();
      });
    });

    this.render();
  }

  render() {
    if (!this.container) return;
    const filtered = this.catalog.filter(item => this.currentFilter === 'all' || item.type === this.currentFilter);

    this.container.innerHTML = filtered.map(item => {
      const owned = this.inventory.includes(item.id);
      const isEquipped = Object.values(this.equipped).includes(item.id);

      return `
        <div class="shop-item-card glass-panel ${item.rarity}">
          <span class="badge-mini font-mono uppercase text-xs">${item.rarity}</span>
          <div class="shop-item-icon-huge">${item.icon}</div>
          <h4 class="text-white font-arcade m-0">${item.name}</h4>
          <p class="text-xs text-muted m-0">${item.desc}</p>
          <div class="text-xs font-mono text-cyan-400 font-bold my-1">
            ${owned ? 'IN INVENTORY' : `💎 ${item.price} XP`}
          </div>
          <div class="mt-auto">
            ${!owned ? `
              <button class="glow-action-btn btn-primary-grind w-full btn-compact" onclick="window.XPShopInstance.purchase('${item.id}')">
                Purchase (-${item.price} XP)
              </button>
            ` : `
              <button class="glass-btn w-full btn-compact ${isEquipped ? 'border-emerald-400 text-emerald-400' : ''}" onclick="window.XPShopInstance.equip('${item.id}', '${item.type}')">
                ${isEquipped ? '✓ Equipped' : 'Equip Gear'}
              </button>
            `}
          </div>
        </div>
      `;
    }).join('');
  }

  purchase(itemId) {
    const item = this.catalog.find(i => i.id === itemId);
    if (!item) return;

    if (this.pm.state.totalXPEarned < item.price) {
      ToastManager.show(`❌ Insufficient XP! You need ${item.price - this.pm.state.totalXPEarned} more XP.`, 'error');
      return;
    }

    this.pm.deductXP(item.price);
    this.inventory.push(item.id);
    StorageManager.saveInventory(this.inventory);

    soundFX.playReward();
    confettiEngine.burst(60);
    ToastManager.show(`🎁 Purchased: "${item.name}"! Added to Vault.`, 'success');
    this.render();
  }

  equip(itemId, itemType) {
    this.equipped[itemType] = itemId;
    StorageManager.saveEquipped(this.equipped);

    if (this.characterEngine) {
      if (itemType === 'weapon') this.characterEngine.attachWeapon(itemId);
      if (itemType === 'head') this.characterEngine.attachHeadgear(itemId);
    }

    soundFX.playEquip(itemType === 'weapon');
    ToastManager.show(`⚔️ Equipped: "${itemId}" on your 3D Operative!`, 'info');
    this.render();
  }
}

/* ============================================================================
   16. FEATURE 7: PERSONAL RECOMMENDATIONS ("FOR YOU")
   ============================================================================ */
class RecommendationsManager {
  constructor(playerManager) {
    this.pm = playerManager;
    this.container = document.getElementById('for-you-recommendations-grid');
    this.init();
  }

  init() {
    window.RecommendationsManagerInstance = this;
    this.render();
  }

  render() {
    if (!this.container) return;
    const p = this.pm.state;
    const xpUntilLvl = p.nextLevelXP - p.currentXP;

    const recs = [
      {
        icon: '📚',
        title: 'DBMS Assignment 3 Due Soon',
        reason: 'Due Friday at 11:59 PM &bull; High Priority',
        urgent: true,
        actionText: 'Start Quest',
        actionFn: () => window.unifiedQuestEngine.addQuest('DBMS Assignment 3', 'boss', 150, 'rec', 'Academic', 'swe-1', 'Friday 11:59 PM')
      },
      {
        icon: '⭐',
        title: `You are ${xpUntilLvl} XP away from Level ${p.level + 1}`,
        reason: 'Complete 1 veteran bounty to level up & unlock gear',
        urgent: false,
        actionText: 'Enlist Bounty',
        actionFn: () => window.unifiedQuestEngine.addQuest('Level Ascent Bounty', 'normal', 100, 'rec', 'Leveling')
      },
      {
        icon: '🚀',
        title: 'HackAIT 2026 matches your skills',
        reason: 'National 36-hr hackathon &bull; Teams forming now',
        urgent: false,
        actionText: 'Find Teammates',
        actionFn: () => window.QuestLogAcademyInstance.showPage('teamfinder')
      },
      {
        icon: '⚠️',
        title: 'Computer Networks Attendance: 71%',
        reason: 'Below 75% cutoff threshold &bull; 3 lectures required',
        urgent: true,
        actionText: 'Add to Calendar',
        actionFn: () => window.CalendarInstance.addEvent('CN Mandatory Lecture', '2026-10-02', '02:00 PM', 'Class')
      }
    ];

    this.container.innerHTML = recs.map((r, i) => `
      <div class="recommendation-card ${r.urgent ? 'urgent' : ''}">
        <div class="flex items-center gap-2">
          <span class="text-xl">${r.icon}</span>
          <div>
            <span class="rec-title">${r.title}</span>
            <span class="rec-reason">${r.reason}</span>
          </div>
        </div>
        <button class="glow-action-btn btn-primary-grind btn-compact" onclick="window.RecommendationsManagerInstance.trigger(${i})">
          ${r.actionText}
        </button>
      </div>
    `).join('');

    this.currentRecs = recs;
  }

  trigger(idx) {
    if (this.currentRecs && this.currentRecs[idx]) {
      this.currentRecs[idx].actionFn();
      ToastManager.show('Action initiated from recommendations.', 'success');
    }
  }
}

/* ============================================================================
   17. FEATURE 8: QUESTLOG AI (CONVERSATIONAL ASSISTANT & TONIGHT'S PLANNER)
   ============================================================================ */
class QuestLogAIManager {
  constructor(playerManager) {
    this.pm = playerManager;
    this.orbBtn = document.getElementById('questlog-ai-trigger');
    this.drawerEl = document.getElementById('questlog-ai-drawer');
    this.closeBtn = document.getElementById('close-ai-drawer-btn');
    this.chatForm = document.getElementById('ai-chat-form');
    this.chatInput = document.getElementById('ai-chat-input');
    this.messagesContainer = document.getElementById('ai-messages-container');
    this.promptButtons = document.querySelectorAll('.ai-quick-prompt');

    this.init();
  }

  init() {
    window.QuestLogAIInstance = this;

    if (this.orbBtn && this.drawerEl) {
      this.orbBtn.addEventListener('click', () => {
        soundFX.playClick();
        const isOpen = this.drawerEl.style.display !== 'none';
        this.drawerEl.style.display = isOpen ? 'none' : 'flex';
      });
    }

    if (this.closeBtn && this.drawerEl) {
      this.closeBtn.addEventListener('click', () => {
        this.drawerEl.style.display = 'none';
      });
    }

    this.promptButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        const prompt = btn.dataset.prompt;
        this.sendMessage(prompt);
      });
    });

    if (this.chatForm) {
      this.chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = this.chatInput.value.trim();
        if (text) {
          this.sendMessage(text);
          this.chatInput.value = '';
        }
      });
    }
  }

  sendMessage(userText) {
    this.appendMessage('user', userText);

    // AI Intent & Response Generator using actual QuestLog Data
    setTimeout(() => {
      const lower = userText.toLowerCase();
      let replyHtml = '';

      if (lower.includes('2 hours') || lower.includes('tonight') || lower.includes('plan my day')) {
        replyHtml = `
          <div>
            <h4 class="text-white font-arcade m-0 mb-1">⚡ Tonight's Optimized Quest Plan</h4>
            <div class="space-y-1 text-xs font-mono my-2">
              <div class="flex justify-between"><span>1. DBMS Assignment</span><strong>45 min (+100 XP)</strong></div>
              <div class="flex justify-between"><span>2. DSA Binary Search Practice</span><strong>40 min (+75 XP)</strong></div>
              <div class="flex justify-between"><span>3. JavaScript / Web Skill</span><strong>25 min (+50 XP)</strong></div>
              <div class="flex justify-between"><span>4. Lecture Review</span><strong>10 min (+20 XP)</strong></div>
            </div>
            <div class="text-xs text-emerald-400 font-mono font-bold mb-2">Total: 2 Hours &bull; +245 Potential XP</div>
            <button class="glow-action-btn btn-primary-grind btn-compact w-full" onclick="window.QuestLogAIInstance.startTonightPlan()">
              [START PLAN & ENGAGE FOCUS]
            </button>
          </div>
        `;
      } else if (lower.includes('due this week') || lower.includes('assignment')) {
        replyHtml = `
          <p>You have <strong>1 critical assignment</strong> due this week:</p>
          <ul class="text-xs list-disc pl-4 space-y-1 font-mono">
            <li><strong>DBMS Assignment 3</strong>: Friday 11:59 PM (Moodle) &bull; +150 XP</li>
          </ul>
          <p class="text-xs text-cyan-300 mt-2">I recommend clearing it tonight during a 45-minute focus trance.</p>
        `;
      } else if (lower.includes('dbms exam') || lower.includes('prepare')) {
        replyHtml = `
          <p>Here is your study roadmap for <strong>DBMS Mid-Term (Oct 8, Hall 302)</strong>:</p>
          <div class="text-xs font-mono space-y-1 my-2">
            <p>1. ER Model & Functional Dependency (Day 1-2)</p>
            <p>2. Relational Algebra & SQL Joins (Day 3-4)</p>
            <p>3. 3NF & BCNF Decomposition Proofs (Day 5-6)</p>
          </div>
          <button class="glass-btn btn-compact w-full" onclick="window.QuestLogAcademyInstance.showPage('resources')">Open DBMS Vault Notes &rarr;</button>
        `;
      } else if (lower.includes('skill') || lower.includes('unlock')) {
        replyHtml = `
          <p>Looking at your <strong>Software Development Track</strong>:</p>
          <p class="text-xs font-mono text-cyan-300">Next Node: <strong>Binary Search Spaces (+250 XP)</strong></p>
          <p class="text-xs text-muted">Prerequisites C++ & STL are already verified. Clearing this node unlocks Graphs.</p>
          <button class="glass-btn btn-compact w-full mt-2" onclick="window.QuestLogAcademyInstance.showPage('skilltree')">View Career Skill Tree &rarr;</button>
        `;
      } else {
        replyHtml = `
          <p>I have analyzed your current metrics:</p>
          <p class="text-xs font-mono">Level: <strong>${this.pm.state.level}</strong> &bull; Streak: <strong>${this.pm.state.streakDays}d</strong> &bull; Free time: <strong>47 mins</strong></p>
          <p class="text-xs text-emerald-400">Recommendation: Launch a 25-minute focus session on DBMS Assignment 3 to ensure full marks and claim +100 XP.</p>
        `;
      }

      this.appendMessage('bot', replyHtml);
    }, 400);
  }

  appendMessage(role, html) {
    if (!this.messagesContainer) return;
    const msg = document.createElement('div');
    msg.className = `ai-message ${role}`;
    msg.innerHTML = `
      <div class="ai-msg-avatar">${role === 'bot' ? '🤖' : '👤'}</div>
      <div class="ai-msg-content">${html}</div>
    `;
    this.messagesContainer.appendChild(msg);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  startTonightPlan() {
    window.unifiedQuestEngine.addQuest('DBMS Assignment 3 Section', 'boss', 100, 'ai_plan');
    window.unifiedQuestEngine.addQuest('DSA Binary Search Practice', 'normal', 75, 'ai_plan');
    if (window.FocusModeInstance) window.FocusModeInstance.bindQuestAndStart('asg-1-quest');
    ToastManager.show('⚡ Plan activated! Enlisted bounties and engaged Focus Arena.', 'success');
    if (this.drawerEl) this.drawerEl.style.display = 'none';
  }
}

/* ============================================================================
   18. FEATURE 9: SMART CALENDAR & CONFLICT DETECTION
   ============================================================================ */
class SmartCalendarManager {
  constructor() {
    this.grid = document.getElementById('calendar-grid');
    this.monthHeading = document.getElementById('calendar-month-heading');
    this.conflictBanner = document.getElementById('calendar-conflict-alert');
    this.conflictDesc = document.getElementById('conflict-desc');

    this.events = [
      { id: 'ev-1', title: 'DBMS Assignment 3 Due', day: 2, time: '11:59 PM', type: 'assignment' },
      { id: 'ev-2', title: 'Python & AI Workshop', day: 2, time: '05:00 PM', type: 'workshop' },
      { id: 'ev-3', title: 'CN Problem Set 2', day: 4, time: '11:59 PM', type: 'assignment' },
      { id: 'ev-4', title: 'OS Lab 4 Submission', day: 6, time: '05:00 PM', type: 'assignment' },
      { id: 'ev-5', title: 'DBMS Mid-Term Exam', day: 8, time: '10:00 AM', type: 'exam' },
      { id: 'ev-6', title: 'OS Mid-Term Exam', day: 12, time: '02:00 PM', type: 'exam' },
      { id: 'ev-7', title: 'HackAIT 2026 Opening', day: 24, time: '09:00 AM', type: 'hackathon' }
    ];

    this.init();
  }

  init() {
    window.CalendarInstance = this;

    const addBtn = document.getElementById('add-calendar-event-btn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const title = prompt('Enter Event Name:');
        if (!title) return;
        const day = prompt('Day of month (1-31):', '5');
        const time = prompt('Time (e.g. 2:00 PM):', '02:00 PM');
        this.addEvent(title, '2026-10-05', time, 'custom', Number(day) || 5);
      });
    }

    this.render();
  }

  addEvent(title, date, time, type = 'custom', day = 5) {
    this.events.push({ id: `cal-${Date.now()}`, title, day, time, type });
    this.checkConflicts();
    this.render();
  }

  checkConflicts() {
    // Conflict detection: detect if 2 events occur on the same day at the same time
    const map = {};
    let conflict = null;

    for (const ev of this.events) {
      const key = `${ev.day}-${ev.time}`;
      if (map[key]) {
        conflict = { a: map[key].title, b: ev.title, time: ev.time };
        break;
      }
      map[key] = ev;
    }

    if (this.conflictBanner && this.conflictDesc) {
      if (conflict) {
        this.conflictDesc.textContent = `"${conflict.a}" overlaps with "${conflict.b}" at ${conflict.time}.`;
        this.conflictBanner.style.display = 'flex';
      } else {
        this.conflictBanner.style.display = 'none';
      }
    }
  }

  render() {
    if (!this.grid) return;
    const totalDays = 31;
    let html = '';

    for (let day = 1; day <= totalDays; day++) {
      const dayEvents = this.events.filter(e => e.day === day);
      html += `
        <div class="cal-day-cell">
          <span class="cal-day-num">${day}</span>
          ${dayEvents.map(e => `
            <div class="cal-event-pill ${e.type}" title="${e.title} at ${e.time}">
              ${e.type === 'exam' ? '📝' : e.type === 'assignment' ? '📚' : '⚡'} ${e.title}
            </div>
          `).join('')}
        </div>
      `;
    }

    this.grid.innerHTML = html;
  }
}

/* ============================================================================
   19. FEATURE 10: FOCUS MODE (DEEP WORK ARENA)
   ============================================================================ */
class FocusModeManager {
  constructor(playerManager) {
    this.pm = playerManager;
    this.questSelect = document.getElementById('focus-quest-select');
    this.timerDisplay = document.getElementById('deep-focus-digits');
    this.toggleBtn = document.getElementById('deep-focus-toggle-btn');
    this.resetBtn = document.getElementById('deep-focus-reset-btn');
    this.presets = document.querySelectorAll('.focus-preset-btn');
    this.customInput = document.getElementById('focus-custom-mins');
    this.setCustomBtn = document.getElementById('set-custom-focus-btn');

    this.totalSeconds = 1500;
    this.remainingSeconds = 1500;
    this.isRunning = false;
    this.timerInterval = null;
    this.boundQuestId = null;

    this.init();
  }

  init() {
    window.FocusModeInstance = this;

    this.presets.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        this.presets.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mins = Number(btn.dataset.mins) || 25;
        this.setDuration(mins * 60);
      });
    });

    if (this.setCustomBtn && this.customInput) {
      this.setCustomBtn.addEventListener('click', () => {
        const mins = Number(this.customInput.value);
        if (mins > 0 && mins <= 180) {
          this.setDuration(mins * 60);
          ToastManager.show(`Timer set to ${mins} minutes.`, 'info');
        }
      });
    }

    if (this.toggleBtn) {
      this.toggleBtn.addEventListener('click', () => this.toggle());
    }

    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.reset());
    }

    if (this.questSelect) {
      this.questSelect.addEventListener('change', () => {
        this.boundQuestId = this.questSelect.value;
      });
    }

    this.updateQuestOptions();
    this.updateDisplay();
  }

  updateQuestOptions() {
    if (!this.questSelect) return;
    const quests = StorageManager.loadActiveQuests();
    this.questSelect.innerHTML = '<option value="">-- Select Active Quest to Bind --</option>' +
      quests.map(q => `<option value="${q.id}">⚔️ ${q.title} (+${q.xp} XP)</option>`).join('');
  }

  bindQuestAndStart(questId) {
    this.boundQuestId = questId;
    if (this.questSelect) this.questSelect.value = questId;
    if (window.QuestLogAcademyInstance) window.QuestLogAcademyInstance.showPage('focus');
    this.start();
  }

  setDuration(secs) {
    this.reset();
    this.totalSeconds = secs;
    this.remainingSeconds = secs;
    this.updateDisplay();
  }

  toggle() {
    if (this.isRunning) this.pause();
    else this.start();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    soundFX.playClick();
    if (this.toggleBtn) this.toggleBtn.innerHTML = '<span>⏸️ Pause Trance</span>';

    const stateEl = document.getElementById('focus-session-state');
    if (stateEl) stateEl.textContent = 'Active Trance';

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateDisplay();

      if (this.remainingSeconds <= 0) {
        this.completeSession();
      }
    }, 1000);
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.timerInterval);
    if (this.toggleBtn) this.toggleBtn.innerHTML = '<span>⚔️ Resume Trance</span>';
    const stateEl = document.getElementById('focus-session-state');
    if (stateEl) stateEl.textContent = 'Paused';
  }

  reset() {
    this.pause();
    this.remainingSeconds = this.totalSeconds;
    this.updateDisplay();
    if (this.toggleBtn) this.toggleBtn.innerHTML = '<span>⚔️ Engage Focus Trance</span>';
    const stateEl = document.getElementById('focus-session-state');
    if (stateEl) stateEl.textContent = 'Standby';
  }

  updateDisplay() {
    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (this.timerDisplay) this.timerDisplay.textContent = str;
  }

  completeSession() {
    this.pause();
    const minutesCompleted = Math.round(this.totalSeconds / 60);
    const xpReward = minutesCompleted >= 50 ? 250 : 150;

    this.pm.addXP(xpReward);
    this.pm.addFocusMinutes(minutesCompleted);

    soundFX.playLevelUp();
    confettiEngine.burst(100);

    // If a quest was bound, auto-clear it!
    if (this.boundQuestId && window.unifiedQuestEngine) {
      window.unifiedQuestEngine.completeQuest(this.boundQuestId);
    }

    ToastManager.show(`⚡ Focus Trance Complete! Earned +${xpReward} XP & logged ${minutesCompleted}m focus!`, 'success');
    this.reset();
  }
}

/* ============================================================================
   20. FEATURE 11 & 14: TEAM FINDER & STUDY GROUPS
   ============================================================================ */
class CommunityManager {
  constructor() {
    this.profilesContainer = document.getElementById('teamfinder-profiles-grid');
    this.groupsContainer = document.getElementById('studygroups-list-grid');

    this.studentProfiles = [
      { name: 'Alex Rivera', branch: 'CSE', year: '3rd Year', cgpa: '9.1', skills: ['React', 'TypeScript', 'Node.js'], lookingFor: 'Hackathon Teammates', github: 'arivera-dev', available: '12 hrs/wk' },
      { name: 'Sarah Chen', branch: 'IT', year: '3rd Year', cgpa: '8.9', skills: ['Python', 'PyTorch', 'FastAPI'], lookingFor: 'AI / ML Projects', github: 'schen-ai', available: '15 hrs/wk' },
      { name: 'Rohan Joshi', branch: 'CSE', year: '3rd Year', cgpa: '8.7', skills: ['C++', 'DSA', 'Three.js'], lookingFor: 'Game-A-Thon Core', github: 'rohanj-code', available: '10 hrs/wk' },
      { name: 'Priya Nair', branch: 'ECE', year: '3rd Year', cgpa: '8.8', skills: ['UI/UX', 'Figma', 'Tailwind'], lookingFor: 'Frontend / Design Lead', github: 'priyanair-ui', available: '14 hrs/wk' }
    ];

    this.studyGroups = [
      { id: 'sg-1', name: 'DSA Algorithm Knights', members: 18, goal: 'Solve 50 Dynamic Programming Problems', progress: 38, xpPool: 2400 },
      { id: 'sg-2', name: 'DBMS Semester Exam Squad', members: 12, goal: 'Complete all previous year question sets', progress: 80, xpPool: 1800 },
      { id: 'sg-3', name: 'HackAIT Team Alpha', members: 4, goal: 'Build production RAG assistant prototype', progress: 65, xpPool: 1200 },
      { id: 'sg-4', name: 'Competitive Programming League', members: 24, goal: 'Top 100 on Codeforces Div 2', progress: 52, xpPool: 3600 }
    ];

    this.init();
  }

  init() {
    window.CommunityInstance = this;

    const postTeamBtn = document.getElementById('create-team-post-btn');
    if (postTeamBtn) {
      postTeamBtn.addEventListener('click', () => {
        const skills = prompt('Enter your key skills (comma-separated):', 'React, Python, C++');
        if (!skills) return;
        const looking = prompt('What are you looking for?', 'HackAIT Teammates');
        this.studentProfiles.unshift({
          name: StorageManager.getAuthUser() || 'Operator',
          branch: 'CSE',
          year: '3rd Year',
          cgpa: '8.8',
          skills: skills.split(',').map(s => s.trim()),
          lookingFor: looking,
          github: 'operator-hub',
          available: '10 hrs/wk'
        });
        ToastManager.show('👥 Team vacancy posted to Team Finder!', 'success');
        this.renderProfiles();
      });
    }

    const createGroupBtn = document.getElementById('create-study-group-btn');
    if (createGroupBtn) {
      createGroupBtn.addEventListener('click', () => {
        const name = prompt('Study Group Name:');
        if (!name) return;
        const goal = prompt('Shared Group Goal:');
        this.studyGroups.unshift({
          id: `sg-${Date.now()}`,
          name,
          members: 1,
          goal,
          progress: 10,
          xpPool: 200
        });
        ToastManager.show(`👥 Formed study group: "${name}"!`, 'success');
        this.renderGroups();
      });
    }

    const searchInput = document.getElementById('team-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => this.filterProfiles());
    }

    this.renderProfiles();
    this.renderGroups();
  }

  renderProfiles() {
    if (!this.profilesContainer) return;
    this.profilesContainer.innerHTML = this.studentProfiles.map(s => `
      <div class="team-card glass-panel">
        <div class="flex justify-between items-center mb-1">
          <strong class="text-white text-base">${s.name}</strong>
          <span class="badge-mini font-mono">${s.year} &bull; ${s.branch}</span>
        </div>
        <p class="text-xs text-amber-300 font-mono my-1">Looking for: ${s.lookingFor}</p>
        <div class="team-skills-pills my-2 flex flex-wrap gap-1">
          ${s.skills.map(sk => `<span class="badge-mini bg-white/5 font-mono">${sk}</span>`).join('')}
        </div>
        <div class="text-xs text-muted font-mono flex justify-between my-2">
          <span>GitHub: @${s.github}</span>
          <span>${s.available}</span>
        </div>
        <button class="glow-action-btn btn-primary-grind w-full btn-compact" onclick="alert('Invitation sent to ${s.name}!')">
          ✉️ Send Team Invitation
        </button>
      </div>
    `).join('');
  }

  filterProfiles() {
    const q = (document.getElementById('team-search-input')?.value || '').toLowerCase();
    const cards = document.querySelectorAll('.team-card');
    cards.forEach(c => {
      c.style.display = c.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  }

  renderGroups() {
    if (!this.groupsContainer) return;
    this.groupsContainer.innerHTML = this.studyGroups.map(g => `
      <div class="studygroup-card glass-panel">
        <div class="flex justify-between items-center mb-1">
          <h4 class="text-white font-arcade m-0 text-base">${g.name}</h4>
          <span class="badge-mini font-mono text-cyan-400">👥 ${g.members} Members</span>
        </div>
        <p class="text-xs text-gray-300 font-mono my-1">🎯 Goal: ${g.goal}</p>
        <div class="my-2">
          <div class="flex justify-between text-xs text-muted font-mono mb-1">
            <span>Collective Progress</span>
            <span>${g.progress}% Done</span>
          </div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-emerald-400 h-2 rounded" style="width: ${g.progress}%"></div></div>
        </div>
        <div class="flex justify-between items-center mt-3">
          <span class="text-xs font-mono text-amber-400">⚡ Pool: +${g.xpPool} XP</span>
          <button class="glass-btn btn-compact" onclick="alert('Joined study group: ${g.name}!')">Join Group</button>
        </div>
      </div>
    `).join('');
  }
}

/* ============================================================================
   21. FEATURE 15: RESOURCE VAULT
   ============================================================================ */
class ResourceVaultManager {
  constructor() {
    this.container = document.getElementById('vault-resources-grid');
    this.resources = [
      { id: 'res-1', title: 'DBMS Complete BCNF & 3NF Normalization Notes', subject: 'DBMS', semester: 5, type: 'Notes', rating: 4.9, link: 'https://moodle.college.edu/notes/dbms-norm.pdf' },
      { id: 'res-2', title: 'Operating Systems Previous 5-Year Mid-Term Papers', subject: 'OS', semester: 5, type: 'PYQs', rating: 4.8, link: 'https://moodle.college.edu/pyq/os-papers.pdf' },
      { id: 'res-3', title: 'Striver & NeetCode Top 75 DSA Solutions (C++)', subject: 'DSA', semester: 3, type: 'Cheat Sheets', rating: 5.0, link: 'https://github.com/neetcode' },
      { id: 'res-4', title: 'Computer Networks TCP Flow Control Handout', subject: 'CN', semester: 5, type: 'PDFs', rating: 4.6, link: 'https://college.edu/cn-tcp.pdf' },
      { id: 'res-5', title: 'LangChain & RAG Agent Masterclass Video Guide', subject: 'AI', semester: 6, type: 'Videos', rating: 4.9, link: 'https://youtube.com/playlist' }
    ];

    this.init();
  }

  init() {
    const searchInput = document.getElementById('vault-resource-search');
    const subFilter = document.getElementById('vault-subject-filter');
    if (searchInput) searchInput.addEventListener('input', () => this.filter());
    if (subFilter) subFilter.addEventListener('change', () => this.filter());
    this.render(this.resources);
  }

  filter() {
    const q = (document.getElementById('vault-resource-search')?.value || '').toLowerCase();
    const sub = document.getElementById('vault-subject-filter')?.value || 'all';

    const filtered = this.resources.filter(r => {
      const matchQ = r.title.toLowerCase().includes(q) || r.subject.toLowerCase().includes(q);
      const matchSub = sub === 'all' || r.subject === sub;
      return matchQ && matchSub;
    });

    this.render(filtered);
  }

  render(list) {
    if (!this.container) return;
    this.container.innerHTML = list.map(r => `
      <div class="resource-item-card glass-panel p-3 rounded-xl flex flex-col gap-2">
        <div class="flex justify-between items-center text-xs">
          <span class="badge-mini font-mono text-cyan-400">${r.subject} &bull; Sem ${r.semester}</span>
          <span class="text-amber-400 font-mono">⭐ ${r.rating}</span>
        </div>
        <h4 class="text-white text-sm font-semibold m-0">${r.title}</h4>
        <div class="flex justify-between items-center text-xs mt-auto pt-2 border-t border-white/5">
          <span class="text-muted font-mono">${r.type}</span>
          <a href="${r.link}" target="_blank" class="text-cyan-400 font-bold hover:underline">Open &nearr;</a>
        </div>
      </div>
    `).join('');
  }
}

/* ============================================================================
   22. FEATURE 17: GITHUB INTEGRATION
   ============================================================================ */
class GitHubManager {
  constructor() {
    this.usernameInput = document.getElementById('github-username-input');
    this.syncBtn = document.getElementById('github-sync-btn');
    this.displayArea = document.getElementById('github-profile-display');

    this.init();
  }

  init() {
    const saved = localStorage.getItem(STORAGE_KEYS.GITHUB_USER);
    if (saved) {
      if (this.usernameInput) this.usernameInput.value = saved;
      this.fetchGitHubData(saved);
    }

    if (this.syncBtn && this.usernameInput) {
      this.syncBtn.addEventListener('click', () => {
        const username = this.usernameInput.value.trim();
        if (username) {
          localStorage.setItem(STORAGE_KEYS.GITHUB_USER, username);
          this.fetchGitHubData(username);
        }
      });
    }
  }

  async fetchGitHubData(username) {
    try {
      ToastManager.show(`🐙 Querying GitHub public API for @${username}...`, 'info');
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`).then(r => r.json()),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`).then(r => r.json())
      ]);

      if (userRes && userRes.login && this.displayArea) {
        this.displayArea.style.display = 'block';
        this.displayArea.innerHTML = `
          <div class="github-profile-card glass-panel p-4 rounded-xl mt-3">
            <div class="flex items-center gap-3 mb-3">
              <img src="${userRes.avatar_url}" class="w-12 h-12 rounded-full border border-cyan-400">
              <div>
                <h4 class="text-white font-arcade m-0">${userRes.name || userRes.login}</h4>
                <span class="text-xs text-muted font-mono">@${userRes.login} &bull; ${userRes.public_repos} Public Repositories</span>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-2 my-2 text-xs font-mono">
              ${(Array.isArray(reposRes) ? reposRes : []).slice(0, 6).map(repo => `
                <div class="p-2 bg-white/5 rounded border border-white/5">
                  <a href="${repo.html_url}" target="_blank" class="text-cyan-400 font-bold block truncate">${repo.name}</a>
                  <span class="text-muted">${repo.language || 'Code'} &bull; ⭐ ${repo.stargazers_count}</span>
                </div>
              `).join('')}
            </div>
            <div class="mt-3 pt-2 border-t border-white/5 flex justify-between items-center text-xs">
              <span class="text-amber-400 font-mono">⚡ Project Challenge: Push 5 commits this week</span>
              <button class="glow-action-btn btn-primary-grind btn-compact" onclick="window.unifiedQuestEngine.addQuest('GitHub Project Commit Sprint', 'normal', 100, 'github')">
                Enlist Project Quest (+100 XP)
              </button>
            </div>
          </div>
        `;
        ToastManager.show(`✅ GitHub Synced: ${userRes.public_repos} repos found!`, 'success');
      }
    } catch (e) {
      console.warn('GitHub API offline or rate-limited. Running graceful display.');
    }
  }
}

/* ============================================================================
   23. FEATURE 19: "WHAT SHOULD I DO NOW?" HERO ACTION ENGINE
   ============================================================================ */
class WhatToDoNowManager {
  constructor(playerManager) {
    this.pm = playerManager;
    this.freeTimeEl = document.getElementById('free-time-indicator');
    this.subtextEl = document.getElementById('what-to-do-subtext');
    this.breakdownEl = document.getElementById('smart-plan-breakdown');
    this.potentialXPEl = document.getElementById('smart-plan-potential-xp');
    this.startBtn = document.getElementById('start-smart-session-btn');

    this.init();
  }

  init() {
    this.render();
    if (this.startBtn) {
      this.startBtn.addEventListener('click', () => {
        soundFX.playClick();
        if (window.FocusModeInstance) {
          window.FocusModeInstance.bindQuestAndStart('asg-1-quest');
          ToastManager.show('⚡ Engaging Focus Session: DBMS Assignment 3!', 'success');
        }
      });
    }
  }

  render() {
    if (!this.breakdownEl) return;
    const planItems = [
      { icon: '🔴', title: 'DBMS Assignment 3 (ER Diagrams)', mins: '25 min', xp: '+100 XP', urgent: true },
      { icon: '🟡', title: '2 DSA Binary Search Challenges', mins: '20 min', xp: '+50 XP', urgent: false },
      { icon: '🟢', title: "Tomorrow's Lecture Review (CN)", mins: '2 min', xp: '+25 XP', urgent: false }
    ];

    this.breakdownEl.innerHTML = planItems.map(item => `
      <div class="smart-plan-step">
        <span class="step-title">${item.icon} ${item.title}</span>
        <span class="step-meta">${item.mins} &bull; ${item.xp}</span>
      </div>
    `).join('');

    if (this.potentialXPEl) this.potentialXPEl.textContent = '+175 XP POTENTIAL';
  }
}

/* ============================================================================
   24. FEATURE 21: ADVANCED PERSONAL ANALYTICS & SVG CHARTS
   ============================================================================ */
class AnalyticsManager {
  constructor(playerManager) {
    this.pm = playerManager;
    this.xpChartEl = document.getElementById('analytics-xp-chart');
    this.catChartEl = document.getElementById('analytics-category-chart');
    this.focusChartEl = document.getElementById('analytics-focus-chart');
    this.skillsChartEl = document.getElementById('analytics-skills-chart');

    this.init();
  }

  init() {
    this.render();
  }

  render() {
    if (this.xpChartEl) {
      this.xpChartEl.innerHTML = `
        <svg viewBox="0 0 400 120" class="w-full h-full">
          <polyline fill="none" stroke="#00d2ff" stroke-width="3" points="20,100 80,75 140,85 200,45 260,60 320,30 380,15" />
          <circle cx="380" cy="15" r="5" fill="#00d2ff" />
          <text x="20" y="115" fill="#64748b" font-size="10" font-family="monospace">Mon</text>
          <text x="140" y="115" fill="#64748b" font-size="10" font-family="monospace">Wed</text>
          <text x="260" y="115" fill="#64748b" font-size="10" font-family="monospace">Fri</text>
          <text x="360" y="115" fill="#64748b" font-size="10" font-family="monospace">Today</text>
        </svg>
      `;
    }

    if (this.catChartEl) {
      this.catChartEl.innerHTML = `
        <div class="space-y-2 text-xs font-mono">
          <div class="flex justify-between"><span>📚 Academics</span><strong>45%</strong></div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-cyan-400 h-2 rounded" style="width: 45%"></div></div>
          <div class="flex justify-between"><span>💻 Coding & DSA</span><strong>35%</strong></div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-purple-500 h-2 rounded" style="width: 35%"></div></div>
          <div class="flex justify-between"><span>🚀 Hackathons</span><strong>20%</strong></div>
          <div class="w-full bg-white/5 h-2 rounded"><div class="bg-amber-400 h-2 rounded" style="width: 20%"></div></div>
        </div>
      `;
    }

    if (this.focusChartEl) {
      this.focusChartEl.innerHTML = `
        <div class="flex justify-around items-end h-24 pt-4 text-xs font-mono">
          <div class="text-center"><div class="bg-cyan-400/60 w-6 h-12 rounded-t mx-auto"></div><span>Mon</span></div>
          <div class="text-center"><div class="bg-cyan-400/80 w-6 h-18 rounded-t mx-auto"></div><span>Wed</span></div>
          <div class="text-center"><div class="bg-cyan-400 w-6 h-20 rounded-t mx-auto"></div><span>Fri</span></div>
          <div class="text-center"><div class="bg-emerald-400 w-6 h-24 rounded-t mx-auto"></div><span>Today</span></div>
        </div>
      `;
    }

    if (this.skillsChartEl) {
      this.skillsChartEl.innerHTML = `
        <div class="text-xs font-mono space-y-1">
          <p>⚡ C++ / Algorithms: <strong>85% (Proficient)</strong></p>
          <p>🤖 AI / ML Modeling: <strong>60% (Intermediate)</strong></p>
          <p>🛡️ Cybersecurity: <strong>40% (Foundation)</strong></p>
          <p>🌐 Full Stack Architecture: <strong>75% (Advanced)</strong></p>
        </div>
      `;
    }
  }
}

/* ============================================================================
   25. FEATURE 22: SMART REMINDERS & NOTIFICATION CENTER
   ============================================================================ */
class SmartRemindersManager {
  constructor() {
    this.bellBtn = document.getElementById('reminders-bell-btn');
    this.badgeCount = document.getElementById('reminders-badge-count');
    this.dropdownEl = document.getElementById('reminders-dropdown');
    this.listEl = document.getElementById('reminders-dropdown-list');
    this.clearBtn = document.getElementById('clear-reminders-btn');

    this.reminders = [
      { id: 'rem-1', text: 'DBMS Assignment 3 is due in 24 hours!', urgent: true, time: 'Tomorrow 11:59 PM' },
      { id: 'rem-2', text: 'Operating Systems Mid-Term in 10 days (Hall 304)', urgent: false, time: 'Oct 12' },
      { id: 'rem-3', text: 'Attendance Alert: Computer Networks is at 71%', urgent: true, time: 'Next Lecture' }
    ];

    this.init();
  }

  init() {
    window.RemindersInstance = this;

    if (this.bellBtn && this.dropdownEl) {
      this.bellBtn.addEventListener('click', () => {
        soundFX.playClick();
        const hidden = this.dropdownEl.style.display === 'none';
        this.dropdownEl.style.display = hidden ? 'flex' : 'none';
      });
    }

    if (this.clearBtn) {
      this.clearBtn.addEventListener('click', () => {
        this.reminders = [];
        this.render();
      });
    }

    this.render();
  }

  addReminder(text, time = 'Upcoming', priority = 'Normal') {
    this.reminders.unshift({
      id: `rem-${Date.now()}`,
      text,
      time,
      urgent: priority.toLowerCase() === 'urgent' || priority.toLowerCase() === 'high'
    });
    this.render();
  }

  render() {
    if (this.badgeCount) {
      if (this.reminders.length > 0) {
        this.badgeCount.textContent = this.reminders.length;
        this.badgeCount.style.display = 'block';
      } else {
        this.badgeCount.style.display = 'none';
      }
    }

    if (this.listEl) {
      this.listEl.innerHTML = this.reminders.map((r, i) => `
        <div class="reminder-item ${r.urgent ? 'urgent' : ''}">
          <div class="flex justify-between items-start">
            <strong>${r.text}</strong>
            <button class="text-xs text-muted hover:text-white" onclick="window.RemindersInstance.dismiss(${i})">&times;</button>
          </div>
          <span class="text-xs text-muted font-mono">${r.time}</span>
        </div>
      `).join('') || '<div class="empty-state text-xs text-muted">No pending reminders. All clear!</div>';
    }
  }

  dismiss(idx) {
    this.reminders.splice(idx, 1);
    this.render();
  }
}

/* ============================================================================
   26. QUESTLOG ACADEMY ORCHESTRATOR & SUB-PAGES
   ============================================================================ */
class QuestLogAcademy {
  constructor(playerManager) {
    this.pm = playerManager;
    this.leaderDomain = 'overall';
    this.tests = StorageManager.get(STORAGE_KEYS.TESTS, [
      { id: 1, user: 'NovaKnight', subject: 'programming', score: 94, at: Date.now() - 86400000 * 2 }
    ]);
    this.activities = StorageManager.get(STORAGE_KEYS.ACTIVITIES, [
      { id: 1, name: 'HackAIT Regional Hackathon', type: 'hackathon', result: 'won', xp: 400, at: Date.now() - 86400000 * 3 }
    ]);

    this.init();
  }

  init() {
    window.QuestLogAcademyInstance = this;

    // Nav-tab click handling
    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        this.showPage(btn.dataset.page);
      });
    });

    // Leaderboard Tabs
    document.querySelectorAll('.leader-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.leader-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.leaderDomain = btn.dataset.domain;
        this.renderLeaderboard();
      });
    });

    // Sunday Test Submit
    const testSubmitBtn = document.getElementById('submit-test-btn');
    if (testSubmitBtn) {
      testSubmitBtn.addEventListener('click', () => this.submitTest());
    }

    // Export Portfolio PDF
    const exportBtn = document.getElementById('export-portfolio-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Campus World Teleports
    document.querySelectorAll('.campus-zone-card').forEach(card => {
      card.addEventListener('click', () => {
        soundFX.playClick();
        this.showPage(card.dataset.teleport);
      });
    });

    this.renderPortfolio();
    this.renderLeaderboard();
  }

  showPage(page) {
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.toggle('active', b.dataset.page === page));
    document.querySelectorAll('.page-section').forEach(s => {
      if (page === 'dashboard') {
        s.hidden = !s.classList.contains('page-dashboard');
      } else {
        s.hidden = s.id !== `page-${page}`;
      }
    });

    if (page === 'portfolio') this.renderPortfolio();
    if (page === 'leaderboard') this.renderLeaderboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  submitTest() {
    const sub = document.getElementById('test-subject').value;
    const score = Number(document.getElementById('test-score').value);
    if (!Number.isFinite(score) || score < 0 || score > 100) {
      alert('Enter a valid score from 0 to 100.');
      return;
    }

    this.tests.unshift({ id: Date.now(), user: StorageManager.getAuthUser() || 'Operator', subject: sub, score, at: Date.now() });
    StorageManager.set(STORAGE_KEYS.TESTS, this.tests);

    this.pm.addXP(Math.round(score * 2));
    soundFX.playReward();
    confettiEngine.burst(score >= 90 ? 120 : 60);
    ToastManager.show(`🏁 Sunday Test Recorded: ${score}/100 in ${sub}! (+${score * 2} XP awarded)`, 'success');

    document.getElementById('test-score').value = '';
    this.renderLeaderboard();
  }

  renderLeaderboard() {
    const el = document.getElementById('leaderboard-table');
    if (!el) return;

    const currentTag = StorageManager.getAuthUser() || 'Operator';
    const rows = [
      { name: 'NovaKnight', xp: 4200, score: 94 },
      { name: 'CodeRaptor', xp: 3650, score: 88 },
      { name: 'OrbitMage', xp: 3180, score: 82 },
      { name: currentTag, xp: this.pm.state.totalXPEarned, score: 90 },
      { name: 'ByteSamurai', xp: 2890, score: 79 }
    ].sort((a, b) => b.xp - a.xp);

    el.innerHTML = `
      <div class="leader-head flex justify-between p-3 border-b border-white/10 text-xs font-mono text-muted">
        <span>RANK</span><span>OPERATOR</span><span>XP RATING</span>
      </div>
      ${rows.map((r, i) => `
        <div class="leader-row flex justify-between p-3 border-b border-white/5 text-sm ${r.name === currentTag ? 'bg-cyan-500/10 border-cyan-400/30' : ''}">
          <strong class="font-mono text-muted">${i + 1}</strong>
          <span>⚔️ ${r.name} ${r.name === currentTag ? '<em class="text-cyan-400">(YOU)</em>' : ''}</span>
          <strong class="font-mono text-cyan-400">${r.xp} XP</strong>
        </div>
      `).join('')}
    `;
  }

  renderPortfolio() {
    const nameEl = document.getElementById('portfolio-name');
    const xpEl = document.getElementById('portfolio-xp');
    const rankEl = document.getElementById('portfolio-rank');
    const statsEl = document.getElementById('portfolio-stats');
    const badgesEl = document.getElementById('badges-grid');
    const timelineEl = document.getElementById('portfolio-timeline');

    const user = StorageManager.getAuthUser() || 'Operator';
    const p = this.pm.state;
    const rank = this.pm.getRankData(p.level);

    if (nameEl) nameEl.textContent = user.toUpperCase();
    if (xpEl) xpEl.textContent = p.totalXPEarned;
    if (rankEl) rankEl.textContent = rank.title;

    if (statsEl) {
      statsEl.innerHTML = [
        ['Level', p.level],
        ['Quests Cleared', p.questsClearedCount],
        ['Focus Time', `${p.focusMinutes}m`],
        ['Streak Record', `${p.streakDays}d`]
      ].map(([label, val]) => `
        <div class="stat-mini glass-panel"><span>${label}</span><strong>${val}</strong></div>
      `).join('');
    }

    if (badgesEl) {
      const badges = [
        ['⚔️', 'First Bounty', 'Cleared 1st quest', p.questsClearedCount >= 1],
        ['🔥', '7-Day Flame', 'Maintained 7d streak', p.streakDays >= 7],
        ['💻', '100 DSA Problems', 'Algorithm Master', true],
        ['🚀', 'Hackathon Warrior', 'Attended national event', true],
        ['⭐', 'Ascended Level 5', 'Reach Level 5', p.level >= 5],
        ['👑', 'Grandmaster', 'Top 1% ranked', p.level >= 10]
      ];

      badgesEl.innerHTML = badges.map(b => `
        <div class="badge-card glass-panel ${b[3] ? 'unlocked' : 'locked'}">
          <div class="text-2xl">${b[0]}</div>
          <strong>${b[1]}</strong>
          <span class="text-xs text-muted">${b[2]}</span>
          <small class="font-mono ${b[3] ? 'text-emerald-400' : 'text-gray-500'}">${b[3] ? 'UNLOCKED' : 'LOCKED'}</small>
        </div>
      `).join('');
    }

    if (timelineEl) {
      timelineEl.innerHTML = this.activities.map(a => `
        <div class="timeline-item p-2 border-l-2 border-cyan-400 pl-3 mb-2 text-xs">
          <strong>${a.name}</strong>
          <span class="text-muted block font-mono">+${a.xp} XP &bull; ${new Date(a.at).toLocaleDateString()}</span>
        </div>
      `).join('') || '<div class="empty-state text-xs text-muted">Achievements will record automatically.</div>';
    }
  }

  addXP(amount, source) {
    if (amount > 0) this.pm.addXP(amount);
    this.activities.unshift({ id: Date.now(), name: source, xp: amount, at: Date.now() });
    StorageManager.set(STORAGE_KEYS.ACTIVITIES, this.activities);
    this.renderPortfolio();
  }
}

/* ============================================================================
   27. APPLICATION INITIALIZATION & SYSTEM BOOTSTRAPPER
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 [QuestLog OS] Initializing unified student operating system...');

  // 1. Theme Manager
  new ThemeManager();

  // 2. Player Progression Manager
  const playerManager = new PlayerManager();

  // 3. 3D WebGL Character Studio
  const characterEngine = new Character3DEngine('character-3d-canvas', playerManager);

  // 4. Unified Quest Engine
  const questEngine = new UnifiedQuestEngine(playerManager);

  // 5. XP Shop
  new XPShopManager(playerManager, characterEngine);

  // 6. Pulse (WhatsApp Communication AI)
  new PulseManager();

  // 7. College Brain Search
  new CollegeBrainSearch();

  // 8. Career Skill Tree
  new CareerSkillTree();

  // 9. Smart Calendar
  new SmartCalendarManager();

  // 10. Focus Mode Arena
  new FocusModeManager(playerManager);

  // 11. Team Finder & Study Groups
  new CommunityManager();

  // 12. Resource Vault
  new ResourceVaultManager();

  // 13. GitHub Integration
  new GitHubManager();

  // 14. "What Should I Do Now?" Hero Action Engine
  new WhatToDoNowManager(playerManager);

  // 15. Personal Recommendations ("For You")
  new RecommendationsManager(playerManager);

  // 16. QuestLog AI Assistant
  new QuestLogAIManager(playerManager);

  // 17. Advanced Analytics
  new AnalyticsManager(playerManager);

  // 18. Smart Reminders
  new SmartRemindersManager();

  // 19. Academy Orchestrator & Portfolio
  new QuestLogAcademy(playerManager);

  // 20. Admin Controller
  AdminApp = new AdminController();
  window.AdminApp = AdminApp;

  // 21. Authentication Manager (Student & Real Admin)
  new AuthManager(
    (studentUser) => {
      console.log('✅ Student logged in:', studentUser);
      playerManager.updateUI();
    },
    () => {
      console.log('👑 Admin logged in: Manish');
      AdminApp.loadAllData();
      AdminApp.switchView('dashboard');
    }
  );

  console.log('🌟 [QuestLog OS] All 25 features successfully booted and connected.');
});
