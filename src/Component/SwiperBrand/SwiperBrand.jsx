import React from 'react'
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperBrand() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Autoplay]}
    spaceBetween={50}
    slidesPerView={3}
    autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
       }}
  loop
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper>
  )
}
