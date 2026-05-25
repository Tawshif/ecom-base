document.addEventListener('click', e => {
  if(e.target.classList.contains('qty-btn')) {
    const parent = e.target.closest('.qty-selector');
    const display = parent.querySelector('.qty-display');
    let n = parseInt(display.textContent);
    if(e.target.textContent === '+') display.textContent = n+1;
    else if(n > 1) display.textContent = n-1;
  }
});
