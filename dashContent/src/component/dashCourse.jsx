import Srch from "../assets/ico/search.png"
import ReactJs from "../assets/Img/reactJs.png"
import SortingBox from "../component/sortingBox"
import Show from "../assets/ico/show.png"
import {useState} from "react"

const dashCourse =()=>{

    const formatNumber = (num) =>
  new Intl.NumberFormat('fa-IR').format(num);

    const toPersianDigits=(str)=> {
  return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

    const Course = [
        {id:1,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:2,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:3,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:4,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:5,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:6,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:7,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:8,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"},
        {id:9,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:toPersianDigits("1404/8/8"),endDate:toPersianDigits("1404/9/9"),price:toPersianDigits("2/500/000") ,level:"پیشرفته"}
    ];

     // console.log(courseData)

     // تعداد محصول در هر صفحه
     
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 6;  
   
  //محسابه تعداد محصول در هر صفحه
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // const currentItems = courseData.slice(indexOfFirstItem, indexOfLastItem);


  // // تعداد کل صفحات
  // const totalPages = Math.ceil(courseData.length / itemsPerPage);
  // //  console.log(totalPages);

  // چک کن که courseData آرایه باشه و پر باشه
const currentItems = Array.isArray(Course) && Course.length > 0
  ? Course.slice(indexOfFirstItem, indexOfLastItem) 
  : [];

// تعداد کل صفحات
const totalPages = Array.isArray(Course) && Course.length > 0
  ? Math.ceil(Course.length / itemsPerPage)
  : 0;  

  // تابع برای تغییر صفحه
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 100, behavior:"smooth"});
  };


    return(
       <>
        <div className="bg-[white] font-medium   w-full h-[15%] rounded-t-[25px]
         flex flex-row items-center gap-[20px]  ">
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

             <div className="w-full bg-[#F5F5F5] h-[40px] font-medium pb-[10px] text-gray-600  flex flex-row">
                                       <div className="h-full flex items-center mr-2 w-[25%]">عکس و نام دوره</div>
                                       <div className="h-full flex items-center  w-[15%]">نام استاد</div>
                                       <div className="h-full flex items-center  w-[15%]">تاریخ شروع</div>
                                       <div className="h-full flex items-center  w-[15%]">تاریخ پایان</div>
                                       <div className="h-full flex items-center  w-[15%]">قیمت</div>
                                       <div className="h-full flex items-center  w-[15%]">سطح</div>
                                      </div>

                               <div className="commentContent w-full font-medium whitespace-nowrap  rounded-b-[25px] flex flex-col rounded-b-[25px]">       
                              {currentItems.map((Card)=>(
                                    <div key={Card} className=" w-full h-[70px] text-[gray]/70  border-b border-[gray]/50  flex flex-row items-center">
                                        <div className=" h-full w-[24%] mr-3  flex flex-row items-center">
                                            <img src={ReactJs} className=" rounded-[15px] h-[80%] w-[30%]"/>
                                            <span className="text-[black] w-[45%]">{Card.title}</span>
                                        </div>
                                        <span className=" w-[15%]">{Card.teacher}</span>
                                        <span className=" w-[15%]">{Card.startDate}</span>
                                        <span className=" w-[15%]">{Card.endDate}</span>
                                        <span className=" w-[15%] text-[black]">{Card.price} <span className="text-[gray]/70">تومان</span></span>
                                        <button className="border bg-[#F5F5F5] text-[13px] px-2 py-1   border-gray-500 rounded-[15px]">{Card.level}</button>
                                        <span className="mr-22"><img src={Show}/></span>
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