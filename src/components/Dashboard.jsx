import React, { useState } from 'react';
import { Leftside } from './Leftside';
import Scroll from './Scroll';
import Rightsided from './Rightsided';

export const Dashboard = () => {
  const [rotation, setRotation] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    {
      leftsideImage: '/src/assets/Vector-img-straw-left.png',
      circleImage: '/src/assets/Subtract-img-straw-right.png',
      profileImage: '/src/assets/pngwing-2-strawberry-half-cake.png',
      description: 'Strawberry Cake',
      amount: 70.8,
      text: 'A delightful strawberry cake with a fresh strawberry filling and frosting.'
    },
    {
      leftsideImage: '/src/assets/Vectorleft-size.png',
      circleImage: '/src/assets/Subtractright-size.png',
      profileImage: '/src/assets/pngwinghalf.png',
      description: 'Vanilla Cake',
      amount: 75.0,
      text: 'A classic favourite, known for its rich and moist texture, often topped with chocolate icing or chocolate lovers.'
    },
    {
      leftsideImage: '/src/assets/Vector-img-brown-left.png',
      circleImage: '/src/assets/Subtract-Blum-game.png',
      profileImage: '/src/assets/pngwing-1-brown-half-cake.png',
      description: 'Chocolate Cake',
      amount: 80.0,
      text: 'Rich chocolate cake topped with smooth chocolate icing, a favorite for all chocolate lovers.'
    },
    {
      leftsideImage: '/src/assets/Vector-img-black-left.png',
      circleImage: '/src/assets/Subtract-This-one.png',
      profileImage: '/src/assets/pngwing-3-black-half-cake.png',
      description: 'Black Forest Cake',
      amount: 85.0,
      text: 'A decadent Black Forest cake, rich with cherries and whipped cream.'
    }
  ];

  const handleNextSlide = () => {
    setRotation(prevRotation => prevRotation - 90);
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setRotation(prevRotation => prevRotation + 90);
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  console.log(imageIndex);

  return (
    <div className='main'>
      <div className="title">
        <p>Cake Design by Kayamo</p>
      </div>
      <Leftside imageData={images[imageIndex]} />
      <Scroll onNextSlide={handleNextSlide} onPrevSlide={handlePrevSlide} />
      <Rightsided rotation={rotation} image={images[imageIndex].circleImage} />
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
};
