// import "../assets/style/tailwinds/tailwindSt(header).css"
import SearchBox from "./searchBox.jsx"
import {useParams} from "react-router-dom"
import Navbar from "./Navbar.jsx"

const courseHeader=({viewPage})=>{

  const {id} = useParams();

return(
  <div className="courseHeader  flex flex-col place-items-center ">

   {/* <div className="header w-[85%] h-[50px] border border-blue-500 mt-3 mb-8"></div> */}
   <Navbar/>
     
     {!id &&<SearchBox/>}
    
    </div>
    )
}
export default courseHeader