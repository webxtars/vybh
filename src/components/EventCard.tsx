import { FaLocationDot, FaRegCalendar } from 'react-icons/fa6'
const EventCard = () => {
  return (
    <div  className='flex flex-col w-80 cursor-pointer'>
    <img src='image.png' className='rounded-t-lg h-60 object-cover'/>
    <div className='bg-gray rounded-b-lg flex flex-col gap-2 p-4'>
      <h2 className='font-bold'>Crypto Beats Festival</h2>
      <div className='flex justify-between text-xs '>
        <span className='flex items-center gap-1.5'><span><FaRegCalendar/></span>Mar 15, 2025</span>
        <span className='flex items-center gap-1'><span><FaLocationDot/></span>Miami</span>
      </div>
      <div className='flex justify-between text-xs text-lightgray'>
        <span className='flex items-center gap-1'>Verified Event</span>
        <span className='flex items-center gap-1 text-purple text-lg font-bold'>0.5 ETH</span>
      </div>
    </div>
  </div>
  )
}

export default EventCard