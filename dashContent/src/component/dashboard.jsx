

const dashboard = ()=>{

    return(
        <div className="h-screen w-full  overflow-hidden">
          <div className=" bg-[white] w-[85%] h-[95%] flex items-center m-5 rounded-[25px] shadow-md
          flex flex-col gap-[15px]">
                
               <div className="userStatus rounded-[25px] border border-[red] w-[95%] h-[25%] 
                flex flex-row items-center gap-[40px]">
                      <div className="border border-[green] rounded-[25px] w-[45%] h-[95%]"></div>
                      <div className="border border-[green] rounded-[25px] w-[15%] h-[95%]"></div>
                      <div className="border border-[green] rounded-[25px] w-[15%] h-[95%]"></div>
                      <div className="border border-[green] rounded-[25px] w-[15%] h-[95%]"></div>
                      <div className="border border-[green] rounded-[25px] w-[15%] h-[95%]"></div>
               </div>

               <div className="boxContent rounded-[25px] w-[95%] h-[80%]
                 flex flex-row flex-wrap justify-between">
                     <div className=" border border-[black] rounded-[25px] w-[49%] h-[80%] shadow-md "></div>

                     <div className=" rounded-[25px] flex flex-col justify-between w-[49.5%] h-[95%]">
                      <div className=" border border-[black] rounded-[25px] w-full h-[40%] shadow-md "></div>
                      <div className=" border border-[black] rounded-[25px] w-full h-[58%] shadow-md "></div>
                      </div>
                     
               </div>
                
          </div>
        </div>
    )
}
export default dashboard