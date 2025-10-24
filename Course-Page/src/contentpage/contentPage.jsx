import Header from "../component/header.jsx"
import Footer from "../component/footer.jsx"
import QuickAction from "../component/quickAction.jsx"

import "../assets/style/tailwinds/tailwindSt(content).css"

import CourseContent from "./coursePage/courseContent.jsx"
import CourseDetail from "./coursePage/courseDetail.jsx"

import Squre2 from "../assets/back/squre2.png"
import Squre3 from "../assets/back/squre3.png"
import {useState} from "react"

const coursePage = ()=>{
 const [viewPage,setviewPage] = useState (false);

    return(
        <div>
            <img src={Squre2} className="absolute top-[500px] left-[0]"/>
            <img src={Squre3} className="absolute top-[800px] right-[0]"/>
        <QuickAction/>
        <Header/>
         {!viewPage &&<CourseContent/>}
         { viewPage &&<CourseDetail/>}
        <Footer/>
        </div>
    )
}
export default coursePage