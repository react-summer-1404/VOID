import React from 'react'
import footerbg from '../assets/footerbg.png'
import logo2 from "../assets/Logo2.png"
import polygon1 from "../assets/Polygon.png";
import polygon2 from "../assets/Polygon2.png";
import InstaInaBtn from './reusableComps/footerComps/InstaInaBtn';
import FooterUs from './reusableComps/footerComps/footerUs';
import Links from './reusableComps/footerComps/Links'

const Footer = () => {
  return (
    <div className='relative'>
    <section className="text-white py-12 px-16 flex flex-col md:flex-row justify-between items-start gap-10 z-300 relative " style={{ backgroundImage: `url(${footerbg})` }} >

        <InstaInaBtn />

        <FooterUs />


          <div className="text-center flex flex-col items-center flex-1 gap-3 z-20">
            <img src={logo2} alt="" className='mt-0'/>
            <p className="mb-4 text-sm">همین حالا اقدام کن و به ما ملحق شو</p>
            <div className="flex items-center bg-white rounded-lg overflow-hidden w-full max-w-xs">
              <input
                type="text"
                placeholder="متن پیام شما"
                className="flex-1 p-2 text-gray-800 outline-none text-right"
              />
              <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 text-white font-semibold">
                ارسال
              </button>
            </div>
        </div>
        <Links />
      </section>
      
      <img src={polygon1} className=' absolute z-50 -top-30 right-0'></img>
      <img src={polygon2} className=' absolute  -top-10 right-0 z-20'></img>
    
    </div>
    
  )
}

export default Footer