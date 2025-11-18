const LANG = {
    en: {
        reroll: "Refresh",
        battleStart: "BATTLE",
        battleFighting: "FIGHTING...",
        battleNext: "NEXT ROUND",
        victory: "VICTORY",
        defeat: "DEFEAT",
        gameOver: "GAME OVER",
        emptyBench: "Bench Full!",
        loginTitle: "Welcome Commander",
        loginDesc: "Enter your ID to sync data",
        rankTitle: "Local Rankings",
        units: {
            'saber': { name: 'Knight' },
            'archer': { name: 'Ranger' },
            'mage': { name: 'Witch' },
            'ninja': { name: 'Ninja' },
            'tank': { name: 'Mecha' }
        },
        synergies: {
            'Isekai': { name: "Isekai", desc: "Allies +25% ATK" },
            'Cyber': { name: "Cyber", desc: "Allies +35% Speed" },
            'Magic': { name: "Arcane", desc: "Skill DMG +40%" },
            'School': { name: "Academy", desc: "Ranger Crit +15%" },
            'Guardian': { name: "Guardian", desc: "Shield +300" },
            'Warrior': { name: "Warrior", desc: ""},
            'Ranger': { name: "Ranger", desc: ""},
            'Mage': { name: "Mage", desc: ""},
            'Assassin': { name: "Assassin", desc: ""}
        },
        shopHide: "▼ Hide Shop",
        shopOpen: "▲ Open Shop",guideTitle: "Commander's Manual",
        guideContent: `
<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
    <a href="https://github.com/t0saki/Auto-Battler" target="_blank" style="color: #0a84ff; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">🔗</span> View Project on GitHub
    </a>
    <div style="font-size: 12px; color: #666; margin-top: 5px;">t0saki/Auto-Battler</div>
</div>

<h3 style="color:#ff9f43; margin-top:0;">⚔️ Quick Start (TL;DR)</h3>
<ul style="padding-left:20px; margin-bottom:20px;">
    <li><strong>Goal:</strong> Defeat enemies each round. Don't let HP hit 0.</li>
    <li><strong>Controls:</strong> Drag units to the <strong>bottom half</strong> area. Click "BATTLE".</li>
    <li><strong>Economy:</strong> Gain <strong>+5 Gold</strong> per round. Reroll costs <strong>2 Gold</strong>.</li>
    <li><strong>Key to Win:</strong> Collect units with same icons to trigger <strong>Synergies</strong>.</li>
    <li><strong>Tactic:</strong> Tanks in front, DPS (Archers/Mages) in the back.</li>
</ul>

<hr style="border-color:rgba(255,255,255,0.1); margin: 20px 0;">

<h3 style="color:#00d2d3; margin-top:0;">📖 Complete Commander Manual</h3>

<h4 style="color:#fff; margin:15px 0 5px;">1. Resources</h4>
<p><strong>❤️ HP:</strong> Start with 100. Lose 10 HP on defeat.<br>
<strong>💰 Gold:</strong> Start with 12. Don't reroll too much early on! Save gold for high-cost units (like Witch).</p>

<h4 style="color:#fff; margin:15px 0 5px;">2. Unit Guide</h4>
<ul style="padding-left:20px; margin:0;">
    <li>🛡️ <strong>Mecha ($1):</strong> Highest HP. Best frontline tank.</li>
    <li>⚔️ <strong>Knight ($1):</strong> Balanced warrior.</li>
    <li>🏹 <strong>Ranger ($2):</strong> Longest range, high crit damage.</li>
    <li>🥷 <strong>Ninja ($2):</strong> Fastest attack speed.</li>
    <li>🔮 <strong>Witch ($3):</strong> Highest skill damage, but slow speed.</li>
</ul>

<h4 style="color:#fff; margin:15px 0 5px;">3. Synergy System</h4>
<p>Deploy units of the same type to get global buffs:</p>
<ul style="padding-left:20px; margin:0;">
    <li><strong style="color:#00d2d3">🔵 Cyber (2):</strong> Allies +35% ATK Speed (Highly Recommended)</li>
    <li><strong style="color:#a29bfe">🟢 Isekai (2):</strong> Allies +25% Attack Dmg</li>
    <li><strong style="color:#ff9f43">🛡️ Guardian (2):</strong> Start with +300 Shield (Great for early game)</li>
    <li><strong style="color:#ff6b6b">🔴 Academy (1):</strong> Rangers get Crit Rate bonus</li>
    <li><strong style="color:#fd79a8">🟣 Arcane (2):</strong> Skill DMG +40%</li>
</ul>

<h4 style="color:#fff; margin:15px 0 5px;">4. Strategy Tips</h4>
<p><strong>Early Game (Round 1-3):</strong> Buy 'Mecha' to tank. 'Ranger' is great value alone.<br>
<strong>Mid Game (Round 4-6):</strong> Try to build 'Cyber' (2) synergy. The speed boost is massive.<br>
<strong>Positioning:</strong> Protect your Rangers/Witches in the corner, surrounded by Tanks.</p>
`,
    },
    zh: {
        reroll: "刷新商店",
        battleStart: "开始战斗",
        battleFighting: "战斗中...",
        battleNext: "下一回合",
        victory: "战斗胜利",
        defeat: "战斗失败",
        gameOver: "游戏结束",
        emptyBench: "备战区已满！",
        loginTitle: "欢迎指挥官",
        loginDesc: "登记你的代号",
        rankTitle: "本地排行榜",
        units: {
            'saber': { name: '骑士姬' },
            'archer': { name: '弓道部' },
            'mage': { name: '魔女' },
            'ninja': { name: '赛博忍' },
            'tank': { name: '重装机' }
        },
        synergies: {
            'Isekai': { name: "异世界", desc: "全员攻击 +25%" },
            'Cyber': { name: "赛博", desc: "全员攻速 +35%" },
            'Magic': { name: "奥术", desc: "技能伤害 +40%" },
            'School': { name: "学院", desc: "射手暴击 +15%" },
            'Guardian': { name: "守护者", desc: "获得护盾 +300" },
            'Warrior': { name: "战士", desc: ""},
            'Ranger': { name: "射手", desc: ""},
            'Mage': { name: "法师", desc: ""},
            'Assassin': { name: "刺客", desc: ""}
        },
        shopHide: "▼ 隐藏商店",
        shopOpen: "▲ 展开商店",guideTitle: "作战指南",
        guideContent: `
<div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); text-align: center;">
    <a href="https://github.com/t0saki/Auto-Battler" target="_blank" style="color: #0a84ff; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
        <span style="font-size: 20px;">🔗</span> 访问 GitHub 项目主页
    </a>
    <div style="font-size: 12px; color: #666; margin-top: 5px;">t0saki/Auto-Battler</div>
</div>

<h3 style="color:#ff9f43; margin-top:0;">⚔️ 简略指南 (太长不看版)</h3>
<ul style="padding-left:20px; margin-bottom:20px;">
    <li><strong>核心目标：</strong> 保持血量不归零，击败每一波敌人。</li>
    <li><strong>基本操作：</strong> 将棋子拖拽到<strong>下半区</strong>布阵，点击"开始战斗"。</li>
    <li><strong>经济系统：</strong> 每回合固定 <strong>+5 金币</strong>。刷新商店消耗 <strong>2 金币</strong>。</li>
    <li><strong>获胜秘诀：</strong> 凑齐相同种族的棋子触发<strong>羁绊BUFF</strong>。</li>
    <li><strong>排兵布阵：</strong> 坦克放前排抗伤，射手/法师放后排输出。</li>
</ul>

<hr style="border-color:rgba(255,255,255,0.1); margin: 20px 0;">

<h3 style="color:#00d2d3; margin-top:0;">📖 完整游戏手册</h3>

<h4 style="color:#fff; margin:15px 0 5px;">1. 资源管理</h4>
<p><strong>❤️ 生命值：</strong> 初始100。战斗失败扣10血。归零游戏结束。<br>
<strong>💰 金币：</strong> 初始12。不要在前期疯狂刷新(Reroll)，存钱买高费卡（如魔女）是关键。</p>

<h4 style="color:#fff; margin:15px 0 5px;">2. 棋子图鉴</h4>
<ul style="padding-left:20px; margin:0;">
    <li>🛡️ <strong>重装机 ($1):</strong> 血量最高，前排肉盾首选。</li>
    <li>⚔️ <strong>骑士姬 ($1):</strong> 均衡型战士。</li>
    <li>🏹 <strong>弓道部 ($2):</strong> 射程最远，高暴击输出。</li>
    <li>🥷 <strong>赛博忍 ($2):</strong> 攻速最快，近战爆发。</li>
    <li>🔮 <strong>魔女 ($3):</strong> 技能伤害最高，但攻速慢。</li>
</ul>

<h4 style="color:#fff; margin:15px 0 5px;">3. 羁绊系统 (Synergies)</h4>
<p>凑齐特定数量的同类棋子可获得全局增益：</p>
<ul style="padding-left:20px; margin:0;">
    <li><strong style="color:#00d2d3">🔵 赛博 (2人):</strong> 全员攻速 +35% (强力推荐)</li>
    <li><strong style="color:#a29bfe">🟢 异世界 (2人):</strong> 全员攻击 +25%</li>
    <li><strong style="color:#ff9f43">🛡️ 守护者 (2人):</strong> 开局获得 +300 护盾 (前期神技)</li>
    <li><strong style="color:#ff6b6b">🔴 学院 (1人):</strong> 射手获得暴击加成</li>
    <li><strong style="color:#fd79a8">🟣 奥术 (2人):</strong> 技能伤害 +40%</li>
</ul>

<h4 style="color:#fff; margin:15px 0 5px;">4. 进阶策略</h4>
<p><strong>前期 (1-3回合):</strong> 优先找【重装机】抗伤。单挂一个【弓道部】性价比极高。<br>
<strong>中期 (4-6回合):</strong> 尝试凑出【2赛博】羁绊，高攻速能让你的队伍产生质变。<br>
<strong>站位:</strong> 采用九宫格包围站位，把脆皮输出放在角落，防止被切。</p>
`,
    }
};

