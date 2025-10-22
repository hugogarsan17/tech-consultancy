const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu-principal');
const yearEl = document.querySelector('#year');

if (navToggle && menu) {
  const toggleMenu = () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    menu.setAttribute('aria-hidden', String(expanded));
  };

  navToggle.addEventListener('click', toggleMenu);
  navToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleMenu();
    }
  });

  menu.setAttribute('aria-hidden', 'true');
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
