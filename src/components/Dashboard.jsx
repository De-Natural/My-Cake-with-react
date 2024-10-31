// Dashboard.jsx
import React, { useState } from 'react';
import Scroll from './Scroll';
import Leftside from './Leftside';
import Rightsided from './Rightsided';
import Selection from './Selection';

// Import images to ensure paths are correct
import strawRight from '/src/assets/Subtract-img-straw-right.png';
import vanillaRight from '/src/assets/Subtractright-size.png';
import chocolateRight from '/src/assets/Subtract-Blum-game.png';
import blackForestRight from '/src/assets/Subtract-This-one.png';

export default function Dashboard() {
  const [rotation, setRotation] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      leftsideImage: '/assets/Vector-img-straw-left.png',
      circleImage: strawRight, // Using the imported image
      profileImage: '/assets/pngwing-2-strawberry-half-cake.png',
      description: 'Strawberry Cake',
      amount: 70.8,
      text: 'A delightful strawberry cake with a fresh strawberry filling and frosting.',
    },
    {
      leftsideImage: '/assets/Vectorleft-size.png',
      circleImage: vanillaRight,
      profileImage: '/assets/pngwinghalf.png',
      description: 'Vanilla Cake',
      amount: 75.0,
      text: 'A classic favourite, known for its rich and moist texture, often topped with chocolate icing.',
    },
    {
      leftsideImage: '/assets/Vector-img-brown-left.png',
      circleImage: chocolateRight,
      profileImage: '/assets/pngwing-1-brown-half-cake.png',
      description: 'Chocolate Cake',
      amount: 80.0,
      text: 'Rich chocolate cake topped with smooth chocolate icing, a favorite for all chocolate lovers.',
    },
    {
      leftsideImage: '/assets/Vector-img-black-left.png',
      circleImage: blackForestRight,
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
};
