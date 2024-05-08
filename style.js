

var swiper =new Swiper(".swiper",{
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },
    slidesPerGroup:3,
    //loop:true,
    centerSlide:"true",
    fade:"true",
    grabCursor:"true",
    pagination:{
  el:".swiper-pagination",
  clickable:true,
  dynamicBullets:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    autoplay: {
      delay: 4000,
    },
  
  })
  