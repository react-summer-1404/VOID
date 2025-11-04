import {createBrowserRouter} from "react-router-dom"
import DashHome from "../component/dashHome"
import Dashboard from "../component/dashboard"
import DashCourse from "../component/dashCourse"
const router = createBrowserRouter([
     
     {path:"/",element:<DashHome/>}
    
])
export default router