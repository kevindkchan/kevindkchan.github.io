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

const character = document.getElementById('character');
const eyes = document.querySelectorAll('.eye');

function blinkSmile() {
    character.src = 'img/smile.png';
    eyes.forEach(eye => eye.style.opacity = '0');

    setTimeout(() => {
        character.src = 'img/face.png';
        eyes.forEach(eye => eye.style.opacity = '1');
    }, 100);
}

setInterval(() => {
    blinkSmile();
}, 5000);

character.addEventListener('mouseenter', () => {
    character.src = 'img/smile.png';
    eyes.forEach(eye => eye.style.opacity = '0');
});

character.addEventListener('mouseleave', () => {
    character.src = 'img/face.png';
    eyes.forEach(eye => eye.style.opacity = '1');
});
