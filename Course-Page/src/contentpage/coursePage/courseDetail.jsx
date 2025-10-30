import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import PicIco from "../../assets/icon/Education.png"
import Like from "../../assets/icon/like.png"
import Dislike from "../../assets/icon/dislike.png"
import emptyStar from "../../assets/icon/emptyStar.png"
import Star from "../../assets/icon/Star.png"
import HandleSpecs from "../../component/handleSpecs.jsx"
import Img from "../../assets/cardImg/Img3.png"
import ProductList from "../../component/course/productList.jsx"
import ProductCard from "../../component/course/productCard.jsx"
import "../../assets/style/tailwinds/tailwindSt(productCard).css"

const courseDetail = () => {
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const[showMore,setShowMore] = useState(false);
  const[showMore2,setShowMore2] = useState(false);

 ///////////////////////////////////////////////////

  const [Product, setProduct] = useState([]);
  const [relatedCourse, setRelatedCourse] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const response = await axios.get("https://sepehracademy.liara.run/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0");
        const data = await response.data.courseFilterDtos;
        setProduct(data);
      } catch (error) {
        console.error('خطا:', error);
      }
    };

    
    
    fetchRelated();
  }, [id]);
   
  //selectedProduct
    const selectedProduct = Product.find((el)=> el.courseId === id);
    console.log(selectedProduct);

  //relatedProduct
  useEffect(()=>{
       const related = Product.filter((el) => el.title === selectedProduct.title);
      setRelatedCourse(related);
      console.log("relatedProduct",related);
  },[selectedProduct])
 
   
  ///////////////////////////////////////////////////
   

  const handleRating = (rate) => {
    setRating(rate);
    console.log('امتیاز داده شده:', rate);
  };

 
  return (
  <div className=" flex flex-col mb-5 place-items-center">

    <div className=" w-[80%] md:w-[80%] lg:w-[85%] xl:w-[85%] flex flex-col justify-between  md:flex-row md:flex-wrap gap-[15px]">
       
      
  <div className="HandleSpecs&productDetail w-full flex flex-col lg:flex-row gap-[15px]">
    
    <aside className="w-full lg:w-[30%] order-2 lg:order-1">
      <HandleSpecs/>
    </aside>

    <div className="w-full lg:w-[70%]  lg:flex-1 flex flex-col gap-6">
      
  
      <div className="order-1">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          دوره تخصصی ریکت جی اس
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
          حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
          جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
        </p>
      </div>

      <div className=" flex flow-row flex-wrap order-3 lg:order-2">
      
          <div className="relative h-[90%] w-full">
            <img 
              src={Img}
              className="h-full w-full"
            ></img>
            <button className="border absolute lg:top-15 lg:right-15 right-5 top-5 lg:w-12 lg:h-12 h-6 w-6   backdrop-blur-sm rounded-full">
            </button>

          </div>
          
          <div className=" w-full flex h-[10%] items-center gap-4 text-sm flex-wrap justify-between">

               <div className="flex items-center gap-2">
               <span className="text-sm text-gray-700">میتونی به دوره ما امتیاز بدی</span>
      
             <div className="flex gap-1">
               {[5,4,3,2,1].map((star) => (
                 <button
                   key={star}
                   onClick={() => handleRating(star)}
                   onMouseEnter={() => setHover(star)}
                   onMouseLeave={() => setHover(0)}
                   className=" hover:scale-110 cursor-pointer"
                 >
                   <img className="w-[20px] h-[20px]" src={ star <=(hover || rating) ? Star : emptyStar}/>
                 </button>
               ))}
             </div>
             </div>
  
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span>از دوره راضی بودی؟</span>
                  
                  {/* Like Button */}
                  <button className="flex items-center gap-1 hover:text-green-600 transition">
                    <span className="text-lg"><img src={Like}/></span>
                    <span className="font-medium">۲۰</span>
                  </button>
                  
                  {/* Dislike Button */}
                  <button className="flex items-center gap-1 hover:text-red-600 transition">
                    <span className="text-lg"><img src={Dislike}/></span>
                    <span className="font-medium">۲</span>
                  </button>
                </div>
                
          </div>
  

      </div>

    </div>
  

  </div>

   <div  className="productInfo&relatedProduct w-full flex flex-col lg:flex-row gap-[15px]">
        <div className="productInfo border rounded-[25px] p-4 flex flex-col justify-between  w-[full] lg:w-[68%]">

           <div className="moreInfo pb-4">
             <h1 className="text-2xl font-bold text-gray-800 mb-4">
              دوره تخصصی ریکت جی اس
              </h1>
             <p className={` relative  text-md text-gray-600 pb-5 leading-relaxed ${showMore ? "":"overflow-hidden h-[300px]"}`}>
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را
               جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید
               
             </p>
              <div className="w-full h-[20px] text-blue-400 text-[12px]
                 flex place-items-center justify-end sticky bottom-0 cursor-pointer bg-[white] "
                 onClick={()=>setShowMore(!showMore)}
               > {showMore ? "مشاهده کمتر >":"مشاهده بیشتر >"}
               </div>
             

           </div>

           <div className={`border  flex flex-col p-2 place-items-center rounded-[25px]`}>
            <div className="flex mb-2  justify-between w-full h-[30px]">
              <span>نظرات</span>
              <button className="bg-[blue] flex items-center rounded-[7px] pr-5 pl-5">نظر شما</button>
            </div>
             <div className={`flex relative flex-row flex-wrap  place-items-center w-full ${showMore2 ? "":"overflow-hidden h-[470px]"}`}>
              {[1,2,3,4,5,6].map((comment)=>(
                <div key={comment} className="w-full h-[200px] mb-2 border rounded-[25px] shadow-purple-200">

               </div>
              ))}
             
               <div className="w-full h-[20px] text-blue-400 text-[12px]
                 flex place-items-center justify-end absolute bottom-0 cursor-pointer bg-[white] "
                 onClick={()=>setShowMore2(!showMore2)}
               > {showMore2 ? "مشاهده کمتر >":"مشاهده بیشتر >"}
               </div>
               </div>
              
           </div>

        </div>

        <div className="relatedProduct border shadow-md shadow-purple-200 rounded-[20px]  w-[full] lg:w-[30%]  h-[580px]
         rounded-[20px] py-[10px] font-medium text-xs px-[10px] pb-[15px] flex flex-row flex-wrap">
     
           <div className="w-[95%] font-medium h-[20px] flex justify-between text-xs px-[10px] pb-[15px] h-[30px] border-b border-[#eee] m-[10px]">
            <span className=" text-[gray]"> 
		      	دوره های مرتبط
		         </span>	
      
             <button className=" font-medium text-[#9B0EE1]"> 
		      	دوره های بیشتر {`>`}
		         </button>	
      
             </div>

            <div id="grid" className="view2">
               
               {/* <ProductList/> */}
             
            </div>

        </div>

        </div>

       </div>
       </div>
     )
}
export default courseDetail;