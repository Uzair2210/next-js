import React from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Card4 from '../components/Card4'
import Card5 from '../components/Card5'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const index = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#2B5B84] w-full '>
        <div className='md:flex 2xl:justify-between md:justify-between'>
          <div>
            <h1 className='text-white text-3xl p-[25px] px-[40px] font-bold leading-[40px] tracking-wider sm:text-4xl lg:text-5xl lg:p-[50px] lg:px-[80px] lg:leading-[60px] 2xl:text-8xl 2xl:p-[80px] 2xl:px-[120px] 2xl:leading-[100px]'>Empower Your <br /> Buisness With <span className='text-[#FFB400]'> Web</span><br /><span className='text-[#FFB400]'>Scraping </span>Excellence.</h1>
            <p className='text-[#D9D9D9] px-[40px] text-[15px] font-light tracking-widest sm:text-[18px] lg:px-[80px] lg:text-[22px] 2xl:px-[120px] 2xl:text-[50px]'>Accelerate Growth with our Data Scraping <br />Expertise and Data Solutions.</p>
            <h3 className='text-[#F5F5F5] px-[40px] p-5 font-medium tracking-wider text-xl sm:p-7 sm:px-[45px] lg:px-[80px] lg:p-10 lg:tracking-widest lg:text-2xl 2xl:px-[120px] 2xl:p-14 2xl:text-4xl'>Transforming the Web into Actionable <br />Intelligence through Data Scraping.</h3>
            <button className='bg-[#FFB400] text-[#143F64] font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold'>Talk to an Expert</button>
            <p className='text-[#F5F5F5] font-extralight px-[40px] py-1 lg:px-[80px] lg:py-2 2xl:px-[120px] 2xl:py-3 2xl:text-xl'>Trusted by over 8000 customers in 100+ countries.</p>
          </div>
          <div>
            <img className='w-full md:w-80 md:mt-[200px] lg:w-[500px] 2xl:w-[1000px] lg:mt-[160px] md:mr-16' src="images/video.png" alt="" />
          </div>
        </div>
        <div className='h-10'></div>
      </div>
      <div className="flex items-center justify-center h-auto">
        <div className="bg-white text-center">
          <h2 className="text-[#143F64] font-bold text-3xl leading-[40px] tracking-wide mt-12 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]">Data Engineering,<br />Analytics & AI Excellence<br />through Web Scraping</h2>
          <p className="text-[#6F6F6F] font-extralight text-xl mt-6 tracking-wider md:text-2xl 2xl:text-4xl">Robust experience with leading organizations.</p>
          <div className='sm:flex cursor-pointer '>
            <div className='flex'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/amazon.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/google.png" alt="" />
            </div>
            <div className='flex'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/microsoft.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/microsoft.png" alt="" />
            </div>
          </div>
          <div className='sm:flex cursor-pointer sm:justify-evenly'>
            <div className='flex sm:justify-evenly'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/snowflake.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/databricks.png" alt="" />
            </div>
            <div className='flex sm:justify-evenly'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/morgan.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/stanley.png" alt="" />
            </div>
          </div>
          <div className='sm:flex cursor-pointer sm:justify-evenly'>
            <div className='flex sm:justify-evenly'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/bank.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/bloomberg.png" alt="" />
            </div>
            <div className='flex sm:justify-evenly'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/pwc.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/fidelity.png" alt="" />
            </div>
          </div>
          <div className='sm:flex cursor-pointer sm:justify-evenly'>
            <div className='flex sm:justify-evenly'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/media.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/hbo.png" alt="" />
            </div>
            <div className='flex sm:justify-evenly'>
              <img className="mx-auto mt-6 2xl:w-80" src="images/bearingpoint.png" alt="" />
              <img className="mx-auto mt-6 2xl:w-80" src="images/acxiom.png" alt="" />
            </div>
          </div>
          <div className='flex cursor-pointer'>
            <img className="mx-auto mt-6 2xl:w-80" src="images/at&t.png" alt="" />
            <img className="mx-auto mt-6 2xl:w-80" src="images/nyu-stern.png" alt="" />
          </div>
          <button className="bg-[#143F64] text-[#FFFFFF] font-bold rounded-sm px-[18px] py-[12px] mx-[80px] mt-6 2xl:py-8 2xl:px-8 2xl:font-extrabold">Talk to an Expert</button>
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-[#143F64] font-bold text-3xl leading-[40px] mt-12 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>Partner with Industry-Leading,<br /> Cloud-Certified Data Experts</h2>
        <p className="text-[#2B5B84] font-normal text-lg mt-6 tracking-wider md:text-xl 2xl:text-3xl">Drive Growth and Innovation with Our Cutting-Edge Cloud Data Solutions</p>
        <div className='grid grid-cols-1 gap-8 mt-12 lg:grid-cols-3 mx-6 md:grid-cols-2 lg:mx-40'>
          {Card1.map((card, hello) => (
            <div className='flex flex-col items-center justify-center p-1' key={hello}>
              <div
                className={`shadow-lg rounded-3xl ${hello % 2 === 0 ? 'bg-[#FFC815]' : 'bg-[#2B5B84]'
                  } sm:w-full md:w-1/2 lg:w-full`}
              >
                {hello % 2 === 0 ? (
                  <img
                    className='rounded-t-lg mt-0 flex justify-center items-center w-full'
                    src={card.img}
                    alt={card.title}
                  />
                ) : (
                  <img
                    className='rounded-t-lg mt-0 fl justify-center items-center w-full'
                    src={card.img2}
                    alt={card.title2}
                  />
                )}
                <h3
                  className={`mt-2 font-bold px-3 2xl:text-6xl ${hello % 2 === 0 ? 'text-[#143F64]' : 'text-[#FFFFFF]'
                    } text-xl`}
                >
                  {hello % 2 === 0 ? card.title : card.title2}
                </h3>
                <p
                  className={`mt-2 px-3 2xl:text-3xl ${hello % 2 === 0 ? 'text-[#2B5B84]' : 'text-[#D9D9D9]'
                    }`}
                >
                  {hello % 2 === 0 ? card.desc : card.desc2}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#143F64] text-[#FFFFFF] font-semibold mt-10 rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold">Talk to an Expert</button>
      </div>
      <div className='text-center'>
        <h2 className='text-[#143F64] font-bold text-xl leading-[40px] mt-10 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>Transform Your Business with<br /> Cutting-Edge Data Management <br />Services</h2>
        <p className="text-[#2B5B84] font-normal text-lg mt-6 tracking-wider md:text-xl 2xl:text-3xl">Accelerate Your Data-Driven Enterprise Journey</p>
        <h3 className='text-[#2B5B84] text-2xl font-semibold tracking-normal mt-6 2xl:text-5xl'>Unlock the Power of Big Data to Drive<br /> Business Growth</h3>
      </div>
      <div className='grid grid-cols-1 gap-8 mt-10 p-4 mx-10 md:grid-cols-3 2xl:gap-12 lg:mx-32 2xl:mx-48'>
        {Card2.map((card, i) => {
          const titleWords = card.title.split(' ');
          const lastWordIndex = titleWords.length - 1;
          const lastWord = titleWords[lastWordIndex];

          // Join the words except the last one with a space
          const titleWithoutLastWord = titleWords.slice(0, lastWordIndex).join(' ');

          return (
            <div className='bg-[#FFC815] shadow-lg rounded-3xl py-7' key={i
            }>
              <h2 className='pl-3 text-[#2B5B84] font-bold text-xl mt-0 lg:text-2xl 2xl:text-5xl'>
                {titleWithoutLastWord} <br /> {lastWord}
              </h2>
              <p className='text-[#2B5B84] px-3 py-2 text-sm lg:text-lg 2xl:text-2xl'>{card.desc}</p>
              <p className='text-[#2B5B84] px-3 py-2 text-sm lg:text-lg 2xl:text-2xl'>{card.desc1}</p>
              <p className='text-[#2B5B84] text-lg font-medium flex items-center px-3 2xl:text-3xl'>{card.learn} <i className='bx bx-right-arrow-alt ml-6'></i></p>
            </div>
          );
        })}
      </div>
      <div className='text-center'>
        <button className="bg-[#143F64] text-[#FFFFFF] font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold">Talk to an Expert</button>
      </div>
      <div className='text-center bg-white'>
  <h2 className='text-[#143F64] font-bold text-xl leading-[40px] mt-10 md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px]'>
    Advanced Web Scraping<br /> Features
  </h2>
  <p className='text-[#2B5B84] font-normal text-lg mt-6 tracking-wider md:text-xl 2xl:text-3xl'>
    Everything you need to automate your web scraping
  </p>

  <div className='grid grid-cols-1 gap-8 mt-10 bg-white mx-10 lg:mx-40 lg:grid-cols-3 md:grid-cols-2 2xl:mx-60'>
    {Card3.map((card) => (
      <div key={card.title} className='bg-[#FFB400] rounded-xl py-11'>
        <img
          className='bg-[#143F64] rounded-full mx-auto w-32 2xl:w-44'
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
</div>
<div className='bg-[#2B5B84] w-full h-full mt-24 '>
        <h2 className='text-white font-bold text-xl leading-[40px] md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px] text-center py-8'>Here's What Our Customers Are<br /> Saying About Us</h2>
        <div className='grid grid-cols-1 gap-8 mx-12 md:grid-cols-2 md:mx-8 lg:mx-60 2xl:mx-96'>
          {Card4.map(Card4 => (
            <div className='bg-[#143F64] rounded-lg text-white'>
              <p className='p-7 font-extralight text-sm lg:text-lg 2xl:text-3xl'>{Card4.desc}</p>
              <p className='pl-7 pb-7 font-normal lg:text-xl 2xl:text-4xl'>{Card4.end}</p>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button className="bg-gradient-to-r from-[#FFC815] to-[#FFE798] text-[#2B5B84] mt-12 font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold">Talk to an Expert</button>
        </div>
        <div className='bg-[#2B5B84] h-6 w-full'></div>
        </div>
      <div className='text-center'>
        <h2 className='text-[#2B5B84] font-bold text-2xl leading-[40px] md:text-4xl md:leading-[50px] 2xl:text-7xl 2xl:leading-[80px] text-center py-8'>Learn & Be Inspired</h2>
        <div className='grid grid-cols-1 gap-8 mx-14 shadow-lg rounded-xl sm:grid-cols-2 md:grid-cols-3 sm:mx-32 lg:mx-48 2xl:mx-60'>
          {Card5.map((Card5,i) => (
            <div key={i} className='rounded-3xl shadow-lg border-2 border-[#2B5B84]'>
              <img className='rounded-2xl 2xl:w-[800px]' src={Card5.img} />
              <h2 className='text-center text-xl font-bold text-[#2B5B84] px-3 pt-8 pb-12 md:text-xl 2xl:text-5xl'>{Card5.title}</h2>
            </div>
          ))}
        </div>
        <button className='bg-[#2B5B84] text-[white] font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold mt-12' >View More Blog</button>
      </div>
      <div className='bg-[#2B5B84] w-full h-full'>
        <h2 className='text-[#FBD148] p-10 font-bold text-xl leading-[40px] mt-10 md:text-4xl text-center md:leading-[20px] 2xl:text-7xl 2xl:leading-[40px]'>Ready to Grow Your Business?</h2>
        <p className='text-white font-medium tracking-wider text-center text-xl lg:tracking-widest lg:text-2xl 2xl:text-4xl'>Subscribe to our Grow Your Business newsletter</p>
        <img className='absolute ml-[62%] sm:ml-[72%] md:ml-[82%] w-32 lg:w-40' src='images/bell.png' />
        <div className='bg-[#FFC815] w-[70%] h-auto mt-14 rounded-3xl p-10 mx-auto items-center'>
          <div className='lg:flex'>
            <div className=''>
              <label className='text-[#143F64] font-normal'>Enter your name:</label>
              <input className='mt-3 rounded-lg px-auto py-4 border-none focus:outline-none sm:px-24 lg:px-auto' type='text' />
            </div>
            <div className=''>
              <label className='text-[#143F64] font-normal'>Enter your email:</label>
              <input className='mt-3 rounded-lg px-auto py-4 border-none focus:outline-none sm:px-24' type='text' />
            </div>
          </div>
          <button className='bg-[#2B5B84] text-[white] font-semibold rounded-sm mx-[40px] px-[14px] py-[10px] lg:mx-[80px] lg:px-[18px] lg:py-[12px] 2xl:mx-[120px] 2xl:px-[30px] 2xl:py-[22px] 2xl:font-extrabold mt-5' >Subscribe Now</button>
        </div>
        <p className='text-white font-medium tracking-wider text-center text-xl lg:tracking-widest lg:text-2xl 2xl:text-4xl mt-10'>Get tips to Grow Your Business once a week.</p>
        <div className='w-full h-10'></div>
      </div>
        <div className='hidden lg:block'>
        <Footer/>
        </div>







    </>



  )
}

export default index