import { useNavigate,useParams  } from "react-router-dom"
import React from "react"
import { Formik } from "formik"
import { Form ,Field,ErrorMessage} from "formik"
import * as Yup from "yup";

const validationSchema=Yup.object({
    newpass:Yup.string().required("لطفا   رمز جدید را وارد کنید"),
    acctpass:Yup.string().required("لطفا   رمز خود را دوباره  وارد کنید"),
  
});
const stepTowres = () => {
    const navigate = useNavigate();
   const {emile} = useParams();

     const stepTowres =async(newpass,acctpass)=>{
    try{
       const RegOne = await apiClient.post("https://sepehracademy.liara.run/Sign/Reset",{
         gmail : emile ,
         newPassword: newpass,
         resetValue: acctpass
           
       });
         navigate("/authLayout");
        alert("رمز عبور تغییر کرد")
       
    }catch(error){
    if (error.response.status === 400) {
      alert(error.response.data.message);
    }
    console.error(error.response);
    alert("این رمز عبور تکراری هست")
    }
   

 }



  return (
     <div dir="rtl" className=' lg:mt-[80px] mt-[180px] flex flex-col items-center text-center lg:m-auto lg:w-[500px] h-[80%]  w-full   bg-white rounded-t-[50px] lg:shadow-md inset-shadow-sm lg:rounded-lg  '>
    
        <div className='  m-auto  mt-[50px] w-[207px] h-[67px] '>
        <p className='m-auto mt-[50px]  w-[97px] h-[25px] text-[16px] font-medium text-[black]/70 '>  رمز جدید</p>
        <h2 className='text-[22px] m-auto w-[207px]  h-[38px] font-bold  '>    فراموش رمز عبور</h2>
        </div>
                
        <Formik initialValues={{
        newpass:'',
        acctpass:''
        }}
        onSubmit ={(values)=>{
            stepTowres(values.newpass,values.acctpass);
       
        console.log(values)
        }}
        validationSchema={validationSchema}
        >
        <Form className='
                m-auto  w-[70%]  
                h-[50%] '>
        <div className="flex items-center  w-[100%] h-[20%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
        <div className="w-[10%] h-[50%] lg:mr-0 mr-2  bg-[url('/Message.png')] bg-no-repeat bg-[position:50%_40%] "></div>
        <Field className=" w-[380px] h-[35px] outline-none "
        type="text"
        placeholder="   رمز جدید"
        name="newpass"
        id="newpass"
        />
        </div>
        <ErrorMessage className="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
        name="newpass"
        component={"p"}
        />
        <div className="flex items-center w-[100%] h-[20%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
        <div className="w-[10%] h-[50%] lg:mr-0 mr-2  bg-[url('/Message.png')] bg-no-repeat bg-[position:50%_40%] "></div>
        <Field className=" w-[380px] h-[35px] outline-none "
        type="text"
        placeholder="   تایید رمز عبور"
        name="acctpass"
        id="acctpass"
        />
        </div>
        <ErrorMessage className="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
        name="acctpass"
        component={"p"}
        />
    
    <button   button type="submit"  className="mt-[20px] w-[100%] h-[48px] appearance-none !bg-[#3C8B85] !text-white px-4 py-2 rounded-lg"> تایید
    </button>
        </Form>
        
    </Formik>
    </div>
        )
        }


export default stepTowres