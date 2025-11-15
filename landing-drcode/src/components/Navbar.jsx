import React from "react";
import logo from '../assets/Logo.png';
import logoMobile from '../assets/LogoMobile.png';
import mobileLog from '../assets/mobileLogInBtn.png';
import HomeRsp from "../assets/HomeBtnRespNav.png";
import CourseRsp from "../assets/CourseBtnRespNav.png";
import MoonRsp from "../assets/MoonBtnRespNav.png";
import TeacherRsp from "../assets/TeacherBtnRespNav.png";
import SearchRsp from "../assets/SearchBtnRespNav.png";
import { useState } from "react";
import teacherSelected from "../assets/TeacherSelectedBtnRespNav.png"
import CourseSelected from "../assets/CourseSelectedBtnRespNav.png"
import HomeSelected from "../assets/HomeSelectedBtnRespNav.png"

function Navbar() {
  const [Selected, setSelected] = useState("home")
  return (
    <div>
      <nav className="hidden md:flex fixed top-0 right-0 left-0 bg-transparent  items-center justify-between px-16 py-6 z-50 backdrop-blur rounded ">
          
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
        <div className="relative flex md:hidden flex-row justify-center top-5">
          <button className="absolute right-5 cursor-pointer">
            <img src={mobileLog} alt="logIn" />
          </button>
          <img src={logoMobile} alt="Logo" />
        </div>

        
        <div className="flex md:hidden justify-between bg-purple-700 rounded-t-2xl fixed bottom-0 left-0 w-full z-599" dir="ltr">
          <div className="p-4 cursor-pointer"
          onClick={()=> setSelected("home")}>
            <img src={Selected === "home" ? HomeSelected : HomeRsp} alt="" />
          </div>

          <div className="p-4 cursor-pointer"
          onClick={()=> setSelected("teacher")}>
            <img src={Selected === "teacher" ? teacherSelected : TeacherRsp} alt="" />
          </div>

          <div className="p-4 cursor-pointer"
          onClick={()=> setSelected("course")}>
            <img src={Selected === "course" ? CourseSelected : CourseRsp} alt="" />
          </div>

          <div className="p-4 cursor-pointer">
            <img src={MoonRsp} alt="" />
          </div>

          <div className="p-4 absolute -top-10  bg-purple-700 rounded-full border-white border-2 left-9/20  cursor-pointer">
            <img src={SearchRsp} alt="" />
          </div>
        </div>
    </div>
  );
}

export default Navbar;