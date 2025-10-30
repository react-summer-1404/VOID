import {useState} from "react"
import PicIco from "../assets/icon/Education.png"
import Slider from "rc-slider"
// import "rc-slider/assets/index.css";


const handleSpecs = ()=>{

    const[capicity,setCapicity] = useState(20)

    return(
        <div className="handleproductDetail  shadow-md shadow-purple-200 rounded-[20px]  h-[600px]
      rounded-[20px] py-[10px] font-medium text-xs px-[10px] pb-[15px] flex flex-row flex-wrap">

      <div className="w-[90%] font-medium h-[20px] text-[#9B0EE1] text-xs px-[10px] pb-[15px] h-[30px] border-b border-[#eee] m-[10px]"> 
			مشخصات دوره 
		   </div>	

       <div className="w-[95%] h-[40px] flex justify-between place-items-center "><span className="flex items-center"> <img src={PicIco}/>تعداد دانشجویان</span> <span className="text-xs text-center border border-gray-400 rounded-[50%] p-2 bg-gray-200">20</span></div>
       <div className="w-[95%] h-[40px] flex justify-between place-items-center "><span className="flex items-center"> <img src={PicIco}/>دسته بندی</span> <span className="border border-gray-400 text-[#9B0EE1] rounded-[17px] p-1 pr-2 pl-2 bg-gray-200 ">فرانت اند</span></div>
       <div className="w-[95%] h-[40px] flex justify-between place-items-center ">
        <span className="flex items-center w-[40%]"> 
        <img src={PicIco}/>ظرفیت دوره
        </span> 

        <div className="flex flex-wrap justify-between w-[55%] h-[50%] p-2 rounded relative">
         <Slider
        min={0}
        max={100}
        value={capicity}
        onChange={setCapicity}
        trackStyle={{
          backgroundColor: "#2C8C88", // رنگ بخش پرشده
          height: 4, // ضخامت خط فعال
        }}
        railStyle={{
          backgroundColor: "#d1d5db", // رنگ بخش خالی
          height: 4, // ضخامت خط خالی
        }}
        handleStyle={{
          borderColor: "#2C8C88",
          backgroundColor: "#2C8C88",
          height: 16,
          width: 16,
          marginTop: -6,
        }}
        className="flex-1"
      />

      <span className="text-[12px] text-teal-700 font-medium absolute top-[-5px] right-1">
        0%-{capicity}%
      </span>
        </div>

        </div>

       <div className="w-[95%] h-[40px]  flex justify-between place-items-center "><span className="flex items-center"> <img src={PicIco}/>تاریخ شروع و پایان دوره</span> <div><span>1404/04/04</span>{"------>"}<span>1404/04/04</span></div></div>
       <div className="w-[95%] h-[40px]  flex justify-between place-items-center "><span className="flex items-center"> <img src={PicIco}/>وضیعت دوره</span> <span className="border border-gray-400 text-[gray] rounded-[17px] p-1 pr-2 pl-2 bg-gray-200 flex items-center "><img src={PicIco}/>در حال بارگذاری</span></div>
       <div className="w-[95%] h-[40px]  flex justify-between place-items-center "><span className="flex items-center"> <img src={PicIco}/>قیمت</span> <span className="flex flex-row gap-3 place-items-center h-[40px] items-center text-[15px]">2,500,000<p className="text-purple-500">تومان</p></span></div>
        
        <button className="w-[95%] h-[45px] text-xl rounded-[12px] border bg-[#9B0EE1] text-white mt-1">شرکت در دوره</button>

        <div className="w-[95%] h-[40px] flex justify-between mt-3 place-items-center border-b border-t border-[#eee] "><span className="text-[gray]">مشخصات استاد<img/></span> <span className="text-[blue]">پروفایل مدرس {">"}</span></div>
        <div className="flex flex-row  place-items-center  w-[95%] h-[60px]">
          <img className="flex rounded-[50%] border  w-[18%] h-[98%]"/>
          <div className="flex flex-col justify-between  w-[61%] h-full">
          <p className=" h-[40%] flex items-center text-[17px] mr-1"><img className="w-[22px] h-[18px] mt-1 pl-1" src={PicIco}/>نام استاد</p>
          <p className=" h-[40%] text-[gray] mr-1">توضیحات استاد</p>
          </div>
          <span className="flex items-center w-[20%] mt-7"><img src={PicIco}/>12 دوره</span>
          
          </div>

        </div>


    )
}
export default handleSpecs