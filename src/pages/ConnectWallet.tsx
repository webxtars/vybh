import {  BiWallet } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { PiWarningCircle } from 'react-icons/pi'

const ConnectWallet = () => {
  return (
    <div className='px-10 py-12 md:p-20 mt-16 flex flex-col items-center gap-4 justify-center'>
        <div className='flex flex-col items-center gap-3 mb-2 text-center'>
            <span className='text-3xl text-white bg-purple p-4 rounded-full '><BiWallet/></span>
            <h1 className='text-3xl'>Connect Your Wallet</h1>
            <span className='text-sm'>Access Wonderful events and attend the best shows</span>
        </div>
        <div className='flex flex-col gap-3 w-full md:w-3/4 lg:w-2/3'>
            <div className='bg-lightgray rounded-lg w-full py-4 px-4 flex justify-between items-center cursor-pointer'>
                <div className='flex gap-2 items-center '>
                    <span><img src='metamask.png' className='w-6 h-6 bg-white p-1 rounded-full '/></span>
                    <span>Metamask</span>
                </div>
                <span><IoIosArrowForward/></span>
            </div>
            <div className='bg-lightgray rounded-lg w-full py-4 px-4 flex justify-between items-center cursor-pointer'>
                <div className='flex gap-2'>
                    <span><img src='coinbase.png' className='w-6 '/></span>
                    <span>Coinbase Wallet</span>
                </div>
                <span><IoIosArrowForward/></span>
            </div >
            <div className='bg-lightgray rounded-lg w-full py-4 px-4 flex justify-between items-center cursor-pointer'>
                <div className='flex gap-2 items-center '>
                    <span><img src='walletConnect.jpg' className='w-6 h-6 bg-white p-1 rounded-full '/></span>
                    <span>Wallet Connect</span>
                </div>
                <span><IoIosArrowForward/></span>
                </div>
            <div className='bg-lightgray rounded-lg w-full py-4 px-2 text-xs md:text-sm md:px-4 flex flex-col gap-1 text-center items-center text-purple'>
               <span className='flex items-center gap-2'>
                    <PiWarningCircle/> 
                    <span className='font-bold'>Secure Connection</span>
                </span>
               <span>All wallet connections are encrypted and secure</span>
            </div>
        </div>
    </div>
  )
}

export default ConnectWallet