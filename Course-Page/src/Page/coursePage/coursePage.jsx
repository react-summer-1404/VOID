import CourseHeader from "./coursePagePart/courseHeader.jsx"
import CourseContent from "./coursePagePart/courseContent.jsx"
import CourseFooter from "./coursePagePart/courseFooter.jsx"
import PageOption from "../../component/jet.jsx"

const coursePage = ()=>{

    return(
        <>
        <PageOption/>
        <CourseHeader/>
         <CourseContent/>
        <CourseFooter/>
        </>
    )
}
export default coursePage