import React from 'react'
import Navbar from "../component/Navbar";
import Hero from "../component/landing/Hero"
import StatsSection from '../component/landing/Stats';
import Footer from "../component/footer"
import News from '../component/landing/news';
import TeachersSlideLanding from '../component/landing/TeachersSlideLanding'
import CourseSlide from '../component/landing/courseSlide';
import UsSlider from '../component/landing/usSlider';
import QuikAction from "../component/quickAction"

const landingPage =()=> {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <QuikAction/>
      
      <main className="flex-grow">
        <Navbar />
        <Hero />
        <StatsSection />
        <CourseSlide />
        <TeachersSlideLanding />
        <div className='lg:block hidden'><UsSlider /></div>
        <News />
      </main>
      <Footer/>
      
    </div>
  );
}

export default landingPage;