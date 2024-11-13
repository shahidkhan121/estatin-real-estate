import React from 'react'

const HeroCards = () => {
  return (
    <>
    {/* cards */}
<div className="grid  gap-4 p-5  border border-8 border-black-light lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
{/* card1 */}
    <div className="bg-black-light py-6 rounded-xl relative ">
        <div className="flex flex-col gap-4 text-lg text-white justify-center items-center">
            <img src="img/home.png" alt="home img" />
            <h1>Find Your Dream Home</h1>
            <img src="img/arrow.png" alt="img"  className='absolute top-3 right-3 w-4'/>
        </div>
    </div>

   {/* card 2*/}
   <div className="bg-black-light py-6 rounded-xl relative ">
        <div className="flex flex-col gap-4 text-lg text-white justify-center items-center">
            <img src="img/building.png" alt="home img" />
            <h1>Effortless Property Management</h1>
            <img src="img/arrow.png" alt="img"  className='absolute top-3 right-3 w-4'/>
        </div>
    </div>

    {/* card */}
    <div className="bg-black-light py-6 rounded-xl relative ">
        <div className="flex flex-col gap-4 text-lg text-white justify-center items-center">
            <img src="img/camera.png" alt="home img" />
            <h1>Unlock Property Value</h1>
            <img src="img/arrow.png" alt="img"  className='absolute top-3 right-3 w-4'/>
        </div>
    </div>

    {/* card */}
    <div className="bg-black-light py-6 rounded-xl relative ">
        <div className="flex flex-col gap-4 text-lg text-white justify-center items-center">
            <img src="img/light.png" alt="home img" />
            <h1>Smart Investments, Informed Decisions</h1>
            <img src="img/arrow.png" alt="img"  className='absolute top-3 right-3 w-4'/>
        </div>
    </div>
</div>
    </>
  )
}

export default HeroCards