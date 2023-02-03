import Swiper, { Navigation, Pagination, Thumbs, Autoplay, } from "swiper"; 
Swiper.use([Navigation, Pagination, Thumbs, Autoplay, ]); 

const popularSlider = new Swiper(".popular__slider", { 
    slidesPerView: 1, 
    spaceBetween: 28, 
    speed: 600,
    loop: true,
    navigation: { 
      nextEl: ".popular__switch--next", 
      prevEl: ".popular__switch--prev", 
    },
    breakpoints: {
      700: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      },
      500: {
        slidesPerView: 1,
      }
    }
});

const partnersSlider_1 = new Swiper(".partners__slider", { 
  slidesPerView: 1, 
  spaceBetween: 28, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".", 
    prevEl: ".", 
  },
});
