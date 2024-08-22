import React from 'react';

const Grooming = () => {
    return (
        <section className='w-full h-full flex justify-center items-center gap-10 px-12 py-10'>
            <div className='w-1/2 h-full flex flex-col gap-10'>
                <div className='h-1/3 bg-white py-5 px-7 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Upcoming Events</div>
                </div>
                <div className='h-1/3 bg-white py-5 px-7 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Top Groomings</div>
                </div>
                <div className='h-1/3 bg-white py-5 px-7 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Upcoming Appointments</div>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col gap-10'>
                <div className='w-full flex justify-end'>
                    <button className='bg-secondary-500 text-white px-5 py-3 rounded-md shadow-md'>Make An Appointment</button>
                </div>
                <div className='h-1/2 bg-white py-5 px-7 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Upload Your Pet's New Look</div>
                </div>
                <div className='h-1/2 bg-white py-5 px-7 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Gallery</div>
                </div>
            </div>
        </section>
    )
}

export default Grooming