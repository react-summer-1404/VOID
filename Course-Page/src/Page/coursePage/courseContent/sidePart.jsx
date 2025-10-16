import {useState} from "react"
import useToggle from "../../../hook/useToggle"
import Slider from "rc-slider"
import "rc-slider/assets/index.css";
// import "../../../assets/style/contentSt.css"

const sidePart =()=>{

    const [active, setActive] = useState({
    cat1: false,
    cat2: false,
    cat3: false,
  });
  // تابع برای تغییر وضعیت هر دکمه
  const toggle = (key) => {
    setActive((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const [range, setRange] = useState([0, 100000000]);

  const handleChange = (value) => {
    setRange(value);
  };

   
    return(
        
         <div className="side">
        <div className="sideMaket">

         <div className="filterTitle"> 

			<h2> فیلتر  </h2>
			<span className="filterNum">حذف همه‌ی فیلتر ها(3)</span>
			
		</div>	

         <div  className="filter">
           <div className="catLabel">دسته بندی</div>
            <div className="category">  

                <span  onClick={() => toggle("cat1")} className="catName"> دسته بندی<span>{">"}</span></span> 

				<ul className={`catBox ${active.cat1 ? "show" : ""}`}>
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
            </div>
	  
			   <div  className="filter">
           <div className="catLabel">سطح آموزشی</div>
            <div className="category">  

                <span  onClick={() => toggle("cat2")} className="catName"> سطح<span>{">"}</span></span> 

				<ul className={`catBox ${active.cat2 ? "show" : ""}`}>
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
            </div>
			 <div  className="filter">
           <div className="catLabel">اساتید</div>
            <div className="category">  

                <span  onClick={() => toggle("cat3")} className="catName"> اساتید<span>{">"}</span></span> 

				<ul className={`catBox ${active.cat3 ? "show" : ""}`}>
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
            </div>
			
			 
            <div className="price-filter">
      <div className="header">
        <span>قیمت</span>
      </div>

         <Slider
          range
          min={0}
          max={100000000}
          step={1000000}
          value={range}
          onChange={handleChange}
          trackStyle={[{ backgroundColor: "#a200ff", height: 4, borderRadius: 4 }]}
          handleStyle={[
            {
              backgroundColor: "#a200ff",
              border: "2px solid white",
              width: 16,
              height: 16,
              marginTop: -6,
              boxShadow: "0 0 0 2px #a200ff40",
            },
            {
              backgroundColor: "#a200ff",
              border: "2px solid white",
              width: 16,
              height: 16,
              marginTop: -6,
              boxShadow: "0 0 0 2px #a200ff40",
            },
          ]}
          railStyle={{
            backgroundColor: "#d9d9d9",
            height: 4,
            borderRadius: 4,
          }}
        />
      <div className="price-inputs">
        <div className="price-box">
          <span className="label">از</span>
          <button className="dropdown">
            {range[0].toLocaleString("fa-IR")} تومان
            <span className="arrow">▼</span>
          </button>
        </div>

        <div className="price-box">
          <span className="label">تا</span>
          <button className="dropdown">
            {range[1].toLocaleString("fa-IR")} تومان
            <span className="arrow">▼</span>
          </button>
        </div>
      </div>
    </div>
            

        </div>

        {/* <div className="filterInput">

           <output className="priFromOut"> 1000000 </output>
			<input type="range" id="priFrom" min="0" max="1000000" step="10000" value="1000000"/> 

        </div> */}
       

	 
      


	</div>
	
    )
}
export default sidePart