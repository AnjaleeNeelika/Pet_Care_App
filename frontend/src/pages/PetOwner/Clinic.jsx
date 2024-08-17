import React from 'react';
import MaleAvatar from '../../assets/images/avatar-richard.png'
import FemaleAvatar from '../../assets/images/avatar-anisha.png'

const Clinic = () => {
    return (
        <section>
            <div className='w-full flex gap-10'>
                <div className='bg-primary-200 rounded-md shadow-md p-7 w-fit border border-gray-300'>
                    <div className='w-52 h-52 bg-slate-300 rounded-full shadow-md border border-slate-400'>
                        <img src={MaleAvatar} className='w-full' />
                    </div>
                    <div className='text-2xl font-medium mt-6'>Dr. Freddy Frank</div>
                    <div></div>
                    <div className='bg-green-500 w-fit px-3 py-1 rounded-full mt-3 text-white text-sm shadow-md'>Available Today</div>
                </div>
                <div className='bg-primary-200 rounded-md shadow-md p-7 w-fit border border-gray-300'>
                    <div className='w-52 h-52 bg-slate-300 rounded-full shadow-md border border-slate-400'>
                        <img src={FemaleAvatar} className='w-full' />
                    </div>
                    <div className='text-2xl font-medium mt-6'>Dr. Olivia Lee</div>
                    <div></div>
                    <div className='bg-red-500 w-fit px-3 py-1 rounded-full mt-3 text-white text-sm shadow-md'>Not Available</div>
                </div>
            </div>
        </section>
    )
}

export default Clinic