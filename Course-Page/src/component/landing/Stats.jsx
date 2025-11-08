import React from "react";
import icon from "../../assets/landPagePic/icon.png"
import icon2 from "../../assets/landPagePic/icon2.png"
import icon3 from "../../assets/landPagePic/icon3.png"
import icon4 from "../../assets/landPagePic/icon4.png"

const stats = [
  { id: 1, number: "۱۵۵", title: "دوره های", highlight: "خفن", color: "purple", icon: icon4 },
  { id: 2, number: "۹۷", title: "اساتید", highlight: "حرفه ای", color: "gray", icon: icon3 },
  { id: 3, number: "۱۵", title: "اخبار", highlight: "جدید", color: "blue", icon: icon2 },
  { id: 4, number: "۲۵۹", title: "دانشجو", highlight: "زرنگ", color: "green", icon: icon },
];

const StatsSection = () => {
  return (
    <section className="flex lg:flex-row flex-wrap lg:mr-20  items-center justify-center lg:gap-0 gap-20 bg-gray-50" dir="ltr">
      {stats.map((item) => (
        <div key={item.id} className="flex  lg:flex-row-reverse flex-col  lg:w-[20%] w-[30%] items-center gap-5 ">
      
       <div
  className={`flex items-center justify-center w-24 h-24 rounded-full bg-${item.color}-100`}
>
  <img src={item.icon} alt={item.title} className="w-15 h-15" />
</div>

          <div className="flex flex-col items-end">
  <p className="text-2xl font-bold">{item.number}</p>
  <p className="text-gray-700">{item.title}</p>
  <span className={`text-${item.color}-600 text-sm font-semibold`}>
    {item.highlight}
  </span>
</div>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;