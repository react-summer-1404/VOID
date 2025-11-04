import Dashboard from "./dashboard"
import DashCourse from "./dashCourse"

const dashHome = ()=>{

    return(
        <>
         <div className=" lg:h-screen   w-full  lg:overflow-hidden ">
          <div dir="rtl" className=" bg-[#F5F5F5] w-[85%] lg:h-[95%] flex  flex-col items-center m-5 rounded-[25px] shadow-md">
            {/* <Dashboard/> */}
            <DashCourse/>

          </div>
          </div>
        </>
    )
}
export default dashHome