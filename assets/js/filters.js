document.addEventListener('click', e => {
  // Size buttons
  if(e.target.classList.contains('size-btn') && !e.target.classList.contains('disabled')) {
    e.target.closest('.size-options').querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
  }
  // Color swatches
  if(e.target.classList.contains('color-option') || e.target.classList.contains('color-swatch')) {
    e.target.closest('.color-options').querySelectorAll('.color-option,.color-swatch').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
  }
  // View toggles
  if(e.target.classList.contains('view-btn')) {
    e.target.closest('.view-toggles').querySelectorAll('.view-btn').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
  }
});
