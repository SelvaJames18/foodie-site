import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 backdrop-blur-sm bg-white">
        <img className='w-[100px]' src={assets.logo} alt="" />
        <button className=' bg-orange-600 py-3 px-8 rounded-full text-white font-medium max-sm:hidden'>Join the Waitlist</button>
      </div>
    </div>
  )
}

export default Navbar
