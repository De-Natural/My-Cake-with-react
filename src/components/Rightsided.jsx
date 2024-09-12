import React from 'react';

// Import images
import redCake from '/src/assets/pngwingred-cake.png';
import brownCake from '/src/assets/Group-1-brown-cake.png';
import strawCake from '/src/assets/pngwing-strawberry-cake.png';
import blackCake from '/src/assets/pngwing-black-cake.png';

export default function Rightsided({ rotation, image }) {
  console.log('Current image URL:', image);
  return (
    <div className='roll'>
      <div 
        className="circle" 
        style={{ 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.5s ease-in-out',
          backgroundImage: image ? `url(${image})` : 'none', // Use the passed image prop
          backgroundSize: '200% 200%',
          backgroundPosition: 'center',
        }}
      >
        <div className="red">
          <img src={redCake} alt="" style={{height: '250px', width: '300px', marginTop: '-70px', marginLeft: '10px'}}/>
        </div>
        <div className="brown">
          <img src={brownCake} alt="" style={{height: '320px', width: '350px', marginTop: '-10px', marginLeft: '10px'}} />
        </div>
        <div className="straw">
          <img src={strawCake} alt="" style={{height: '320px', width: '350px', marginTop: '-18px', marginLeft: '-80px'}}/>
        </div>
        <div className="black">
          <img src={blackCake} alt="" style={{height: '320px', width: '330px', marginTop: '-25px', marginRight: '-20px'}} />
        </div>
      </div>
    </div>
  );
}
