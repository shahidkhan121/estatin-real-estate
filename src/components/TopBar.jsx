import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";

const TopBar = () => {
    const [visible , setVisible] = useState (true)
    const handleClick = () => {
setVisible(false)
// alert('clicked')
    }
  return (
    <>
    {visible &&(
        <div className='w-[100%] text-gray-200 text-center p-5 bg-black-dark font-urbanist'  >
        <p >
        Discover Your Dream Property with Estatein <span className='underline'>Learn More</span>
        </p>
      <div className='text-lg absolute right-[2%] top-4 bg-gray-700 rounded-full p-1' style={{backgroundColor:'#262626'}} onClick={handleClick}>
      <RxCross2 />
      </div>
       </div>
    )}
     
    </>
  )
}

export default TopBar