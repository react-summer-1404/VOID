import "../../assets/style/tailwinds/tailwindSt(productCard).css"

import Image from "../../assets/cardImg/cover1.png"

import Favorite from "../../assets/icon/Heart.png"
import Star from "../../assets/icon/Star.png"
import Education from "../../assets/icon/Education.png"
import Calender from "../../assets/icon/Calender.png"
import Vector from "../../assets/icon/Vector.png"

const productCard = ({Id,price,like,name,teacher,category,sortBy,date,Img})=>{

return(
 <div key={Id} className="productCard shadow-md shadow-purple-200 ">

 <img src={Image} className="Image"/>
 
 <span className="favorite">
    <img className=" w-[18px] h-[18px] m-[auto]" src={Favorite}/>
    </span>


 <div className="info">

    <div className="intro">
     <h4 className="name">{name}</h4>
     <span className="star">{like}<img src={Star}/></span>
    </div>

    <div className="teacherInfo">
     <span className="teacher"><img src={Education}/>{teacher}</span>
     <span className="student"><img src={Vector}/>دانش آموز</span>
      <div className="date">
        <img src={Calender}/> {date}
      </div>
    </div>

        <div className="detail">
        <span className="price">{price}<p className="text-purple-500">تومان</p></span>
        <button className="detailBt">مشاهده دوره</button>       
       </div> 

   </div>

           
  </div>

    )
}
export default productCard