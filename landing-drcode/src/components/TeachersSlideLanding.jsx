import React, { useState } from 'react';
import TitleLanding from './reusableComps/TitleLanding';
import vect3 from "../assets/vect3.png";
import vect4 from "../assets/vect4.png";
import polygon3 from "../assets/Polygon3.png";
import left from '../assets/left.png';
import right from '../assets/right.png';
import TeacherCard from './reusableComps/TeacherCard';
import teacher from '../assets/teacher.png';
import polygon4 from "../assets/polygon4.png"

const TeachersSlideLanding = () => {
  const teachers = [
    { id: 1, name: "استاد بحرل الغلوم", title: "مدرس اصلی", image: teacher, polygon: polygon4  },
    { id: 2, name: "دکتر احمد رضایی", title: "استاد برجسته", image: teacher, polygon: polygon4  },
    { id: 3, name: "استاد فاطمه کریمی", title: "مدرس ارشد", image: teacher, polygon: polygon4  },
    { id: 4, name: "دکتر محمد علوی", title: "استاد دانشگاه", image: teacher, polygon: polygon4  },
    { id: 5, name: "استاد سارا موسوی", title: "مدرس تخصصی", image: teacher, polygon: polygon4  },
    { id: 6, name: "دکتر علی حسینی", title: "استاد مدعو", image: teacher, polygon: polygon4 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTeachers = () => {
    const visible = [];
    for (let i = -1; i <= 4; i++) {
      const index = (currentIndex + i + teachers.length) % teachers.length;
      visible.push({
        teacher: teachers[index],
        isSelected: i === 0,
        position: i
      });
    }
    return visible;
  };

  const visibleTeachers = getVisibleTeachers();

  return (
    <section className='flex flex-col gap-12 justify-center items-center m-20 relative'>
      <TitleLanding
        title="با هر استاد ، یک موفقیت"
        image1={vect3}
        image2={vect4}
        text="با برترین استادان جهان آشنا شو"
      />
      
      <img src={polygon3} alt="" className='absolute left-35' />
      
      {/* GNX  */}
      <div className="relative w-full overflow-hidden px-8" dir='ltr'>
        <div 
          className="flex justify-center items-center gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${currentIndex * 0}px)` }}
        >
          {visibleTeachers.map((item, idx) => (
            <div 
              key={`${item.teacher.id}-${currentIndex}-${idx}`}
              className={`transition-all duration-700 ease-in-out ${
                idx === 5 ? 'w-32' : 'flex-shrink-0'
              } ${item.isSelected ? 'scale-100 opacity-100' : 'scale-75 opacity-90'}`}
            >
              <TeacherCard
                image={item.teacher.image}
                teacherName={item.isSelected ? item.teacher.name : undefined}
                title={item.isSelected ? item.teacher.title : undefined}
                polygon={item.isSelected ? item.teacher.polygon : undefined}
              />
            </div>
          ))}
        </div>
      </div>
      {/* gnx  */}
      <div dir='ltr' className='flex gap-10 px-16 py-6 w-screen'>
        
        <div className='flex flex-wrap gap-3'>
          <img 
            src={left} 
            alt="Previous" 
            onClick={handlePrevious}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <img 
            src={right} 
            alt="Next" 
            onClick={handleNext}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
        
        <div className='flex gap-2'>
          {teachers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-purple-600'
                  : 'w-3 h-3 bg-purple-300 hover:bg-purple-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSlideLanding;