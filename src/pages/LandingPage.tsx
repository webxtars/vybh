import React from 'react'
import Button from '../components/UIElements/Button'

const LandingPage = () => {
  return (
    <div className='h-[400px] mt-16 md:mt-0 md:h-screen flex items-center justify-center'>
      <img className='h-[400px] md:h-screen w-screen object-cover absolute z-0' src={"landing.jpg"}/>
      <div className=' z-10 text-white text-center flex flex-col gap-4 items-center'>
        <h1 className='text-xl md:text-3xl lg:text-6xl font-bold'>EXPERIENCE WEB-3 EVENTS</h1>
        <p className='text-md md:text-xl lg:text-2xl font-bold'>Secure your NFT tickets for exclusive concerts, shows, and experiences</p>
        <Button color='primary' variant='solid' title='Connect Wallet' size='large'/>
      </div>
    </div>
  )
}

export default LandingPage