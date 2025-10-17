import {useState} from "react"
// import "../assets/style/productSt.css"
import "../assets/style/tailwinds/tailwindSt(productCard).css"
import Image from "../assets/cardImg/cover1.png"
import Favorite from "../assets/icon/Heart.png"
import Star from "../assets/icon/Star.png"
import Education from "../assets/icon/Education.png"
import Calender from "../assets/icon/Calender.png"
import Vector from "../assets/icon/Vector.png"
const productCard = ({Id,price,like,teacherName,date,Img})=>{

    return(
        <div key={Id} className="productCard">

            <img src={Image} className="Image"/>
            <span className="favorite"><img className=" w-[18px] h-[18px] m-[auto]" src={Favorite}/></span>


            <div className="info">
                <div className="intro">
                    <h4 className="name">دوره ریکت</h4>
                    <span className="star">5<img src={Star}/></span>
                </div>
                <div className="teacherInfo">
                    <span className="teacher"><img src={Education}/> {teacherName}استاد</span>
                    <span className="student"><img src={Vector}/>دانش آموز</span>

                     <div className="date">
                    <img src={Calender}/> 1404/04/04
                     </div>
                </div>
                 <div className="detail">
                 <span className="price">2,500,000<p className="text-purple-500">تومان</p></span>
                <button className="detailBt">مشاهده دوره</button>
                
            </div>
               
            </div>
           
        </div>

    )
}
export default productCard