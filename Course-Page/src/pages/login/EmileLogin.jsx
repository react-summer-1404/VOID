import { Link } from "react-router-dom"
import React from "react"
import { Formik } from "formik"
import { Form ,Field,ErrorMessage} from "formik"
import * as Yup from "yup";
const validationSchema=Yup.object({
  emile:Yup.string().required("لطفا ایمیل  را وارد کنید"),
  pass:Yup.string().required("لطفا  رمز ورود را وارد کنید")
  
});
const EmileLogin = () => {

  return (
    <div dir="rtl" className=' m-auto w-[600px] h-[400px]
     lg:m-[100px 50px] lg:w-[50%] lg:h-[300px] 
    '>
    <div className="hidden w-[60px] h-[183px]   border-0 float-left mt-[70px]
    lg:float-left lg:block lg:bg-[url('/wizardLogin.png')] lg:bg-[length:100%_100%] lg:w-[40px] lg:h-[133px]
    "></div>
<div className=' m-auto w-[207px] h-[67px] '>
<p className='m-auto w-[97px] h-[25px] text-[16px] '>خوش اومدی:)</p>
<h2 className='text-[22px] m-auto w-[207px]  h-[38px]  '>ورود با حساب کاربری</h2>
</div>
<Formik 
initialValues={{
  emile:'',
  pass:'',
}}
onSubmit ={(values)=>{
  console.log(values)
}}
validationSchema={validationSchema}
>
<Form className='
m-auto  w-[70%] h-[229px]
lg:h-[100%] '>
  <div className="
  float-right w-[130px] h-[25px]">
    <Link
  to="/authLayout/PhoneLogin"
  className="text-[14px] text-right cursor-pointer w-[430px] h-[25px]"
>
  ورود با شماره همراه
</Link>
    </div>
    <div className="flex w-[100%] h-[20%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
    <div className="w-[10%] h-[100%]  bg-[url('/Message.png')] bg-no-repeat bg-[position:50%_30%] "></div>
    <Field className="w-[380px] h-[35px] outline-none "
        type="text"
        placeholder=" ایمیل"
        name="emile"
        id="emile"

      />
      </div>
      <ErrorMessage class="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
      name="emile"
       component={"p"}
              />
    <div className="flex w-[100%] h-[20%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
    <div className="w-[10%] h-[100%]  bg-[url('/Password.png')] bg-no-repeat bg-[position:50%_40%] "></div>
    <Field className="w-[380px] h-[35px] outline-none "
        type="number"
        placeholder=" رمز عبور"
        name="pass"
        id="pass"
      />
    
      </div>
       <ErrorMessage class="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
      name="pass"
       component={"p"}
              /> 
  <div className=" mt-[10px] w-[100%] h-[10%] ">
  <input className=" float-right w-[16px] h-[16px]  "
        type="checkbox"
        id="save"
      />
      <label className=" float-right text-[12px]" id="save">مرا به خاطر بسپار</label>
       <Link to={"/ress"} className="float-left cursor-pointer">فراموشی رمز</Link>
  </div>
      <button  className="w-[100%] h-[48px] appearance-none !bg-[#3C8B85] !text-white px-4 py-2 rounded-lg"
      type="submit"> 
      ورود به حساب کاربری </button>
      <div className="mx-auto  mt-[10px] flex w-[422px] h-[22px] ">
      <p>حساب کاربری نداری</p>
     <Link to="/Reg" className="cursor-pointer">ثبت نام</Link>
    </div> 
</Form>


</Formik>

</div>
     
  )
}

export default EmileLogin;