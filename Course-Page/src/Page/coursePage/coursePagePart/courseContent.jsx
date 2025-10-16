// import "../../../assets/style/contentSt.css";
import "../../../assets/style/tailwinds/tailwindSt(content).css"
import {useState,useEffect} from "react";
import useToggle from "../../../hook/useToggle.js"
import Side from "../courseContent/sidePart.jsx"
import image from "../../../assets/ip17.jpg"
import ProductList from "../../../component/productList.jsx"
// import "../../../assets/style/productSt.css"

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
			<div className="view" onClick={()=>setview("view2")}> view2  </div>  
			<div className="view sel" onClick={()=>setview("view1")}> view1  </div>
            </div>
		</div>

		<div id="grid" className={view}>

			<ProductList/>

		</div>	

	</div>


 </div>

  )
}

export default courseContent