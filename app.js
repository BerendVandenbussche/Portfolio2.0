'use strict';

const listenToMobileMenu = () => {
  const menu = document.querySelector('.js-mobile-menu');
  const container = document.getElementById('mobile-menu');
  const background = document.getElementById('main');
  container.style.display = 'none';
  menu.addEventListener('click', function () {
    if (container.style.display == 'none') {
      container.style.display = 'block';
      background.classList.add('u-height-auto');
    } else {
      container.style.display = 'none';
      background.classList.remove('u-height-auto');
    }
  });
};

const init = () => {
  listenToMobileMenu();
};

document.addEventListener('DOMContentLoaded', function () {
  console.info('DOM geladen 🎉');
  init();
});
