(() => {
  let running = false;
  let likeCount = 0;

  function pressL() {
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
  }

  function loopLikes() {
    if (!running) return;

    for (let i = 0; i < 2; i++) pressL(); // ~111 likes per second (2 per frame)

    if (likeCount >= 3000) {
      TikTokLiker.stop();
      return;
    }

    requestAnimationFrame(loopLikes);
  }

  window.TikTokLiker = {
    start: () => {
      if (running) {
        console.log("⚠️ TikTokLiker is already running.");
        return;
      }
      running = true;
      likeCount = 0;
      console.log("🚀 TikTokLiker started.");
      loopLikes();
    },
    stop: () => {
      running = false;
      console.log(`🛑 TikTokLiker stopped after ${likeCount} likes.`);
    }
  };

  console.log("✅ TikTokLiker loaded. Use TikTokLiker.start() to begin, TikTokLiker.stop() to stop.");
})();
