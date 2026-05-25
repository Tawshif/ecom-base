/**
 * App Bootstrap — Main Entry Point
 * Initializes all modules and global state.
 *
 * This is the single <script type="module"> loaded by layouts/base.html.
 * Each feature module is imported and initialized here.
 */

// ============================================================
// MODULE IMPORTS
// Uncomment as you build each module
// ============================================================

// import { initCart } from './cart.js';
// import { initSearch } from './search.js';
// import { initFilters } from './filters.js';
// import { initGallery } from './gallery.js';
// import { initAccordion } from './accordion.js';
// import { initToast } from './toast.js';
// import { initQuantity } from './quantity.js';
// import { initWishlist } from './wishlist.js';
// import { initRecentlyViewed } from './recently-viewed.js';
// import { initFormValidation } from './form-validation.js';
// import { initMegaMenu } from './mega-menu.js';
// import { initMobileNav } from './mobile-nav.js';
// import { initLazyLoad } from './lazy-load.js';
// import { initAnalytics } from './analytics.js';

// ============================================================
// GLOBAL STATE
// ============================================================

export const AppState = {
  cart: {
    items: [],
    isOpen: false,
  },
  wishlist: [],
  recentlyViewed: [],
  user: null,
  filters: {
    active: {},
    sort: 'relevance',
  },
};

// ============================================================
// INITIALIZATION
// ============================================================

// Demo Section Navigation
window.showSection = function(id) {
  ['homepage','plp','pdp','cart','checkout','components'].forEach(s => {
    const el = document.getElementById('sec-'+s);
    if (el) el.style.display = s === id ? 'block' : 'none';
  });
  document.querySelectorAll('.demo-nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(id) || (id==='plp'&&btn.textContent.includes('Category')) || (id==='pdp'&&btn.textContent.includes('Product Detail')) || (id==='cart'&&btn.textContent.includes('Cart')) || (id==='components'&&btn.textContent.includes('Component')));
  });
  window.scrollTo({top:0, behavior:'smooth'});
}

document.addEventListener('click', e => {
  // Demo nav sync
  if(e.target.classList.contains('demo-nav-btn')) {
    document.querySelectorAll('.demo-nav-btn').forEach(b=>b.classList.remove('active'));
    e.target.classList.add('active');
  }
});

function initApp() {
  console.log('[App] Ecommerce template initialized');
  console.log('[App] Environment:', import.meta.env.MODE);

  // Restore persisted state from localStorage
  restoreState();

  // Initialize modules (uncomment as you build them)
  // initToast();
  // initCart();
  // initSearch();
  // initMegaMenu();
  // initMobileNav();
  // initLazyLoad();
  // initAnalytics();

  // Page-specific initialization
  initCurrentPage();
}

// ============================================================
// STATE PERSISTENCE (localStorage)
// ============================================================

const STORAGE_KEYS = {
  cart: 'ecom_cart',
  wishlist: 'ecom_wishlist',
  recentlyViewed: 'ecom_recently_viewed',
};

function restoreState() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEYS.cart);
    if (savedCart) AppState.cart.items = JSON.parse(savedCart);

    const savedWishlist = localStorage.getItem(STORAGE_KEYS.wishlist);
    if (savedWishlist) AppState.wishlist = JSON.parse(savedWishlist);

    const savedRecent = localStorage.getItem(STORAGE_KEYS.recentlyViewed);
    if (savedRecent) AppState.recentlyViewed = JSON.parse(savedRecent);
  } catch (e) {
    console.warn('[App] Failed to restore state from localStorage:', e);
  }
}

export function saveState(key, data) {
  try {
    localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(data));
  } catch (e) {
    console.warn('[App] Failed to save state:', e);
  }
}

// ============================================================
// PAGE ROUTER
// Detects current page and initializes page-specific modules
// ============================================================

function initCurrentPage() {
  const path = window.location.pathname;

  // Map URL patterns to initializers
  const routes = [
    { pattern: /\/$|\/index\.html$/, init: () => initHomepage() },
    { pattern: /\/pages\/catalog\//, init: () => initCatalog() },
    { pattern: /\/pages\/product\//, init: () => initProductDetail() },
    { pattern: /\/pages\/cart\//, init: () => initCartPage() },
    { pattern: /\/pages\/checkout\//, init: () => initCheckout() },
    { pattern: /\/pages\/account\//, init: () => initAccount() },
    { pattern: /\/pages\/auth\//, init: () => initAuth() },
  ];

  for (const route of routes) {
    if (route.pattern.test(path)) {
      console.log(`[App] Page matched: ${route.pattern}`);
      route.init();
      return;
    }
  }

  console.log('[App] No specific page initializer for:', path);
}

// ============================================================
// PAGE INITIALIZERS (stubs — flesh out as needed)
// ============================================================

function initHomepage() {
  console.log('[Page] Homepage');
  // initGallery();  // Hero carousel if applicable
}

function initCatalog() {
  console.log('[Page] Catalog / PLP');
  // initFilters();
}

function initProductDetail() {
  console.log('[Page] Product Detail (PDP)');
  // initGallery();
  // initAccordion();
  // initQuantity();
}

function initCartPage() {
  console.log('[Page] Cart');
  // initQuantity();
}

function initCheckout() {
  console.log('[Page] Checkout');
  // initFormValidation();
}

function initAccount() {
  console.log('[Page] Account');
}

function initAuth() {
  console.log('[Page] Auth');
  // initFormValidation();
}

// ============================================================
// UTILITY EXPORTS
// ============================================================

/**
 * Fetch JSON data from /data/*.json files
 * @param {string} filename — e.g. 'products', 'categories'
 * @returns {Promise<any>}
 */
export async function fetchData(filename) {
  try {
    const response = await fetch(`/data/${filename}.json`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch (e) {
    console.error(`[App] Failed to fetch /data/${filename}.json:`, e);
    return null;
  }
}

/**
 * Simple DOM helper — querySelector shorthand
 */
export const $ = (selector, parent = document) => parent.querySelector(selector);
export const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

// ============================================================
// BOOT
// ============================================================

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
