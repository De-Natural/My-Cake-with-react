import React from 'react'
import { Leftside } from './Leftside'
import Rightsided from './Rightsided'
import Scroll from './Scroll'

export const Dashboard = () => {
  return (
    <div className='main'>
      <div className="title">
        <p>Cake Design by Kayamo</p>
      </div>
      <Leftside />
      <Scroll />
      <Rightsided />
    </div>
  )
}
