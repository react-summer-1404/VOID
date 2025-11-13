import Srch from "../../../assets/icon/search.png"
import ReactJs from "../../../assets/cardImg/reactJs.png"
import SortingBox from "../../../component/dashComponent/sortingBox(dash)"
import Show from "../../../assets/icon/show.png"
import FilterIco from "../../../assets/icon/filter.png"
import {useState} from "react"

const dashCourse =()=>{

//     const formatNumber = (num) =>
//   new Intl.NumberFormat('fa-IR').format(num);

//     const toPersianDigits=(str)=> {
//   return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
// }

    const CourseProf = [
        {id:"1t" ,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/2/9",price:"2/500/000",level:"پیشرفته"},
        {id:"2c",title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/5/9",price:"2/500/000",level:"پیشرفته"},
        {id:"3d" ,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/8/9",price:"2/500/000",level:"پیشرفته"},
        {id:"4f" ,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/1/9",price:"2/500/000",level:"پیشرفته"},
        
    ];

     // console.log(courseData)

     // تعداد محصول در هر صفحه
     const [filterBt,setFilterBt] = useState(false);
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 3;  
   
  //محسابه تعداد محصول در هر صفحه
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // چک کن که courseData آرایه باشه و پر باشه
const currentCard = Array.isArray(CourseProf) && CourseProf.length > 0
  ? CourseProf.slice(indexOfFirstItem, indexOfLastItem) 
  : [];

// تعداد کل صفحات
const totalPages = Array.isArray(CourseProf) && CourseProf.length > 0
  ? Math.ceil(CourseProf.length / itemsPerPage)
  : 0;  

  // تابع برای تغییر صفحه
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 100, behavior:"smooth"});
  };


    return(
       <>   
          <div dir="ltr" className="w-full h-[40px]  mb-2 flex flex-row justify-between lg:hidden ">
             <button type="submit" className=" relative 
                    border border-gray-300 rounded-lg p-2 text-sm text-white
                     cursor-pointer flex items-center align-items-center bg-[#9B0EE1]"
                     onClick={()=>setFilterBt(!filterBt)}>
                        <img src={FilterIco}/>
                       فیلتر ها
                    </button>

                     <div className="w-[100px] h-full text-[black]/80 text-center flex items-right text-[15px] font-bold">دوره های من</div>
                 </div>

        <div className="bg-[white]  font-medium  w-full h-[15%] rounded-t-[25px]
         lg:flex hidden flex-row items-center gap-[20px]  ">
             <div className=" w-[20%] mr-5 h-[70%] flex flex-col justify-between ">
                <span className="text-gray-500  w-full"> جستجو دوره</span>
                <input type="text" placeholder="جستجو ..."  style={{ backgroundImage: `url(${Srch})` }}
                className="border border-[gray] indent-[30px] text-[black]  bg-[#F5F5F5] bg-[length:20px_20px] bg-[position:right_5px_center] bg-no-repeat w-full h-[35px] rounded-[5px] "/>
                
             </div>

             <div className="w-[10%] h-[70%]  flex flex-col justify-between ">
                <span className="text-gray-500 w-full">تاریخ شروع</span>
                 <input type="date" className="border border-gray-400  bg-[#F5F5F5] h-[35px] text-[black] rounded-[5px]"/>
             </div>

             <div className=" w-[10%] h-[70%]  flex flex-col justify-between">
                <span className="text-gray-500 w-full">تاریخ پایان</span>
                 <input type="date"  className="border border-gray-400  bg-[#F5F5F5] h-[35px] rounded-[5px]"/>
             </div>

             <div className=" w-[15%] h-[70%]  flex flex-col justify-between">
                <span className="text-gray-500 w-full">ترتیب</span>
                <SortingBox/>
                 

             </div>

        </div>
        <div className=" bg-[white] w-full h-[85%]  rounded-b-[25px]">

             <div className="w-full  bg-[#F5F5F5] h-[40px] font-medium lg:text-[15px] text-[10px] pb-[10px] text-gray-600 hidden lg:flex flex-row">
                                       <div className="h-full flex items-center mr-2 w-[25%]">عکس و نام دوره</div>
                                       <div className="h-full flex items-center  w-[15%]">نام استاد</div>
                                       <div className="h-full flex items-center  w-[15%]">تاریخ شروع</div>
                                       <div className="h-full flex items-center  w-[15%]">تاریخ پایان</div>
                                       <div className="h-full flex items-center  w-[15%]">قیمت</div>
                                       <div className="h-full flex items-center  w-[15%]">سطح</div>
                                      </div>

                               <div className="commentContent w-full font-medium whitespace-nowrap  rounded-b-[25px] flex flex-col rounded-b-[25px]">       
                              {currentCard.map((cardProf)=>(
                                    <div key={cardProf.id} className=" w-full lg:h-[70px] h-[120px] text-[gray]/70  border-b border-[gray]/50  flex flex-row items-center">

                                        <div className=" h-full ml-3 lg:ml-0 w-[30%] lg:w-[24%] mr-3  flex flex-row items-center">
                                            <img src={ReactJs} className=" rounded-[15px] h-[80%] w-full lg:w-[30%]"/>
                                            <span className="text-[black] lg:block hidden w-[45%]">{cardProf.title}</span>
                                        </div>

                                        <div className="flex  lg:flex-row lg:justify-between flex-col w-[50%] lg:w-[52%]">
                                        <span className=" w-[33%] text-[black] lg:hidden block lg:w-[45%]">{cardProf.title}</span>
                                        <span className=" w-[33%] lg:w-[15%]">{cardProf.teacher}</span>
                                        <span className=" w-[33%] lg:w-[15%] hidden lg:block">{cardProf.startDate}</span>
                                        <span className=" w-[33%] lg:w-[15%] hidden lg:block ">{cardProf.endDate}</span>
                                        <span className=" w-[33%] lg:w-[15%] text-[black]">{cardProf.price} <span className="text-[gray]/70">تومان</span></span>
                                        </div>

                                        <button className="border ml-5 lg:ml-0 lg:mr-22 bg-[#F5F5F5] text-[13px] px-2 py-1 border-gray-500 rounded-[15px]">{cardProf.level}</button>
                                        <span className="mr-22 lg:block hidden"><img src={Show}/></span>

                                  </div>
                              ))}
                                      
                               </div>
                                <div className=" w-full p-5 flex justify-center mt-6 space-x-2">

                             <button type="submit" onClick={()=>currentPage !=1 && setCurrentPage(currentPage -1)}
                               className={` w-8 h-8 text-center  rounded ${
                                   currentPage === 1
                                     ? "bg-[#3C8B85] text-white"
                                     : "bg-gray-200 hover:bg-gray-300"
                                 }`}>{"<"}</button>
                             {Array.from({ length: totalPages }, (_,i) => i + 1).map((page) => (
                               <button
                                 key={page}
                                 onClick={() => handlePageChange(page)}
                                 className={` w-8 h-8 text-center  rounded ${
                                   currentPage === page
                                     ? "bg-[#3C8B85] text-white"
                                     : "bg-gray-200 hover:bg-gray-300"
                                 }`}
                               >
                                 {page}
                                 
                               </button>
                             ))}
                              <button type="submit" onClick={()=>totalPages != currentPage && setCurrentPage(currentPage + 1)} 
                               className={` w-8 h-8 text-center  rounded ${
                                   currentPage === totalPages
                                     ? "bg-[#3C8B85] text-white"
                                     : "bg-gray-200 hover:bg-gray-300"
                                 }`}>{">"}</button>
                           </div>
                     
                             </div>
                             </>
       
    )
}
export default dashCourse