import {useState} from "react"
import useToggle from "../hook/useToggle"
import Slider from "rc-slider"
import "rc-slider/assets/index.css";
import "../assets/style/tailwinds/tailwindSt(content).css"
import SortingBox from "../component/sortingBox"

const sidePart =({setFilters,filters,range,setRange,activeFilters,setFilterNull,setActiveFilters,updateActiveFilters,filterBt})=>{

  const [showCategories, setShowCategories] = useState(false);
  const [showCourseLevel, setShowCourseLevel] = useState(false);
  const [showTeachers, setShowTeachers] = useState(false);
 

  const categories = [
    { id: 1, name: 'دوره ریکت'},
    { id: 2, name: 'UX دوره ' },
    { id: 3, name: 'دوره بک‌اند' },
    { id: 4, name: 'دوره بحر'}
  ];

  const courseLevel = [
    {id : 1 ,name :'مقدماتی'},
     {id : 2 ,name:'متوسط'},
      {id : 3 ,name:'پیشرفته'}
  ];
  const teachers = [
    {id : 1 , name:'استاد میثم'}, 
    {id : 2 , name:'استاد صبح خیز'}, 
    {id : 3 , name:'استاد بحرالعلوم'}
  ];

   const handleCategoryChange = (category) => {
    const newCategory = filters.category === category ? '' : category;
    setFilters({ ...filters, category: newCategory });
    updateActiveFilters({ ...filters, category: newCategory });
  };

  const handleCourseLevelChange = (level) => {
    const newLevel = filters.courseLevel === level ? '' : level;
    setFilters({ ...filters, courseLevel: newLevel });
    updateActiveFilters({ ...filters, courseLevel: newLevel });
  };

  const handleTeacherChange = (teacher) => {
    const newTeacher = filters.teacher === teacher ? '' : teacher;
    setFilters({ ...filters, teacher: newTeacher });
    updateActiveFilters({ ...filters, teacher: newTeacher });
  };

   const handleValueChange = (value) => {
     setRange(value);
     updateActiveFilters({ ...filters, priceRange:value });
  };

  const handleMinChange = (e) => {
  const minValue = Number(e.target.value);
  if (minValue < 0) return;
  setRange([minValue, range[1]]);
};

const handleMaxChange = (e) => {
  const maxValue = Number(e.target.value);
  if (maxValue > 100000000) return;
  setRange([range[0], maxValue]);
};

  const resetFilters = () => {
    setFilters({
      category: '',
    priceRange: range,
    courseLevel: '',
    teacher: '',
   	sortBy:'',
      });
      setRange([0, 100000000]);
    setActiveFilters(0);
    setFilterNull(true);
     }; 

  // console.log(range);
   
    return(
        
  <div className={`sm:w-[20%] md:w-[40%] lg:w-[23%] xl:w-[20%] w-[80%] lg:block absolute lg:relative z-[10] rounded-[20px]
          ${filterBt ? "block top-[320px] right-[45px]" : "hidden"}`}>
  <div className=" shadow-md shadow-purple-200 w-full bg-white rounded-[20px] py-[10px] text-[#555] flex flex-row flex-wrap">

        <div className="w-[90%] font-medium text-xs px-[10px] pb-[15px] border-b border-[#eee] m-[10px] flex justify-between items-center"> 

			<h2 className="text-[#9B0EE1]"> فیلتر  </h2>
			<span className="transition text-[10px] font-bold cursor-pointer hover:!text-green hover:scale-[1.1]"
        onClick={resetFilters}
      >
        حذف همه‌ی فیلتر ها({activeFilters})
        </span>
			
		</div>	

       {/* Category Filter */}
     <div className="rounded-[5px] p-[3px] w-[95%] pr-2">
       <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
         دسته‌بندی
       </label>
       
       <div className="relative">
         <div
           onClick={() => setShowCategories(!showCategories)}
           className="border border-gray-300 rounded-lg p-2 text-sm text-gray-700 cursor-pointer flex justify-between items-center hover:bg-gray-50"
         >
           <span>{filters.category || 'انتخاب کنید'}</span>
           <span className="text-xs">▼</span>
         </div>
         
         {showCategories && (
           <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200">
             {categories.map((cat) => (
               <li key={cat.id}>
                 <label
                   className={`block px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 hover:text-white ${
                     filters.category === cat.name ? '!bg-orange-500 !text-white' : ''
                   }`}
                   onClick={() => {
                     handleCategoryChange(cat.name);
                     setShowCategories(false);
                   }}
                 >
                   {cat.name}
                 </label>
               </li>
             ))}
           </ul>
         )}
         
       </div>
     </div>

     {/* courseLevel Filter */}

     <div className="rounded-[5px] p-[3px] w-[95%] pr-2">
       <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
         سطح آموزشی
       </label>
       
       <div className="relative">
         <div
           onClick={() => setShowCourseLevel(!showCourseLevel)}
           className="border border-gray-300 rounded-lg p-2 text-sm text-gray-700 cursor-pointer flex justify-between items-center hover:bg-gray-50"
         >
           <span>{filters.courseLevel || 'انتخاب کنید'}</span>
           <span className="text-xs">▼</span>
         </div>
         
         {showCourseLevel && (
           <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200">
             {courseLevel.map((lvl) => (
               <li key={lvl.id}>
                 <label
                   className={`block px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 hover:text-white ${
                     filters.courseLevel === lvl.name ? '!bg-orange-500 !text-white' : ''
                   }`}
                   onClick={() => {
                    handleCourseLevelChange(lvl.name);
                     setShowCourseLevel(false);
                   }}
                 >
                   {lvl.name}
                 </label>
               </li>
             ))}
           </ul>
         )}
         
       </div>
     </div>

      {/* teacher Filter */}

     <div className="rounded-[5px] p-[3px] w-[95%] pr-2">
       <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
         اساتید
       </label>
       
       <div className="relative">
         <div
           onClick={() => setShowTeachers(!showTeachers)}
           className="border border-gray-300 rounded-lg p-2 text-sm text-gray-700 cursor-pointer flex justify-between items-center hover:bg-gray-50"
         >
           <span>{filters.teacher || 'انتخاب کنید'}</span>
           <span className="text-xs">▼</span>
         </div>
         
         {showTeachers && (
           <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200">
             {teachers.map((Tch) => (
               <li key={Tch.id}>
                 <label
                   className={`block px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 hover:text-white ${
                     filters.teacher === Tch.name ? '!bg-orange-500 !text-white' : ''
                   }`}
                   onClick={() => {
                      handleTeacherChange(Tch.name);
                     setShowTeachers(false);
                   }}
                 >
                   {Tch.name}
                 </label>
               </li>
             ))}
           </ul>
         )}
         
       </div>
     </div>
	

			 {/*price Filter*/}
            <div className="w-full font-[fa-IR] w-[95%] p-5">
      <div className="text-[#00897b] font-semibold text-sm">
        <span>قیمت</span>
      </div>
         <Slider
          range
          min={0}
          max={100000000}
          step={1000000}
          value={range}
          onChange={handleValueChange}
          trackStyle={[{ backgroundColor: "#a200ff", height: 4, borderRadius: 4 }]}
          handleStyle={[
            {
              backgroundColor: "#a200ff",
              border: "0 none",
              width: 16,
              height: 16,
              marginTop: -6,
              // boxShadow: "0 0 0 2px #a200ff40",
            },
            {
              backgroundColor: "#a200ff",
              border: "0 none",
              width: 16,
              height: 16,
              marginTop: -6,
              // boxShadow: "0 0 0 2px #a200ff40",
            },
          ]}
          railStyle={{
            backgroundColor: "#d9d9d9",
            height: 4,
            borderRadius: 4,
          }}
        />
      <div className="flex flex-row justify-between w-[full] font-bold">
        <div className="flex flex-row w-[49%] justify-end ">
           <div onClick={()=> setRange(["",range[1]])}
            className="group hover:bg-[#e8e8e8]  bg-[#f3f3f3] border border-[#d1d1d1] rounded-[10px] w-[full] h-10 p-1  text-[12px] flex place-items-center cursor-pointer text-[#333]">
            از<input
           type="number"
           value={range[0]}
           onChange={handleMinChange}
           className="w-[75px] md:w-[60px] md:text-[10px] outline-0"
           /> تومان 
            <span className=" transform rotate-270 transition pr-2 p-2">{">"}</span>
          </div>
          
        </div>

        <div className="flex flex-row w-[49%]">
          <div  onClick={()=> setRange([range[0],""])}
          className="group hover:bg-[#e8e8e8]  bg-[#f3f3f3] border border-[#d1d1d1] rounded-[10px] w-[full]  h-10 p-1 text-[13px] flex place-items-center cursor-pointer text-[#333]">
            تا<input
           type="number"
           value={range[1]}
           onChange={handleMaxChange}
           
           className=" w-[75px] md:w-[60px] md:text-[10px]  outline-0"
           /> تومان
            <span className=" transform rotate-270  transition pr-2 p-2">{">"}</span>
          </div>
          
        </div>
      </div>

    </div>

    {/*sorting*/}
     <div className="sorting w-[90%] block md:hidden " >
       <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
         مرتب سازی
       </label>
      <SortingBox
      filters={filters}
      setFilters={setFilters}
        updateActiveFilters={updateActiveFilters}
        filterBt={filterBt}
       />

     </div>

            

        </div>

	</div>
	
    )
}
export default sidePart