import Button from './UIElements/Button'
import { FaTicket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <section className='fixed z-30 top-0 left-0 w-screen bg-darkgray py-4 px-4 md:px-20 text-white flex justify-between items-center'>
        <Link to={"/"} className=' font-bold flex items-center gap-2 text-xl'><span className='text-purple text-2xl'><FaTicket/></span>VYBH</Link>
        <div className='flex gap-4 justify-center items-center'>
            <div className='hidden md:flex gap-1 bg-gray  p-2 px-4 rounded-md '>
                <span className='flex items-center gap-1'>
                    <div className='w-2 h-2 rounded-lg bg-green'></div>
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