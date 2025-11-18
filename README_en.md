# ⚔️ Auto Battler: AI-Gen Edition

中文 README: [README.md](README.md)

**Live Demo:** [auto-battler.precu.re](https://auto-battler.precu.re)

> **"From Prompt to Playable in 60 Minutes."**

This is a fully browser-based **Auto Battler game**. This project is not just a game, but an experimental showcase demonstrating the capabilities of current **SOTA (State-of-the-Art) AI models**.

## 🤖 The AI Story

The core purpose of this project was to test and demonstrate the end-to-end development capabilities of the latest **Google Gemini** model series.

* **Code Generation:**
    * **Model:** **Gemini 3.0 Pro**
    * **Contribution:** Wrote **100%** of the source code, including the HTML structure, CSS Glassmorphism UI design, Canvas rendering engine, and complete game logic (pathfinding, combat, economy systems).
* **Assets Creation:**
    * **Model:** **Gemini 2.5 Flash Image**
    * **Contribution:** Generated all pixel-art character icons and background assets.
* **Development Efficiency:**
    * Total time from the first Prompt to the final playable version was approximately **1 Hour**.

## 🎮 Game Overview

**Auto Battler** is a strategic automated combat game. You play as a commander who must recruit units during the preparation phase, adjust positioning, and build specific synergies to strengthen your team against endless waves of enemies.

### ✨ Core Features

* **Lightweight Architecture:** Runs entirely on a single HTML file with no external dependencies.
* **Visual Experience:** Modern Dark Glassmorphism UI combined with high-performance Canvas rendering.
* **Mobile-Ready:** Supports touch controls and adaptive screen layouts for play-anywhere accessibility.
* **Bilingual Support:** Built-in one-click toggle between English and Chinese.

---

## 📖 How to Play

### 1. Planning Phase

* **Recruit Units:** Click on cards in the shop at the bottom to purchase units with Gold.
* **Positioning:** Drag units from the bench to the **bottom half** of the board.
    * *Tip:* Place Tanks in the front row to absorb damage, and fragile damage dealers (DPS) in the back.
* **Reroll:** If the shop doesn't have what you need, spend **2 Gold** to refresh the shop.
* **Sell Units:** (Not implemented in the current version—buy carefully!)

### 2. Battle Phase

* Click the **"Start Battle"** button.
* Units will automatically find and attack the nearest enemy.
* **Victory:** Proceed to the next round and earn Gold.
* **Defeat:** Deduct Player HP.

### 3. Economy System

* **Starting Gold:** 12 Gold
* **Base Income:** Fixed +5 Gold at the end of every round.
* **Health:** Start with 100 HP. Losing a battle deducts 10 HP.

---

## 📊 Numerical Design

All numerical balance in the game was designed by Gemini 3.0 Pro to provide a fast-paced strategic experience.

### ♟️ Unit Stats

| Unit Name (Code) | Class / Race | Cost ($) | HP | DMG | AS (Speed) | Range | Role |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Tank** | Cyber / Guardian | 1 | **1000** | 35 | 0.7 | 1 | Frontline Tank, High HP |
| **Saber** | Isekai / Warrior | 1 | 700 | 60 | 1.1 | 1 | Off-Tank, Balanced |
| **Ninja** | Cyber / Assassin | 2 | 550 | 95 | **1.5** | 1 | Melee Burst, High Speed |
| **Archer**| School / Sniper | 2 | 500 | 85 | 0.85 | **4** | Ranged Physical DPS |
| **Mage** | Arcane / Sorcerer| 3 | 400 | **130** | 0.65 | 3 | Ranged High DMG, Fragile |

### 🔗 Synergy System

Collecting a specific number of units of the same type activates global buffs:

| Synergy Name | Required Units | Effect Description | Tactical Analysis |
| :--- | :---: | :--- | :--- |
| **Cyber** | 2 | **All Allies AS +35%** | **Tier-0 Synergy.** Extremely powerful; pairs well with Ninja and physical DPS. |
| **Isekai**| 2 | All Allies ATK +25% | Simple raw damage boost. Good for early game transitions. |
| **Guardian**| 2 | Start with +300 Shield | Early game savior. Greatly increases frontline survival time. |
| **Arcane** | 2 | Skill DMG +40% | *Note: Currently increases the Mage's base damage multiplier.* |
| **School** | 1 | Sniper Crit Rate +15% | Standalone value card. Active with just one Archer. |

---

## 🛠️ Quick Start

1.  Download the project code.
2.  Open `index.html` directly in any modern browser (Chrome/Edge/Safari).
3.  No Node.js or server installation required. Just open and play.

## ⚠️ Disclaimer

* This project is a demo of AI-generated code; minor logic bugs or balance issues may exist.
* All image assets are AI-generated and are for educational/demonstration purposes only.

---

*Generated with ❤️ by Gemini 3.0 Pro*