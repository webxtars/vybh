import React from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { CgCalendar } from 'react-icons/cg'
import { FaClock, FaLocationDot, FaLocationPin } from 'react-icons/fa6'
import { SiTicktick } from 'react-icons/si'

const Checkout = () => {
  return (
    <div className='w-screen bg-gray min-h-screen flex flex-col lg:flex-row mt-16 px-6 sm:px-20 md:px-32 py-20 gap-8'>
      <div className='w-full'>
        <h1 className='text-4xl font-bold pb-1'>Checkout</h1>
        <p className='text-white/50 pb-6'>Complete your NFT ticket purchase</p>
        {/* div 1 */}
        <div className='w-full bg-lightgray flex gap-3 md:gap-6 p-4 md:p-6 rounded-lg'>
          <img src='landing.jpg' className='w-20 md:w-40 w-20 md:h-40 rounded-lg object-cover'/>
          <div className='flex flex-col gap-2 h-full justify-center'>
            <p className='md:text-xl font-bold'>Crypto Beats Festival</p>
            <div className='text-sm md:text-md text-white/50'>
              <span className='flex items-center gap-2'>
                <span><CgCalendar/></span>
                <span>March 15, 2020</span>
                <span className='w-1 h-1 rounded-full bg-white/50'></span>
                <span>8PM</span>
              </span>
            </div>
            <p className='text-white/50 flex items-center gap-2'>
              <span><FaLocationDot/></span>
              <span>Miami Convention Center</span>
            </p>
          </div>
        </div>
        {/* div 2 */}
        <div className='w-full bg-lightgray p-4 md:p-6 rounded-lg mt-8'>
          <div className='flex w-full justify-between'>
            <span className='text-md md:text-lg font-bold'>Ticket Verification</span>
            <span className='text-sm md:text-md text-purple flex items-center gap-2'>
              <span><SiTicktick/></span>
              <span>Verified Event</span>
            </span>
          </div>
          <div className='flex w-full my-4 bg-lightgray brightness-[150%] flex gap-4 md:gap-6 p-4 rounded-lg'>
            <img src='landing.jpg' className='w-20 h-20 rounded-lg'/>
            <div className=''>
              <p className='font-bold  md:text-lg'>Smart Contract Verified</p>
              <p className='text-sm md:text-md text-white/50'>NFT Ticket Authenticity Guaranteed</p>
            </div>
          </div>
        </div>
        {/* div 3 */}
        <div className='w-full bg-lightgray p-6 rounded-lg mt-8'>
          <h1 className='text-lg font-bold'>Network Estimation Fee</h1>
          <div className='flex justify-between p-6 mt-4 bg-lightgray brightness-[150%] rounded-lg'>
            <span className='flex items-center gap-2'>
              <span className='text-yellow'><AiFillThunderbolt/></span>
              <span>Current Gas Price</span>
            </span>
            <span className='text-yellow'>25 GWEI</span>
          </div>
          <div className='flex justify-between p-6 mt-4 bg-lightgray brightness-[150%] rounded-lg'>
            <span className='flex items-center gap-2'>
              <span className='text-lightBlue'><FaClock/></span>
              <span>Estimated Time</span>
            </span>
            <span className='text-yellow'>~30 Seconds</span>
          </div>
        </div>
      </div>
      {/* payment summary */}
      <div className='bg-lightgray rounded-lg p-6 h-fit w-full lg:w-fit'>
        <h1 className='text-lg font-bold mb-2'>Payment Summary</h1>
        <div className='flex flex-col gap-3 lg:w-60 py-4 border-b border-white/20'>
          <div className='flex justify-between'>
            <span className='text-white/50'>Ticket Price</span>
            <span>0.5 ETH</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-white/50'>Gas Fee</span>
            <span>0.002 ETH</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-white/50'>Platform Fee</span>
            <span>0.005 ETH</span>
          </div>
        </div>
        <div className='flex justify-between py-4'>
          <span className='font-bold'>Total</span>
          <span>0.5007 ETH</span>
        </div>
        <button className='w-full py-3 text-white bg-purple rounded-xl mt-1'>Confirm Purchase</button>
      </div>
    </div>
  )
}

export default Checkout