import { FaLocationDot, FaRegCalendar,FaTicket } from 'react-icons/fa6'
import Button from '../components/UIElements/Button'
import { useNavigate } from 'react-router-dom'
const Event = () => {
    const navigate=useNavigate()
  return (
    <div className="mt-16 w-full bg-gray">
        <div className="lg:grid lg:grid-cols-3 gap-6 p-8 lg:p-20">
            <img src="image.png" className="w-full col-span-2 aspect-video rounded-lg border-2 border-lightgray"/>
            <div className='mt-4 lg:mt-0'>
                <div className="bg-lightgray text-white rounded-lg p-4 flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">EDM FEST 2025</h1>
                    <p className='flex items-center gap-2'><span><FaRegCalendar/></span>March 15, 2025 - 8:00 PM</p>
                    <p className='flex items-center gap-2'><span><FaLocationDot/></span>Crypto Arena, Los Angeles</p>
                    <p className='flex items-center gap-2'><span><FaTicket/></span>Limited tickets available</p>
                </div>
                <div className='text-white'>
                    <h1 className='mb-4 mt-6 text-xl font-bold'>Select Tickets</h1>
                    <div className='flex flex-col gap-3'>
                        <div className='bg-lightgray flex items-center justify-between cursor-pointer p-3 rounded-lg border-2 border-purple'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-lg'>VIP Access</span>
                                <span>Front Row</span>
                            </div>
                            <span>2.5 ETH</span>
                        </div>
                        <div className='bg-lightgray flex items-center justify-between cursor-pointer p-3 rounded-lg'>
                            <div className='flex flex-col'>
                                <span className='font-bold text-lg'>VIP Access</span>
                                <span>Front Row</span>
                            </div>
                            <span>2.5 ETH</span>
                        </div>
                    </div>
                    <Button onClick={()=>navigate("/checkout")} title='Buy Tickets Now' customClass='w-full mt-4' size='large'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event