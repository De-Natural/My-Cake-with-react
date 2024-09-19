import React from 'react'

export default function Juiceleft() {
  return (
    <div className='juiceleft'>
       <div className="card">
        <div className="amount">
          <span></span>
          <input type="number" value={23.4} disabled />
        </div>
        <span style={{ fontSize: '22px' }}>Kiwi Fruit Juice</span>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
            A classic favourite, known  for 
            its rich and moist texture, often
            topped with chocolate icing or
            chocolate lovers.
        </p>
        <button>Get now</button>
      </div>
    </div>
  )
}
