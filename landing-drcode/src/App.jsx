import React from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import StatsSection from './components/Stats';
import Footer from "./components/Footer"
import News from './components/news';
import TeachersSlideLanding from './components/TeachersSlideLanding'
import CourseSlide from './components/courseSlide';
import UsSlider from './components/usSlider';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      <main className="flex-grow">
        <Navbar />
        <Hero />
        <StatsSection />
        <CourseSlide />
        <TeachersSlideLanding />
        <UsSlider />
        <News />
      </main>
      <Footer/>
      
    </div>
  );
}

export default App;