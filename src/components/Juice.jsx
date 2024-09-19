import React, { useState, useEffect } from 'react';
import '../css/juice.css'
import Juiceleft from './Juiceleft'
import JuiceRight from './JuiceRight'

function Juice() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const juices = [
    {
      value: 23.4,
      title: "Kiwi Fruit Juice",
      description: "A classic favourite, known for its rich and moist texture, often topped with chocolate icing or chocolate lovers."
    },
    {
      value: 19.9,
      title: "Pineapple Juice",
      description: "Refreshing and sweet, a tropical delight for juice lovers."
    },
    {
      value: 15.5,
      title: "Orange Juice",
      description: "A citrusy classic, full of Vitamin C and bursting with freshness."
    },
    {
      value: 12.3,
      title: "Strawberry Juice",
      description: "Sweet and tangy, a favorite blend of freshness and flavor."
    }
  ];
 
  // Update the current slide index
  const handleSlideChange = (swiper) => {
    console.log("Slide changed to:", swiper.activeIndex);
    setCurrentSlide(swiper.activeIndex);
  };

  useEffect(() => {
    console.log("Current slide has been updated:", currentSlide);
    console.log("Current Juice Info:", juices[currentSlide]?.title, juices[currentSlide]?.value, juices[currentSlide]?.description);
  }, [currentSlide]);

  return (
    <div className='Juice-class'>
      <Juiceleft
       value={juices[currentSlide]?.value}
       title={juices[currentSlide]?.title}
       description={juices[currentSlide]?.description}
      />
      <JuiceRight onSildeChange={handleSlideChange} />
    </div>
    
  )
}

export default Juice