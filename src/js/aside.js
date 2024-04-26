//боковое меню
const body = document.body
const main = document.querySelector('.main')
const burgerMenu = document.querySelector('.header__burger-btn')
const burgerClose = document.querySelector('.aside__back-btn')
const asideMenu = document.querySelector('.aside')
const wrapperMenu = document.querySelector('.wrapper-menu')
const bodyWrapper = document.querySelector('.body_wrapper')

burgerMenu.addEventListener('click', function () {
  asideMenu.classList.toggle('aside--active')
  asideMenu.classList.remove('aside--close')
  main.classList.toggle('main--active')

  wrapperMenu.classList.remove('aside--close')
  body.classList.toggle('lock')
})
if (asideMenu.classList.contains('aside--active')) {
  main.addEventListener('click', function (event) {
    event.stopPropagation()
  })
}

burgerClose.addEventListener('click', function () {
  asideMenu.classList.remove('aside--active')
  main.classList.remove('main--active')
  asideMenu.classList.toggle('aside--close')

  body.classList.remove('lock')
})

//header-message
const burgerMenu1 = document.querySelector('.header-message')
const burgerClose1 = document.querySelector('.btn-circle--close')
const wrapperMenu1 = document.querySelector('.modal')

burgerMenu1.addEventListener('click', function () {
  wrapperMenu1.classList.toggle('modal--active')
  wrapperMenu1.classList.remove('modal--close')
  main.classList.toggle('main--active')

  body.classList.add('lock')
})

burgerClose1.addEventListener('click', function () {
  wrapperMenu1.classList.remove('modal--active')
  wrapperMenu1.classList.toggle('modal--close')
  main.classList.remove('main--active')

  body.classList.remove('lock')
})

//header-message
const burgerMenu12 = document.querySelector('.header-call')
const wrapperMenu12 = document.querySelector('.modal-call')
const burgerClose12 = document.querySelector('.btn-circle--closes')

burgerMenu12.addEventListener('click', function () {
  wrapperMenu12.classList.toggle('modal--active')
  wrapperMenu12.classList.remove('modal--close')
  main.classList.toggle('main--active')

  body.classList.add('lock')
})

burgerClose12.addEventListener('click', function () {
  wrapperMenu12.classList.remove('modal--active')
  main.classList.remove('main--active')

  body.classList.remove('lock')
})

//aside-btn
const burgerMenu2 = document.querySelector('.aside-chat')
const wrapperActive = document.querySelector('.wrapper')

burgerMenu2.addEventListener('click', function () {
  wrapperMenu1.classList.toggle('modal--active')
  wrapperMenu1.classList.remove('modal--close')
  wrapperActive.classList.toggle('wrapper--active')

  asideMenu.classList.toggle('aside--active')
  body.classList.add('lock')
})

burgerClose1.addEventListener('click', function () {
  wrapperMenu1.classList.remove('modal--active')
  wrapperMenu1.classList.toggle('modal--close')
  wrapperActive.classList.remove('wrapper--active')

  body.classList.remove('lock')
})

//aside-call
const burgerMenu3 = document.querySelector('.aside-call')

burgerMenu3.addEventListener('click', function () {
  wrapperMenu12.classList.toggle('modal--active')
  wrapperMenu12.classList.remove('modal--close')
  wrapperActive.classList.toggle('wrapper--active')

  asideMenu.classList.toggle('aside--active')
  body.classList.add('lock')
})

burgerClose12.addEventListener('click', function () {
  wrapperMenu12.classList.remove('modal--active')
  wrapperMenu12.classList.toggle('modal--close')
  wrapperActive.classList.remove('wrapper--active')

  body.classList.remove('lock')
})
