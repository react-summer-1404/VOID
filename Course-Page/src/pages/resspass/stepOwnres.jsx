import {useNavigate  } from "react-router-dom"
import React from "react"
import { Formik } from "formik"
import { Form ,Field,ErrorMessage} from "formik"
import * as Yup from "yup";

const validationSchema=Yup.object({
  email:Yup.string().required("لطفا  ایمیل خود را وارد کنید"),
  
});
const stepOwnres = () => {
  const navigate = useNavigate();
  return (
        <div dir="rtl" className='p-[1px] mt-[80px] m-auto w-[500px] h-[410px] bg-white shadow-md shadow-gray-400 rounded-lg '>

      <div className='  m-auto  mt-[50px] w-[207px] h-[67px] '>
    <p className='m-auto mt-[50px]  w-[97px] h-[25px] text-[16px] '> ایمیل بازیابی</p>
    <h2 className='text-[22px] m-auto w-[207px]  h-[38px]  '>    فراموش رمز عبور</h2>
      </div>
    
      <Formik initialValues={{
        email:''
      }}
      onSubmit ={(values)=>{
        navigate("stepTowres");
        console.log(values)
      }}
      validationSchema={validationSchema}
      >
    <Form className='
    m-auto  w-[70%] h-[129px] 
    lg:h-[50%] '>
         <div className="flex w-[100%] h-[20%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
         <div className="w-[10%] h-[100%]  bg-[url('/Message.png')] bg-no-repeat bg-[position:50%_40%] "></div>
         <Field className=" w-[380px] h-[35px] outline-none "
             type="email"
             placeholder="   ایمیل"
             name="email"
             id="email"
           />
           </div>
    <ErrorMessage className="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
    name="email"
    component={"p"}
    />

           <button type="submit"  className="mt-[20px] w-[100%] h-[48px] appearance-none !bg-[#3C8B85] !text-white px-4 py-2 rounded-lg"> تایید
           </button>
    </Form>
    
      </Formik>
      </div>
    )
    }

export default stepOwnres