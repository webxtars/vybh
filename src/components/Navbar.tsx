import Button from './UIElements/Button'
import { FaTicket, } from 'react-icons/fa6'
import { FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <section className='fixed z-30 top-0 left-0 w-screen bg-gray border-b border-lightgray bg-clip-padding backdrop-filter backdrop-blur-lg  py-4 px-4 md:px-20 text-white flex justify-between items-center'>
        <Link to={"/"} className=' font-bold flex items-center gap-2 md:text-xl'><span className='text-purple text-2xl'><FaTicket/></span>VYBH</Link>
        <div className='flex gap-4 justify-center items-center'>
            <span className='text-2xl ml cursor-pointer'>< FaSearch/></span>
            <div className='hidden md:flex gap-1 bg-lightgray  p-2 px-4 rounded-md '>
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
            <Button color='primary'  title='Connect Wallet'/>
        </div>
    </section>
  )
}

export default Navbar