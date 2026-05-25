document.addEventListener('click', e => {
  // Gallery thumbs
  if(e.target.closest('.pdp-gallery__thumb')) {
    document.querySelectorAll('.pdp-gallery__thumb').forEach(t=>t.classList.remove('active'));
    e.target.closest('.pdp-gallery__thumb').classList.add('active');
  }
});
