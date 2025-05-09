import { BiCaretDown } from 'react-icons/bi'
import { FaCoins, FaRegCalendar, FaTag } from 'react-icons/fa6'
import EventCard from '../components/EventCard'
const Events = () => {
  return (
    <div className="mt-16">
        <div className="py-6 px-6 flex pt-8 text-sm  gap-3 w-full border-b border-lightgray">
            <div className="bg-lightgray rounded-lg py-2 px-3 flex gap-4 items-center">
                <span className='flex gap-2 items-center'>
                    <span className='text-purple'><FaRegCalendar/></span>
                    <span>All Dates</span>
                </span>
                <span className='text-xl'><BiCaretDown/></span>
            </div>
            <div className="bg-lightgray rounded-lg py-2 px-3 flex gap-4 items-center">
                <span className='flex gap-2 items-center'>
                    <span className='text-purple'><FaTag/></span>
                    <span>All Categories</span>
                </span>
                <span className='text-xl'><BiCaretDown/></span>
            </div>
            <div className="bg-lightgray rounded-lg py-2 px-3 flex gap-4 items-center">
                <span className='flex gap-2 items-center'>
                    <span className='text-purple'><FaCoins/></span>
                    <span>All Prices</span>
                </span>
                <span className='text-xl'><BiCaretDown/></span>
            </div>
        </div>
        <div className='flex flex-wrap py-6  gap-4 lg:gap-6  w-fit justify-center px-4 md:px-10 lg:px-16 mb-6'>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
    </div>
  )
}

export default Events