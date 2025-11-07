import React from 'react'
import TitleLanding from './reusableComps/TitleLanding'
import vect3 from "../assets/vect3.png"
import vect4 from "../assets/vect4.png"

const TeachersSlideLanding = () => {
  return (
        <section className='flex flex-col gap-12 justify-center items-center m-50 relative'>
       <TitleLanding
          title= "با هر استاد ، یک موفقیت"
          image1={vect3}
          image2={vect4}
          text="با برترین استادان جهان آشنا شو"
           />
        </section>
  )
}

export default TeachersSlideLanding