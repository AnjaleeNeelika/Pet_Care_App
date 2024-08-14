import React from 'react'
import { FaCat, FaDog } from 'react-icons/fa'
import { IoFemaleOutline, IoMaleOutline } from 'react-icons/io5'
import Dog1 from '../assets/images/Dog1.png'
import Cat1 from '../assets/images/Cat1.png'
import { Link } from 'react-router-dom'
import { BsArrowLeft, BsClock, BsClockFill } from 'react-icons/bs'
import { BiArrowToRight, BiMenuAltRight, BiRightArrow, BiRightArrowAlt } from 'react-icons/bi'
import { GiArrowhead } from 'react-icons/gi'
import { MdMenuOpen } from 'react-icons/md'
import { FaAngleRight } from 'react-icons/fa6'

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
                        <div className='flex flex-col gap-3 mt-3'>
                            {/* <div className='flex gap-5 items-center'>
                                <FaDog />
                                <IoMaleOutline />
                                <div className='w-10 h-10 bg-primary-400 rounded-full'>
                                    <img src={Dog1} className='rounded-full w-full h-full' />
                                </div>                                
                                <Link>Shadow</Link>
                                <span>Labradore</span>
                            </div>
                            <hr />
                            <div className='flex gap-5 items-center'>
                                <FaCat />
                                <IoFemaleOutline />
                                <div className='w-10 h-10 bg-primary-400 rounded-full'>
                                    <img src={Cat1} className='rounded-full w-full h-full' />
                                </div>
                                <Link>Mew</Link>
                                <span>Persian</span>
                            </div> */}
                            <table>
                                <tr className='border-b border-gray-200 text-gray-800 font-medium'>
                                    <td className='py-2 px-4'>
                                        <FaDog />
                                    </td>
                                    <td className='py-2 px-4'>
                                        <IoMaleOutline />
                                    </td>
                                    <td className='py-2 px-4'>
                                        <div className='w-10 h-10 bg-primary-300 rounded-full object-contain overflow-hidden'>
                                            <img src={Dog1} className='rounded-full w-full h-fit' />
                                        </div> 
                                    </td>
                                    <td className='py-2 px-4 text-secondary-400'>
                                        <Link>Shadow</Link>
                                    </td>
                                    <td className='py-2 px-4'>Labradore</td>
                                </tr>
                                <tr className='border-b border-gray-200 text-gray-800 font-medium'>
                                    <td className='py-2 px-4'>
                                        <FaCat />
                                    </td>
                                    <td className='py-2 px-4'>
                                        <IoFemaleOutline />
                                    </td>
                                    <td className='py-2 px-4'>
                                        <div className='w-10 h-10 bg-primary-300 rounded-full object-contain overflow-hidden'>
                                            <img src={Cat1} className='rounded-full w-full h-fit' />
                                        </div> 
                                    </td>
                                    <td className='py-2 px-4 text-secondary-400'>
                                        <Link>Mew</Link>
                                    </td>
                                    <td className='py-2 px-4'>Persian</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 bg-slate-400 p-5 h-full'>
                    <div className='w-full bg-white p-5 shadow-md border border-[#EAEBEE] rounded-md'>
                        <div className='flex justify-between items-center'>
                            <span className='text-2xl text-[#0D1626] font-medium'>Upcoming Appointments</span>
                            <button className='text-secondary-500 font-medium flex gap-1 items-center hover:border-b-2 hover:border-secondary-500'>
                                See All                                
                                <FaAngleRight />
                            </button>
                        </div>
                        <div className='w-full mt-5 flex flex-col gap-3'>
                            <div className='border border-secondary-200 rounded-lg shadow-md bg-secondary-100 flex'>
                                <div className='w-20 px-5 py-3 text-center font-medium border-r border-secondary-200'>
                                    <div className='text-sm text-secondary-400'>AUG</div>
                                    <div className='text-3xl'>28</div>                                    
                                </div>
                                <div className='px-5 py-3 font-medium'>
                                    <div>Bathing: Shadow</div>
                                    <div className='flex gap-3 items-center text-gray-500'>
                                        <BsClockFill />
                                        <span>10.00 AM - 11.00 AM</span>
                                    </div>
                                </div>
                            </div>
                            <div className='border border-secondary-200 rounded-lg shadow-md bg-secondary-100 flex'>
                                <div className='w-20 px-5 py-3 text-center font-medium border-r border-secondary-200'>
                                    <div className='text-sm text-secondary-400'>SEP</div>
                                    <div className='text-3xl'>01</div>                                    
                                </div>
                                <div className='px-5 py-3 font-medium'>
                                    <div>Vaccination: Mew</div>
                                    <div className='flex gap-3 items-center text-gray-500'>
                                        <BsClockFill />
                                        <span>10.00 AM - 11.00 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home