

````markdown
# 🔥 TikTok Live Auto-Liker

A simple JavaScript tool that sends rapid likes (~111 per second) on TikTok Live by simulating the `'L'` key directly from your browser's DevTools Console.

> ⚠️ For educational and testing purposes only. Use responsibly.

---

## 📦 Features

- ✅ No installation required – paste and run in Chrome DevTools
- ⚡ Sends ~111 likes per second using real keyboard event simulation
- 🧠 Lightweight and beginner-friendly
- 🛑 Safe limit to avoid spamming too long (default: 3000 likes)

---

## 🚀 How to Use

1. Open a **TikTok Live** stream in your browser (must be logged in).
2. Open **DevTools**:  
   `F12` or `Ctrl + Shift + I` → Go to the **Console** tab.
3. Paste the contents of [`liker.js`](./liker.js) and press **Enter**.
4. Run the auto-liker:

```js
TikTokLiker.start();
````

5. To stop the script at any time:

```js
TikTokLiker.stop();
```

---

## ⚙️ Configuration (Optional)

You can adjust values in the `liker.js` file before starting:

```js
// Change how many likes per second (approx)
likesPerSecond = 111;

// Set a maximum number of likes before auto-stop
maxLikes = 3000;
```

---

## 📄 License

This project is licensed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

## 🧠 Disclaimer

This tool is not affiliated with or endorsed by TikTok.
Use at your own risk. Excessive or irresponsible use may result in restrictions on your TikTok account.

```
