import React from 'react'
import logo from "./assets/Logo2.png"
import ButtonsDash from './dashComponents/ButtonsDash'
import DownBtnDash from './dashComponents/DownBtnDash'
const Dashboard = () => {
  return (
    <div className='w-full h-screen overflow-hidden bg-neutral-600 flex flex-row gap-20 right-0'>
        <div>
            <img src={logo} alt="" className=' mr-8 mt-15' />
            <ButtonsDash />
            <DownBtnDash />
        </div>
        <div>2</div>
    </div>
  )
}

export default Dashboard