const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let particles = [];
for (let i = 0; i < 25; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 12 + 6,
    speed: Math.random() * 1.5 + 0.5,
    type: Math.random() > 0.5 ? "heart" : "flower" // moitié coeur, moitié fleur
  });
}

// ❤️ fonction pour dessiner un coeur
function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  ctx.fillStyle = "rgba(255,0,0,0.8)";
  ctx.fill();
}

// 🌸 fonction pour dessiner une fleur simple (style étoile arrondie)
function drawFlower(x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "rgba(255,182,193,0.8)"; // rose clair

  for (let i = 0; i < 6; i++) {
    ctx.rotate(Math.PI / 3); // 6 pétales
    ctx.beginPath();
    ctx.ellipse(0, size / 2, size / 2.5, size / 1.8, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // cœur de la fleur
  ctx.beginPath();
  ctx.arc(0, 0, size / 4, 0, Math.PI * 2);
  ctx.fillStyle = "#ff69b4"; // rose foncé
  ctx.fill();

  ctx.restore();
}

// 🎬 Animation
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    if (p.type === "heart") {
      drawHeart(p.x, p.y, p.size);
    } else {
      drawFlower(p.x, p.y, p.size);
    }

    p.y += p.speed;
    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();



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
const overlay = document.getElementById('overlay-menu');
const closeOverlay = document.getElementById('close-overlay');

closeOverlay.addEventListener('click', () => {
  overlay.style.display = 'none';
});
