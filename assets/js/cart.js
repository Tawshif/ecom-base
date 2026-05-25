function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  const isOpen = drawer.classList.contains('open');
  overlay.classList.toggle('open', !isOpen);
  drawer.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

document.addEventListener('keydown', e => { 
  if(e.key === 'Escape') { 
    const d = document.getElementById('cartDrawer'); 
    if(d && d.classList.contains('open')) toggleCart(); 
  }
});

// Bind to window so inline onclick works, or add event listeners
window.toggleCart = toggleCart;
