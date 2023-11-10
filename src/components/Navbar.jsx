import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className='bg-[#143F64] w-full h-20'>
     <nav className='max-w-6xl mx-auto flex items-center justify-between py-4'>
      <img src="images/cloud.png" alt="" />
      <ul className='flex'>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Why us?</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Services</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Company</li>
        <li className='py-2 px-2 mx-2 text-[#FFB400] font-bold'>Blog</li>
        <li className='py-1 px-2 mx-2 bg-[#FFB400] text-[#143F64] font-bold rounded-sm px-[14px] py-[12px] shadow-2xl' >Talk to an Expert</li>
      </ul>
    </nav>
   </div>
   <div className='bg-[#f9c855] h-[3px] '></div>
   </>   
  )
}

export default Navbar