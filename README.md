# 🔥 TikTok Live Bot

A powerful browser-based automation tool to send likes and comments on TikTok Live with a floating control panel and real-time counters.

Un outil puissant basé sur le navigateur pour envoyer automatiquement des likes et des commentaires sur TikTok Live, avec un panneau de contrôle flottant et des compteurs en temps réel.

---

## 🚀 Features | Fonctionnalités

| Feature (EN)             | Fonctionnalité (FR)                                 |
|--------------------------|------------------------------------------------------|
| 💓 Auto Liker            | 💓 Envoi automatique de likes (~111/sec)             |
| 💬 Auto Commenter        | 💬 Commentaires automatiques avec messages aléatoires |
| 🎛️ Floating UI Panel     | 🎛️ Panneau flottant avec contrôle en un clic         |
| 📊 Live Counters         | 📊 Compteurs en temps réel (likes et commentaires)   |
| ✏️ Fully Configurable    | ✏️ Entièrement personnalisable                       |

---

## 💻 How to Use | Comment l’utiliser

### 1. Open TikTok Live in your browser  
### 1. Ouvrez un Live TikTok dans votre navigateur

### 2. Open DevTools → Console  
Press `F12` or `Ctrl + Shift + I`  
Allez dans **Outils de développement → Console**

### 3. Paste the script from [`main.js`](./main.js) and hit Enter  
### 3. Collez le script depuis [`main.js`](./main.js) et appuyez sur Entrée

### 4. Use the floating panel to start auto-likes or comments  
### 4. Utilisez le panneau pour lancer les likes ou les commentaires automatiques

---

## ⚙️ Customization | Personnalisation

In the console, you can customize behavior with:

Dans la console, vous pouvez personnaliser avec :

```js
TikTokBot.setMessages(["🔥 Custom 1", "💯 Custom 2"]);
TikTokBot.setDelay(2000, 5000); // Delay between comments (ms)
TikTokBot.setLikeLimit(5000);   // Max likes to send
