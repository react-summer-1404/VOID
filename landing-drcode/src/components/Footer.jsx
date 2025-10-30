import React from 'react'
import footerbg from '../assets/footerbg.png'
import { MdEmail } from "react-icons/md";
import {FaInstagram,FaTelegramPlane,FaWhatsapp,FaPhoneAlt, FaLocationArrow, FaFacebook,} from "react-icons/fa";
import logo2 from "../assets/Logo2.png"


const Footer = () => {
  return (
    <section className="text-white py-12 px-16 flex flex-col md:flex-row justify-between items-start gap-10 z-15 " style={{ backgroundImage: `url(${footerbg})` }} >
        <div className='relative'>
        <div className=' absolute flex flex-col justify-center items-center gap-9 mt-0 text-2xl z-30 -top-23'>
                    <FaFacebook className="cursor-pointer hover:text-pink-300 transition" />
          <FaInstagram className="cursor-pointer hover:text-blue-300 transition" />
          <FaTelegramPlane className="cursor-pointer hover:text-green-300 transition" />
          <FaWhatsapp className="cursor-pointer hover:text-green-300 transition" />
        </div>
        </div>

        <div className="text-center flex flex-col mr-20 cursor-pointer" dir='ltr' >
           <h3 className="font-semibold mb-3 text-lg -mr-35">ارتباط با ما</h3>
           <ul className="space-y-2 text-sm">
          <li className="flex items-center justify-end gap-2">
            09115565987 <FaPhoneAlt />
          </li>
          <li className="flex items-center justify-end gap-2">
            example@gmail.com <MdEmail />
          </li>
          <li className="flex items-center justify-end gap-2">
            مازندران، ساری، بهترین مکان برای ... <FaLocationArrow/>
          </li>
        </ul>
        </div>


        <div className="text-center flex flex-col items-center flex-1 gap-3">
          <img src={logo2} alt="" />
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
      <div className="flex gap-16 cursor-pointer">
          {[1, 2, 3].map((col) => (
            <div key={col}>
              <h3 className="font-semibold mb-4 text-lg">لینک ها</h3>
              <ul className="space-y-2 text-sm">
                <li>دوره ها</li>
                <li>اساتید برتر</li>
                <li>خبرهای داغ</li>
                <li>اساتید برتر</li>
              </ul>
            </div>
        ))}
      </div>

    </section>
    
  )
}

export default Footer