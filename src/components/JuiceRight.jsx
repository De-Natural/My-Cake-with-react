import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Correct CSS import for Swiper

export default function JuiceRight() {
  return (
    <div className='JuiceRight'>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='juiceSwiper'
      >
        <SwiperSlide><img src="/assets/pngwing-Lemon-juice-2.png" alt="Lemon Juice" /></SwiperSlide>
        <SwiperSlide><img src="/assets/pngwing-Pineapple-juice.png" alt="Pineapple Juice" /></SwiperSlide>
        <SwiperSlide><img src="/assets/pngwing-Orange-juice-cup.png" alt="Orange Juice" /></SwiperSlide>
        <SwiperSlide><img src="/assets/pngwing-5-Straw-berry-juice.png" alt="Strawberry Juice" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
