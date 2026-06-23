const emojis = ["💙", "☀️", "🎉", "⭐", "🏝️"];

function createFloaty() {
  const el = document.createElement("span");
  el.className = "floaty";
  el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  el.style.left = `${Math.random() * 100}vw`;
  el.style.fontSize = `${18 + Math.random() * 20}px`;
  el.style.animationDuration = `${5 + Math.random() * 5}s`;
  el.style.opacity = `${0.45 + Math.random() * 0.35}`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 10000);
}

setInterval(createFloaty, 850);

const button = document.querySelector(".button");
button?.addEventListener("click", () => {
  for (let i = 0; i < 16; i += 1) {
    setTimeout(createFloaty, i * 45);
  }
});
