import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Scroll() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="display: none;"></span>`;
        },
      }}
      scrollbar={{
        draggable: true,
        el: 'style{{ width: 200px;}}',
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/pngwingred-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide><img src="/src/assets/Group 1 brown-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing strawberry-cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      <SwiperSlide> <img src="/src/assets/pngwing black cake.png" alt="" style={{width: "60px"}}/></SwiperSlide>
      ...
    </Swiper>
  )
}
