const swiper = new Swiper('.swiper', {
  spaceBetween: 50,
  slidesPerView: 2,
  autoHeight: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
  },
});
