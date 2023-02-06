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

const partnersSlider_1 = new Swiper(".partners__slider-1", { 
  slidesPerView: 1, 
  spaceBetween: 28, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".partners__switch--next-one", 
    prevEl: ".partners__switch--prev-one", 
  },
});

const partnersSlider_2 = new Swiper(".partners__slider-2", { 
  slidesPerView: 1, 
  spaceBetween: 28, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".partners__switch--next-two", 
    prevEl: ".partners__switch--prev-two", 
  },
});

const partnersSlider_3 = new Swiper(".partners__slider-3", { 
  slidesPerView: 1, 
  spaceBetween: 28, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".partners__switch--next-three", 
    prevEl: ".partners__switch--prev-three", 
  },
});

const partnersSlider_4 = new Swiper(".partners__slider-4", { 
  slidesPerView: 1, 
  spaceBetween: 28, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".partners__switch--next-four", 
    prevEl: ".partners__switch--prev-four", 
  },
});

const partnersSlider_5 = new Swiper(".partners__slider-5", { 
  slidesPerView: 1, 
  spaceBetween: 28, 
  speed: 600,
  loop: true,
  navigation: { 
    nextEl: ".partners__switch--next-five", 
    prevEl: ".partners__switch--prev-five", 
  },
});