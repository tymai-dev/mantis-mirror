const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.site-nav ul');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', (!isExpanded).toString());
    navMenu.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
    }
  });
}
