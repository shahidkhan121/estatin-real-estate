import React from 'react'
import TopBar from '../components/TopBar'

const HomePage = () => {
  return (
    <div>
    {/* parent */}
     <div className="flex bg-black-light 1000px:flex-col-reverse font-urbanist">
     {/* left hero section */}
      <div className="flex flex-col gap-8  bg-black-dark p-[72px] mb-2 600px:p-5">
        <div className="text-white text-5xl leading-tight 600px:text-4xl">
          <h1>Discover Your Dream Property with Estatein</h1>
        </div>
        <div className="text-lg text-black-p max-w-[90%]">
          <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
        </div>
        <div className="flex gap-3 600px:flex-col">
          <button  className='bg-button-secondray text-white px-4 py-3 rounded-md 600px:px-32 hover:bg-black-dark border  border-black-light hover:border-black-p'>Learn More</button>
          <button  className='bg-button-secondray text-white px-5 py-3 rounded-md 600px:px-32 border  hover:bg-black-dark border-black-light hover:border-black-p'>Browse Properties</button>
        </div>
        {/* hero section cards */}
        <div className="flex gap-6 mt-5 600px:flex-col">
        {/* card 1 */}
          <div className="bg-black-light rounded-lg border border-black-p">
            <h1 className='text-white text-3xl font-semibold px-4 pt-4 '>200+</h1>
            <p className='text-black-p px-4 py-3 pr-10'>Happy Coustemrs</p>
          </div>

           {/* card 2 */}
           <div className="bg-black-light rounded-lg border border-black-p">
            <h1 className='text-white text-3xl font-semibold px-4 pt-4'>10K+</h1>
            <p className='text-black-p px-4 py-3 pr-10'>Properties For Clients</p>
          </div>

 {/* card 3 */}
 <div className="bg-black-light rounded-lg border border-black-p">
            <h1 className='text-white text-3xl font-semibold px-4 pt-4'>16+</h1>
            <p className='text-black-p px-4 py-3 pr-10'>Years Of Experience</p>
          </div>


          

        </div>
      </div>
      <div className="mb-2 600px:p-8 600px:bg-black-dark ">
        <img src="img/Container.png" alt="hero section img" className='600px:rounded-xl 1000px:p-2 1000px:rounded-2xl' />
      </div>
     </div>
     <div className="absolute top-[40%] left-[50%] 1000px:left-[10%]  1000px:top-96">
      <img src="img/sub-container.png" alt="img" />
     </div>
    </div>
  )
}

export default HomePage