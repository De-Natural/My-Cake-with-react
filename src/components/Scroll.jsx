import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/Vector left-arrow" alt="" style={{width: "60px", position: 'absolute'}}/></SwiperSlide>
      ...
    </Swiper>
  );
};



