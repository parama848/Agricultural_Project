import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

    <div className='text-center text-2xl pt-10'>
        <Title text1={'CONTACT'} text2={'US'} />
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.hero_img} alt="" />
       <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>158, South Street <br /> Velaiyampakkam, Tiruvannamalai-606811 </p>
          <p className='text-gray-500'>Phone : (+91) 8148497159 <br /> Email: parama8148497159@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at GreenChain.com</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-green-400 hover:border-green-400 px-8 py-4 text-sm hover:bg-green-400 hover:text-white transition duration-500'>Explore Jobs</button>
       </div>
    </div>

    <NewsLetterBox />

    </div>
  )
}

export default Contact
