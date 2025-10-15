import "../../assets/style/contentSt.css";
import {useState,useEffect} from "react";
import useToggle from "../../hook/useToggle.js"
import Main from "./contentPart/mainPart.jsx"
import Side from "./contentPart/sidePart.jsx"
import image from "../../assets/style/ip17.jpg"

const courseContent=()=>{
   const[view,setview] = useState("view1");
  
    return(
     <div className="courseContent">
           
      <Side/>

	<div className="main">  

		<div className="set">

			<div className="sort">  

                <span className="selSort"> مرتب سازی بر اساس </span> 

				<ul>
					<li>
						<input type="radio" id="dateSort" name="sor"/>
						<label htmlFor="dateSort"> سال  </label>						
					</li>
					<li>
						<input type="radio" id="priceSort" name="sor"/>
						<label htmlFor="priceSort"> قیمت </label>										
					</li>					
					<li>
						<input type="radio" id="offSort" name="sor"/>
						<label htmlFor="offSort"> تخفیف </label>						
					</li>
					<li>
						<input type="radio" id="exiSort" name="sor"/>
						<label htmlFor="exiSort"> موجودی </label>										
					</li>				
				</ul>
			</div>
           <div className="viewBox">
			<div className="view sel" onClick={()=>setview("view1")}> view1  </div>
			<div className="view" onClick={()=>setview("view2")}> view2  </div>  
            </div>
		</div>

		<div id="grid" className={view}> 
       {/* onClick={showBook(0)} */}
		<div className="items"> 
				<img src={image}/>	
				<span className="offLable"> 20% </span>	
				
				<div className="info">
					<h2> نام کتاب </h2>
					<span className="writer"> جفر </span>
					<span className="star">  </span>
					<p className="describe"> خلاصه کتاب </p>	
					<span className="price"> 25000 ریال <i> 20000 ریال</i> </span>				
				</div>
			</div>

		    </div>		
	     </div>


         </div>

  )
}

export default courseContent