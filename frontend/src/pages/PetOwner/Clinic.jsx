import React from 'react';
import MaleAvatar from '../../assets/images/avatar-richard.png'
import FemaleAvatar from '../../assets/images/avatar-anisha.png'

const Clinic = () => {
    return (
        <section className='flex justify-between gap-20'>
            <div className='w-1/2'>
                <div className='w-full flex gap-10 h-fit'>
                    <div className='bg-primary-200 rounded-md shadow-md p-7 w-72 border border-gray-300 text-center'>
                        <div className='w-52 h-52 bg-slate-300 rounded-full shadow-md border border-slate-400 mx-auto'>
                            <img src={MaleAvatar} className='w-full' />
                        </div>
                        <div className='text-2xl font-semibold mt-6'>Dr. Freddy Frank</div>
                        <div></div>
                        <div className='bg-green-500 w-fit px-3 py-1 rounded-full mt-3 text-white text-sm shadow-md mx-auto'>Available Today</div>
                        <div className='mt-3 text-lg text-secondary-500 font-medium'>From 10.00AM - 4.00PM</div>
                        <button className='mt-8 w-full bg-secondary-400 text-white py-3 rounded-md shadow-md hover:opacity-80 hover:-translate-y-1 hover:transition-all duration-500'>Make An Appointment</button>
                    </div>
                    <div className='bg-primary-200 rounded-md shadow-md p-7 w-72 border border-gray-300 text-center'>
                        <div className='w-52 h-52 bg-slate-300 rounded-full shadow-md border border-slate-400 mx-auto'>
                            <img src={FemaleAvatar} className='w-full' />
                        </div>
                        <div className='text-2xl font-semibold mt-6'>Dr. Olivia Lee</div>
                        <div></div>
                        <div className='bg-red-500 w-fit px-3 py-1 rounded-full mt-3 text-white text-sm shadow-md mx-auto'>Not Available</div>
                        <button className='w-full mt-16 bg-secondary-400 text-white py-3 rounded-md shadow-md hover:opacity-80 hover:-translate-y-1 hover:transition-all duration-500'>Notify When Available</button>
                    </div>
                </div> 

                              
            </div>
            <div className='w-1/2'>
                <div className='w-full max-h-[30rem] h-full bg-white py-5 px-7 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Upcoming Appointments</div>
                    <div className='mt-3'>
                        <table className='w-full'>
                            <thead>
                                <tr className='text-sm text-gray-600 font-medium'>
                                    <td>Pet</td>
                                    <td>Doctor</td>
                                    <td>Reason</td>
                                    <td>Date and Time</td>
                                    <td>Remaining</td>
                                    <td></td>
                                </tr>                            
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Shadow</td>
                                    <td>Dr. Olivia Lee</td>
                                    <td>Vaccination</td>
                                    <td>20/08/2024</td>
                                    <td>2 Days</td>
                                    <td className='flex justify-end'>
                                        <button className='text-sm bg-secondary-500 text-white font-semibold px-3 py-1.5 rounded-full hover:bg-secondary-400 shadow-md'>Set Reminder</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>                

                <div className='bg-white w-full h-full max-h-[22rem] py-5 px-7 mt-10 rounded-md shadow-md border-2 border-borderForWhite'>
                    <div className='text-2xl text-[#0D1626] font-medium'>Notifications</div>    
                </div> 
            </div>
        </section>
    )
}

export default Clinic