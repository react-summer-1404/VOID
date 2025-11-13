import React from 'react'

const Information = () => {
  return (
    <div className='lg:h-full h-screen flex text-[12px]  flex-row gap-2 pt-2 flex-wrap'>
      <input placeholder='نام' className='flex bg-[#F5F5F5]  outline-0 rounded-[8px] grow-1 w-[45%] indent-3 h-[9%]'/>
      <input placeholder='نام خانوادگی' className='flex bg-[#F5F5F5] outline-0 rounded-[8px] grow-1 w-[45%] indent-3 h-[9%]'/>
      <input placeholder='درباره من' className='flex bg-[#F5F5F5] outline-0  rounded-[8px] grow-2 w-full indent-3 h-[20%] '/>
      <input placeholder='شماره همراه' className='flex bg-[#F5F5F5] outline-0 rounded-[8px] grow-1 w-[45%] indent-3 h-[9%]'/>
      <input placeholder='کد ملی' className='flex bg-[#F5F5F5] outline-0 rounded-[8px] grow-1 w-[45%] indent-3 h-[9%]'/>
      <input placeholder='تاریخ تولد' className='flex bg-[#F5F5F5] outline-0 rounded-[8px] grow-1 w-[45%] indent-3 h-[9%]'/>
      <div className='flex flex-row lg:gap-8  items-center rounded-[8px] outline-0 grow-1 w-[45%] indent-3 h-[9%]'>
         جنسیت
         <div className='flex items-center text-[13px] gap-2'>
          مرد
         <input type='checkbox'/>
         </div>
          <div className='flex items-center text-[13px] gap-2'>
          زن
         <input type='checkbox'/>
         </div>
      </div>
       <input placeholder='ایمیل' className='flex outline-0 grow-1 bg-[#F5F5F5]  indent-3 rounded-[8px] w-full h-[9%]'/>
      <input placeholder='آدرس سکونت' className='flex grow-1 outline-0 bg-[#F5F5F5] indent-3 rounded-[8px] w-full h-[20%]'/>
      <button className='w-[150px] bg-[#9B0EE1] rounded-[8px] text-white font-medium text-[13px] indent-[-5px] outline-0 h-[45px] indent-3  mb-2 w'>اعمال تغییرات</button>
       
      
    </div>
  )
}

export default Information