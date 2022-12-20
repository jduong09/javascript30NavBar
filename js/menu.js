document.addEventListener('DOMContentLoaded', () => {
  const iconHamburger = document.getElementById('img-hamburger');
  const iconClose = document.getElementById('img-close');
  const nav = document.querySelector('nav');

  iconHamburger.addEventListener('click', (e) => {
    e.preventDefault();

    nav.classList.remove('hide');
  });

  iconClose.addEventListener('click', (e) => {
    e.preventDefault();

    nav.classList.add('hide');
  });
});