import React, { useState } from 'react'

const Navbar = () => {
  const [isClick , setisClick] = useState()
  const toggleNavbar = () =>{
    setisClick(!isClick)
  }
  return (
  <nav className='bg-[#143F64]'>
   <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
     <div className='flex items-center justify-between py-4 h-20'>
      <div className='flex items-center'>
        <div className='flex-shrink-0'>
      <img  src="images/cloud.png" alt="" />
      </div>
      </div>
      <div className='hidden md:block'>
        <div className='ml-4 flex items-center space-x-4'>
        <ul className='flex'>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Why us?</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Services</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Company</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Blog</li>
        <li className='py-1 px-2 mx-2 bg-[#FFB400] text-[#143F64] font-bold rounded-sm px-[14px] py-[12px] shadow-2xl' >Talk to an Expert</li>
      </ul>
        </div>
      </div>
      <div className='md:hidden flex items-center'>
        <button className='text-2xl inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
          {isClick ?(
            <i class='bx bx-window-close'></i>
          )  :
          <i class='bx bx-menu'/>
          }
        </button>
      </div>
    </div>
   </div>
   {isClick &&(
    <div className='md:hidden'>
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
      <ul className='flex'>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Why us?</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Services</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Company</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Blog</li>
        <li className='py-1 px-2 mx-2 bg-[#FFB400] text-[#143F64] font-bold rounded-sm px-[14px] py-[12px] shadow-2xl' >Talk to an Expert</li>
      </ul>
      </div>
    </div>
   )}
   <div className='bg-[#f9c855] h-[3px] '>
   </div>
   </nav>   
  )
}

export default Navbar