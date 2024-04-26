//боковое меню
const body = document.body
const burgerMenu = document.querySelector('.header__burger-btn')
const burgerClose = document.querySelector('.aside__back-btn')
const asideMenu = document.querySelector('.aside')
const wrapperMenu = document.querySelector('.wrapper-menu')

burgerMenu.addEventListener('click', function () {
  asideMenu.classList.toggle('active')
  asideMenu.classList.remove('close')

  wrapperMenu.classList.toggle('wrapper-menu--active')
  wrapperMenu.classList.remove('close')
  body.classList.toggle('lock')
})

burgerClose.addEventListener('click', function () {
  asideMenu.classList.remove('active')
  asideMenu.classList.toggle('close')

  wrapperMenu.classList.remove('wrapper-menu--active')
  body.classList.remove('lock')
})

//header-message
const burgerMenu1 = document.querySelector('.header-message')
const burgerClose1 = document.querySelector('.btn-circle--close')
const wrapperMenu1 = document.querySelector('.modal')

burgerMenu1.addEventListener('click', function () {
  wrapperMenu1.classList.toggle('actives')
  wrapperMenu1.classList.remove('closes')

  wrapperMenu.classList.toggle('wrapper-menu--active')
  body.classList.add('lock')
})

burgerClose1.addEventListener('click', function () {
  wrapperMenu1.classList.remove('actives')
  wrapperMenu1.classList.toggle('closes')

  wrapperMenu.classList.remove('wrapper-menu--active')
  body.classList.remove('lock')
})

//header-call
const burgerMenu12 = document.querySelector('.header-call')
const wrapperMenu12 = document.querySelector('.modal-call')
const burgerClose12 = document.querySelector('.btn-circle--closes')

burgerMenu12.addEventListener('click', function () {
  wrapperMenu12.classList.toggle('actives')
  wrapperMenu12.classList.remove('closes')

  wrapperMenu.classList.toggle('wrapper-menu--active')
  body.classList.add('lock')
})

burgerClose12.addEventListener('click', function () {
  wrapperMenu12.classList.remove('actives')
  // wrapperMenu12.classList.toggle('closes')

  wrapperMenu.classList.remove('wrapper-menu--active')
  body.classList.remove('lock')
})

//aside-btn
const burgerMenu2 = document.querySelector('.aside-chat')

burgerMenu2.addEventListener('click', function () {
  wrapperMenu1.classList.toggle('actives')
  wrapperMenu1.classList.remove('closes')

  asideMenu.classList.toggle('active')
  body.classList.add('lock')
  wrapperMenu.classList.add('wrapper-menu--active')
})

burgerClose1.addEventListener('click', function () {
  wrapperMenu1.classList.remove('actives')
  wrapperMenu1.classList.toggle('closes')

  body.classList.remove('lock')
  wrapperMenu.classList.remove('wrapper-menu--active')
})

//aside-btn
const burgerMenu3 = document.querySelector('.aside-call')

burgerMenu3.addEventListener('click', function () {
  wrapperMenu12.classList.toggle('actives')
  wrapperMenu12.classList.remove('closes')

  asideMenu.classList.toggle('active')
  body.classList.add('lock')
  wrapperMenu.classList.add('wrapper-menu--active')
})

burgerClose12.addEventListener('click', function () {
  wrapperMenu12.classList.remove('actives')
  wrapperMenu12.classList.toggle('closes')

  body.classList.remove('lock')
  wrapperMenu.classList.remove('wrapper-menu--active')
})
