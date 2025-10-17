// import "../../../assets/style/contentSt.css";
import "../../../assets/style/tailwinds/tailwindSt(content).css"
import {useState,useEffect} from "react";
import useToggle from "../../../hook/useToggle.js"
import Side from "../courseContent/sidePart.jsx"
import ProductList from "../../../component/productList.jsx"
// import "../../../assets/style/productSt.css"
import View1 from "../../../assets/icon/view1.png"
import View1v1 from "../../../assets/icon/view1.v1.png"
import View2 from "../../../assets/icon/view2.png"
import View2v2 from "../../../assets/icon/view2.v2.png"

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
			<div className={view === "view2" ? `view1` : "view2"} onClick={()=>setview("view2")}><img src={view === "view2" ? View2v2 : View2}/></div>  
			<div className={view === "view1" ? `view1` : "view2"} onClick={()=>setview("view1")}><img src={view === "view1" ? View1 : View1v1}/></div>
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