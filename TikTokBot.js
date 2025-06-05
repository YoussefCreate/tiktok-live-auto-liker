(() => {
  // === CONFIGURATION ===
  let commentMessages = [
    "🔥🔥🔥 Let’s gooo!",
    "😂 This is crazy!",
    "💯 Respect!",
    "👑 GOAT energy!",
    "🎯 So real",
    "🙌 Keep it up!",
    "😎 Clean moves!"
  ];
  let commentMinDelay = 3000;
  let commentMaxDelay = 6000;
  let maxLikes = 3000;
  let likesPerFrame = 2;

  // === INTERNAL STATES ===
  let likeRunning = false;
  let commentRunning = false;
  let likeCount = 0;
  let commentCount = 0;
  let likeLoop;
  let commentTimeout;

  const log = (msg) =>
    console.log(`%c[🔥 TikTokBot] ${msg}`, 'color:white; background:#111; padding:2px 6px; border-radius:4px;');

  // === COMMENT FUNCTIONS ===
  const getInputBox = () =>
    document.querySelector('div[contenteditable="plaintext-only"][placeholder*="Say something"]');

  const getSendButton = () =>
    document.querySelector('.tiktok-mortok, .e2lzvyu9');

  function getRandomMessage() {
    return commentMessages[Math.floor(Math.random() * commentMessages.length)];
  }

  function getRandomDelay() {
    return Math.floor(Math.random() * (commentMaxDelay - commentMinDelay + 1)) + commentMinDelay;
  }

  function sendComment() {
    const inputBox = getInputBox();
    const sendButton = getSendButton();

    if (!inputBox || !sendButton) {
      log("❌ Comment box or send button not found.");
      stopComment();
      return;
    }

    const message = getRandomMessage();
    inputBox.focus();
    inputBox.innerText = message;
    inputBox.dispatchEvent(new InputEvent('input', { bubbles: true }));

    setTimeout(() => {
      sendButton.click();
      commentCount++;
      updateCounters();
      log(`💬 Sent: "${message}"`);

      if (commentRunning) {
        commentTimeout = setTimeout(sendComment, getRandomDelay());
      }
    }, 100);
  }

  function startComment() {
    if (commentRunning) return;
    commentRunning = true;
    commentCount = 0;
    updateCounters();
    commentTimeout = setTimeout(sendComment, getRandomDelay());
    updateButtonStates();
    log("🚀 Commenting started.");
  }

  function stopComment() {
    commentRunning = false;
    clearTimeout(commentTimeout);
    updateButtonStates();
    log("🛑 Commenting stopped.");
  }

  // === LIKER FUNCTIONS ===
  function simulateLKey() {
    const event = new KeyboardEvent('keydown', {
      bubbles: true,
      cancelable: true,
      key: 'l',
      code: 'KeyL',
      keyCode: 76,
      which: 76
    });
    document.dispatchEvent(event);
    likeCount++;
    updateCounters();
  }

  function likeLoopFunc() {
    if (!likeRunning || likeCount >= maxLikes) {
      stopLiker();
      return;
    }

    for (let i = 0; i < likesPerFrame; i++) simulateLKey();
    likeLoop = requestAnimationFrame(likeLoopFunc);
  }

  function startLiker() {
    if (likeRunning) return;
    likeRunning = true;
    likeCount = 0;
    updateCounters();
    likeLoopFunc();
    updateButtonStates();
    log("💥 Liker started.");
  }

  function stopLiker() {
    likeRunning = false;
    cancelAnimationFrame(likeLoop);
    updateButtonStates();
    log(`🛑 Liker stopped at ${likeCount} likes.`);
  }

  // === UI PANEL ===
  function createBotUI() {
    if (document.getElementById("tiktok-bot-ui")) return;

    const panel = document.createElement("div");
    panel.id = "tiktok-bot-ui";
    panel.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #1c1c1c;
      color: white;
      padding: 14px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.4);
      font-family: sans-serif;
      z-index: 9999;
      width: 240px;
      cursor: move;
      user-select: none;
    `;

    panel.innerHTML = `
      <h4 style="margin-top:0; font-size:16px; text-align:center;">🔥 TikTok Live Bot</h4>
      <button id="btn-like" class="tiktok-bot-btn">💓 Start Liker</button>
      <button id="btn-comment" class="tiktok-bot-btn">💬 Start Commenter</button>
      <hr style="border-color:#333; margin:10px 0;">
      <div style="font-size:13px;">
        ❤️ Likes Sent: <span id="like-count">0</span><br>
        💬 Comments Sent: <span id="comment-count">0</span>
      </div>
    `;

    const style = document.createElement("style");
    style.innerHTML = `
      .tiktok-bot-btn {
        background: #007bff;
        color: white;
        border: none;
        border-radius: 6px;
        padding: 10px 12px;
        margin: 4px 0;
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
      .tiktok-bot-btn:hover {
        background: #0056b3;
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(panel);

    // Button actions
    document.getElementById("btn-like").onclick = () => {
      likeRunning ? stopLiker() : startLiker();
    };
    document.getElementById("btn-comment").onclick = () => {
      commentRunning ? stopComment() : startComment();
    };

    // Drag panel
    let offsetX = 0, offsetY = 0, isDragging = false;

    panel.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - panel.getBoundingClientRect().left;
      offsetY = e.clientY - panel.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        panel.style.left = `${e.clientX - offsetX}px`;
        panel.style.top = `${e.clientY - offsetY}px`;
        panel.style.bottom = "auto";
        panel.style.right = "auto";
      }
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    updateButtonStates();
  }

  function updateCounters() {
    const likeDisplay = document.getElementById("like-count");
    const commentDisplay = document.getElementById("comment-count");
    if (likeDisplay) likeDisplay.innerText = likeCount;
    if (commentDisplay) commentDisplay.innerText = commentCount;
  }

  function updateButtonStates() {
    const likeBtn = document.getElementById("btn-like");
    const commentBtn = document.getElementById("btn-comment");
    if (!likeBtn || !commentBtn) return;

    likeBtn.innerText = likeRunning ? `🛑 Stop Liker` : "💓 Start Liker";
    commentBtn.innerText = commentRunning ? "🛑 Stop Commenter" : "💬 Start Commenter";
  }

  // === INIT ===
  window.TikTokBot = {
    startLiker,
    stopLiker,
    startComment,
    stopComment,
    setMessages: (arr) => {
      if (Array.isArray(arr)) {
        commentMessages = arr;
        log("✅ Updated comment messages.");
      }
    },
    setDelay: (min, max) => {
      commentMinDelay = min;
      commentMaxDelay = max;
      log(`⏱️ Delay set to ${min} - ${max}ms.`);
    },
    setLikeLimit: (max) => {
      maxLikes = max;
      log(`❤️ Max likes set to ${max}.`);
    }
  };

  createBotUI();
  log("✅ TikTokBot ready. Use the panel or TikTokBot.* commands.");
})();
