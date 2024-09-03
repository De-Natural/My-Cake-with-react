import React from 'react'

export const Leftside = () => {
  return (
    <div className='leftsided'>
      <div className="card">
            <div className="amount">
                <span></span>
                <input type="number" id="" value={70.8} disabled />
            </div>
            <span style={{fontSize: '22px'}}>Vanilla Cake</span>
            <p style={{textAlign: 'center', fontSize: '18px'}}>
                A classic favourite, known  for 
                its rich and moist texture, often
                topped with chocolate icing or
                chocolate lovers.
            </p>
            <button>Get now</button>
      </div>
      <div className="half_cake"></div>
    </div>
  )
}
