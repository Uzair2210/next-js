import React from 'react'

const Footer = () => {
  return (
    <div className='relative'>
        <img className='bg-cover object-cover w-full mt-40 bg-[#0b1b2a]' src='images/lastback.png'/>
        <div className='absolute top-2 text-white flex'>
        <div className='ml-48 mt-40'>
        <img src="images/cloud.png" alt="" />
        <p className='mt-6'>Lorem Ipsum is simply dummy<br/> text of the printing and <br/>typesetting industry. Lorem<br/> Ipsum has been the industry's <br/>standard dummy text ever<br/> since the 1500s, when an <br/>unknown printer took a galley<br/> of type and scrambled it to<br/> make a type specimen book.</p>
        </div>
        <div className='ml-28 mt-44'>
            <p className='text-lg font-semibold'>Why Us?</p>
            <ul className='mt-7 list-disc'>
                <li className='pb-3'>Expert Professional <br/>Services</li>
                <li className='pb-3'>Robust Data <br/>Management</li>
                <li className='pb-3'>Robust Data<br/> Management</li>
            </ul>
        </div>
        <div className='ml-28 mt-44'>
            <p className='text-lg font-semibold'>Services</p>
            <ul className='mt-7 list-disc'>
                <li className='pb-3'>Cloud Data <br/>Engineering</li>
                <li className='pb-3'>Data Extraction</li>
                <li className='pb-3'>Data Transformation</li>
                <li className='pb-3'>Web Scraping</li>
            </ul>
        </div>
        <div className='ml-28 mt-44'>
            <p className='text-lg font-semibold'>Company</p>
            <ul className='mt-7 list-disc'>
                <li className='pb-3'>About Us</li>
                <li className='pb-3'>Team</li>
                <li className='pb-3'>Newsletter</li>
                <li className='pb-3'>Blog</li>
                <li className='pb-3'>Contact Us</li>
            </ul>
        </div>
        <div className='ml-28 mt-44'>
           <p className='text-lg font-semibold'>Follow Us</p>
           <div className='flex pt-6 space-x-3'>
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