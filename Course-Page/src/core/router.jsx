import {createBrowserRouter} from "react-router-dom"
import CoursePage from "../Page/coursePage/coursePage"
import CourseContent from "../Page/coursePage/coursePagePart/courseContent"       

const router = createBrowserRouter([
 
    {path:"/",element:<CoursePage/>},
    
   
])
export default router