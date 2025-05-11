import { motion } from "framer-motion"
import { useEffect, useRef } from "react";
const NavbarTextbox = ({setShowSearchBar}:{setShowSearchBar:React.Dispatch<React.SetStateAction<boolean>>}) => {
    const NavbarTextboxRef=useRef<HTMLInputElement>(null)
    console.log(NavbarTextboxRef);
    useEffect(()=>{
        if (NavbarTextboxRef.current !== null) {
            NavbarTextboxRef.current.focus();
          }
    },[])
  return (
    <div  className='relative '>
    <input ref={NavbarTextboxRef} className='outline-0 bg-gray rounded-lg px-4 py-2' onBlur={()=>setShowSearchBar(false)} placeholder='Enter Search Parameters'/>
    {/* <motion.div  className="w-[3px] h-full absolute bg-purple bottom-0 rounded-3xl" initial={{height:0}} animate={{height:"100%"}} transition={{duration:0.5}}/> */}
    <motion.div  className="h-[3px] w-full absolute bg-purple bottom-0 rounded-3xl" initial={{width:0}} 
    animate={{
        width:["0","100%"],
        transition:{
            duration:1
        }
    }} />
</div>
  )
}

export default NavbarTextbox