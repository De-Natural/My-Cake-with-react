import React from 'react';
import React, { useState, useEffect } from 'react';

export default function Leftside({ imageData = {} }) {
  // Default values for properties in case imageData is undefined or missing some properties
  const {
    leftsideImage = '/assets/Vector-img-straw-left.png',
    amount = 0,
    description = 'No description provided',
    text = '',
    profileImage = '/assets/pngwing-2-strawberry-half-cake.png'
  } = imageData || {}; // Fallback to an empty object if imageData is undefined

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
    <div 
      className='leftsided'
      style={{
        backgroundImage: `url(${leftsideImage})`,
        backgroundSize: '478px 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="card">
        <div className="amount">
          <span></span>
          <input type="number" value={amount} disabled />
        </div>
        <span style={{ fontSize: '22px' }}>{description}</span>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          {text}
        </p>
        <button>Get now</button>
      </div>
      <div
        className="half_cake"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '90px'
        }}
      >
      </div>
    </div>
  );
};
