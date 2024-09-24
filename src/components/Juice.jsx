import React, { useState, useEffect } from 'react';
import '../css/juice.css';
import Juiceleft from './Juiceleft';
import JuiceRight from './JuiceRight';

function Juice() {
  const [currentSlide, setCurrentSlide] = useState(0); // Shared state

  const juices = [
    {
      value: 23.4,
      title: "Kiwi Fruit Juice",
      description: "A classic favourite, known for its rich and moist texture, often topped with chocolate icing or chocolate lovers.",
      bgImage: "/src/assets/Vector-Lemon-map.png",
      bgColor: "#FBF1EF"
    },
    {
      value: 19.9,
      title: "Pineapple Juice",
      description: "Refreshing and sweet, a tropical delight for juice lovers.",
      bgImage: "/src/assets/Vector-Orange-map.png",
      bgColor: "#FBF1EF"
    },
    {
      value: 15.5,
      title: "Orange Juice",
      description: "A citrusy classic, full of Vitamin C and bursting with freshness.",
      bgImage: "/src/assets/Vector-Pinepple-map.png",
      bgColor: "#FBF1EF"
    },
    {
      value: 12.3,
      title: "Strawberry Juice",
      description: "Sweet and tangy, a favorite blend of freshness and flavor.",
      bgImage: "/public/assets/Vector-Straw-berry-map.png",
      bgColor: "#FBF1EF"
    }
  ];

  // Ensure the currentSlide doesn't exceed the array length
  const currentJuice = juices[currentSlide] || { value: 0, title: "Juice not found", description: "", bgColor: "#ffffff" };

  const handleSlideChange = (swiper) => {
    const totalSlides = juices.length;
    const newSlideIndex = swiper.activeIndex;
    const wrappedIndex = newSlideIndex % totalSlides;
    setCurrentSlide(wrappedIndex);
  };

  useEffect(() => {
    console.log("Current slide has been updated:", currentSlide);
    console.log("Current Juice Info:", currentJuice.title, currentJuice.value, currentJuice.description);
  }, [currentSlide]);

  return (
    <div className='Juice-class' style={{ backgroundColor: currentJuice.bgColor }}> {/* Apply dynamic background color */}
      <Juiceleft
        value={currentJuice.value}
        title={currentJuice.title}
        description={currentJuice.description}
        bgImage={currentJuice.bgImage}
      />

      <JuiceRight onSlideChange={handleSlideChange} />
      <div className="selection">
        <div className="icons"> 
          <img src="/src/assets/material-symbols_cake-outline cake-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
          </div>
        <div className="icons">
          <img src="/src/assets/Vector-drink-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
        </div>
        <div className="icons">
          <img src="/src/assets/Vector-chat-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
        </div>
        <div className="icons">
          <img src="/src/assets/heroicons-outline_thumb-up thumbUp-icon.png" alt="" style={{height: '30px', width: '30px', cursor: 'pointer'}} />
        </div>
      </div>
    </div>
  );

}

export default Juice;
