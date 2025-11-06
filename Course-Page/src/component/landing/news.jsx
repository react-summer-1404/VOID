import React from 'react'
import vect from "../../assets/landPagePic/vect.png"
import vect2 from "../../assets/landPagePic/vect2.png"

import bg1 from "../../assets/landPagePic/bg1.png";
import bg2 from "../../assets/landPagePic/bg2.png";
import bg3 from "../../assets/landPagePic/bg3.png";
import NewsCard from './reusableComps/NewsCard';
import TitleLanding from './reusableComps/TitleLanding'


const news = () => {
  return (
    <section className='flex flex-col gap-12 justify-center items-center m-50 relative'>
       <TitleLanding
          title= "با هر خبر ، از همه جلوتر"
          image1={vect}
          image2={vect2}
          text="خبر های داغ دریچه ای به دنیای تازه ها"
           />

        {/* GNX */}
      
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
  <NewsCard
    image={bg1}
    title="ریکت جی اس چیست؟"
    text="ری اکت (React) یک کتابخانه جاوا اسکریپت برای ساخت رابط کاربری بوده که ..."
    author="علیرضا باقری"
    views="۲۸۰"
  />
  <NewsCard
    image={bg2}
    title="ریکت جی اس چیست؟"
    text="ری اکت (React) یک کتابخانه جاوا اسکریپت برای ساخت رابط کاربری بوده که ..."
    author="علیرضا باقری"
    views="۲۸۰"
  />
  <NewsCard
    image={bg3}
    title="ریکت جی اس چیست؟"
    text="ری اکت (React) یک کتابخانه جاوا اسکریپت برای ساخت رابط کاربری بوده که ..."
    author="علیرضا باقری"
    views="۲۸۰"
  />
</div>

        {/* gnx */}

      
    </section>
  )
}

export default news