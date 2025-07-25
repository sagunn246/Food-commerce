import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-900 h-auto md:h-full relative top-20'>
        <div className='text-xl md:text-2xl items-center italic gap-1 flex text-white pt-2 ml-4 md:ml-9'>
          <img src='ab.png' alt='' className='h-10 w-10 rounded-3xl' />
          <p className='ml-3'>Daddy's Kitchen</p>
        </div>

        <div className='flex flex-col md:flex-row justify-around text-lg mt-4 md:mt-8  text-white px-4 md:px-0'>
          <ul className='mb-4 md:mb-0'>
            <p className='pb-3 text-3xl  font-medium text-orange-400'>Contact</p>
            <li className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-blue-500' />
              Pokhara, Sathmuhane W-32
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-green-500' />
              +9866042972, 980147448
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-red-500' />
              sagunghimire10@gmail.com
            </li>
          </ul>

          <ul className='mb-4 md:mb-0'>
            <p className='pb-3  text-3xl font-medium text-orange-500'>Hours</p>
            <li>Sat–Sun: 9 AM – 10 PM</li>
            <li>Mon: 9 AM – 10 PM</li>
            <li>Wed–Thurs: 6 AM – 10 PM</li>
            <li>Fri: Only: 2 PM</li>
            <li className='flex gap-1'>
              Tues: <span className='font-semibold text-red-600'>Closed</span>
            </li>
          </ul>

          <ul className='hover:cursor-pointer mb-4 md:mb-0'>
            <p className='pb-3  text-3xl font-medium text-orange-500'>Links</p>
            <li className='hover:underline hover:text-blue-700'>Privacy Policy</li>
            <li className='hover:underline hover:text-blue-700'>Order Tracking</li>
            <li className='hover:underline hover:text-blue-700'>Warranty</li>
          </ul>
        </div>

        <div className='flex justify-center mt-6 pb-4'>
          <footer className='text-gray-500 text-sm tracking-wide'>
            Thank you kindly for visiting us
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer