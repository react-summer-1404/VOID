import React, { useState } from 'react';
import vect3 from "../assets/vect3.png";
import vect4 from "../assets/vect4.png";
import TitleLanding from './reusableComps/TitleLanding';
import cash from "../assets/cash.png";
import gap from "../assets/gap.png";
import paper from "../assets/paper.png";
import edu from "../assets/edu.png";
import UsDivCard from './reusableComps/usDivCard';
import UsDivCard2 from './reusableComps/UsDivCard2';
import UsSliderCard from './reusableComps/UsSliderCard';
import UsBg from "../assets/ussliderbg.png";
import Vector28 from "../assets/Vector-28.png";

const UsSlider = () => {
    const slides = [
        {
            id: 1,
            title: "تجربه‌ای بی‌نظیر با خدمات ما، از شروع تا پایان!",
            bg: UsBg,
            vector: Vector28
        },
        {
            id: 2,
            title: "خدمات حرفه‌ای برای موفقیت شما",
            bg: UsBg,
            vector: Vector28
        },
        {
            id: 3,
            title: "راهکارهای نوین برای آینده‌ای روشن",
            bg: UsBg,
            vector: Vector28
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className='flex flex-col gap-30 justify-center items-center m-50 relative'>
            <TitleLanding
                title="خدمات حرفه ای ، کیفیت بی نظیر"
                image1={vect3}
                image2={vect4}
                text="خدمات ما، راهی به سوی موفقیت شما"
            />
            <div className='flex gap-10'>
                {/* GNX */}
                <div className='relative w-lg h-full'>
                    <div className='overflow-hidden h-full'>
                        <div 
                            className='flex transition-transform duration-700 ease-in-out h-full'
                            style={{ transform: `translateX(${currentSlide * -100}%)` }}
                        >
                            {slides.map((slide) => (
                                <div key={slide.id} className='min-w-full flex-shrink-0 h-full'>
                                    <UsSliderCard 
                                        UsSliderBg={slide.bg}
                                        title={slide.title}
                                        Vector={slide.vector}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentSlide
                                        ? 'w-8 h-3 bg-purple-600'
                                        : 'w-3 h-3 bg-purple-300 hover:bg-purple-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex gap-5'>
                    <div className='relative flex flex-col gap-20'>
                        <img src={gap} alt="gap" className='absolute -left-3 -top-15 z-10' />
                        <img src={cash} alt="mulla" className='absolute right-0 top-29 z-10' />
                        <UsDivCard
                            title="مشاوره"
                            text="مشاوره‌ای حرفه‌ای، راهنمایی مطمئن" 
                        />
                        <UsDivCard2
                            title="فرصت شغلی"
                            text="با ما، شغل رویایی‌تان را پیدا کنید" 
                        />
                    </div>
                    <div className='relative flex flex-col gap-20 top-15'>
                        <img src={paper} alt="paper" className='absolute -left-3 -top-15 z-10' />
                        <img src={edu} alt="edu" className='absolute right-0 top-29 z-10' />
                        <UsDivCard2
                            title="آزمون"
                            text="با ما، تصمیمات هوشمندانه بگیرید!" 
                        />
                        <UsDivCard
                            title="فرصت شغلی"
                            text="با ما، شغل رویایی‌تان را پیدا کنید" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsSlider;