import React from 'react'

const Footer = () => {
  return (
    <div className='relative'>
        <img className='bg-cover object-cover w-full bg-[#0b1b2a] h-full' src='images/lastback.png'/>
        <div className='absolute top-2 text-white flex'>
        <div className='mt-20 p-4'>
        <img className='2xl:w-96' src="images/cloud.png" alt="" />
        <p className='mt-6 2xl:text-3xl'>Lorem Ipsum is simply dummy<br/> text of the printing and <br/>typesetting industry. Lorem<br/> Ipsum has been the industry's <br/>standard dummy text ever<br/> since the 1500s, when an <br/>unknown printer took a galley<br/> of type and scrambled it to<br/> make a type specimen book.</p>
        </div>
        <div className='ml-16 mt-44'>
            <p className='text-lg font-semibold 2xl:text-4xl'>Why Us?</p>
            <ul className='mt-7 list-disc 2xl:text-3xl'>
                <li className='pb-3 '>Expert Professional <br/>Services</li>
                <li className='pb-3'>Robust Data <br/>Management</li>
                <li className='pb-3'>Robust Data<br/> Management</li>
            </ul>
        </div>
        <div className='ml-16 mt-44'>
            <p className='text-lg font-semibold 2xl:text-4xl'>Services</p>
            <ul className='mt-7 list-disc 2xl:text-3xl'>
                <li className='pb-3'>Cloud Data <br/>Engineering</li>
                <li className='pb-3'>Data Extraction</li>
                <li className='pb-3'>Data Transformation</li>
                <li className='pb-3'>Web Scraping</li>
            </ul>
        </div>
        <div className='ml-16 mt-44'>
            <p className='text-lg font-semibold 2xl:text-4xl'>Company</p>
            <ul className='mt-7 list-disc 2xl:text-3xl'>
                <li className='pb-3'>About Us</li>
                <li className='pb-3'>Team</li>
                <li className='pb-3'>Newsletter</li>
                <li className='pb-3'>Blog</li>
                <li className='pb-3'>Contact Us</li>
            </ul>
        </div>
        <div className='ml-16 mt-44'>
           <p className='text-lg font-semibold 2xl:text-4xl'>Follow Us</p>
           <div className='flex pt-6 space-x-3 2xl:w-32'>
           <img src='images/facebook.png'/>
           <img src='images/insta.png'/>
           <img src='images/linkedin.png'/>
           <img src='images/youtube.png'/>
           <img src='images/twitter.png'/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer