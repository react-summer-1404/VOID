import {createBrowserRouter} from "react-router-dom"
import CoursePage from "./Page/coursePage"
import CourseContent from "./Page/courseContent/courseContent"       

const router = createBrowserRouter([
 
    {path:"/",element:<CoursePage/>},
    
   
])
export default router