import React from "react";
import logo from '../assets/Logo.png';

function Navbar() {
  return (
    <nav className="fixed top-0 right-0 left-0 bg-transparent flex items-center justify-between px-16 py-6 z-50 backdrop-blur rounded ">
      
  <div className="w-32">
    <img src={logo} alt="Logo" className="w-full h-auto" />
  </div>

    
        <ul className="flex gap-10 text-gray-700 font-medium">
          <li className="relative cursor-pointer hover:text-purple-600 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
            خانه
          </li>
          <li className="relative cursor-pointer hover:text-purple-600 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
            دوره‌ها
          </li>
          <li className="relative cursor-pointer hover:text-purple-600 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
            اخبار و مقالات
          </li>
          <li className="relative cursor-pointer hover:text-purple-600 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
            اساتید
          </li>
          <li className="relative cursor-pointer hover:text-purple-600 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:w-0 after:h-[2px] after:bg-purple-600 hover:after:w-full after:transition-all after:duration-300">
            ارتباط با ما
          </li>
        </ul>


        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all cursor-pointer">
          ورود / ثبت‌نام
        </button>
    </nav>
  );
}

export default Navbar;