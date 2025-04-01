const scrollWrapper = document.querySelector('.scroll-wrapper');
let scrollTimer;

scrollWrapper.addEventListener('scroll', () => {
  scrollWrapper.classList.add('scrolling');

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    scrollWrapper.classList.remove('scrolling');
  }, 1000);
});
