import {useEffect, useState} from "react"
import SortingBox from "../../component/sortingBox"
import T1 from "../../assets/teacherAvatar/t1.png"
import T2 from "../../assets/teacherAvatar/t2.png"
import T3 from "../../assets/teacherAvatar/t3.png"
import T4 from "../../assets/teacherAvatar/t4.png"
import axios from "axios"

const teacherContent = ({}) =>{  

     const [filterBt,setFilterBt] = useState(true);
     const[showSort,setShowSort] = useState(false);
     const [filters, setFilters] = useState({
	  sortBy:'',
     });

     const sorts = [
        {id:1 , name : "بر اساس دوره"},
        {id:2 , name : "بر اساس مقاله"},
	 ]
        const[teacherList,setTeacherList] = useState([]);
     const Teacher =[
        {id:1,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:10,articale:5,img:T1},
        {id:2,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:8,articale:2,img:T2},
        {id:3,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:2,articale:3,img:T3},
        {id:4,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:5,articale:1,img:T4},
        {id:5,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:4,articale:4,img:T1},
        {id:6,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:9,articale:6,img:T2},
        {id:7,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:16,articale:5,img:T3},
        {id:8,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:1,articale:8,img:T4},
        {id:9,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:8,articale:9,img:T1},
        {id:10,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:12,articale:2,img:T2},
        {id:11,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:13,articale:8,img:T3},
        {id:12,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:14,articale:5,img:T4},
        {id:13,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:15,articale:6,img:T1},
        {id:14,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:20,articale:3,img:T2},
        {id:15,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:5,articale:10,img:T3},
        {id:16,name:"استاد بحر العلوم",title:"مدرس اصلی پژوهشگاه",courseCount:10,articale:11,img:T4},
        
     ]

     useEffect(()=>{
        const teacherll= async()=>{
           try{
        const fechteacher = await axios.get("https://sepehracademy.liara.run/Home/GetTeachers");
         const Data = fechteacher.data;
           setTeacherList(Data);
        }finally{

        }   
      };

      teacherll();

       
     },[]);

      console.log(teacherList)
     


     const SortCourse = [...Teacher].sort((a, b) => {
      if (filters.sortBy === "بر اساس دوره") return b.courseCount - a.courseCount;
      if (filters.sortBy === "بر اساس مقاله") return b.articale - a.articale;
      return 0;
    });

     const handleSortChange = (Srtt) => {
		 const newSort = filters.sortBy === Srtt ? '' : Srtt;
         setFilters({...filters, sortBy :newSort});
        };

     // تعداد محصول در هر صفحه
     
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 12;  
   
  //محسابه تعداد محصول در هر صفحه
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // چک کن که courseData آرایه باشه و پر باشه
const currentItems = Array.isArray(SortCourse) && SortCourse.length > 0
  ? SortCourse.slice(indexOfFirstItem, indexOfLastItem) 
  : [];

// تعداد کل صفحات
const totalPages = Array.isArray(SortCourse) && SortCourse.length > 0
  ? Math.ceil(SortCourse.length / itemsPerPage)
  : 0;  

  // تابع برای تغییر صفحه
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 100, behavior:"smooth"});
  };


    

    return(
     <div className=" flex  justify-center gap-[20px]">
   
     
  {/* className="sm:w-[clamp(700px,60%,1200px)] lg:w-[clamp(800px,60%,1200px) xl:w-[clamp(850px,60%,1200px)]" */}
  <div className=" w-[85%] min-h-[500px] pb-50">  

    <div className=" shadow-md shadow-purple-200 h-[50px] bg-white rounded-[5px] mb-[10px] flex justify-between items-center gap-5">

	<div className="rounded-[5px] p-[3px] leading-[25px] relative text-sm text-[#444] mr-[10px]">  
      <div className={`sort relative lg:block ${filterBt ? "":"hidden"}`}>
         <div
         className="border border-gray-300 rounded-lg p-2 text-sm text-gray-700 cursor-pointer flex justify-between items-center hover:bg-gray-50"
           onClick={() => setShowSort(!showSort)}
           
         >
           <span>{  filters.sortBy || 'مرتب سازی بر اساس'}</span>
           <span className="text-xs">▼</span>
         </div>
         
         {showSort && (
           <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200">
             {sorts.map((Srt) => (
               <li key={Srt.id}>
                 <label
                   className={`block rounded-[5px] px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 hover:text-white ${
                      filters.sortBy === Srt.name ? '!bg-orange-500 !text-white' : ''
                   }`}
                   onClick={() => {
                     handleSortChange(Srt.name);
                     setShowSort(false);
                   }}
                 >
                   {Srt.name}
                 </label>
               </li>
             ))}
           </ul>
         )}
         
       </div>
         
         </div>
         </div>
         

         <div className="teacherBox mt-5 w-full flex lg:flex-row lg:flex-wrap flex-col items-center gap-[15px] ">
            {currentItems.map((teach)=>(
                <div key={teach.id} className="shadow-md flex flex-row items-center lg:w-[24%] w-[80%] h-[130px] rounded-[15px]">
                    <img className=" mr-4 ml-1 h-[70%] w-[30%] rounded-full" src={teach.img} />
                    <div className=" flex flex-wrap gap-[10px]  h-[80%] w-[60%]">
                        <span className=" font-medium text-[14px]">{teach.name}</span>
                        <span className=" text-[gray]/50 text-[12px]">{teach.title}</span>
                        <button className=" text-[blue]/50 text-[12px] bg-[gray]/10 px-2 rounded-[10px]">پروفایل استاد</button>

                    </div>

                </div>
            ))}

         </div>


       
      <div className="pagebuttons w-full p-5 flex justify-center mt-6 space-x-2">

        <button type="submit" onClick={()=>currentPage !=1 && setCurrentPage(currentPage -1)}
          className={` w-8 h-8 text-center  rounded ${
              currentPage === 1
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}>{"<"}</button>
        {Array.from({ length: totalPages }, (_,i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={` w-8 h-8 text-center  rounded ${
              currentPage === page
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
         <button type="submit" onClick={()=>totalPages != currentPage && setCurrentPage(currentPage + 1)} 
          className={` w-8 h-8 text-center  rounded ${
              currentPage === totalPages
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}>{">"}</button>
      </div>
        
    </div>	

         </div>
    //  </div>

    //  </div>
       
    )

}
export default teacherContent