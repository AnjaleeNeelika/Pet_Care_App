import React from 'react'
import { FaCat, FaDog } from 'react-icons/fa'
import { IoFemaleOutline, IoMaleOutline } from 'react-icons/io5'
import Dog1 from '../assets/images/Dog1.png'
import Cat1 from '../assets/images/Cat1.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='w-full h-full flex flex-col gap-10'>
            <div className='flex justify-center items-center gap-10 h-fit'>
                <div className='w-full h-full bg-[#D7D5FC] p-5 border border-[#ACADE9] rounded-md shadow-md'>
                    <div className='text-2xl text-purple-900'>Registered Pets</div>
                    <div className='flex justify-end text-4xl text-purple-500'>2</div>
                </div>
                <div className='w-full h-full bg-[#D7D5FC] p-5 border border-[#ACADE9] rounded-md shadow-md'>
                    <div className='text-2xl text-purple-900'>Upcoming Appointments</div>
                    <div className='flex justify-end text-4xl text-purple-500'>1</div>
                </div>
                <div className='w-full h-full bg-[#D7D5FC] p-5 border border-[#ACADE9] rounded-md shadow-md'>
                    <div className='text-2xl text-purple-900'>Pending Orders</div>
                    <div className='flex justify-end text-4xl text-purple-500'>3</div>
                </div>
            </div>
            
            <div className='w-full flex gap-10 h-full'>
                <div className='w-1/2 h-full'>
                    <div className='w-fit bg-white p-5 shadow-md border border-[#EAEBEE] rounded-md'>
                        <div className='text-2xl text-[#0D1626] font-medium'>Pets</div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-5 items-center'>
                                <FaDog />
                                <IoMaleOutline />
                                <img src={Dog1} className='w-10 h-10 bg-primary-400 rounded-full' />
                                <Link>Shadow</Link>
                                <span>Labradore</span>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <FaCat />
                                <IoFemaleOutline />
                                <img src={Cat1} className='w-10 h-10 bg-primary-400 rounded-full' />
                                <Link>Shadow</Link>
                                <span>Labradore</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 bg-slate-400 p-5 h-full'></div>
            </div>
        </section>
    )
}

export default Home