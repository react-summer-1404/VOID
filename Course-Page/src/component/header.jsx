// import "../assets/style/tailwinds/tailwindSt(header).css"
import SearchBox from "./searchBox.jsx"

const courseHeader=({viewPage})=>{

return(
  <div className="courseHeader  flex flex-col place-items-center ">

   <div className="header w-[80%] h-[50px] border border-blue-500 mt-3 mb-8"></div>
     
     {viewPage &&<SearchBox/>}
    
    </div>
    )
}
export default courseHeader