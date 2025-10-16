import {useState} from "react"
// import "../assets/style/productSt.css"
import "../assets/style/tailwinds/tailwindSt(productCard).css"
import Image from "../assets/ip17.jpg"
const productCard = ()=>{

    return(
        <div className="productCard">

            <img src={Image} className="Image"/>
            <span className="favorite"><img/></span>


            <div className="info">
                <div className="intro">
                    <h4 className="name">دوره ریکت</h4>
                    <span className="star"><img/>4</span>
                </div>
                <div className="teacherInfo">
                    <span className="teacher"><img/>استاد</span>
                    <span className="student"><img/>دانش آموز</span>

                     <div className="date">
                    <img/> 1404/4/4
                     </div>
                </div>
                 <div className="detail">
                 <span className="price">2,500,000<p class="text-purple-500">تومان</p></span>
                <button className="detailBt">مشاهده دوره</button>
                
            </div>
               
            </div>
           
        </div>

    )
}
export default productCard