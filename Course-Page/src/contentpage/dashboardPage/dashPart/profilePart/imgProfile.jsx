import React from 'react'
import Dock from "../../../../assets/dashPic/dock.png"
import Add from "../../../../assets/dashPic/add.png"

const ImgProfile  = () => {
  return (
    <div className='lg:h-full h-screen flex lg-mb-0 mb-30 mt-2 lg:flex-row-reverse flex-col '>
      <div className='lg:w-[24%] w-full h-[24%] lg:h-[30%] mt-2 ml-2 border border-dashed items-center flex rounded-[32px]'><img className='m-auto' src={Add} /></div>
      <img src={Dock} className='lg:w-[25%] w-[500px] h-[24%] lg:h-[30%] lg:scale-120 rounded-[32px]'/>
      <img src={Dock} className='lg:w-[25%] w-[500px] h-[24%] lg:h-[30%] lg:scale-120 rounded-[32px]'/>
      <img src={Dock} className='lg:w-[25%] w-[500px] h-[24%] lg:h-[30%] lg:scale-120 rounded-[32px]'/>
      

    </div>
  )
}

export default ImgProfile 