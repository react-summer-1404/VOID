import { useParams , useNavigate } from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import PicIco from "../../assets/icon/Education.png"
import Like from "../../assets/icon/like.png"
import Dislike from "../../assets/icon/dislike.png"
import emptyStar from "../../assets/icon/emptyStar.png"
import Star from "../../assets/icon/Star.png"
import CommentImg from "../../assets/icon/comment.png"
import HandleSpecs from "../../component/handleSpecs.jsx"
import Img from "../../assets/cardImg/Img3.png"
import ProductList from "../../component/course/productList.jsx"
import ProductCard from "../../component/course/productCard.jsx"
import Out from "../../assets/icon/out.png"
import Send from "../../assets/icon/send.png"
import "../../assets/style/tailwinds/tailwindSt(productCard).css"
import Favorite from "../../assets/icon/favorite.png"

const courseDetail = () => {
  
  const[showMore,setShowMore] = useState(false);
  const[showMore2,setShowMore2] = useState(false);  



///////////////////////////////////////////////

 const {id} = useParams();
  
 ///////////////////////////////////////////////////

  const [Product, setProduct] = useState([]);
  const [relatedCourse, setRelatedCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
 

   useEffect(() => {
    const fetchRelated = async () => {
      try {
        const response = await axios.get("https://sepehracademy.liara.run/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=active&SortType=desc&TechCount=0");
        const data = await response.data.courseFilterDtos;
        setProduct(data);
      } catch (error) {
        console.error('خطا:', error);
      }
    }
    
    fetchRelated();
  }, [id]);

  // console.log(Product)
  
 
   
  //selectedProduct
    useEffect(()=>{
      const foundCourse = Product.find((el) => String(el.courseId) === String(id));
      setSelectedCourse(foundCourse);
      
    },[Product,id])   

    // if(selectedCourse)
    // console.log("selectedCourse",selectedCourse);
    //  else{console.log("وجود ندارد")}
    
  //relatedProduct
  useEffect(()=>{
    
       const related = Product.filter((el) => el.describe === selectedCourse.describe).slice(0,5);
      setRelatedCourse(related);
      // console.log("relatedProduct",related);
  },[selectedCourse])
 
   
  ///////////////////////////////////////////////////
   const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const[like,setLike] = useState(false);
    const[dissLike,setDissLike] = useState(false);

  
////////////////rating
  const handleRating = async (rate) => {
  try {
    const courseRate = await axios.post(
      `https://sepehracademy.liara.run/Course/SetCourseRating?CourseId=${selectedCourse.courseId}&RateNumber=${rate}`
    );
    
    setRating(rate);
    console.log('امتیاز ثبت شد:', rate);
  } catch (error) {
    console.error('خطا:', error);
  }
};
/////////////////////

//////////////////like/disslike

const likeHandler = async ()=>{
  try {
    const courseAddLike = await axios.post(
      `https://sepehracademy.liara.run/Course/AddCourseLike?CourseId=${selectedCourse.courseId}`
    );
  } catch (error) {
    console.error('خطا:', error);
  }finally{
    setLike(!like);
  }

  if(like === true){
     try {
    const courseDeleteLike = await axios.delete(
      `https://sepehracademy.liara.run/Course/DeleteCourseLike`
    );
  } catch (error) {
    console.error('خطا:', error);
  }finally{
    setLike(!like);
  }
   }
}

const dissLikeHandler = async ()=>{
   try {
    const courseAddDissLike = await axios.post(
      `https://sepehracademy.liara.run/Course/AddCourseDissLike?CourseId=${selectedCourse.courseId}`
    );
  } catch (error) {
    console.error('خطا:', error);
  }finally{
    setDissLike(!dissLike);
  }
   if(dissLike){
     try {
    const coursDeleteDissLike = await axios.delete(
      `https://sepehracademy.liara.run/Course/DeleteCourseDissLike`
    );
  } catch (error) {
    console.error('خطا:', error);
  }finally{
    setDissLike(!dissLike);
  }
   }

}

 
  const[moreCourse,setMoreCourse] = useState(false);

///////////////////////////////////////////////////
//comment
 const [showReplies, setShowReplies] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [likes, setLikes] = useState(20);
  const [dislikes, setDislikes] = useState(2);
  const [userVote, setUserVote] = useState(null);

  const comments = [
    {
      id: 1,
      author: 'محمد علی راه نشین',
      date: '۲۷ تیر ۱۴۰۴',
      text: 'دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی (:',
      likes: 20,
      dislikes: 2,
      replies: [
        {
          id: 1,
          author: 'اژده های سیاه',
          date: '۲۸ تیر ۱۴۰۴',
          text: 'خیلی ممنون بابت نظر'
        }
      ]
    },
    {
      id: 2,
      author: 'محمد علی راه نشین',
      date: '۲۷ تیر ۱۴۰۴',
      text: 'دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی (:',
      likes: 20,
      dislikes: 2,
      replies: [
        {
          id: 2,
          author: 'اژدهای سیاه',
          date: '۲۸ تیر ۱۴۰۴',
            text: 'خیلی ممنون بابت نظر'
        }
      ]
    },
    {
      id: 3,
      author: 'محمد علی راه نشین',
      date: '۲۷ تیر ۱۴۰۴',
      text: 'دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی (:',
      likes: 20,
      dislikes: 2,
      replies: [
        {
          id: 3,
          author: 'اژدهای سیاه',
          date: '۲۸ تیر ۱۴۰۴',
           text: 'خیلی ممنون بابت نظر'
        }
      ]
    },
    {
      id: 4,
      author: 'محمد علی راه نشین',
      date: '۲۷ تیر ۱۴۰۴',
      text: 'دوره ی بسیار مفیدی بود ، استادانی عالی با تدریس متعالی (:',
      likes: 20,
      dislikes: 2,
      replies: [
        {
          id: 4,
          author: 'اژدهای سیاه',
          date: '۲۸ تیر ۱۴۰۴',
           text: 'خیلی ممنون بابت نظر'
        }
      ]
    }
  ];

  const handleLike = () => {
    if (userVote === 'like') {
      setLikes(likes - 1);
      setUserVote(null);
    } else {
      if (userVote === 'dislike') setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserVote('like');
    }
  };

  const handleDislike = () => {
    if (userVote === 'dislike') {
      setDislikes(dislikes - 1);
      setUserVote(null);
    } else {
      if (userVote === 'like') setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserVote('dislike');
    }
  };

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      console.log('پاسخ جدید:', replyText);
      setReplyText('');
      setShowReplyForm(false);
    }
  };
  

 
  return (

  <div className=" flex flex-col  place-items-center">

    <div className=" w-[80%]  md:w-[80%] pb-50 lg:w-[85%] mb-10 mt-10 xl:w-[85%] flex flex-col justify-between  md:flex-row md:flex-wrap gap-[25px]">
       
      
  <div className="HandleSpecs&productDetail w-full flex flex-col lg:flex-row gap-[15px]">
    
    <aside className="w-full z-10 lg:w-[34%] order-2 lg:order-1">
      {selectedCourse ?
      <HandleSpecs 
        cost={selectedCourse.cost}
        capicity={selectedCourse.capacity}
        teacher={selectedCourse.teacherName}
      />
       :
       <HandleSpecs
        cost={"?"}
        />
      }
       
    </aside>

    <div className="w-full lg:w-[65%]  lg:flex-1 flex flex-col gap-6">
      
  
      <div className="order-1">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
         {selectedCourse ? selectedCourse.describe : "دوره تخصصی ریکت جی اس"} 
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed">
         {selectedCourse ? selectedCourse.title : " حدود 40 ساعت آموزش جامع و تخصصی این کتابخانه فرانتند و استفاده را جاوا اسکریپت را به صورت کاملا پروژه محور و کاربردی یاد میگیرید"}
        </p>
      </div>

      <div className=" flex flow-row flex-wrap order-3 lg:order-2">
      
          <div className="relative h-[80%] w-full">
            <img 
              src={selectedCourse ? selectedCourse.imageAddress:null}
              className="h-full w-full rounded-[25px]"
            ></img>
            <button className="flex justify-center items-center absolute lg:top-10 lg:right-10 right-5 top-5 lg:w-12 lg:h-12 h-6 w-6   backdrop-blur-sm rounded-full">
              <img src={Favorite}/>
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
                  
                  
                  <button onClick={()=>{likeHandler()}} className="flex items-center gap-1 hover:text-green-600 transition">
                    <span className="text-lg"><img src={Like}/></span>
                    <span className="font-medium">{selectedCourse ? selectedCourse.likeCount : "0"}</span>
                  </button>
                  
                  
                  <button onClick={()=> dissLikeHandler()} className="flex items-center gap-1 hover:text-red-600 transition">
                    <span className="text-lg"><img src={Dislike}/></span>
                    <span className="font-medium">{selectedCourse ? selectedCourse.dissLikeCount : "0"}</span>
                  </button>
                </div>
                
          </div>
  

      </div>

    </div>
  

  </div>

   <div  className="productInfo&relatedProduct w-full flex flex-col lg:flex-row gap-[15px]">
        <div className="productInfo  shadow-md bg-white rounded-[25px] p-4 flex flex-col justify-between  w-[full] lg:w-[65%]">

           <div className="moreInfo  pb-4">
             <h1 className="text-2xl font-bold text-gray-800 mb-4">
              دوره تخصصی ریکت جی اس
              </h1>
             <p className={` relative text-md text-gray-600 pb-5 leading-relaxed ${showMore ? "":"overflow-hidden h-[300px]"}`}>
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
             <div className="w-full h-[50px] text-blue-400 text-[12px]
                 flex place-items-center justify-end sticky bottom-[-21px] cursor-pointer
                 backdrop-blur-sm bg-gray/10 "
                 onClick={()=>setShowMore(!showMore)}
               > {showMore ? "مشاهده کمتر >":"مشاهده بیشتر >"}
               </div>
             
              
             

           </div>

           <div className={` shadow-lg bg-white flex flex-col p-2 place-items-center rounded-[25px]`}>
            <div className="flex mb-2  justify-between w-full h-[30px]">
              <span>نظرات</span>
              <button className="bg-[skyblue] flex items-center rounded-[7px] pr-5 pl-5">نظر شما</button>
            </div>
             <div className={`flex relative flex-row flex-wrap  place-items-center w-full ${showMore2 ? "":"overflow-hidden h-[470px]"}`}>
                  {comments.map((comment) => (
                 <div key={comment.id} className="bg-white w-full rounded-2xl shadow-lg p-6 mb-4">
                     
                     
                     <div className="flex items-start justify-between mb-4">
                       <div className="flex items-center gap-3">
                         <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
                           <img className="rounded-full h-full w-full" src={CommentImg}/>
                         </div>
                         <div className="w-full lg:w-[700px] flex flex-row justify-between">
                           <h3 className="font-bold text-gray-800">{comment.author}</h3>
                           <p className="text-sm whitespace-nowrap text-gray-500">{comment.date}</p>
                         </div>
                       </div>
                     </div>
         
                     
                     <p className="text-gray-700 leading-relaxed mb-4 pr-2">
                       {comment.text}
                     </p>
         
                    
                     <div className="flex items-center">
                       
                      
                       <div className="flex flex-row pl-2 gap-4">
                         <button 
                         className={`flex items-center rounded-lg transition ${
                             userVote === 'like' 
                               ? 'bg-green-100 text-green-600' 
                               : 'hover:bg-gray-100 text-gray-600'
                           }`}
                           onClick={handleLike}
                           
                         >
                           <span className="text-xl"><img src={Like}/></span>
                           <span className="font-medium">{likes}</span>
                         </button>
         
                         <button 
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
                             userVote === 'dislike' 
                               ? 'bg-red-100 text-red-600' 
                               : 'hover:bg-gray-100 text-gray-600'
                           }`}
                           onClick={handleDislike}
                         >
                           <span className="text-xl"><img src={Dislike}/></span>
                           <span className="font-medium">{dislikes}</span>
                         </button>
                       </div>
         
                       
                       <button 
                       className="flex items-center gap-2 px-4 py-1 bg-blue-500  hover:bg-blue-600 text-white rounded-[25px] transition"
                         onClick={() => setShowReplyForm(!showReplyForm)}
                         
                       >
                        
                         <span>جواب دادن</span>
                       </button>
         
                     </div>
         
                    
                     {showReplyForm && (
                       <div className="mt-4 p-4 flex flex-col items-end bg-gray-50 rounded-xl">
                         <button
                            className=" flex items-center gap-1 w-[50px] mb-2 px-2 text-red-300 text-[12px] border  hover:bg-gray-200 rounded-[5px] transition"
                             onClick={() => {
                               setShowReplyForm(false);
                               setReplyText('');
                             }}
                            
                           >
                            <img src={Out} className="w-[20%] h-[80%]"/>
                             بستن
                           </button>
                         <textarea
                           value={replyText}
                           onChange={(e) => setReplyText(e.target.value)}
                           placeholder="پاسخ خود را بنویسید..."
                           className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                           rows="3"
                         />
                         <div className="flex justify-end gap-2 mt-3">
                          
                           <button
                            className=" flex items-center gap-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                             onClick={handleReplySubmit}
                            
                           >
                            <img src={Send} className="w-[35%] h-[80%]"/>
                              ارسال 
                           </button>
                         </div>
                       </div>
                     )}
         
                     
                     {comment.replies && comment.replies.length > 0 && (
                       <div className=" flex flex-row flex-wrap items-center ">
                        <div className="border-b order-1 border-gray-100 w-155"></div>
                         <button
                         className=" text-gray-500 order-2 hover:text-blue-700 text-[10px]  flex items-center gap-2"
                           onClick={() => setShowReplies(!showReplies)}
                           
                         >
                           <span>{showReplies ? '▼' : '◀'}</span>
                           <span>مشاهده جواب ها ({comment.replies.length})</span>
                         </button>
                         
         
                         
                         {showReplies && (
                           <div className="mt-4 w-full pr-8 order-3 space-y-4">
                             {comment.replies.map((reply) => (
                               <div key={reply.id} className="bg-gray-50 rounded-[25px] p-4 border border-[gray]/50 m-2 ">
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
                         )}
                       </div>
                     )}
         
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

        <div className={`relatedProduct bg-white shadow-md  rounded-[20px]  w-[full] lg:w-[35%] ${moreCourse ? "":"overflow-hidden h-[560px]"} 
         rounded-[20px] py-[5px] font-medium text-xs px-[5px] pb-[15px] flex flex-col`}>
     
           <div className="w-full font-medium h-[20px] flex justify-between text-xs px-[10px] pb-[15px] h-[30px] border-b border-[#eee] mt-2 mb-3 ">
            <span className=" text-[gray]"> 
		      	دوره های مرتبط
		         </span>	
      
             <button onClick={()=>setMoreCourse(!moreCourse)} className=" font-medium text-[#9B0EE1]"> 
		      	{moreCourse ? "دوره های کمتر >": "دوره های بیشتر >"}
		         </button>	
      
             </div>

            <div id="grid" className="view3">
               {relatedCourse.map((relate)=>(
                <ProductCard
                   key={relate.courseId}
                   price={relate.cost}
                   id={relate.courseId}
                   name={relate.title}
                   like={relate.likeCount}
                   category={relate.levelName}
                   teacher={relate.teacherName}
                   Img={relate.imageAddress || relate.tumbImageAddress}
                   date={relate.startTime}

                />
               ))}
              
             
            </div>

        </div>

        </div>

       </div>
       </div>
     )
}
export default courseDetail;