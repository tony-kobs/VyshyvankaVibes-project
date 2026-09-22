(() => {
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');
  const links = document.querySelectorAll('.mobile-menu-nav-link');

  if (!openBtn || !closeBtn || !menu) {
    return;
  }

  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  const getFocusable = () =>
    [...menu.querySelectorAll(focusableSelector)].filter(
      el => el.offsetParent !== null
    );

  const openMenu = () => {
    menu.classList.add('is-open');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    const focusable = getFocusable();
    (focusable[0] || closeBtn).focus();
  };

  const closeMenu = ({ restoreFocus = true } = {}) => {
    menu.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');

    if (restoreFocus) {
      openBtn.focus();
    }
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', () => closeMenu());
  links.forEach(link =>
    link.addEventListener('click', () => closeMenu({ restoreFocus: false }))
  );

  menu.addEventListener('click', event => {
    if (event.target === menu) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (!menu.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      closeMenu();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusable();
    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
