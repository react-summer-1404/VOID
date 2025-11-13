import React from 'react'
import { Link,Outlet } from "react-router-dom";
const profile = () => {

  return (

  <div className=' lg:h-full  w-full flex flex-row drop-shadow rounded-[32px]'>

 <div className=' w-[15%]  h-full bg-[#F5F5F5] rounded-tr-[32px] rounded-br-[32px] lg:flex hidden flex-col items-center'> 

    <div className='w-[138px] h-[130px]  bg-[url("/proimg.png")] bg-cover'></div>
    <div className=' h-[290px] '>
    <h1 className='text-[#9B0EE1] m-auto w-[70%]'>محمد علی راه نشین</h1>
    <p  className=' text-[#4B4B4B] m-auto  w-[20%] text-[10px]'>دانشجو</p>
    <div className=' mt-[30px] h-[80px] bg-[url("/num.png")] bg-[length:100%_100%] border-b border-t border-[gray]/10 '></div>
    <div className=' h-[110px] mt-[15px]'>
      <p className=' text-[#4B4B4B] m-auto  w-[25%] text-[12px]'>درباره من</p>
      <h1 className='text-[11px] w-[80%] mx-auto'>
      ممدلی هستم دانشجوی تازه نفس دنیای برنامه نویسی، میخوام یکی از خفن ترین های این حرفه بشم امیدوارم بتونم موفق بشم.
      </h1>
    </div>

    </div>
    <div className=' w-[90%] h-[140px] mb-[15px]  bg-[url("/story.png")] bg-[length:100%_100%]' ></div>
    
    </div>

<div className='lg:w-[85%] lg:mb-0 mb-20 lg:rounded-tr-[0] lg:rounded-br-[0] rounded-[32px]  bg-[white]  h-full p-3 flex flex-col'>

    
<div className=' bg-[#F5F5F5] w-full lg:h-[10%] h-[50px] rounded-t-[8px] flex flex-row gap-5 items-center lg:text-[15px] text-[10px] mt-[5px]'>

      <Link to={"/dashboard/profile/information"}  className=' mr-2 cursor-pointer' > اطلاعات شخصی </Link>
      <Link to={"/dashboard/profile/imgProfile"} className='cursor-pointer'> عکس پروفایل </Link>
      <Link to={"/dashboard/profile/address"} className='cursor-pointer'> آدرس سکونت </Link>
      <Link to={"/dashboard/profile/link"} className=' cursor-pointer'> لینک ها</Link>
      </div>
     

   
  <div className=' w-full h-[90%]'>
    <Outlet/>
    </div>

  </div>


  </div>
  )
}

export default profile