import Button from './UIElements/Button'
import { FaTicket, } from 'react-icons/fa6'
import { FaSearch} from "react-icons/fa"
import { Link } from 'react-router-dom'
import {  useState } from 'react'
import NavbarTextbox from './UIElements/NavbarTextbox'
const Navbar = () => {
    const [showSearchBar,setShowSearchBar]=useState(false)
    const [loggedIn,setLoggedIn]=useState(false)
    
  return (
    <section className='fixed z-30 top-0 left-0 w-screen bg-gray border-b border-lightgray bg-clip-padding backdrop-filter backdrop-blur-lg  py-4 px-4 md:px-20 text-white flex justify-between items-center'>
        <Link to={"/"} className=' font-bold flex items-center gap-2 md:text-xl'><span className='text-purple text-2xl'><FaTicket/></span>VYBH</Link>
        <div className='flex gap-4 justify-center items-center'>
            {showSearchBar? <NavbarTextbox setShowSearchBar={setShowSearchBar}/>:<span 
            onClick={()=>{
                setShowSearchBar(true)
            }} 
            className='text-2xl ml cursor-pointer text-purple'>< FaSearch/></span>}
            {(loggedIn && !showSearchBar) &&<div className='flex gap-1 bg-lightgray  p-2 px-4 rounded-md '>
                <span className='flex items-center gap-1'>
                    <div className='w-2 h-2 rounded-lg bg-green'></div>
                    <span>ETH Network</span>
                </span>
                <span>|</span>
                <span>
                    <span></span>
                    <span>3 NFTs</span>
                </span>
            </div>}
            {(!loggedIn && !showSearchBar) && <Button color='primary' onClick={()=>setLoggedIn(true)} title='Connect Wallet'/>}
        </div>
    </section>
  )
}

export default Navbar