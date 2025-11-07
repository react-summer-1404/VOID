import React, { useState } from 'react'
import vect from "../assets/vect.png"
import vect2 from "../assets/vect2.png"
import TitleLanding from './reusableComps/TitleLanding'
import CourseCard from './reusableComps/CourseCard'
import bg4 from '../assets/bg4.png'
import left from '../assets/left.png'
import right from '../assets/right.png'

const CourseSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const courses = [
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
    {
      image: bg4,
      title: "ریکت جی اس",
      number: "20",
      teacher: "استاد پورمرادی",
      date: "1404/02/14",
      price: "2,500,000"
    },
  ]

  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 3.5
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3.5
  }

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView())

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, courses.length - slidesPerView)

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0
      return prev + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex
      return prev - 1
    })
  }

  const totalDots = maxIndex + 1

  return (
    <section className='flex flex-col gap-12 justify-center items-center m-20 relative'>
      <TitleLanding
        title="با هر دوره، یک قدم جلوتر"
        image1={vect}
        image2={vect2}
        text="همه چیز را در دوره‌های ما یاد بگیرید"
      />
      
      <div className='w-full px-8 overflow-hidden'>
        <div 
          className='flex transition-transform duration-500 ease-in-out gap-10'
          style={{
            transform: `translateX(${currentIndex * (100 / slidesPerView + (slidesPerView > 1 ? 10 / slidesPerView : 0))}%)`
          }}
        >
          {courses.map((course, index) => (
            <div 
              key={index}
              className='flex-shrink-0'
              style={{ width: `calc(${100 / slidesPerView}% - ${(10 * (slidesPerView - 1)) / slidesPerView}px)` }}
            >
              <CourseCard
                image={course.image}
                title={course.title}
                number={course.number}
                teacher={course.teacher}
                date={course.date}
                price={course.price}
              />
            </div>
          ))}
        </div>
      </div>

      <div dir='ltr' className='flex items-center justify-between px-16 py-6 w-screen'>
        <button className='text-purple-700 px-6 py-2 rounded-lg border-2 border-purple-700 text-md hover:bg-purple-700 hover:text-white transition-colors'>
          بیشتر ببین
        </button>
        
        <div className='flex gap-2'>
          {Array.from({ length: totalDots }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                index === currentIndex ? 'bg-purple-700 w-8' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <div className='flex flex-wrap gap-3'>
          <img 
            src={left} 
            alt="Previous" 
            className='cursor-pointer hover:opacity-70'
            onClick={handlePrev}
          />
          <img 
            src={right} 
            alt="Next"
            className='cursor-pointer hover:opacity-70'
            onClick={handleNext}
          />
        </div>
      </div>
    </section>
  )
}

export default CourseSlide