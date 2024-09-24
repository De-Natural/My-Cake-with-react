import React from 'react';
import { useEffect } from 'react';

export default function Juiceleft({ value = 0, title = "Unknown Juice", description = "No description available", bgImage = '' }) {
  useEffect(() => {
    console.log("Juiceleft props:", { value, title, description, bgImage });
  }, [value, title, description, bgImage]);

  return (
    <div className="juiceleft" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='card'>
        <div className="amount">
          <span></span>
          <input type="number" value={value || 0} disabled />
        </div>
        <span style={{ fontSize: '22px' }}>{title}</span>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          {description}
        </p>
        <button>Get now</button>
      </div>
    </div>
  );
}

