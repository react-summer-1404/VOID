import React from 'react'

const TitleLanding = ({title , image1, image2, text}) => {
  return (
     <div>
            <div className='flex flex-wrap justify-center items-center gap-2'>
                <img src={image1} alt="<" />
                <h3 className='text-gray-900 text-xs'>{title}</h3>
                <img src={image2} alt=">" />
            </div>
            <h3 className='font-bold text-lg'>{text}</h3>
        </div>
  )
}

export default TitleLanding