const GRID_W = 10;
const GRID_H = 6;
const LOGICAL_WIDTH = 1280; 
const LOGICAL_HEIGHT = 720;
const TILE_SIZE = LOGICAL_HEIGHT / (GRID_H + 2); 

const ASSET_SOURCES = {
    'saber': 'assets/units/knight.png',
    'archer': 'assets/units/ranger.png',
    'mage': 'assets/units/witch.png',
    'ninja': 'assets/units/ninja.png',
    'tank': 'assets/units/mecha.png'
};

const UNIT_STATS = {
    'saber':  { cost: 1, hp: 700, dmg: 60, range: 1, speed: 1.1, origin: 'Isekai', class: 'Warrior' },
    'archer': { cost: 2, hp: 500, dmg: 85, range: 4, speed: 0.85, origin: 'School', class: 'Ranger' },
    'mage':   { cost: 3, hp: 400, dmg: 130, range: 3, speed: 0.65, origin: 'Magic', class: 'Mage' },
    'ninja':  { cost: 2, hp: 550, dmg: 95, range: 1, speed: 1.5, origin: 'Cyber', class: 'Assassin' },
    'tank':   { cost: 1, hp: 1000, dmg: 35, range: 1, speed: 0.7, origin: 'Cyber', class: 'Guardian' }
};

