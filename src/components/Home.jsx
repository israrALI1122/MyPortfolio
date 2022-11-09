import React from 'react'
import pic from '../assets/israr.jpg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' h-screen w-full bg-gradient-to-b via-black from-black to-gray-800 '>
       
        <div className='max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
          
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-500'> I am a front-End Developer </h2>
                <p className='text-gray-500 py-4 max-w-md'>I have 3 months of experience building and desgining software.
                currently, I love to work on web application using technologies like React, tailwind, MUI, Next JS
                </p>
                <div>
                    <Link to="portfolio" smooth duration={600} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-400 to-amber-500 cursor-pointer'>
                        portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <BsFillArrowRightCircleFill size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
            <img src={pic} alt="my profile" className='rounded-full  w-2/3 mx-auto md:w-full  ' />

            </div>
        </div>
    </div>
  )
}

export default Home