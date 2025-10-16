import ProductCard from "./productCard"
import {useState,useEffect} from "react"
import axios from "axios"

const productList=()=>{
const[Product,setProduct] = useState([]);

const fetchProduct = async ()=>{
  try{  
    const response = await axios.get("https://sepehracademy.liara.run/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0");
    const data = await response.data;
    setProduct(data);
    console.log("data",data);

  }finally{
    
  }
 }

// console.log("Product:",Product);
  useEffect( ()=>{
    fetchProduct()
  },[]);



    return(
          <>
            <ProductCard/>
          </>

    )
}
export default productList