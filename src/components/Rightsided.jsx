
import React from 'react';
import React, { useState, useEffect } from 'react';

// Import other images if necessary
import redCake from '/src/assets/pngwingred-cake.png';
import brownCake from '/src/assets/Group-1-brown-cake.png';
import strawCake from '/src/assets/pngwing-strawberry-cake.png';
import blackCake from '/src/assets/pngwing-black-cake.png';

export default function Rightsided({ rotation, image }) {

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/672367074304e3196adb1ad3/1ibh624a6';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='roll'>
      <div 
        className="circle" 
        style={{ 
          transform: `rotate(${rotation}deg)`, 
          transition: 'transform 0.5s ease-in-out',
          backgroundImage: `url(${image})`, // Ensure image is directly passed here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="red">
          <img src={redCake} alt="Red Cake" style={{ height: '250px', width: '300px', marginTop: '-70px', marginLeft: '10px' }} />
        </div>
        <div className="brown">
          <img src={brownCake} alt="Brown Cake" style={{ height: '320px', width: '350px', marginTop: '-10px', marginLeft: '10px' }} />
        </div>
        <div className="straw">
          <img src={strawCake} alt="Strawberry Cake" style={{ height: '320px', width: '350px', marginTop: '-18px', marginLeft: '-80px' }} />
        </div>
        <div className="black">
          <img src={blackCake} alt="Black Cake" style={{ height: '320px', width: '330px', marginTop: '-25px', marginRight: '-20px' }} />
        </div>
      </div>
    </div>
  );
}
