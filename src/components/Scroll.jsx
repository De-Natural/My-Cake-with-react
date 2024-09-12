import React, { useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Scroll({ onNextSlide, onPrevSlide }) {
  const [rotation, setRotation] = useState(0);

  const handleNextSlide = () => {
    // Rotate counterclockwise (anti-clockwise)
    setRotation(prevRotation => prevRotation - 90);
    if (onNextSlide) onNextSlide(); // Call the parent handler if provided
  };

  const handlePrevSlide = () => {
    // Rotate clockwise
    setRotation(prevRotation => prevRotation + 90);
    if (onPrevSlide) onPrevSlide(); // Call the parent handler if provided
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation
      scrollbar={{ draggable: true }}
      onSlideNextTransitionStart={handleNextSlide}  // When sliding forward
      onSlidePrevTransitionStart={handlePrevSlide}  // When sliding backward
    >
      <SwiperSlide><img src="/src/assets/Group-1-brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group-1-brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group-1-brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group-1-brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group-1-brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing-strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Vector-left-arrow" alt="" style={{width: "60px", position: 'absolute'}}/></SwiperSlide>
    </Swiper>
  );
}
