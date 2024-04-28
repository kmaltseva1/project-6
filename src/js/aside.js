//боковое меню
const body = document.body
const main = document.querySelector('.main')
const burgerOpen = document.querySelector('.header__burger-btn')
const burgerClose = document.querySelector('.aside__back-btn')
const asideMenu = document.querySelector('.aside')

burgerOpen.addEventListener('click', function (event) {
  event.stopPropagation()
  asideMenu.classList.add('aside--active')

  main.classList.add('main--active')
  body.classList.add('lock')
})
burgerClose.addEventListener('click', function () {
  asideMenu.classList.remove('aside--active')

  main.classList.remove('main--active')
  body.classList.remove('lock')
})

//message
const openMessage = document.querySelector('.header-message')
const closeMessage = document.querySelector('.btn-circle--close')
const wrapperMenu1 = document.querySelector('.modal')

openMessage.addEventListener('click', function (event) {
  event.stopPropagation()
  wrapperMenu1.classList.add('modal--active')

  main.classList.add('main--active')
  body.classList.add('lock')
})

closeMessage.addEventListener('click', function () {
  wrapperMenu1.classList.remove('modal--active')
  main.classList.remove('main--active')

  body.classList.remove('lock')
})

//call
const openCall = document.querySelector('.header-call')
const wrapperMenu2 = document.querySelector('.modal-call')
const closeCall = document.querySelector('.btn-circle--closes')

openCall.addEventListener('click', function (event) {
  event.stopPropagation()
  wrapperMenu2.classList.add('modal--active')

  main.classList.add('main--active')
  body.classList.add('lock')
})

closeCall.addEventListener('click', function () {
  wrapperMenu2.classList.remove('modal--active')

  main.classList.remove('main--active')
  body.classList.remove('lock')
})

//aside-message
const openAsideMessage = document.querySelector('.aside-chat')
const wrapperActive = document.querySelector('.wrapper')

openAsideMessage.addEventListener('click', function (event) {
  event.stopPropagation()
  wrapperMenu1.classList.add('modal--active')
  wrapperActive.classList.add('wrapper--active')
  main.classList.remove('main--active')

  asideMenu.classList.remove('aside--active')
  body.classList.add('lock')
})

closeMessage.addEventListener('click', function () {
  wrapperMenu1.classList.remove('modal--active')
  wrapperActive.classList.remove('wrapper--active')

  body.classList.remove('lock')
})

//aside-call
const openAsideCall = document.querySelector('.aside-call')

openAsideCall.addEventListener('click', function (event) {
  event.stopPropagation()
  wrapperMenu2.classList.add('modal--active')
  wrapperActive.classList.add('wrapper--active')
  main.classList.remove('main--active')

  asideMenu.classList.remove('aside--active')
  body.classList.add('lock')
})

closeCall.addEventListener('click', function () {
  wrapperMenu2.classList.remove('modal--active')
  wrapperActive.classList.remove('wrapper--active')

  body.classList.remove('lock')
})

main.addEventListener('click', closeAll)

function closeAll() {
  asideMenu.classList.remove('aside--active')
  wrapperMenu1.classList.remove('modal--active')
  main.classList.remove('main--active')
  wrapperActive.classList.remove('wrapper--active')

  body.classList.remove('lock')
  wrapperMenu2.classList.remove('modal--active')
}
