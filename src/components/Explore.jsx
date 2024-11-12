import React from 'react'
import ButtonSecondry from './buttons/ButtonSecondry'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <>
        <div className=" border-t border-b border-black-light mt-14 font-urbanist">
            <div className="max-w-[91%] m-auto flex justify-between items-center py-12 700px:flex-col 700px:max-w-[100%]">
                <div className="flex flex-col gap-4 max-w-[70%] 700px:max-w-[95%] 700px:mb-8">
                    <h1 className='text-white text-4xl 600px:text-3xl 600px:mb-5 '> Start Your Real Estate Journey Today</h1>
                    <p className='text-black-p'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <div className="">
                  <Link to ='/properties'>
                  <ButtonSecondry/>
                  </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Explore