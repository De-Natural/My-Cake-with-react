import React from 'react'
import { Leftside } from './Leftside'
import Rightsided from './Rightsided'
import Scroll from './Scroll'

export const Dashboard = () => {
  return (
    <div className='main'>
      <Leftside />
      <Scroll />
      <Rightsided />
    </div>
  )
}
