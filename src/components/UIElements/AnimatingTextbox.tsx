import { motion } from "framer-motion"

const AnimatingTextbox = () => {
    
  return (
    <div  className='relative '>
        <input className='outline-0 bg-gray rounded-lg px-4 py-2' placeholder='Enter Search Parameters'/>
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

export default AnimatingTextbox