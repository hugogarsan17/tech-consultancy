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

const faqItems = document.querySelectorAll('.faq__item');

if (faqItems.length) {
  const setExpandedState = (faqItem, expanded) => {
    faqItem.setAttribute('aria-expanded', String(expanded));
    const button = faqItem.querySelector('.faq__question');
    if (button) {
      button.setAttribute('aria-expanded', String(expanded));
    }
  };

  faqItems.forEach((item) => {
    const questionButton = item.querySelector('.faq__question');
    if (!questionButton) {
      return;
    }

    questionButton.addEventListener('click', () => {
      const isExpanded = item.getAttribute('aria-expanded') === 'true';

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          setExpandedState(otherItem, false);
        }
      });

      setExpandedState(item, !isExpanded);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      faqItems.forEach((item) => setExpandedState(item, false));
    }
  });
}
