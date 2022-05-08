let navMain = document.querySelector('.main-header-nav');
let navToggle = document.querySelector('.main-header-nav__toggle');

navMain.classList.remove('main-header-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-header-nav--closed')) {
    navMain.classList.remove('main-header-nav--closed');
    navMain.classList.add('main-header-nav--opened');
  } else {
    navMain.classList.add('main-header-nav--closed');
    navMain.classList.remove('main-header-nav--opened');
  }
});
