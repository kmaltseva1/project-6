// читать больше
const wrapperText = document.querySelector('.services-section__text--more')
const textBtn = document.querySelector('.services-section__btn')
textBtn.addEventListener('click', function () {
  wrapperText.classList.toggle('services-section__text--large')
})

//изменение кнопки
const contentBtnText = document.querySelector('.services-section__wrapper-text')
textBtn.addEventListener('click', function () {
  const hasClass = contentBtnText.matches('.services-section__btn-more')
  contentBtnText.classList.toggle('services-section__btn-more')
  textBtn.textContent = hasClass ? 'Читать далее' : 'Скрыть'
  textBtn.classList.toggle('btn-more--click')
})
//кнопка для kj
const content = document.querySelector('.brands__container')
const button = document.querySelector('.brands__btn')
button.addEventListener('click', function () {
  const hasClass = content.matches('.content-height--l')
  content.classList.toggle('content-height--l')
  button.textContent = hasClass ? 'Показать всё' : 'Скрыть'
  button.classList.toggle('read-more--click')
})

//кнопка для брендов
const content1 = document.querySelector('.devices__container')
const button1 = document.querySelector('.devices__btn')
button1.addEventListener('click', function () {
  const hasClass = content1.matches('.content-height--l')
  content1.classList.toggle('content-height--l')
  button1.textContent = hasClass ? 'Показать всё' : 'Скрыть'
  button1.classList.toggle('read-more--click')
})
