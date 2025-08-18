import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='navbar px-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14  text-sm px-5 py-2'>
        <div className='mt-14'>
            <img src={assets.logo} className=' w-40 mb-2' />
            <p className='w-full md:w-2/3 text-gray-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officia architecto debitis ipsam, hic dolore voluptatem unde distinctio, facilis laudantium, impedit modi sit odit. Magni, laboriosam. Earum laboriosam animi maxime!
            </p>
        </div>

        <div className='mt-12'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-200'>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>Privacy Policy</li>
            </ul>
        </div>

        <div className='mt-10'>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-200'>
                <li>+1-212-546-7890</li>
                <li>contact@GreenChain.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 ttext-sm text-center'>Copyright 2025@ GreenChain.com - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
