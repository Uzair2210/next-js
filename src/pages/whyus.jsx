import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Card6 from '../components/Card6'
import Card7 from '../components/Card7'

import React from 'react'

const whyus = () => {
  return (
    <>
    <Navbar/>
    <div className='text-center'>
      <h2 className='text-[#143F64] font-bold text-3xl leading-[40px] mt-12 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>Why Choose Us for Web Scraping: Unleashing<br/>the POtential of Data-driven Insights</h2>
      <p className='text-[#2B5B84] font-light text-lg mt-1 tracking-wider md:text-xl 2xl:text-3xl'>We work closely with your at each step, so you successfull and totally satisfied<br/>with the resultof our work.</p>
    </div>
    <div className='grid grid-cols-1 gap-4 mt-8 bg-white mx-10 lg:mx-40 lg:grid-cols-3 md:grid-cols-2 2xl:mx-60 text-center'>
    {Card6.map((card) => (
      <div key={card.title} className='border border-[#2B5B84] rounded-xl py-11 shadow-lg'>
        <img
          className='bg-[#143F64] rounded-full mx-auto w-16 2xl:w-44 p-3'
          src={card.img}
          alt={card.title}
        />
        <h2 className='text-[#143F64] font-bold text-2xl mt-3 2xl:text-4xl'>
          {card.title}
        </h2>
        <p className='text-[#143F64] text-sm font-light px-11 pt-2 2xl:text-xl'>{card.desc}</p>
      </div>
    ))}
  </div>
<div className='bg-[#FFC815] p-20 sm:px-28 md:px-32 lg:px-40 2xl:px-52 mt-8 py-14'>
  <h2 className='text-[#143F64] font-bold text-3xl leading-[40px] mt-12 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>We make data extraction easy</h2>
  <p className='text-[#2B5B84] font-normal text-lg mt-1 tracking-wider md:text-xl 2xl:text-3xl'>We are fueled by an unwavering passion for data. We have the skills and knowledge necessary to
extract the web data you require thanks to our staff of more than 100 developers and more than 
10 years of experience. <br/><br/>

We have successfully completed projects of various sizes and shapes for a
varied spectrum of businesses, from startups to Fortune 500 corporations, demonstrating that our 
fascination with data has no bounds.</p>
<div className='text-center'>
<button className='bg-[#2B5B84] text-[#FFC815] font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold mt-12' >Contact Us</button>
</div>
</div>
<div className='bg-[#2B5B84] px-20 py-14 lg:px-32'>
  <h2 className='text-center text-[#FFC815] font-bold text-3xl leading-[40px] mt-12 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>What Our Customers are Saying About <br/>ScrapByte</h2>
  <p className='text-white font-normal text-lg mt-1 lg:mt-3 2xl:mt-6 tracking-wider md:text-xl 2xl:text-3xl 2xl:px-10'>Even the most challenging navigations and extractions have been handled by ScrapByte,
which started up quickly and easily. Our organization was able to save weeks of work and
get fantastic outcomes after a few hours of hands-on practice and roughly 30 minutes 
of free assistance from their outstanding support service.
</p>
<p className='text-white font-medium text-xl mt-1 lg:mt-3 2xl:mt-6 ml-[40%] md:ml-[50%] lg:ml-[70%] tracking-wider md:text-2xl 2xl:text-4xl'>—Joseph Rohd, CEO at 
</p>
<div className='text-center'>
<button className='bg-[#FFC815] text-[#2B5B84] font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold mt-12' >Contact Us</button>
</div>
</div>
<div className='text-center'>
  <h2 className='text-[#2B5B84] font-bold text-3xl leading-[40px] mt-12 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>TOP SOLUTIONS</h2>
  <div className='grid grid-cols-2 gap-4 lg:gap-8 mt-8 bg-white mx-10 lg:mx-40 lg:grid-cols-5 md:grid-cols-3 2xl:mx-60 text-center md:p-10'>
    {Card7.map((card) => (
      <div key={card.title} className='border rounded-lg py-4 flex items-center justify-center shadow-lg'>
        <img
          className=' mx-auto p-2 '
          src={card.img}
        />
        
      </div>
    ))}
  </div>
</div>







<div className='text-center'>
<h2 className='text-[#2B5B84] font-bold text-3xl leading-[40px] mt-14 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>Trusted by Thousands Worldwide</h2>


<div className='bg-[#2B5B84] flex py-16 text-center justify-evenly font-bold 2xl:py-24 mt-6'>
  <div>
  <h2 className='text-[#FFB400] text-lg md:text-2xl lg:text-4xl 2xl:text-7xl'>42</h2>
  <p className='text-white text-md sm:text-lg lg:text-2xl 2xl:text-4xl'>Countries Served</p>
  </div>
  <div>
  <h2 className='text-[#FFB400] text-lg md:text-2xl lg:text-4xl 2xl:text-7xl'>152,000+ </h2>
  <p className='text-white text-md sm:text-lg lg:text-2xl 2xl:text-4xl'>Customers Worldwide</p>
  </div>
 <div>
 <h2 className='text-[#FFB400] text-lg md:text-2xl lg:text-4xl 2xl:text-7xl'>2000+ </h2>
  <p className='text-white text-md sm:text-lg lg:text-2xl 2xl:text-4xl'>Servers Running</p>
 </div>
 <div>
 <h2 className='text-[#FFB400] text-lg md:text-2xl lg:text-4xl 2xl:text-7xl'>10 Years</h2>
  <p className='text-white text-md sm:text-lg lg:text-2xl 2xl:text-4xl'>In Business</p>
 </div>
</div>
</div>






    <div className='hidden lg:block'>
        <Footer/>
        </div>
    </>
  )
}

export default whyus