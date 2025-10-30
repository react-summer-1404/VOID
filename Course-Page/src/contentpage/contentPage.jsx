import Header from "../component/header.jsx"
import Footer from "../component/footer.jsx"
import QuickAction from "../component/quickAction.jsx"

import "../assets/style/tailwinds/tailwindSt(content).css"

import CourseContent from "./coursePage/courseContent.jsx"
import NewsContent from "./newsPage/newsContent.jsx"
import CourseDetail from "./coursePage/courseDetail.jsx"

import Squre2 from "../assets/back/squre2.png"
import Squre3 from "../assets/back/squre3.png"
import {useState} from "react"
import {Link,Outlet,useParams} from "react-router-dom"


const coursePage = ()=>{


    return(
        <div>
            <Link to={"/contentPage/courseContent"}><button className="absolute top-[300px] left-[10px]">go</button></Link>
            <Link to={"/contentPage/courseDetail/:id"}><button className="absolute top-[300px] left-[50px]">go</button></Link>
            <img src={Squre2} className="absolute top-[500px] left-[0]"/>
            <img src={Squre3} className="absolute top-[800px] right-[0]"/>
        <QuickAction/>
        <Header/>
         <div>
            <Outlet/>
         </div>
        <Footer/>
        </div>
    )
}
export default coursePage