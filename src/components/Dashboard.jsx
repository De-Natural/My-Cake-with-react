import React, { useState } from 'react';
import Leftside from './Leftside';
import Scroll from './Scroll';
import Rightsided from './Rightsided';
import Selection from './Selection';

export default function Dashboard() {
  const [rotation, setRotation] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      leftsideImage: '/assets/Vector-img-straw-left.png',
      circleImage: '/assets/Subtract-img-straw-right.png',
      profileImage: '/assets/pngwing-2-strawberry-half-cake.png',
      description: 'Strawberry Cake',
      amount: 70.8,
      text: 'A delightful strawberry cake with a fresh strawberry filling and frosting.',
    },
    {
      leftsideImage: '/assets/Vectorleft-size.png',
      circleImage: '/assets/Subtractright-size.png',
      profileImage: '/assets/pngwinghalf.png',
      description: 'Vanilla Cake',
      amount: 75.0,
      text: 'A classic favourite, known for its rich and moist texture, often topped with chocolate icing.',
    },
    {
      leftsideImage: '/assets/Vector-img-brown-left.png',
      circleImage: '/assets/Subtract-Blum-game.png',
      profileImage: '/assets/pngwing-1-brown-half-cake.png',
      description: 'Chocolate Cake',
      amount: 80.0,
      text: 'Rich chocolate cake topped with smooth chocolate icing, a favorite for all chocolate lovers.',
    },
    {
      leftsideImage: '/assets/Vector-img-black-left.png',
      circleImage: '/assets/Subtract-This-one.png',
      profileImage: '/assets/pngwing-3-black-half-cake.png',
      description: 'Black Forest Cake',
      amount: 85.0,
      text: 'A decadent Black Forest cake, rich with cherries and whipped cream.',
    },
  ];

  const handleNextSlide = () => {
    setRotation((prevRotation) => prevRotation - 90);
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setRotation((prevRotation) => prevRotation + 90);
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="main">
      <div className="title">
        <p>Cake Design by Kayamo</p>
      </div>
      <Leftside imageData={images[imageIndex]} />
      <Scroll onNextSlide={handleNextSlide} onPrevSlide={handlePrevSlide} />
      <Rightsided rotation={rotation} image={images[imageIndex].circleImage} />
      <Selection />
    </div>
  );
}
