import Layout from '@/layout'
import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'


const index = () => {
  return (
    <Layout>
      <div className='bg-[#2B5B84] h-[90vh]'>
        <div className='flex'>
          <div>
            <h1 className='text-white text-5xl p-[50px] px-[80px] font-bold leading-[60px] tracking-wider'>Empower Your <br /> Buisness With <span className='text-[#FFB400]'> Web</span><br /><span className='text-[#FFB400]'>Scraping </span>Excellence.</h1>
            <p className='text-[#D9D9D9] px-[80px] py-0 text-[22px] font-light tracking-widest'>Accelerate Growth with our Data Scraping <br />Expertise and Data Solutions.</p>
            <h3 className='text-[#F5F5F5] px-[80px] p-10 font-medium tracking-widest text-2xl'>Transforming the Web into Actionable <br />Intelligence through Data Scraping.</h3>
            <button className='bg-[#FFB400] text-[#143F64] font-bold rounded-sm px-[18px] py-[12px] mx-[80px]' >Talk to an Expert</button>
            <p className='text-[#F5F5F5] px-[80px] py-2 font-extralight '>Trusted by over 8000 customers in 100+ countries.</p>
          </div>
          <div>
            <img className='absolute mx-[100px] my-[130px]' src="images/video.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-auto">
        <div className="bg-white text-center">
          <h2 className="text-[#143F64] font-bold text-4xl leading-[50px] tracking-wide mt-12">Data Engineering,<br />Analytics & AI Excellence<br />through Web Scraping</h2>
          <p className="text-[#6F6F6F] font-extralight text-2xl mt-6 tracking-wider">Robust experience with leading organizations.</p>
          <div className='flex cursor-pointer'>
            <img className="mx-auto mt-6" src="images/amazon.png" alt="" />
            <img className="mx-auto mt-6" src="images/google.png" alt="" />
            <img className="mx-auto mt-6" src="images/microsoft.png" alt="" />
            <img className="mx-auto mt-6" src="images/microsoft.png" alt="" />
          </div>
          <div className='flex cursor-pointer'>
            <img className="mx-auto mt-6" src="images/snowflake.png" alt="" />
            <img className="mx-auto mt-6" src="images/databricks.png" alt="" />
            <img className="mx-auto mt-6 w-28" src="images/morgan.png" alt="" />
            <img className="mx-auto mt-6 w-28" src="images/stanley.png" alt="" />
          </div>
          <div className='flex cursor-pointer'>
            <img className="mx-auto mt-6" src="images/bank.png" alt="" />
            <img className="mx-auto mt-6" src="images/bloomberg.png" alt="" />
            <img className="mx-auto mt-6" src="images/pwc.png" alt="" />
            <img className="mx-auto mt-6" src="images/fidelity.png" alt="" />
          </div>
          <div className='flex cursor-pointer'>
            <img className="mx-auto mt-6" src="images/media.png" alt="" />
            <img className="mx-auto mt-6" src="images/hbo.png" alt="" />
            <img className="mx-auto mt-6" src="images/bearingpoint.png" alt="" />
            <img className="mx-auto mt-6" src="images/acxiom.png" alt="" />
          </div>
          <div className='flex cursor-pointer'>
            <img className="ml-48 mt-6" src="images/at&t.png" alt="" />
            <img className="ml-28 mt-6" src="images/nyu-stern.png" alt="" />
          </div>
          <button className="bg-[#143F64] text-[#FFFFFF] font-bold rounded-sm px-[18px] py-[12px] mx-[80px] mt-6">Talk to an Expert</button>
        </div>
      </div>

      <div className='text-center'>
        <h2 className='text-[#143F64] font-bold text-4xl leading-[50px] mt-12'>Partner with Industry-Leading,<br /> Cloud-Certified Data Experts</h2>
        <p className="text-[#2B5B84] font-normal text-lg mt-3 tracking-wider">Drive Growth and Innovation with Our Cutting-Edge Cloud Data Solutions</p>
        <div className='grid lg:grid-cols-3 gap-8 mx-[400px] mt-12'>
          {Card1.map((card, hello) => (
            <div
              key={hello}
              className={`shadow-lg rounded-3xl py-6 ${hello % 2 === 0 ? 'bg-[#FFC815]' : 'bg-[#2B5B84]'}`}>
              {hello % 2 === 0 ? (
                <img className='rounded-t-lg ml-20 mt-0' src={card.img} alt={card.title} />
              ) : (
                <img className='rounded-t-lg ml-20 mt-0' src={card.img2} alt={card.title2} />
              )}
              <h3
                className={`mt-2 font-bold px-3 ${hello % 2 === 0 ? 'text-[#143F64]' : 'text-[#FFFFFF]'
                  } text-xl`}
              >
                {hello % 2 === 0 ? card.title : card.title2}
              </h3>
              <p className={`mt-2 px-3 ${hello % 2 === 0 ? 'text-[#2B5B84]' : 'text-[#D9D9D9]'}`}>
                {hello % 2 === 0 ? card.desc : card.desc2}
              </p>
            </div>
          ))}
        </div>
        <button className="bg-[#143F64] text-[#FFFFFF] font-bold rounded-sm px-[18px] py-[12px] mx-[80px] mt-6">Talk to an Expert</button>
      </div>
      <div className='text-center'>
        <h2 className='text-[#143F64] font-bold text-4xl leading-[50px] tracking-wide mt-12'>Transform Your Business with<br /> Cutting-Edge Data Management <br />Services</h2>
        <p className="text-[#2B5B84] font-normal text-lg tracking-wider">Accelerate Your Data-Driven Enterprise Journey</p>
        <h3 className='text-[#2B5B84] text-2xl font-semibold tracking-normal mt-6'>Unlock the Power of Big Data to Drive<br /> Business Growth</h3>
      </div>

      <div className='grid lg:grid-cols-3 gap-8 mx-[360px] mt-12 '>
        {Card2.map((card, i) => {
          const titleWords = card.title.split(' ');
          const lastWordIndex = titleWords.length - 1;
          const lastWord = titleWords[lastWordIndex];

          // Join the words except the last one with a space
          const titleWithoutLastWord = titleWords.slice(0, lastWordIndex).join(' ');

          return (
            <div className='bg-[#FFC815] shadow-lg rounded-3xl py-7' key={i
            }>
              <h2 className='pl-3 text-[#2B5B84] font-bold text-2xl mt-0'>
                {titleWithoutLastWord} <br /> {lastWord}
              </h2>
              <p className='text-[#2B5B84] px-3 py-2'>{card.desc}</p>
              <p className='text-[#2B5B84] px-3 py-2'>{card.desc1}</p>
              <p className='text-[#2B5B84] text-lg font-medium flex items-center px-3'>{card.learn} <i className='bx bx-right-arrow-alt ml-6'></i></p>
            </div>
          );
        })}
      </div>
      <div className='text-center'>
        <button className="bg-[#143F64] text-[#FFFFFF] font-bold rounded-sm px-[18px] py-[12px] mx-[80px] mt-6">Talk to an Expert</button>
      </div>
      <div className='text-center  bg-white'>
        <h2 className='text-[#143F64] font-bold text-4xl leading-[50px] tracking-normal mt-16'>Advanced Web Scraping<br /> Features</h2>
        <p className='text-[#2B5B84] font-normal text-lg tracking-wider'>Everything you need to automate your web scraping</p>

        <div className='grid lg:grid-cols-3 gap-8 mx-[200px] mt-12 bg-white'>
          {Card3.map(Card3 => (
            <div className='bg-[#FFB400] rounded-xl py-11'>
              <img className='bg-[#143F64] rounded-full ml-28 mt-0 w-32 ' src={Card3.img} />
              <h2 className='text-[#143F64] font-bold text-2xl mt-3 '>{Card3.title}</h2>
              <p className='text-[#143F64] text-sm font-light px-11 pt-2'>{Card3.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#2B5B84] w-full h-[70vh] mt-32 '>
        <h2 className='text-white text-4xl font-bold tracking-wide py-8 leading-[50px] text-center'>Here's What Our Customers Are<br /> Saying About Us</h2>
        <div className='grid lg:grid-cols-2 gap-8 mx-[350px] '>
          {Card4.map(Card4 => (
            <div className='bg-[#143F64] rounded-xl text-white'>
              <p className='p-7 font-extralight text-sm'>{Card4.desc}</p>
              <p className='pl-7 pb-7 font-normal'>{Card4.end}</p>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button className="bg-gradient-to-r from-[#FFC815] to-[#FFE798] text-[#2B5B84] font-bold rounded-sm px-[18px] py-[12px] mx-[80px] mt-10">Talk to an Expert</button>
        </div>
      </div>
      <div className='text-center'>
        <h2 className='text-[#2B5B84] text-center font-bold text-4xl my-16'>Learn & Be Inspired</h2>
        <div className='grid lg:grid-cols-3 gap-8 mx-[170px] shadow-lg rounded-xl'>
          {Card5.map(Card5 => (
            <div className='rounded-3xl shadow-lg border border-2 border-[#2B5B84]'>
              <img className='rounded-2xl' src={Card5.img} />
              <h2 className='text-center text-2xl font-bold text-[#2B5B84] px-3 pt-8 pb-12'>{Card5.title}</h2>
            </div>
          ))}
        </div>
        <button className='bg-[#2B5B84] text-[white] font-bold rounded-sm px-[18px] py-[12px] mx-[80px] my-12' >View More Blog</button>
      </div>
      <div className='bg-[#2B5B84] w-full h-[52vh]'>
        <h2 className='text-[#FBD148] text-4xl font-bold pt-10 text-center'>Ready to Grow Your Business?</h2>
        <p className='text-white font-normal text-3xl tracking-wide mt-3 text-center'>Subscribe to our Grow Your Business newsletter</p>
        <img className='absolute ml-[80%] ' src='images/bell.png' />
        <div className='bg-[#FFC815] w-[70%] h-[35vh] ml-[210px] mt-14 rounded-3xl p-10'>
          <div className='flex'>
            <div className='flex flex-col'>
              <label className='text-[#143F64] font-normal'>Enter your name:</label>
              <input className='mt-3 rounded-lg px-[120px] py-4 border-none focus:outline-none' type='text' />
            </div>
            <div className='flex flex-col ml-12'>
              <label className='text-[#143F64] font-normal'>Enter your email:</label>
              <input className='mt-3 rounded-lg px-[120px] py-4 border-none focus:outline-none' type='text' />
            </div>
          </div>
          <button className='bg-[#2B5B84] text-[white] font-bold rounded-md px-[18px] py-[12px] mx-[370px] my-12' >Subscribe Now</button>
        </div>
        <p className='text-white font-normal text-3xl tracking-wide mt-3 text-center mt-6'>Get tips to Grow Your Business once a week.</p>
      </div>






    </Layout>
  )
}

export default index