const SYN_RULES = {
    'Isekai': { req: 2 }, 'Cyber': { req: 2 }, 'Magic': { req: 2 },
    'School': { req: 1 }, 'Guardian': { req: 2 }
};

const TEXTURES = {};
function loadAssets(cb) {
    let loaded = 0;
    const keys = Object.keys(ASSET_SOURCES);
    if(keys.length === 0) return cb();
    keys.forEach(k => {
        const img = new Image();
        img.src = ASSET_SOURCES[k];
        img.onload = () => { if(++loaded >= keys.length) cb(); };
        img.onerror = () => { if(++loaded >= keys.length) cb(); }; 
        TEXTURES[k] = img;
    });
}

class Unit {
    constructor(type, team, r, c) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.type = type;
        this.team = team; 
        this.r = r; this.c = c;
        
        this.pixelX = this.getGridX(c);
        this.pixelY = this.getGridY(r);
        this.targetX = this.pixelX;
        this.targetY = this.pixelY;
        
        const data = UNIT_STATS[type];
        this.maxHp = data.hp; this.hp = data.hp;
        this.dmg = data.dmg; this.range = data.range;
        this.as = data.speed;
        this.origin = data.origin; this.class = data.class;
        
        this.mana = 0; this.maxMana = 100;
        this.lastAtk = 0;
        this.isDead = false;
        this.scale = 1;
        this.animOffset = Math.random() * 100;
    }

    getGridX(c) {
        const boardWidth = GRID_W * TILE_SIZE;
        const startX = (LOGICAL_WIDTH - boardWidth) / 2;
        return startX + c * TILE_SIZE + TILE_SIZE/2;
    }

    getGridY(r) {
        const boardHeight = GRID_H * TILE_SIZE;
        const startY = (LOGICAL_HEIGHT - boardHeight) / 2;
        return startY + r * TILE_SIZE + TILE_SIZE/2;
    }

    snap() {
        const boardWidth = GRID_W * TILE_SIZE;
        const boardHeight = GRID_H * TILE_SIZE;
        const startX = (LOGICAL_WIDTH - boardWidth) / 2;
        const startY = (LOGICAL_HEIGHT - boardHeight) / 2;

        let c = Math.floor((this.pixelX - startX) / TILE_SIZE);
        let r = Math.floor((this.pixelY - startY) / TILE_SIZE);

        if (c < 0) c = 0; if (c >= GRID_W) c = GRID_W - 1;
        if (r < 0) r = 0; if (r >= GRID_H) r = GRID_H - 1;

        if (this.team === 0) {
            if (r < 3) r = 3;
        }

        this.c = c; this.r = r;
        this.targetX = this.getGridX(c);
        this.targetY = this.getGridY(r);
    }

    // --- FIX: Only snap to grid if in PLANNING state ---
    update(dt, state) {
        if (state === 'PLANNING' && !this.isDragging) {
            this.pixelX += (this.targetX - this.pixelX) * 10 * dt;
            this.pixelY += (this.targetY - this.pixelY) * 10 * dt;
        }
        // Animation always runs
        if (!this.isDead) {
            this.breathing = Math.sin((Date.now() / 500) + this.animOffset) * 0.03;
        }
    }

    draw(ctx) {
        if (this.isDead) return;
        const size = TILE_SIZE * 0.9;
        const cx = this.pixelX;
        const cy = this.pixelY + (this.breathing || 0) * 10;

        ctx.save();
        ctx.translate(cx, cy);
        
        const dir = this.team === 1 ? -1 : 1;
        const s = (this.scale + (this.breathing||0)) * (this.team === 1 ? -1 : 1);
        ctx.scale(Math.abs(s) * dir, Math.abs(s)); 

        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.beginPath();
        ctx.ellipse(0, size/2 - 5, size/3, size/8, 0, 0, Math.PI*2);
        ctx.fill();

        // Image
        const img = TEXTURES[this.type];
        if (img) {
            ctx.drawImage(img, -size/2, -size/2, size, size);
        } else {
            ctx.fillStyle = this.team===0 ? '#4cd137' : '#e84118';
            ctx.beginPath(); ctx.arc(0,0, size/3, 0, Math.PI*2); ctx.fill();
        }
        ctx.restore();

        // Bars
        const barW = size * 0.8;
        const barY = cy - size/2 - 10;
        
        ctx.fillStyle = '#2d3436';
        ctx.beginPath(); ctx.roundRect(cx - barW/2, barY, barW, 8, 4); ctx.fill();
        
        const hpPct = this.hp / this.maxHp;
        ctx.fillStyle = this.team === 0 ? '#30d158' : '#ff453a';
        ctx.beginPath(); ctx.roundRect(cx - barW/2, barY, barW * hpPct, 8, 4); ctx.fill();

        if (this.mana > 0) {
            ctx.fillStyle = '#0a84ff';
            ctx.beginPath(); ctx.roundRect(cx - barW/2, barY + 10, barW * (this.mana/this.maxMana), 4, 2); ctx.fill();
        }
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');

        const browserLang = navigator.language || navigator.userLanguage; 
        this.lang = browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
        
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());

        this.units = [];
        this.gold = 12;
        this.hp = 100;
        this.round = 1;
        this.state = 'PLANNING';
        this.dragging = null;
        this.bindInput();
    this.initShopToggle();
    }

    handleResize() {
        const wrapper = document.getElementById('canvas-wrapper');
        const rect = wrapper.getBoundingClientRect();
        const aspect = LOGICAL_WIDTH / LOGICAL_HEIGHT;
        let finalW = rect.width;
        let finalH = rect.width / aspect;

        if (finalH > rect.height) {
            finalH = rect.height;
            finalW = finalH * aspect;
        }

        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = LOGICAL_WIDTH * dpr;
        this.canvas.height = LOGICAL_HEIGHT * dpr;
        this.canvas.style.width = `${finalW}px`;
        this.canvas.style.height = `${finalH}px`;
        this.ctx.scale(dpr, dpr);
    }

    init() {
        document.getElementById('loading').style.display = 'none';
        this.checkLogin();
        this.spawnEnemy();
        
        try {
            this.refreshShop();
            this.checkSynergies();
        } catch(e) {
            console.error("Init error:", e);
        }
        
        this.renderLoop();
    }

    bindInput() {
        const startDrag = (x, y) => {
            if (this.state !== 'PLANNING') return;
            const rect = this.canvas.getBoundingClientRect();
            const logicalX = (x - rect.left) * (LOGICAL_WIDTH / rect.width);
            const logicalY = (y - rect.top) * (LOGICAL_HEIGHT / rect.height);

            // 记录拖拽前的原始位置，用于回弹
            for (let u of this.units) {
                if (u.team === 0 && Math.hypot(logicalX - u.pixelX, logicalY - u.pixelY) < TILE_SIZE/2) {
                    this.dragging = u;
                    u.oldR = u.r; 
                    u.oldC = u.c;
                    u.isDragging = true;
                    u.scale = 1.2;
                    return;
                }
            }
        };

        const moveDrag = (x, y) => {
            if (!this.dragging) return;
            const rect = this.canvas.getBoundingClientRect();
            this.dragging.pixelX = (x - rect.left) * (LOGICAL_WIDTH / rect.width);
            this.dragging.pixelY = (y - rect.top) * (LOGICAL_HEIGHT / rect.height);
        };

        const endDrag = () => {
            if (!this.dragging) return;
            const u = this.dragging;
            u.isDragging = false;
            u.scale = 1;
            
            // 计算目标网格
            const boardW = GRID_W * TILE_SIZE;
            const boardH = GRID_H * TILE_SIZE;
            const startX = (LOGICAL_WIDTH - boardW) / 2;
            const startY = (LOGICAL_HEIGHT - boardH) / 2;
            
            let c = Math.floor((u.pixelX - startX) / TILE_SIZE);
            let r = Math.floor((u.pixelY - startY) / TILE_SIZE);

            // 边界检查
            if (c < 0) c = 0; if (c >= GRID_W) c = GRID_W - 1;
            if (r < 3) r = 3; if (r >= GRID_H) r = GRID_H - 1; // 只能放在下半区

            // --- 碰撞检测与位置交换 ---
            const targetUnit = this.units.find(other => other !== u && other.team === 0 && other.c === c && other.r === r);
            
            if (targetUnit) {
                // 目标格子有人 -> 交换位置
                targetUnit.c = u.oldC;
                targetUnit.r = u.oldR;
                targetUnit.targetX = targetUnit.getGridX(targetUnit.c);
                targetUnit.targetY = targetUnit.getGridY(targetUnit.r);
                targetUnit.pixelX = targetUnit.targetX; // 瞬移回去或让update平滑处理
                targetUnit.pixelY = targetUnit.targetY;
                
                u.c = c; u.r = r;
            } else {
                // 没人 -> 正常放置
                u.c = c; u.r = r;
            }

            u.snap(); // 计算新的 targetX/Y
            this.dragging = null;
            this.checkSynergies();
        };

        this.canvas.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
        window.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
        window.addEventListener('mouseup', endDrag);
        this.canvas.addEventListener('touchstart', e => { e.preventDefault(); startDrag(e.touches[0].clientX, e.touches[0].clientY); }, {passive:false});
        window.addEventListener('touchmove', e => { if(this.dragging) e.preventDefault(); moveDrag(e.touches[0].clientX, e.touches[0].clientY); }, {passive:false});
        window.addEventListener('touchend', endDrag);
    }

    renderLoop() {
        const now = performance.now();
        const dt = Math.min((now - (this.lastTime || now)) / 1000, 0.1);
        this.lastTime = now;

        this.update(dt);
        this.draw();
        requestAnimationFrame(() => this.renderLoop());
    }

    update(dt) {
        // --- FIX: Pass state to unit update ---
        this.units.forEach(u => u.update(dt, this.state));
        
        if (this.state === 'FIGHTING') {
            this.combatLogic(dt);
        }
        document.getElementById('ui-hp').innerText = Math.floor(this.hp);
        document.getElementById('ui-gold').innerText = this.gold;
        document.getElementById('ui-round').innerText = this.round;
    }

