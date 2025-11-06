import "../../assets/style/tailwinds/NewsStyle.css"
import {useNavigate} from "react-router-dom"

import Image from "../../assets/cardImg/cover1.png"

import Favorite from "../../assets/icon/Heart.png"
import Star from "../../assets/icon/Star.png"
import Education from "../../assets/icon/Education.png"
import Calender from "../../assets/icon/Calender.png"
import Vector from "../../assets/icon/Vector.png"
import Pen from "../../assets/landPagePic/pen.png"
import Eye from "../../assets/landPagePic/eye.png"


const NewsCard = ({price,id,name,like,category,teacher,Img,date}) => {

    

    const navigate = useNavigate();
    const productDetailHandler = ()=>{
       navigate(`/contentPage/newsDetail/${id}`)
       window.location.reload();
    }

  return (
   <div key={id} className="productCard shadow-md shadow-purple-200 ">
   
    <img src={Img} className="Image"/>
    
    <span className="favorite">
       <img className=" w-[18px] h-[18px] m-[auto]" src={Favorite}/>
       </span>
   
   
    <div className="info">
   
       <div className="intro">
        <h4 className="name">{name}</h4>
        <span className="star">{like}<img src={Star}/></span>
       </div>
   
       <div className="teacherInfo">
        <p className="title">
         یثبسلیللثصثب
            بثشسلیلدبائبلبث
            صثبلقفات
            
            </p>
        
        <span className="teacher"><img src={Pen}/>علیرضا باقری</span>
         
       </div>
   
           <div className="detail">
           <span className="student"><img src={Eye}/>{"(280)بازدید کننده"}</span>
           <button onClick={productDetailHandler} className="detailBt">بیشتر بخوانید</button>       
          </div> 
   
      </div>
   
              
     </div>
  );
};

export default NewsCard;