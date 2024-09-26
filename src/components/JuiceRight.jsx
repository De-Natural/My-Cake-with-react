import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function JuiceRight({ onSlideChange }) {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in"); // Animation class

  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;

    // Set fade-out animation for the current slide
    setAnimationClass("fade-out");

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimationClass("fade-in");
    }, 2000); 

    if (onSlideChange) {
      onSlideChange(swiper); // Call external handler if provided
    }
  };

  return (
    <div className='JuiceRight'>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSlideChange={handleSlideChange}  // Call slide change handler
        className='juiceSwiper'
      >
        <SwiperSlide className={animationClass}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/pngwing-6-Lemon-juice-1.png" alt="Lemon Juice" style={{ height: '80%', width: '50%', left: '30px', position: 'absolute', zIndex: '2' }} />
            <img src="/assets/pngwing-Lemon-juice-2.png" alt="Lemon 2 Juice" style={{ height: '85%', width: '60%', right: '10px', position: 'absolute', zIndex: '-3' }} />
          </div>
        </SwiperSlide>

        <SwiperSlide className={animationClass}>
          <img src="/assets/pngwing- Pineapple-juice.png" alt="Pineapple Juice" style={{ height: '100%', width: '100%' }} />
        </SwiperSlide>

        <SwiperSlide className={animationClass}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/pngwing-Orange-juice-cup.png" alt="Orange Juice" style={{ height: '60%', width: '80%' }} />
            <img src="/assets/pngwing-4-Orange-juice-friut-right.png" alt="half Orange Juice" style={{ height: '50%', width: '60%', right: '-80px', bottom: '0', position: 'absolute', zIndex: '-1' }} />
            <img src="/assets/pngwing-5-Orange-juice-friut-left.png" alt="half Orange Juice" style={{ height: '50%', width: '60%', left: '-70px', bottom: '0', position: 'absolute', zIndex: '-1' }} />
          </div>
        </SwiperSlide>

        <SwiperSlide className={animationClass}>
          <img src="/assets/pngwing-5-Straw-berry-juice.png" alt="Strawberry Juice" />
        </SwiperSlide>
        <SwiperSlide className={animationClass}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/pngwing-6-Lemon-juice-1.png" alt="Lemon Juice" style={{ height: '80%', width: '50%', left: '30px', position: 'absolute', zIndex: '2' }} />
            <img src="/assets/pngwing-Lemon-juice-2.png" alt="Lemon 2 Juice" style={{ height: '85%', width: '60%', right: '10px', position: 'absolute', zIndex: '-3' }} />
          </div>
        </SwiperSlide>

        <SwiperSlide className={animationClass}>
          <img src="/assets/pngwing- Pineapple-juice.png" alt="Pineapple Juice" style={{ height: '100%', width: '100%' }} />
        </SwiperSlide>

        <SwiperSlide className={animationClass}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/pngwing-Orange-juice-cup.png" alt="Orange Juice" style={{ height: '60%', width: '80%' }} />
            <img src="/assets/pngwing-4-Orange-juice-friut-right.png" alt="half Orange Juice" style={{ height: '50%', width: '60%', right: '-80px', bottom: '0', position: 'absolute', zIndex: '-1' }} />
            <img src="/assets/pngwing-5-Orange-juice-friut-left.png" alt="half Orange Juice" style={{ height: '50%', width: '60%', left: '-70px', bottom: '0', position: 'absolute', zIndex: '-1' }} />
          </div>
        </SwiperSlide>

        <SwiperSlide className={animationClass}>
          <img src="/assets/pngwing-5-Straw-berry-juice.png" alt="Strawberry Juice" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
