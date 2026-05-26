/**
 * Carousel Module
 * Handles Hero Carousel (Section 1) and Featured Product Carousels (Sections 6/7).
 */

// ============================================================
// HERO CAROUSEL — full-slide translateX slider with dots + nav
// ============================================================

function initHeroCarousel() {
  const carousel = document.getElementById('heroCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.hero-carousel__track');
  const slides = carousel.querySelectorAll('.hero-carousel__slide');
  const dots = carousel.querySelectorAll('.hero-carousel__dot');
  const prevBtn = carousel.querySelector('.hero-carousel__nav--prev');
  const nextBtn = carousel.querySelector('.hero-carousel__nav--next');

  if (!track || slides.length === 0) return;

  let current = 0;
  let autoplayTimer = null;
  const AUTOPLAY_MS = 5000;

  function goTo(index) {
    // Wrap around
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;

    track.style.transform = `translateX(-${current * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  // Nav buttons
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });

  // Dot buttons
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetAutoplay(); });
  });

  // Touch / swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
      resetAutoplay();
    }
  }, { passive: true });

  // Autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, AUTOPLAY_MS);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pause on hover
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  // Initialize
  goTo(0);
  startAutoplay();
}


// ============================================================
// FEATURED PRODUCT CAROUSEL — horizontal scroll with arrows
// ============================================================

function initFeaturedCarousels() {
  const carousels = document.querySelectorAll('.featured-carousel');

  carousels.forEach((carousel) => {
    const productsContainer = carousel.querySelector('.featured-carousel__products');
    const arrows = carousel.querySelectorAll('.featured-carousel__arrow');
    if (!productsContainer || arrows.length < 2) return;

    const prevBtn = arrows[0];
    const nextBtn = arrows[1];

    // Calculate scroll amount — roughly one card width + gap
    function getScrollAmount() {
      const card = productsContainer.querySelector('.product-card');
      if (!card) return 240;
      const style = getComputedStyle(productsContainer);
      const gap = parseInt(style.gap) || 20;
      return card.offsetWidth + gap;
    }

    nextBtn.addEventListener('click', () => {
      productsContainer.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      productsContainer.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    // Touch drag support for non-touch-native scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    productsContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      productsContainer.style.cursor = 'grabbing';
      startX = e.pageX - productsContainer.offsetLeft;
      scrollLeft = productsContainer.scrollLeft;
    });

    productsContainer.addEventListener('mouseleave', () => {
      isDown = false;
      productsContainer.style.cursor = 'grab';
    });

    productsContainer.addEventListener('mouseup', () => {
      isDown = false;
      productsContainer.style.cursor = 'grab';
    });

    productsContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - productsContainer.offsetLeft;
      const walk = (x - startX) * 1.5;
      productsContainer.scrollLeft = scrollLeft - walk;
    });

    // Set grab cursor
    productsContainer.style.cursor = 'grab';
  });
}


// ============================================================
// BOOT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initFeaturedCarousels();
});
