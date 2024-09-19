import React from 'react'

export default function Juiceleft({value, title, description}) {
  return (
    <div className='juiceleft'>
       <div className="card">
        <div className="amount">
          <span></span>
          <input type="number" value={value} disabled />
        </div>
        <span style={{ fontSize: '22px' }}>{title}</span>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
            {description}
        </p>
        <button>Get now</button>
      </div>
    </div>
  )
}
