import {useState,useEffect} from "react"
import axios from "axios"

const newsList = ()=>{
 const[News,setNews] = useState([]);
    const fetchNews = async ()=>{
  try{  
    const response = await axios.get("https://sepehracademy.liara.run/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC");
    const data = await response.data.news;
    setNews(data);
    // console.log("data",data);

  }finally{
    
  }
 }
 
  useEffect( ()=>{
    fetchNews()
  },[]);

  console.log("news",News);

    return(
        <>
        <div>newsList</div>
        </>
    )
}
export default newsList