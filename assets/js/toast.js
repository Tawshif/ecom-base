function toast(msg, type='info') {
  const c = document.getElementById('toastContainer');
  const t = document.createElement('div');
  const icons = {success:'✅', error:'❌', info:'ℹ️'};
  t.className = `toast toast--${type}`;
  t.innerHTML = `<span>${icons[type]||'💬'}</span><span>${msg}</span>`;
  c.appendChild(t);
  requestAnimationFrame(() => { requestAnimationFrame(() => t.classList.add('show')); });
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 500);
  }, 3500);
}

window.toast = toast;
