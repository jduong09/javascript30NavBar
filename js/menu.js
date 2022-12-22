document.addEventListener('DOMContentLoaded', () => {
  const iconHamburger = document.getElementById('img-hamburger');
  const iconClose = document.getElementById('img-close');
  const nav = document.querySelector('nav');
  const productsListItem = document.getElementById('list-item-products');
  const divProductsNav = document.getElementById('div-products-nav');
  const menuHeader = document.querySelector('.menu-header');
  const listNav = document.querySelector('.list-nav');
  const listCTA = document.getElementById('list-cta');
  const divLandingImg = document.querySelector('.div-landing-img')

  iconHamburger.addEventListener('click', (e) => {
    e.preventDefault();

    divProductsNav.classList.remove('hide');
  });

  iconClose.addEventListener('click', (e) => {
    e.preventDefault();

    divProductsNav.classList.add('hide');
  });

  productsListItem.addEventListener('click', () => {
    if (divProductsNav.classList.contains('hide')) {
      divProductsNav.classList.remove('hide');
    } else {
      divProductsNav.classList.add('hide');
    }
  });

  if (window.innerWidth < 992) {
    divProductsNav.remove();
    nav.appendChild(divProductsNav);
    listNav.classList.add('hide');
    menuHeader.classList.remove('hide');
    iconHamburger.classList.remove('hide');
    listCTA.classList.add('hide');
    divLandingImg.classList.add('hide');
  } else {
    divProductsNav.remove();  
    productsListItem.appendChild(divProductsNav);
    listNav.classList.remove('hide');
    menuHeader.classList.add('hide');
    iconHamburger.classList.add('hide');
    listCTA.classList.remove('hide');
    divLandingImg.classList.remove('hide');
  }

  window.addEventListener('resize', () => {
    divProductsNav.remove();
    if (window.innerWidth < 992) {
      nav.appendChild(divProductsNav);
      listNav.classList.add('hide');
      menuHeader.classList.remove('hide');
      iconHamburger.classList.remove('hide');
      listCTA.classList.add('hide');
      divLandingImg.classList.add('hide');
    } else {
      productsListItem.appendChild(divProductsNav);
      listNav.classList.remove('hide');
      menuHeader.classList.add('hide');
      iconHamburger.classList.add('hide');
      listCTA.classList.remove('hide');
      divLandingImg.classList.remove('hide');
    }
  });
});