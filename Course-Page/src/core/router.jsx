import {createBrowserRouter} from "react-router-dom"
import ContentPage from "../contentpage/contentPage"
import CourseContent from "../contentpage/coursePage/courseContent"      
import CourseDetail from "../contentpage/coursePage/courseDetail"


const router = createBrowserRouter([
     
    {path:"/contentPage",element:<ContentPage/>, children:[
        {path:"courseContent",element:<CourseContent/>},
        {path:"courseDetail/:id",element:<CourseDetail/>},
    ]},
    
    
   
])
export default router