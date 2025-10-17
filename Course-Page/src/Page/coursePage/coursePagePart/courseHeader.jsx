import "../../../assets/style/tailwinds/tailwindSt(header).css"
import vectLeft from "../../../assets/icon/vectLeft.png"
import vectRight from "../../../assets/icon/vectRight.png"
import square from "../../../assets/back/Squre.png"  
import SearchIcon from "../../../assets/icon/searchIcon.png"
const courseHeader=()=>{



    return(
         <div className="courseHeader">

            <div className="header"></div>

            <div className="searchBox">
               <img src={square} className="absolute left-[-20px] top-[30px] z-[1]"/>
                 <div className="searchTitle">
                    <p><img src={vectRight}/>با هر دوره،یک قدم جلوتر<img src={vectLeft}/></p>
                    <h1>دوره های آموزشی ما</h1>
                 </div>
                 <div className="search">
                    <input placeholder="دنبال چه دوره هایی هستی؟..." className="searchInput"/>
                    <button className="searchBt"><img className="m-auto" src={SearchIcon}/></button>
                  </div>
                </div>
           
         </div>
    )
}
export default courseHeader