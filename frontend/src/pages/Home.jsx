import React from 'react'

const Home = () => {
    return (
        <section className='w-full h-full flex flex-col gap-10'>
            <div className='flex justify-center items-center gap-10 h-fit'>
                <div className='w-full h-full bg-[#f5f1ff] p-5 border border-gray-200 rounded-md shadow-md'>
                    <div className='text-2xl text-purple-900'>Registered Pets</div>
                    <div className='flex justify-end text-4xl text-purple-500'>2</div>
                </div>
                <div className='w-full h-full bg-[#f5f1ff] p-5 border border-gray-200 rounded-md shadow-md'>
                    <div className='text-2xl text-purple-900'>Upcoming Appointments</div>
                    <div className='flex justify-end text-4xl text-purple-500'>1</div>
                </div>
                <div className='w-full h-full bg-[#f5f1ff] p-5 border border-gray-200 rounded-md shadow-md'>
                    <div className='text-2xl text-purple-900'>Pending Orders</div>
                    <div className='flex justify-end text-4xl text-purple-500'>3</div>
                </div>
            </div>
            
            <div className='w-full flex gap-10 h-full'>
                <div className='w-1/2 h-full'>
                    <div className='bg-white p-5 shadow-md border border-[#EAEBEE]'></div>
                </div>

                <div className='w-1/2 bg-slate-400 p-5 h-full'></div>
            </div>
        </section>
    )
}

export default Home