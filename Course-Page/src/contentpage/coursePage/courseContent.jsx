import {useState , useEffect} from "react";
import ProductList from "../../component/course/productList.jsx"
import FilterSide from "../../component/filterSide.jsx"
import SortingBox from "../../component/sortingBox.jsx"
import SideMaket from "../../component/side(maket).jsx"

// import "../../assets/style/tailwinds/tailwindSt(content).css"
// import "../../assets/style/tailwinds/tailwindSt(productCard).css"


import View1 from "../../assets/icon/view1.png"
import View1v1 from "../../assets/icon/view1.v1.png"
import View2 from "../../assets/icon/view2.png"
import View2v2 from "../../assets/icon/view2.v2.png"

import FilterIco from "../../assets/icon/filter.png"


const courseContent = () => {
   const[view,setview] = useState("view1");

	const ViewBt = {
       border: '0',
       borderRadius: '5px',
       height: '25px',
       cursor: 'pointer',
       boxShadow: '0 0 10px #9B0EE140'
    };
   
	////////////////////////////////////////////////
   ////filter data
	 const [range, setRange] = useState([0, 100000000]);
	 const [filterNull,setFilterNull] = useState(true);
	  const [activeFilters, setActiveFilters] = useState(0);
    
    const [filters, setFilters] = useState({
    category: '',
    priceRange: range,
    courseLevel: '',
    teacher: '',
	  sortBy:'',
     });

	 useEffect(() => {
     setFilters((prev) => ({
        ...prev,
       priceRange: range,
       }));
       }, [range]);

  /////////////////////////////////////////////
    //filter trun on/off

    const [filterBt,setFilterBt] = useState(false);
    console.log(filterBt)
	
//////////////////////////////////////////////////////////////
// filter update
	  const updateActiveFilters = (currentFilters) => {
      let count = 0;
      if (currentFilters.category) count++, setFilterNull(false);
      if (currentFilters.courseLevel) count++ , setFilterNull(false);
    if(currentFilters.sortBy) count++ , setFilterNull(false);
    if (currentFilters.teacher) count++ , setFilterNull(false);
    if (currentFilters.priceRange[0] > 0 || currentFilters.priceRange[1] < 100000000) count++ , setFilterNull(false);
    if(count === 0) setFilterNull(true);
    setActiveFilters(count);
  };
 
///////////////////////////////////////

  const [courseData,setCourseData] = useState([]);
  console.log(courseData)

   // تعداد محصول در هر صفحه
     
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 9;  
   
  //محسابه تعداد محصول در هر صفحه
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = courseData.slice(indexOfFirstItem, indexOfLastItem);

  // تعداد کل صفحات
  const totalPages = Math.ceil(courseData.length / itemsPerPage);
  //  console.log(totalPages);

  // تابع برای تغییر صفحه
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 100, behavior:"smooth"});
  };

  // console.log(currentPage)

///////////////////////////////////////////

return(
 <div className="bg-[rgba(245,246,248,1)] flex  justify-center gap-[15px]">

    <FilterSide 
		 setFilters={setFilters}
		 filters={filters}
		 setRange={setRange}
		 range={range}
		 setFilterNull={setFilterNull}
		 updateActiveFilters={updateActiveFilters}
		 setActiveFilters={setActiveFilters}
		 activeFilters={activeFilters}
      filterBt={filterBt}
		  />
    
     

  <div className="sm:w-[clamp(700px,60%,1200px)] lg:w-[clamp(800px,60%,1200px) xl:w-[clamp(850px,60%,1200px)]">  

    <div className="h-[50px] bg-white rounded-[5px] mb-[10px] flex justify-between items-center gap-5">

	<div className="group rounded-[5px] p-[3px] leading-[25px] relative text-sm text-[#444] mr-[10px]">  

     
     {!filterBt &&<SortingBox
       filters={filters}
       setFilters={setFilters}
      updateActiveFilters={ updateActiveFilters}
      filterBt={filterBt}
     /> 
       }

       <button type="submit" className=" relative block  lg:hidden
       border border-gray-300 rounded-lg p-2 text-sm text-white
        cursor-pointer flex align-items-center bg-[#9B0EE1]"
        onClick={()=>setFilterBt(!filterBt)}>
           <img src={FilterIco}/>
          فیلتر ها
       </button>
		 </div>



    <div className="flex flex-row gap-[10px] ml-[10px]">
	<div style={ViewBt} className={view === "view2" ? "bg-[#9B0EE1]" : " "}  onClick={()=>setview("view2")}><img src={view === "view2" ? View2v2 : View2}/></div>  
	<div style={ViewBt} className={view === "view1" ? "bg-[#9B0EE1]" : " "}  onClick={()=>setview("view1")}><img src={view === "view1" ? View1 : View1v1}/></div>
    </div>
  </div>

    <div id="grid" className={view}>

    	<ProductList
		   filters={filters}
		   filterNull={filterNull}
		   range={range}
       courseData={courseData}
       setCourseData={setCourseData}
       currentItems={currentItems}
		/>

       {/* دکمه‌های صفحه‌بندی */}
      <div className=" w-full p-5 flex justify-center mt-6 space-x-2">

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
 </div>

    )

    
}
export default courseContent;