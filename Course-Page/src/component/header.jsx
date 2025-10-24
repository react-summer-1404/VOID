// import "../assets/style/tailwinds/tailwindSt(header).css"

import vectLeft from "../assets/icon/vectLeft.png"
import vectRight from "../assets/icon/vectRight.png"
import square from "../assets/back/Squre.png"  
import SearchIcon from "../assets/icon/searchIcon.png"

const courseHeader=()=>{



return(
  <div className="courseHeader h-[280px] flex flex-col place-items-center bg-gray-100 ">

   <div className="header w-[80%] h-[50px] border border-blue-500 mt-3"></div>

    <div className="searchBox w-[90%] md:w-[45%] lg:[35%]  h-[64%]  mt-8 relative">
      <img src={square} className=" w-[85px] md:w-[120px] absolute left-[-20px] top-[30px] z-[1]"/>

       <div className="searchTitle w-[50%] m-auto  text-center font-semibold">
        <p className="flex  flex-row justify-around items-center text-[8px] md:text-[13px] text-gray-600 mb-2">
         <img className="w-[10%]" src={vectRight}/>با هر دوره،یک قدم جلوتر<img className="w-[10%]" src={vectLeft}/>
        </p>
        <h1 className="md:text-[20px] text-[14px]">دوره های آموزشی ما</h1>
         </div>

         <div className="search w-[80%]  h-[45px] m-auto mt-4 flex flex-row justify-between rounded-[3px]">
            <input className="searchInput w-[87.5%] h-[45px] pr-1 border-3 rounded-s-[5px]  border-[#3C8B85] border-e-0 " placeholder="دنبال چه دوره هایی هستی؟..." />
            <button className="searchBt w-[12%] h-[45px] bg-[#3C8B85] rounded-e-[5px] z-[3]">
            <img className="m-auto" src={SearchIcon}/>
            </button>
         </div>

         </div>
           
    </div>
    )
}
export default courseHeader