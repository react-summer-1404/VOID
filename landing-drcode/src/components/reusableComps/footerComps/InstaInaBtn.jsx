import React from 'react'
import Instagram from "../../../assets/Instagram.png";
import Facebook from "../../../assets/Facebook.png";
import Telegram from "../../../assets/Telegram.png";
import WatsApp from "../../../assets/WatsApp.png";

const InstaInaBtn = () => {
  return (
         <div className='relative z-20'>
              <div className=' flex flex-col justify-center items-center gap-7 -mt-23 text-2xl z-30 '>
                <img src={Facebook} alt="fuck" className=' cursor-pointer hover:opacity-70 transition' />
                <img src={Instagram} alt="" className=' cursor-pointer hover:opacity-70 transition'/>
                <img src={Telegram} alt="" className=' cursor-pointer hover:opacity-70 transition'/>
                <img src={WatsApp} alt="" className=' cursor-pointer hover:opacity-70 transition'/>
              </div>
            </div>
  )
}

export default InstaInaBtn