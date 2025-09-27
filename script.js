const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -10;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.5;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2,
                      this.x - this.size, this.y + this.size / 3,
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 3,
                      this.x + this.size / 2, this.y - this.size / 2,
                      this.x, this.y);
    ctx.fill();
    ctx.restore();
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -10;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function init() {
  for (let i = 0; i < 30; i++) {
    hearts.push(new Heart());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "🔊"; // change l’icône
  } else {
    music.pause();
    btn.textContent = "🎵";
  }
});
// Popup QR Code
const showBtn = document.getElementById('show-qr');
const qrPopup = document.getElementById('qr-popup');
const closeBtn = document.getElementById('close-qr');

showBtn.addEventListener('click', () => {
  qrPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  qrPopup.style.display = 'none';
});

// Fermer popup si clic en dehors de l'image
qrPopup.addEventListener('click', (e) => {
  if(e.target === qrPopup) qrPopup.style.display = 'none';
});
