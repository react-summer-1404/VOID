import { Link , useNavigate} from "react-router-dom"
import React from "react"
import { Formik } from "formik"
import { Form ,Field,ErrorMessage} from "formik"
import * as Yup from "yup";
import axios from "axios";
const validationSchema=Yup.object({
  gmail:Yup.string().required("لطفا   ایمیل را وارد کنید"),
  
});
const stepOwn = () => {
 const navigate = useNavigate();
  return (
    <div dir="rtl" className=' mt-[150px] m-auto  w-[600px] h-[400px] 
    lg:m-[100px 50px] lg:w-[50%] lg:h-[300px] '>

 <div className=' m-auto w-[207px] h-[67px] '>
<p className='m-auto w-[97px] h-[25px] text-[16px] '>خوش اومدی:)</p>
<h2 className='text-[22px] m-auto w-[207px]  h-[38px]  '>    ایجاد حساب کاربری</h2>
 </div>

 <Formik initialValues={{
   gmail:''
 }}

 onSubmit ={async(values,{setErrors })=>{
  try {

    const response = await axios.post(
      "https://sepehracademy.liara.run/Sign/SendVerifyMessage",
      { gmail: values.gmail },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("response data:", response.data);
    const successFlag =
    response.data?.success === true || response.data?.success === "true";
    if (successFlag) {
      console.log("Navigating to step two...");
      navigate("/Reg/StepTwo");
    } else {
      setErrors({
        gmail: response.data?.message || "خطا در ارسال کد تأیید",
      });
    }
  } catch (err){
    const msg = err.response?.data?.errors?.[0]?.msg ;
    setErrors({ gmail: msg });
  }
  
}}

 validationSchema={validationSchema}
 >
<Form className='
m-auto  w-[70%] h-[229px]
lg:h-[100%] '>
    <div className="flex w-[100%] h-[20%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
    <div className="w-[10%] h-[100%]  bg-[url('/Call.png')] bg-no-repeat bg-[position:50%_40%] "></div>
    <Field className="w-[380px] h-[35px] outline-none  "
        type="email"
        placeholder="    ایمیل"
        name="gmail"
        id="gmail"
      />
      </div>
<ErrorMessage className="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
name="gmail"
component={"p"}
/>

      <button type="submit"  className="w-[100%] h-[48px] appearance-none !bg-[#3C8B85] !text-white px-4 py-2 rounded-l mt-[20px]"> دریافت کد تایید
      </button>
            <div className="mx-auto  mt-[10px] flex w-[422px] h-[22px] ">
            <p>حساب کاربری داری</p>
           <Link to="/" className="cursor-pointer"> ورود</Link>
          </div> 
</Form>

 </Formik>
 </div>
  )
}

export default stepOwn;