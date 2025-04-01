import Scrollbar from 'smooth-scrollbar';

Scrollbar.init(document.querySelector('#scroll-container'), {
  damping: 0.015,
  continuousScrolling: true,
  delegateTo: document,
  renderByPixels: true,
  alwaysShowTracks: false,
  syncCallbacks: true,
  overscrollEffect: 'bounce',
  overscrollDamping: 0.08
});
