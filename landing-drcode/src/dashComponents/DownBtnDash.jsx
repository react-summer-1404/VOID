import React from 'react'
import Logout from "../assets/Logout.png"
import setting from "../assets/setting.png"


const DownBtnDash = () => {
    const buttons=[
        {text: "تنظیمات امنیتی",image:setting},
        {text: "خروج از حساب",image:Logout},


    ]
  return (
    <ul className="list-disc pl-4 pt-50">
      {buttons.map((button, index) => ( <li
          key={index}
          className="flex items-center gap-3 p-6 hover:border-r-4 hover:border-white cursor-pointer transition  text-neutral-300 hover:text-white hover:font-extrabold "
        >
          <img
            src={button.image}
            alt={""}
            className="w-5 h-5 object-contain"
          />
          <span className="font-semibold ">{button.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default DownBtnDash