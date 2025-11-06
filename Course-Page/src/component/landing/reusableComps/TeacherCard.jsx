import React from 'react'



const TeacherCard = ({image , teacherName , title , polygon}) => {
  return (
    <div className='relative'>
        <img src={image} className="w-full h-full object-cover" alt="" />
        <div className='absolute bottom-6 left-0 right-0 to-transparent p-6 text-center text-white flex gap-1 flex-col'>
          <img src={polygon} alt="yo" className=' absolute z-10 right-23 bottom-13 scale-105' />
          <p className='text-xl font-semibold mb-1 z-20'>{teacherName}</p>
          <h3 className='text-sm opacity-90 z-20'>{title}</h3>
        </div>
        
        
    </div>
  )
}

export default TeacherCard