import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs'
function getSwiper(className) {
  return new Swiper(className, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 'auto',
    keyboard: true,

    breakpoints: {
      768: {
        initialSlide: 0,
        spaceBetween: 0,
        enabled: false
      }
    }
  })
}
getSwiper('.brands__swiper')
getSwiper('.devices__swiper')
getSwiper('.price__container')
