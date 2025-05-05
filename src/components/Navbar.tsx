import React from 'react'
import Button from './UIElements/Button'

const Navbar = () => {

  return (
    <section className='fixed z-30 top-0 left-0 w-screen bg-black py-4 px-20 text-white flex justify-between items-center'>
        <div className=' font-bold'>VYBH</div>
        <div className='flex gap-4 justify-center items-center'>
            <div className='flex gap-1 bg-[#1E2A38] p-2 px-4 rounded-md '>
                <span className='flex items-center gap-1'>
                    <div className='w-2 h-2 rounded-lg bg-green-600'></div>
                    <span>ETH Network</span>
                </span>
                <span>|</span>
                <span>
                    <span></span>
                    <span>3 NFTs</span>
                </span>
            </div>
            <Button color='primary' variant='outline' title='Connect Wallet'/>
        </div>
    </section>
  )
}

export default Navbar