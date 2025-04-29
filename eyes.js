document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
    const moveX = Math.cos(angle) * 2;
    const moveY = Math.sin(angle) * 2;

    eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});

function swapFaceImage() {
  const characterImg = document.getElementById('character');
  const eyes = document.querySelectorAll('.eye');
  if (window.innerWidth <= 1366) {
    characterImg.src = 'img/me.png';
    eyes.forEach(eye => eye.style.display = 'none');
  } else {
    characterImg.src = 'img/face.png';
    eyes.forEach(eye => eye.style.display = 'block');
  }
}

swapFaceImage();
window.addEventListener('resize', swapFaceImage);

const characterFace = document.getElementById('character');
const characterSmile = document.getElementById('character-smile');
const eyes = document.querySelectorAll('.eye');
let isHovering = false;
let blinkTimeout;
let allowBlinking = window.innerWidth > 640;

function showSmile() {
    characterFace.style.opacity = '0';
    characterSmile.style.opacity = '1';
    eyes.forEach(eye => eye.style.opacity = '0');
}

function showFace() {
    characterFace.style.opacity = '1';
    characterSmile.style.opacity = '0';
    eyes.forEach(eye => eye.style.opacity = '1');
}

function blinkSmile() {
    if (isHovering || !allowBlinking) return;

    showSmile();

    setTimeout(() => {
        showFace();
        clearInterval(blinkTimeout);
        startBlinking();
    }, 100);
}

function startBlinking() {
    const randomDelay = Math.floor(Math.random() * (7000 - 3000 + 1)) + 3000;
    blinkTimeout = setInterval(blinkSmile, randomDelay);
}

if (allowBlinking) {
    startBlinking();
}

characterFace.addEventListener('mouseenter', () => {
    isHovering = true;
    showSmile();
});

characterFace.addEventListener('mouseleave', () => {
    isHovering = false;
    showFace();
});

window.addEventListener('load', () => {
    const characterSmile = document.getElementById('character-smile');
    characterSmile.style.opacity = '1';
    setTimeout(() => {
      characterSmile.style.opacity = '0';
    }, 50);
});
