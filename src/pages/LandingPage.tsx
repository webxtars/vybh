import { FaLocationPin, FaMagnifyingGlass } from 'react-icons/fa6'
import EventCard from '../components/EventCard'
import Button from '../components/UIElements/Button'
import { useNavigate } from 'react-router-dom'
import { MdLocationPin } from 'react-icons/md'


const LandingPage = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className=' mt-16 px-20 py-10'>
      {/* <img className='h-[400px] md:h-screen w-screen object-cover absolute z-0' src={"landing.jpg"}/> */}
      <div className='bg-purple  rounded-xl p-8 flex flex-col gap-3'>
        <h1 className='text-4xl font-bold'>Discover Amazing Events</h1>
        <p className='text-xl w-2/3 mb-2'>Find and book tickets for the hottest events. Pay with crypto or traditional methods.</p>
        <div className='w-2/3 bg-gray rounded-xl px-6 py-4 flex gap-4'>
          <div className='flex items-center gap-2 w-full'>
            <span className='text-purple text-xl'><FaMagnifyingGlass/></span>
            <input placeholder='Search events, artists, venues...' className='bg-gray w-full'/>
          </div>
          <div className='flex items-center gap-2 w-full border-l-2 pl-4 border-lightgray'>
            <span className='text-purple text-2xl'><MdLocationPin/></span>
            <input placeholder='Location' className='bg-gray w-full'/>
          </div>
          <button className='bg-purple py-2 px-6 text-lg rounded-lg text-white'>Search</button>
        </div>
      </div>
    </div>
    <div className='w-full bg-darkgray text-white py-4 flex gap-10 px-20'>
      <div className='bg-lightgray w-[400px] h-fit rounded-xl flex flex-col gap-6 p-10'>
          <h2 className='text-xl font-bold'>Filters</h2>
          <div>
            <h3 className='text-lg font-bold mb-1'>Date</h3>
            <div className='gap flex-col gap-3'>
              <div className='flex gap-2 items-center'>
                <input className='appearance-none bg-white rounded-full w-2 h-2 ring-2 ring-white   checked:bg-purple  ' id='date' type='radio'/>
                <label>Today</label>  
              </div>
              <div className='flex gap-2 items-center'>
                <input className='appearance-none bg-white rounded-full w-2 h-2 ring-2 ring-white   checked:bg-purple  ' id='date' type='radio'/>
                <label>This week</label>  
              </div>
              <div className='flex gap-2 items-center'>
                <input className='appearance-none bg-white rounded-full w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='radio'/>
                <label>This Month</label>  
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-1'>Categories</h3>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>Art</span>
              </label>
            </div>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>Music</span>
              </label>
            </div>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>Sports</span>
              </label>
            </div>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>Tech</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-1'>Price Range</h3>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>Free</span>
              </label>
            </div>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>$0 - $50</span>
              </label>
            </div>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>$50 - $200</span>
              </label>
            </div>
            <div className='gap flex-col gap-3'>
              <label className='flex gap-3 items-center'>
                <input className='appearance-none bg-white rounded-sm w-2 h-2 ring-2 ring-white   checked:bg-purple  ' type='checkbox'/>
                <span>$200+</span>
              </label>
            </div>
          </div>
      </div>
      <div className='w-full'>
        <h1 className='text-3xl font-bold mb-6'>Trending Events</h1>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
          <EventCard/>
          <EventCard/>
          <EventCard/>
          <EventCard/>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default LandingPage