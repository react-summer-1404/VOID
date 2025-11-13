import {useState} from "react"
import CommentImg from "../../../assets/icon/comment.png"
import CourseImg from "../../../assets/icon/CourseImg.png"
import ReserveImg from "../../../assets/icon/ReserveImg.png"
import NewsImg from "../../../assets/icon/NewsImg.png"
import FavImg from "../../../assets/icon/FavImg.png"
import Precentage from "../../../assets/icon/precentage.png"
import Pen from '../../../assets/icon/Pen.png'
import ReactJs from "../../../assets/cardImg/reactJs.png"
import Show from "../../../assets/icon/show.png"


const dashboard = ()=>{

    const[moreComment,setMoreComment] = useState(false);
    const[moreReserve,setMoreReserve] = useState(false);
    const[moreCourse,setMoreCourse] = useState(false);

//      const formatNumber = (num) =>
//   new Intl.NumberFormat('fa-IR').format(num);

    const toPersianDigits=(str)=> {
  return str.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
}

    const Course = [
        {id:"1s" ,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/2/9",price:"2/500/000",level:"پیشرفته"},
        {id:"2d",title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/5/9",price:"2/500/000",level:"پیشرفته"},
        {id:"3f" ,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/8/9",price:"2/500/000",level:"پیشرفته"},
        {id:"4g" ,title:"دوره پیشرفته ریکت",teacher:"مهندس پورمحمدی",startDate:"1404/8/8",endDate:"1404/1/9",price:"2/500/000",level:"پیشرفته"},
        
    ];

     const itemsPerPage = 3;  
   
  //محسابه تعداد محصول در هر صفحه
  const indexOfLastItem = itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // const currentItems = courseData.slice(indexOfFirstItem, indexOfLastItem);


  // // تعداد کل صفحات
  // const totalPages = Math.ceil(courseData.length / itemsPerPage);
  // //  console.log(totalPages);

  // چک کن که courseData آرایه باشه و پر باشه
const currentCard = Array.isArray(Course) && Course.length > 0
  ? Course.slice(indexOfFirstItem, indexOfLastItem) 
  : [];


   
    const  replies = [
          {
          id: 1,
          author: 'علی ',
          date: 'تیر 1404 28',
          text: 'کاملا موافقم، من هم خیلی استفاده کردم'
          },
          {
          id: 2,
          author: 'علی ',
          date: 'تیر 1404 28',
          text: 'کاملا موافقم، من هم خیلی استفاده کردم'
          },
          {
          id: 3,
          author: 'علی ',
          date: 'تیر 1404 28',
          text: 'کاملا موافقم، من هم خیلی استفاده کردم'
          },
          {
          id: 4,
          author: 'علی ',
          date: 'تیر 1404 28',
          text: 'کاملا موافقم، من هم خیلی استفاده کردم'
          },
          
        ]

    return(
       <>         
               <div className=" userStatus rounded-[25px] w-full lg:h-[25%] 
                flex  flex-row flex-wrap  justify-between items-center whitespace-nowrap font-medium  gap-[15px]">
                      <div className=" shadow-md bg-[white] flex flex-col  items-center rounded-[25px] w-[47%] h-[130px] lg:w-[13%] lg:h-[95%]">
                        <div className=" w-[50%] h-[40%]  flex flex-col items-center"><img className="m-auto" src={CourseImg}/></div>
                        <div className=" w-[50%] h-[35%] text-base/8 flex flex-col text-[purple]  items-center">دوره ها</div>
                        <div className=" w-[50%] h-[30%] flex flex-col items-center">{toPersianDigits("12 دوره")}</div>
                        </div>
                      <div className=" shadow-md bg-[white] flex flex-col items-center rounded-[25px] w-[47%] h-[130px] lg:w-[13%] lg:h-[95%]">
                         <div className=" w-[50%] h-[40%]  flex flex-col items-center"><img className="m-auto" src={ReserveImg}/></div>
                        <div className=" w-[50%] h-[35%] text-base/8 flex flex-col text-[blue] items-center">رزرو ها</div>
                        <div className=" w-[50%] h-[30%] flex flex-col items-center">{toPersianDigits("5 دوره")}</div>
                      </div>
                      <div className=" shadow-md bg-[white] flex flex-col items-center rounded-[25px] w-[47%] h-[130px] lg:w-[13%] lg:h-[95%]">
                        <div className=" w-[50%] h-[40%]  flex flex-col items-center "><img className="m-auto" src={NewsImg}/></div>
                        <div className=" w-[50%] h-[35%] text-base/8 flex flex-col items-center text-[#3C8B85]">اخبار</div>
                        <div className=" w-[50%] h-[30%] flex flex-col items-center">{toPersianDigits("14 دوره")}</div>
                      </div>
                      <div className=" shadow-md bg-[white] flex flex-col items-center rounded-[25px] w-[47%] h-[130px] lg:w-[13%] lg:h-[95%]">
                        <div className=" w-[50%] h-[40%]  flex flex-col items-center"><img className="m-auto" src={FavImg}/></div>
                        <div className=" w-[50%] h-[35%] text-base/8 flex flex-col items-center text-[red]">علاقه مندی ها</div>
                        <div className=" w-[50%] h-[30%] flex flex-col items-center">{toPersianDigits("8 دوره")}</div>
                      </div>
                       <div className=" bg-[white] shadow-md rounded-[25px] w-full lg:w-[35%] lg:h-[95%] h-[130px]
                       flex flex-col items-center justify-center">
                         
                         <div className=" w-[80%] h-full lg:h-[95%] flex flex-row">
                            <img className="w-[40%] h-full m-auto" src={Precentage}/>
                             <div className=" w-[60%] h-[90%] m-auto lg:text-base/8 text-center flex flex-col items-center">
                                <div className=" w-full text-[13px]  h-[30%]">وضیعت حساب کاربری</div>
                                <div className=" w-full text-[12px] text-gray-600 h-[30%]">{toPersianDigits("%25 مانده تا تکمیل حساب")}</div>
                                <button style={{ backgroundImage: `url(${Pen})` }} className="border border-[gray]/50 text-gray-600 
                                 bg-[length:15px_15px] lg:bg-[position:right_25px_center] bg-[position:right_5px_center] bg-no-repeat text-base/1 w-[80%] lg:text-[13px] lg:text-center  text-[10px] h-[30px] mb-2 lg:h-[30%] rounded-[25px]">ویرایش پروفایل</button>
                             </div>

                         </div>
                       </div>
               </div>

               <div className=" boxContent rounded-[25px] w-full h-[75%] mt-4
                 flex lg:flex-row lg:flex-wrap flex-col lg:justify-between">

                     <div className=" rounded-[25px]  mb-5  flex flex-col lg:w-[49.5%] lg:h-[95%]">

                      <div className={` bg-[white] flex flex-col items-center mb-5 rounded-[25px] w-full shadow-md overflow-hidden h-[40%]`}>
                         
                         <div className="w-[95%] font-medium  h-[35px] flex justify-between items-center text-xs px-[10px] pb-[15px] mt-2">
                         <span className=" text-[#9B0EE1] text-[14px]"> 
		                      جدید ترین رزرو‌ ها
		                      </span>	
                   
                          <button onClick={()=>setMoreReserve(!moreReserve)} className=" text-[10px] text-[#1F96E6] "> 
		                   	{moreReserve ? "مشاهده کمتر >": "مشاهده بیشتر >"}
		                      </button>	

                              
                               </div>

                               <div className="w-full bg-[#F5F5F5] h-[30px] pb-[10px] text-gray-600 flex flex-row">
                                       <div className="h-full mr-2 w-[45%]">عکس و نام دوره</div>
                                       <div className="h-full  w-[25%]">نام استاد</div>
                                       <div className="h-full  w-[30%]">قیمت</div>
                                      </div>

                               <div className="commentContent w-full whitespace-nowrap text-[10px] lg:text-[15px]  rounded-b-[25px] flex flex-col rounded-b-[25px]">       
                              {currentCard.map((cardi)=>(
                                  <div key={cardi.id} className=" w-full h-[70px] text-[gray]/70  border-b border-[gray]/50  flex flex-row items-center">
                                      <div className=" h-full w-[35%] mr-3  flex flex-row items-center">
                                          <img src={ReactJs} className=" rounded-[15px] h-[80%] w-[30%]"/>
                                          <span className="text-[black] w-[45%]">{cardi.title}</span>
                                      </div>
                                      <span className=" w-[35%] text-center">{cardi.teacher}</span>
                                      <span className=" w-[15%] text-[black]">{cardi.price} <span className="text-[gray]/70">تومان</span></span>
                                      <span className="lg:mr-10 mr-5"><img className=" lg:h-[15px] h-[10px]" src={Show}/></span>
                              </div>
                            ))}
                                      
                               </div>

                      </div>

                      <div className={`  bg-[white] flex flex-col items-center rounded-[25px] w-full shadow-md overflow-hidden h-[58%] `}>
                        
                        <div className="w-[95%] font-medium  h-[35px] flex justify-between items-center text-xs px-[10px] pb-[15px] mt-2 ">
                         <span className=" text-[#9B0EE1] text-[14px]"> 
		                  جدیدترین دوره ها
		                      </span>	
                   
                          <button onClick={()=>setMoreCourse(!moreCourse)} className=" text-[10px] text-[#1F96E6] "> 
		                   	{moreCourse ? "مشاهده کمتر >": "مشاهده بیشتر >"}
		                      </button>	
                   
                               </div>

                               <div className="w-full bg-[#F5F5F5] h-[30px] pb-[10px] text-gray-600 flex flex-row">
                                       <div className="h-full mr-2 w-[45%]">عکس و نام دوره</div>
                                       <div className="h-full  w-[25%]">نام استاد</div>
                                       <div className="h-full  w-[30%]">قیمت</div>
                                </div>

                              
                                   <div className="commentContent w-full whitespace-nowrap text-[10px] lg:text-[15px]  rounded-b-[25px] flex flex-col rounded-b-[25px]">       

                                {currentCard.map((cardi)=>(
                                  <div key={cardi.id} className=" w-full h-[70px] text-[gray]/70  border-b border-[gray]/50  flex flex-row items-center">
                                      <div className=" h-full w-[35%] mr-3  flex flex-row items-center">
                                          <img src={ReactJs} className=" rounded-[15px] h-[80%] w-[30%]"/>
                                          <span className="text-[black] w-[45%]">{cardi.title}</span>
                                      </div>
                                      <span className=" w-[35%] text-center">{cardi.teacher}</span>
                                      <span className=" w-[15%] text-[black]">{cardi.price} <span className="text-[gray]/70">تومان</span></span>
                                      <span className="lg:mr-10 mr-5"><img className=" lg:h-[15px] h-[10px]" src={Show}/></span>
                              </div>
                            ))}
                                        
                               </div>
                        </div>

                      </div>

                    <div className={` bg-[white] flex flex-col items-center rounded-[25px] lg:w-[49%]  shadow-md overflow-hidden h-[600px] lg:mb-0 mb-20 lg:h-[90%]  `}>

                        <div className="w-[95%] font-medium  h-[20px] flex justify-between items-center text-xs px-[10px] pb-[15px] h-[30px] border-b border-[#eee] mt-3 mb-3 ">
                         <span className=" text-[#9B0EE1] text-[14px]"> 
		                   نظرات کاربران
		                      </span>	
                   
                          <button onClick={()=>setMoreComment(!moreComment)} className=" text-[10px] text-[#1F96E6] "> 
		                   	{moreComment ? "مشاهده کمتر >": "مشاهده بیشتر >"}
		                      </button>	
                   
                               </div>

                               <div className="commentContent w-[95%] h-full ">
                                   
                                   <div className="w-full border-b border-[#eee] flex flex-col h-[50%]" >
                                      <span className="w-full"> دوره ها</span>
                                       <div className="w-full my-scroll overflow-y-auto " dir="ltr">
                                           {replies.map((reply) => (
                               <div key={reply.id} className="bg-gray-50 rounded-[25px] p-4 border border-[gray]/50 m-2 " dir="rtl">
                                 <div className="flex items-center gap-3 mb-3">
                                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                                     <img className="w-full h-full rounded-full" src={CommentImg}/>
                                   </div>
                                   <div className="flex flex-row justify-between w-full">
                                     <h4 className="font-medium text-gray-800">{reply.author}</h4>
                                     <p className="text-xs text-gray-500 font-medium">{reply.date}</p>
                                   </div>
                                 </div>
                                 <p className="text-gray-700 text-sm pr-2">{reply.text}</p>
                               </div>
                             ))}
                                       </div>
                                   </div>
                                   <div className="w-full flex flex-col  h-[50%]">
                                     <span className="w-full">اخبار و مقالات</span>
                                      <div className="w-full overflow-y-auto " dir="ltr">
                                            {replies.map((reply) => (
                               <div key={reply.id} className="bg-gray-50 rounded-[25px] p-4 border border-[gray]/50 m-2" dir="rtl">
                                 <div className="flex items-center gap-3 mb-3">
                                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                                     <img className="w-full h-full rounded-full" src={CommentImg}/>
                                   </div>
                                   <div className="flex flex-row justify-between w-full">
                                     <h4 className="font-medium text-gray-800">{reply.author}</h4>
                                     <p className="text-xs text-gray-500 font-medium">{reply.date}</p>
                                   </div>
                                 </div>
                                 <p className="text-gray-700 text-sm pr-2">{reply.text}</p>
                               </div>
                             ))}
                                       </div>
                                   </div>

                               </div>
                   
             
                    </div>

                    
                     
               </div>
                
          </>
        
    )
}
export default dashboard