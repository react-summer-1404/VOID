import React from 'react'
import dashboard from "../assets/dashboard.png"
import pay from "../assets/pay.png"
import course from "../assets/course.png"
import fav from "../assets/fav.png"
import news from "../assets/news.png"
import profile from "../assets/profile.png"
import saved from "../assets/saved.png"

const ButtonsDash = () => {
    const buttons=[
        {text: "داشبرد",image:dashboard},
        {text: "پروفایل",image:profile},
        {text: "دوره های من",image:course},
        {text: "رزرو های من",image:saved},
        {text: "دوره های مورد علاقه",image:fav},
        {text:"اخبار مورد علاقه",image:news},
        {text:" پرداخت ها",image:pay},

    ]
  return (
    <ul className="list-disc pl-4 pt-10">
      {buttons.map((button, index) => ( <li
          key={index}
          className="flex items-center gap-3 p-6 hover:border-r-4 hover:border-white cursor-pointer transition  text-neutral-300 hover:text-white hover:font-extrabold"
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

export default ButtonsDash