import React from 'react';

export const Leftside = ({ imageData }) => {
  console.log(imageData);
  return (
    <div 
    className='leftsided'
    style={{
      backgroundImage: `url(${imageData.leftsideImage})`,
      backgroundSize: '478px 100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
    >
      <div className="card">
        <div className="amount">
          <span></span>
          <input type="number" value={imageData.amount} disabled />
        </div>
        <span style={{ fontSize: '22px' }}>{imageData.description}</span>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          {imageData.text}
        </p>
        <button>Get now</button>
      </div>
      <div
        className="half_cake"
        style={{
          backgroundImage: `url(${imageData.profileImage})`,
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