combatLogic(dt) {
        const allies = this.units.filter(u => u.team===0 && !u.isDead);
        const enemies = this.units.filter(u => u.team===1 && !u.isDead);
        
        if (allies.length === 0 || enemies.length === 0) {
            this.endRound(allies.length > 0);
            return;
        }

        this.units.forEach(u => {
            if (u.isDead) return;
            let targets = u.team===0 ? enemies : allies;
            let target = null;
            let minD = Infinity;
            
            targets.forEach(t => {
                let d = Math.hypot(t.pixelX - u.pixelX, t.pixelY - u.pixelY);
                if (d < minD) { minD = d; target = t; }
            });

            if (!target) return;

            const rangePx = u.range * TILE_SIZE;
            
            // 攻击判定
            if (minD <= rangePx) {
                if (performance.now()/1000 - u.lastAtk > (1/u.as)) {
                    u.lastAtk = performance.now()/1000;
                    const isCrit = Math.random() < 0.1; 
                    const dmg = Math.floor(u.dmg * (isCrit?1.5:1));
                    target.hp -= dmg;
                    u.mana += 10;
                    this.spawnText(target.pixelX, target.pixelY, dmg, isCrit);
                    if (target.hp <= 0) { target.hp = 0; target.isDead = true; }
                }
            } else {
                // --- 移动逻辑 (含防重叠) ---
                const angle = Math.atan2(target.pixelY - u.pixelY, target.pixelX - u.pixelX);
                let vx = Math.cos(angle) * 60; 
                let vy = Math.sin(angle) * 60;

                // 施加斥力 (Separation Force)
                this.units.forEach(other => {
                    if (u === other || other.isDead) return;
                    const dx = u.pixelX - other.pixelX;
                    const dy = u.pixelY - other.pixelY;
                    const dist = Math.hypot(dx, dy);
                    const safeRadius = 55; // 角色碰撞体积半径

                    if (dist < safeRadius && dist > 0) {
                        const force = (safeRadius - dist) / safeRadius; // 距离越近斥力越大
                        const pushStrength = 300; // 斥力强度
                        vx += (dx / dist) * force * pushStrength;
                        vy += (dy / dist) * force * pushStrength;
                    }
                });

                u.pixelX += vx * dt; 
                u.pixelY += vy * dt;
            }
        });
    }

    spawnText(x, y, txt, crit) {
        const canvasRect = this.canvas.getBoundingClientRect();
        const screenX = (x / LOGICAL_WIDTH) * canvasRect.width; 
        const screenY = (y / LOGICAL_HEIGHT) * canvasRect.height;

        const el = document.createElement('div');
        el.className = 'float-text';
        el.innerText = txt;
        el.style.color = crit ? '#ffcc00' : '#fff';
        el.style.fontSize = crit ? '28px' : '18px';
        
        document.getElementById('canvas-wrapper').appendChild(el);
        el.style.left = (screenX + canvasRect.width*0.05) + 'px'; 
        el.style.top = (screenY) + 'px';
        setTimeout(() => el.remove(), 600);
    }

    draw() {
        this.ctx.clearRect(0, 0, LOGICAL_WIDTH, LOGICAL_HEIGHT);
        
        // 1. Board
        const boardW = GRID_W * TILE_SIZE;
        const boardH = GRID_H * TILE_SIZE;
        const startX = (LOGICAL_WIDTH - boardW) / 2;
        const startY = (LOGICAL_HEIGHT - boardH) / 2;

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.beginPath();
        this.ctx.roundRect(startX - 10, startY - 10, boardW + 20, boardH + 20, 15);
        this.ctx.fill();
        
        this.ctx.strokeStyle = 'rgba(255,255,255,0.05)';
        this.ctx.lineWidth = 2;

        for (let r=0; r<GRID_H; r++) {
            for (let c=0; c<GRID_W; c++) {
                const x = startX + c*TILE_SIZE;
                const y = startY + r*TILE_SIZE;
                
                if ((r+c)%2===0) this.ctx.fillStyle = 'rgba(255,255,255,0.02)';
                else this.ctx.fillStyle = 'rgba(0,0,0,0.1)';
                
                this.ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
                this.ctx.strokeRect(x, y, TILE_SIZE, TILE_SIZE);
            }
        }

        // Divider
        const midY = startY + 3 * TILE_SIZE;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, midY);
        this.ctx.lineTo(startX + boardW, midY);
        this.ctx.strokeStyle = 'rgba(255, 71, 87, 0.4)';
        this.ctx.lineWidth = 4;
        this.ctx.setLineDash([10, 10]);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // 2. Units
        const sorted = [...this.units].sort((a,b) => a.pixelY - b.pixelY);
        sorted.forEach(u => u.draw(this.ctx));
        
        // 3. Drag Hint
        if (this.dragging) {
            const dx = this.dragging.pixelX;
            const dy = this.dragging.pixelY;
            let c = Math.floor((dx - startX) / TILE_SIZE);
            let r = Math.floor((dy - startY) / TILE_SIZE);
            if (c >= 0 && c < GRID_W && r >= 3 && r < GRID_H) {
                this.ctx.fillStyle = 'rgba(10, 132, 255, 0.3)';
                this.ctx.fillRect(startX + c*TILE_SIZE, startY + r*TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    spawnEnemy() {
        const count = 2 + Math.floor(this.round * 0.5);
        const keys = Object.keys(UNIT_STATS);
        for(let i=0; i<count; i++) {
            const k = keys[Math.floor(Math.random()*keys.length)];
            const r = Math.floor(Math.random()*3);
            const c = Math.floor(Math.random()*GRID_W);
            if(!this.units.find(u=>u.team===1 && u.r===r && u.c===c)) {
                const u = new Unit(k, 1, r, c);
                this.units.push(u);
            }
        }
    }

    refreshShop(cost = false) {
        if (cost) {
            if (this.gold < 2) return;
            this.gold -= 2;
        }
        const container = document.getElementById('shop-container');
        container.innerHTML = '';
        
        const keys = Object.keys(UNIT_STATS);
        for(let i=0; i<5; i++) {
            const k = keys[Math.floor(Math.random()*keys.length)];
            const data = UNIT_STATS[k];
            
            const unitName = LANG[this.lang].units[k].name;
            const originName = LANG[this.lang].synergies[data.origin].name;
            const className = LANG[this.lang].synergies[data.class].name;

            const el = document.createElement('div');
            el.className = 'card';
            el.dataset.cost = data.cost;
            el.innerHTML = `
                <div class="c-cost">💰${data.cost}</div>
                <div class="card-img-box"><img src="${ASSET_SOURCES[k]}"></div>
                <div class="card-info">
                    <div class="c-name">${unitName}</div>
                    <div class="c-meta">${originName} / ${className}</div>
                </div>
            `;
            el.onclick = () => this.buyUnit(k, el);
            container.appendChild(el);
        }
    }

    buyUnit(type, cardElem) {
        if (this.state !== 'PLANNING') return;
        const cost = UNIT_STATS[type].cost;

        // 简单的防呆：如果你已经点过这张卡导致它隐藏了，就不能再买了
        // 防止连点器或者网络延迟造成的双重购买
        if (cardElem && cardElem.style.visibility === 'hidden') return;

        if (this.gold >= cost) {
            for (let r = 3; r < GRID_H; r++) {
                for (let c = 0; c < GRID_W; c++) {
                    if (!this.units.find(u => u.team === 0 && u.r === r && u.c === c)) {
                        this.gold -= cost;
                        const u = new Unit(type, 0, r, c);
                        this.units.push(u);
                        this.checkSynergies();

                        // [新增这里] 购买成功后，隐藏商店里的这张卡
                        if (cardElem) {
                            cardElem.style.visibility = 'hidden'; // 占位隐藏，不破坏布局
                            cardElem.style.pointerEvents = 'none'; // 禁止再次点击
                        }

                        return;
                    }
                }
            }
            alert(LANG[this.lang].emptyBench);
        }
    }

    checkSynergies() {
        const team = this.units.filter(u => u.team === 0);
        const counts = {};
        team.forEach(u => {
            const d = UNIT_STATS[u.type];
            counts[d.origin] = (counts[d.origin]||0) + 1;
            counts[d.class] = (counts[d.class]||0) + 1;
        });

        const panel = document.getElementById('synergy-float');
        panel.innerHTML = '';
        
        for (let k in counts) {
            const rule = SYN_RULES[k];
            if (!rule) continue;
            const active = counts[k] >= rule.req;
            
            const div = document.createElement('div');
            div.className = `syn-tag ${active?'active':''}`;
            const loc = LANG[this.lang].synergies[k];
            div.innerHTML = `
                <div class="syn-head"><span>${loc.name}</span> <span>${counts[k]}/${rule.req}</span></div>
                ${active ? `<div class="syn-body">${loc.desc}</div>` : ''}
            `;
            panel.appendChild(div);
        }
    }

    toggleState() {
        if (this.state === 'PLANNING') {
            this.state = 'FIGHTING';
            
            // 隐藏商店
            document.getElementById('shop-dock').classList.remove('visible');
            // 恢复棋盘大小
            document.getElementById('canvas-wrapper').classList.remove('board-shrunk');
            
            document.getElementById('txt-battle').innerText = LANG[this.lang].battleFighting;
            document.getElementById('btn-battle').style.filter = "grayscale(1)";
        }
    }

    endRound(win) {
        this.state = 'PLANNING';
        const dock = document.getElementById('shop-dock');
        
        // 显示商店
        dock.classList.remove('minimized'); // 自动展开
        dock.classList.add('visible');
        document.getElementById('shop-chevron').innerText = "▼ Hide Shop";

        // 缩小棋盘 (Smart Viewport)
        if (window.innerWidth > 850) {
            document.getElementById('canvas-wrapper').classList.add('board-shrunk');
        }
        
        if (!win) this.hp -= 10;
        if (this.hp <= 0) {
            alert(LANG[this.lang].gameOver);
            location.reload();
        }
        
        this.round++;
        this.gold += 5;
        
        // 1. 清理敌人
        this.units = this.units.filter(u => u.team === 0);

        // 2. 修复重叠 (关键修复)
        this.resolveOverlaps();

        // 3. 重置状态
        this.units.forEach(u => {
            u.hp = u.maxHp; u.mana = 0; u.isDead = false;
            u.snap(); // 根据修复后的 r,c 回正位置
        });
        
        this.spawnEnemy();
        this.refreshShop(true); 
        document.getElementById('txt-battle').innerText = LANG[this.lang].battleStart;
        document.getElementById('btn-battle').style.filter = "none";
        
        this.spawnText(LOGICAL_WIDTH/2, LOGICAL_HEIGHT/2, win ? LANG[this.lang].victory : LANG[this.lang].defeat, win);
    }

    toggleLang() {
        this.lang = this.lang === 'en' ? 'zh' : 'en';
        this.updateUI();
        this.refreshShop(); 
        this.checkSynergies();
    }
    
    updateUI() {
        const L = LANG[this.lang];
        document.getElementById('txt-reroll').innerText = L.reroll;
        document.getElementById('txt-battle').innerText = this.state==='PLANNING'? L.battleStart : L.battleFighting;
        document.getElementById('t-login-title').innerText = L.loginTitle;
        document.getElementById('t-login-desc').innerText = L.loginDesc;
        document.getElementById('t-rank-title').innerText = L.rankTitle;
        const dock = document.getElementById('shop-dock');
        const isMinimized = dock.classList.contains('minimized');
        document.getElementById('shop-chevron').innerText = isMinimized ? L.shopOpen : L.shopHide;
        document.getElementById('t-guide-title').innerText = L.guideTitle;
        document.getElementById('t-guide-content').innerHTML = L.guideContent;
    }

    checkLogin() {
        if(!localStorage.getItem('u_name')) {
            document.getElementById('login-modal').style.display = 'flex';
        } else {
            this.start();
        }
    }
    login() {
        const n = document.getElementById('username-input').value || "Commander";
        localStorage.setItem('u_name', n);
        document.getElementById('login-modal').style.display = 'none';
        this.start();
    }

    // --- 新增：防重叠算法 ---
    resolveOverlaps() {
        // 记录已被占据的坐标 "r,c"
        const occupied = new Set();
        
        // 过滤出玩家单位
        const myUnits = this.units.filter(u => u.team === 0);

        myUnits.forEach(u => {
            // 1. 检查当前单位的理想位置 (u.r, u.c) 是否已经被刚才处理过的单位占据
            let key = `${u.r},${u.c}`;
            
            // 2. 如果位置冲突（Set里已经有了），或者位置非法（有时候战斗会导致坐标跑偏），则寻找新位置
            // 注意：还要确保单位在合法的棋盘范围内 (r>=3)
            if (occupied.has(key) || u.r < 3 || u.r >= GRID_H || u.c < 0 || u.c >= GRID_W) {
                // 传入 occupied 集合，确保找到的位置绝对是空的
                const spot = this.findNearestEmptySpot(u.r, u.c, occupied);
                if (spot) {
                    u.r = spot.r;
                    u.c = spot.c;
                    key = `${u.r},${u.c}`;
                } else {
                    console.warn("无法找到空位安置单位:", u);
                }
            }
            
            // 3. 标记该位置已被占据
            occupied.add(key);
            
            // 4. 强制更新像素坐标，防止视觉上还在飞
            u.targetX = u.getGridX(u.c);
            u.targetY = u.getGridY(u.r);
            u.pixelX = u.targetX;
            u.pixelY = u.targetY;
        });
    }

    // 配合修改 findNearestEmptySpot，确保搜索逻辑正确
    findNearestEmptySpot(startR, startC, occupiedSet) {
        // 如果当前位置非法，强制修正到中心点开始搜索
        if (startR < 3) startR = 3;
        
        // 0. 先检查当前位置是否可用 (防止实际上是范围溢出但位置本身没被占用的情况)
        if (startR >= 3 && startR < GRID_H && startC >= 0 && startC < GRID_W && !occupiedSet.has(`${startR},${startC}`)) {
            return {r: startR, c: startC};
        }

        const maxDist = Math.max(GRID_W, GRID_H);
        
        // 螺旋/曼哈顿距离扩散
        for (let d = 1; d < maxDist; d++) {
            // 遍历所有 r,c
            for (let r = 3; r < GRID_H; r++) {
                for (let c = 0; c < GRID_W; c++) {
                    // 距离计算
                    const dist = Math.abs(r - startR) + Math.abs(c - startC);
                    if (dist === d) {
                        if (!occupiedSet.has(`${r},${c}`)) {
                            return {r, c};
                        }
                    }
                }
            }
        }
        return null;
    }

    initShopToggle() {
        // 初始化商店状态
        const dock = document.getElementById('shop-dock');
        const wrapper = document.getElementById('canvas-wrapper');
        
        // 添加窗口大小变化监听器
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 850 && wrapper.classList.contains('board-shrunk')) {
                wrapper.classList.remove('board-shrunk');
            }
        });
    }

    // --- 新增：控制商店折叠 ---
    toggleShopMinimize() {
        const dock = document.getElementById('shop-dock');
        const wrapper = document.getElementById('canvas-wrapper');
        // 删除旧的 btnText 定义，直接获取 DOM
        const btnLabel = document.getElementById('shop-chevron'); 
        const L = LANG[this.lang]; // 获取当前语言包

        dock.classList.toggle('minimized');
        
        if (dock.classList.contains('minimized')) {
            wrapper.classList.remove('board-shrunk');
            btnLabel.innerText = L.shopOpen; // 使用语言包
        } else {
            wrapper.classList.add('board-shrunk');
            btnLabel.innerText = L.shopHide;
        }
    }

    // --- 新增：移动端羁绊开关 ---
    toggleSynergyMobile() {
        const el = document.getElementById('synergy-float');
        const btn = document.getElementById('btn-syn-mobile');
        
        el.classList.toggle('mobile-active');
        btn.classList.toggle('active');

        // 点击遮罩关闭 (简单实现：如果点击了 canvas 就关闭)
        if (el.classList.contains('mobile-active')) {
            // 添加一次性点击监听器来关闭
            const closeFn = (e) => {
                if (!el.contains(e.target) && e.target !== btn) {
                    el.classList.remove('mobile-active');
                    btn.classList.remove('active');
                    document.removeEventListener('click', closeFn);
                }
            };
            setTimeout(() => document.addEventListener('click', closeFn), 100);
        }
    }

    start() {
        this.updateUI();
        setTimeout(() => {
            // 1. 获取元素
            const dock = document.getElementById('shop-dock');
            const wrapper = document.getElementById('canvas-wrapper');

            // 2. 显示商店
            dock.classList.add('visible');

            // 3. 【关键修复】直接添加缩小类
            // 不需要在这里判断 window.innerWidth，因为 style.css 中的 @media 查询
            // 会自动拦截移动端（宽度 <= 850px），防止其缩小。
            wrapper.classList.add('board-shrunk');
        }, 500);
    }
    showRankings() {
        document.getElementById('rank-modal').style.display = 'flex';
        document.getElementById('rank-list-content').innerHTML = `<div style="padding:10px;">1. ${localStorage.getItem('u_name') || 'You'} - Round ${this.round}</div>`;
    }

    showGuide() {
        // 强制刷新一次内容，防止语言没同步
        document.getElementById('t-guide-title').innerText = LANG[this.lang].guideTitle;
        document.getElementById('t-guide-content').innerHTML = LANG[this.lang].guideContent;
        document.getElementById('guide-modal').style.display = 'flex';
    }
}

const game = new Game();
loadAssets(() => game.init());