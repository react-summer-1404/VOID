import React from "react"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import { Form ,Field,ErrorMessage} from "formik"
import * as Yup from "yup";
const validationSchema=Yup.object({
    Email:Yup.string().required("لطفا ایمیل را وارد کنید"),
  pass:Yup.string().required("لطفا  رمز ورود را وارد کنید"),
  accet:Yup.string().required("لطفا  کد تایید را وارد کنید")
  
});

 const stepThree = () => {
    const navigate = useNavigate();
  return (
    <div dir="rtl" className=' m-auto w-[100%] h-[400px] 
    lg:m-[100px 50px] lg:w-[50%] lg:h-[300px]'>
            <div className=' m-auto w-[207px] h-[67px] '>
    <p className='m-auto w-[97px] h-[25px] text-[16px] '>خوش اومدی:)</p>
    <h2 className='text-[22px] m-auto w-[207px]  h-[38px]  '>ورود با حساب کاربری</h2>
    </div>
<Formik initialValues={{
  Email:'',
  pass:'',
  accet:''
}}
onSubmit ={(values)=>{
    navigate("/")
  console.log(values)
}}
validationSchema={validationSchema}
>
<Form  className='m-auto  w-[70%] h-[229px]
lg:h-[100%]'>

      <div className="flex w-[100%] h-[15%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
      <div className="w-[10%] h-[100%]  bg-[url('/Password.png')] bg-no-repeat bg-[position:50%_30%] "></div>
      <Field  className="w-[380px] h-[35px] outline-none "
          type="text"
          placeholder=" ایمیل"
          name="Email"
          id="Email"
        />

        </div>
        <ErrorMessage class="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
         name="Email"
         component={"p"}
        />
      <div className="flex w-[100%] h-[15%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
      <div className="w-[10%] h-[100%]  bg-[url('/Password.png')] bg-no-repeat bg-[position:50%_40%] "></div>
      <Field  className="w-[380px] h-[35px] outline-none "
          type="number"
          placeholder=" رمز ورود"
          name="pass"
          id="pass"
        />
        </div>
        <ErrorMessage class="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
         name="pass"
         component={"p"}
        />
      <div className="flex w-[100%] h-[15%] mt-[30px]  bg-[#4B4B4B14] rounded-lg">
      <div className="w-[10%] h-[100%]  bg-[url('/Password.png')] bg-no-repeat bg-[position:50%_40%] "></div>
      <Field  className="w-[380px] h-[35px] outline-none "
          type="number"
          placeholder="  کد تایید"
          name="accet"
          id="accet"
        />
        </div>
        <ErrorMessage class="text-[red] text-[0.82rem] mt-[4px] leading-[1.4] flex items-center gap-[6px] animate-fadeIn"
         name="pass"
         component={"p"}
        />
        <button 
         className="mt-[10px] w-[100%] h-[48px] appearance-none !bg-[#3C8B85] !text-white px-4 py-2 rounded-lg"
        type="submit">   تایید
        </button>

</Form>
</Formik>

</div>
  )
}

export default stepThree;