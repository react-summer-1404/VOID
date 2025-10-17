import Jet from "../assets/icon/jet.png"
import DarkMode from "../assets/icon/darkMode.png"
import Microfon from "../assets/icon/microfon.png"

const jet = ()=> {


return(  
    <>
    <div className="fixed top-[490px] left-15 w-[50px] h-[50px] rounded-full bg-[#9B0EE1CC] shadow-md 
    flex place-items-center justify-center cursor-pointer z-50 ">
        <img src={Jet}/>
        </div>

        <div className="fixed top-[480px] right-15 w-[50px] h-[110px]
         flex flex-col justify-between  z-50 ">
            <button className=" w-[50px] h-[50px] rounded-full flex place-items-center justify-center cursor-pointer"><img src={DarkMode}/></button>
            <button className=" w-[50px] h-[50px] rounded-full flex place-items-center justify-center cursor-pointer"><img src={Microfon}/></button>
        </div>
    </>
 )
}

export default jet