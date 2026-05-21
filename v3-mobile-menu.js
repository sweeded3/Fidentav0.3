(() => {
  const nav = document.querySelector('.nav');
  const inner = document.querySelector('.nav-inner');
  const links = document.querySelectorAll('.links a');

  if (!nav || !inner) return;

  const close = () => {
    nav.classList.remove('is-v3-open');
  };

  inner.addEventListener('click', (event) => {
    const rect = inner.getBoundingClientRect();
    const clickInBurgerZone = event.clientX > rect.right - 58;
    if (!clickInBurgerZone || window.innerWidth > 1050) return;
    event.preventDefault();
    nav.classList.toggle('is-v3-open');
  });

  links.forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1050) close();
  });
})();