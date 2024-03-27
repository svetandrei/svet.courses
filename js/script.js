/**
 * Burger menu
 * @type {Element}
 */
let burger = document.querySelector('.burger');
let links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function (){
  this.classList.toggle('burger__active');
  document.querySelector('.' + this.dataset.menu).classList.toggle('header__nav-active');
  document.body.classList.toggle('stop-scroll')
});

links.forEach(function(el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger__active');
    document.querySelector('.header__nav').classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  });
});

