import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isClick , setisClick] = useState()
  const toggleNavbar = () =>{
    setisClick(!isClick)
  }

  const [isOpen, setIsOpen]= useState(false)
  return (
  <nav className='bg-[#143F64]'>
   <div className='w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12'>
     <div className='flex items-center justify-between py-4 h-20'>
      <div className='flex items-center'>
        <div className='flex-shrink-0 cursor-pointer '>
      <img  src="images/cloud.png"/>
      </div>
      </div>
      <div className='hidden md:block'>
        <div className='ml-4 flex items-center space-x-4 md:space-x-2 md:text-sm md:ml-2'>
        <ul className='flex cursor-pointer'>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold relative' onClick={()=>setIsOpen((prev)=>!prev)}>Why us? <i class='bx bx-chevron-down'></i>
        {isOpen &&
        <div className='absolute bg-[#FFB400] right-0 rounded-md p-2 w-40 mt-3'>
          <ul className='text-center text-[#143F64] skew-y-2 cursor-pointer'>
            <li><Link href={"whyus"}>Expert Professional <br/>Services</Link></li>
            <li>Expert Professional <br/>Services</li>
            <li>Expert Professional <br/>Services</li>
          </ul>
        </div>
        }
        </li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Services <i class='bx bx-chevron-down'></i></li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Company <i class='bx bx-chevron-down'></i></li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Blog <i class='bx bx-chevron-down'></i></li>
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
      <div className='px-1 pt-2 pb-3 space-y-[2px] text-sm sm:px-2'>
      <ul className='flex flex-col'>
      <li className='py-2 px-1 mx-1 text-[#FFB400] font-bold relative ' onClick={()=>setIsOpen((prev)=>!prev)}>Why us? <i class='bx bx-chevron-down'></i>
        {isOpen &&
        <div className='absolute bg-[#FFB400] right-4 rounded-md p-2 w-40 mb-10 '>
          <ul className='text-center text-[#143F64] skew-y-2'>
            <li><Link href={"whyus"}>Expert Professional <br/>Services</Link></li>
            <li>Expert Professional <br/>Services</li>
            <li>Expert Professional <br/>Services</li>
          </ul>
        </div>
        }
        </li>
        <li className='py-2 px-1 mx-1 text-[#FFB400] font-bold'>Services <i class='bx bx-chevron-down'></i></li>
        <li className='py-2 px-1 mx-1 text-[#FFB400] font-bold'>Company <i class='bx bx-chevron-down'></i></li>
        <li className='py-2 px-1 mx-1 text-[#FFB400] font-bold'>Blog <i class='bx bx-chevron-down'></i> </li>
        <li className='py-2 px-2 mx-1 bg-[#FFB400] text-[#143F64] font-bold rounded-sm shadow-2xl' >Talk to an Expert</li>
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