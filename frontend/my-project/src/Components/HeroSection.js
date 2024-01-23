import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
    
    <div className='flex py-32 text-white'>

        <div className='w-1/2 flex p-10 flex-col gap-5 pl-20'>
            <h1 className='text-4xl font-bold'>Fix Health</h1>
            <h1 className='w-5/4 text-lg font-thin'>"Unlock the Door to Pain-Free Living and a Better Quality of Life with Fix Health  Your No.1 Choice for Expert Physiotherapy Care."</h1>
            <Link to="/form">
            <button className=' border-white w-1/3 p-2 rounded-md bg-blue-500'>Book An Appointment</button>
            </Link>
        </div>


    </div>

    <div className='w-1/2 flex justify-center items-center absolute top-[200px] left-[780px]  md:block'>
            <img className='object-contain rounded-xl w-[70%] ' src='https://www.peppersquare.com/wp-content/uploads/2021/10/Blog-2.jpg' alt='heroImage'/>
        </div>
    </div>
  )
}

export default HeroSection