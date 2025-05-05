import EventCard from '../components/EventCard'
import Button from '../components/UIElements/Button'

const LandingPage = () => {
  return (
    <>
    <div className='h-[400px] mt-16 md:mt-0 md:h-screen flex items-center justify-center'>
      <img className='h-[400px] md:h-screen w-screen object-cover absolute z-0' src={"landing.jpg"}/>
      <div className=' z-10 text-white text-center flex flex-col gap-4 items-center'>
        <h1 className='text-xl md:text-3xl lg:text-6xl font-bold'>EXPERIENCE WEB-3 EVENTS</h1>
        <p className='text-md md:text-xl lg:text-2xl font-bold'>Secure your NFT tickets for exclusive concerts, shows, and experiences</p>
        <Button color='primary' variant='solid' title='Connect Wallet' size='large'/>
      </div>
    </div>
    <div className='w-full bg-black text-white py-4'>
      <div className='flex  justify-between items-center px-4 md:px-10 lg:px-20 mb-6'>
        <div className='text-xl md:text-3xl font-bold'>Featured Events</div>
        <div className='flex gap-2'>
          <span className='bg-gray text-xs md:text-md rounded-lg py-1 px-2 md:p-2 md:px-4'>Music</span>
          <span className='bg-gray text-xs md:text-md rounded-lg py-1 px-2 md:p-2 md:px-4'>Arts</span>
          <span className='bg-gray text-xs md:text-md rounded-lg py-1 px-2 md:p-2 md:px-4'>Sports</span>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 lg:gap-6 justify-center md:justify-center px-4 md:px-10 lg:px-16 mb-6'>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
      </div>
    </div>
    </>
  )
}

export default LandingPage