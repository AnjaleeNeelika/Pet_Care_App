import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Pets1 from '../assets/images/Pets1.png'
import CatAndDog3 from '../assets/images/Cat&Dog3.png'
import PetClinicImg1 from '../assets/images/pet-clinic-1.jpg'
import PetPharmacyImg1 from "../assets/images/pet-pharmacy-2.jpg"
import PetGroomingImg1 from '../assets/images/pet-grooming-3.jpg'
import PetStore1 from '../assets/images/pet-store-2.jpg'
import { BiArrowFromTop } from 'react-icons/bi'
import { BsArrowUpRight, BsTwitterX } from 'react-icons/bs'
import { FaAddressBook, FaEnvelope, FaFacebook, FaInstagram, FaMailchimp, FaMapLocation, FaPhone, FaX, FaYoutube } from 'react-icons/fa6'
import { IoLocation } from 'react-icons/io5'

const LandingPage = () => {
    return (
        <div className='w-full bg-[#f5f1ff]'>
            <Navbar />
            <div className='w-full h-[70vh] p-10 flex flex-wrap justify-center items-center gap-10'>
                <div className='w-fit'>
                    <div className='text-5xl text-[#9243d9] italic font-bold'>
                        Keep your pets happy & healthy
                    </div>      
                    <div className='text-2xl text-[#9243d9] italic mt-5 w-fit'>
                        Get all the services related to pet care from one place now
                    </div>
                    <div className='w-fit mt-10 mx-auto'>
                        <Link
                            to={{
                                pathname: '/owner-registration'
                            }}
                        >
                            <button className='bg-[#4a0faf] text-white px-7 py-2.5 rounded shadow-md hover:-translate-y-1 duration-150'>Get Started</button>
                        </Link>
                    </div>                      
                </div>
                <img src={Pets1} className='h-full w-auto' />
            </div>

            <div className='w-full p-20'>
                <h1 className='w-fit mx-auto text-[#592a9c]'>Our Services</h1>
                <div className='mt-10'>
                    <div className='flex justify-center items-center gap-10'>
                        <div className='bg-white p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            {/* <BiClinic className='text-7xl text-[#4a0faf] mx-auto' /> */}
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetClinicImg1} className='max-w-[15rem] w-full rounded-md' />
                            </div>
                            
                            <div className='flex flex-col gap-2'>
                                <div className='w-fit text-2xl text-[#4a0faf] font-medium'>Clinic</div>
                                <div className='text-lg text-[#4a0faf]'>
                                    <ul className='ml-5'>
                                        <li>- Routine check-ups</li>
                                        <li>- Preventive care</li>
                                        <li>- Laboratory testings</li>
                                        <li>- Spaying and neutering</li>
                                        <li>- Soft tissue and orthopedic surgeries</li>
                                        <li>- Anesthesia and pain management</li>
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                        <div className='bg-white p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            {/* <GiMedicines className='text-7xl text-[#4a0faf] mx-auto' /> */}
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetPharmacyImg1} className='max-w-[15rem] w-full rounded-md' />
                            </div>
                            
                            <div className='flex flex-col gap-2'>
                                <div className='w-fit text-2xl text-[#4a0faf] font-medium'>Pharmacy</div>
                                <div className='text-lg text-[#4a0faf]'>
                                    <ul className='ml-5'>
                                        <li>- Prescription medications</li>
                                        <li>- Preventive medications</li>
                                        <li>- Nutritional suppliments</li>
                                        <li>- Refill reminders and easy ordering</li>
                                        <li>- Over-the-Counter (OTC) products</li>                                        
                                        <li>- Pharmeceuticsl advice</li>
                                        <li>- Online ordering and home delivery</li>
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-10 gap-10'>
                        <div className='bg-white p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetGroomingImg1} className='max-w-[15rem] w-full rounded-md' />
                            </div>

                            <div>
                                <div className='w-fit text-2xl text-[#4a0faf] font-medium'>Grooming</div>
                                <div className='text-lg text-[#4a0faf]'>
                                    <ul className='ml-5'>
                                        <li>- Bating and shampooing</li>
                                        <li>- Haircut and styling</li>
                                        <li>- Brushing and de-shedding</li>
                                        <li>- Nail trimming and filing</li>
                                        <li>- Ear cleaning</li>
                                        <li>- Spa and pampering services</li>
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                        <div className='bg-white p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetStore1} className='max-w-[15rem] w-full rounded-md' />
                            </div>

                            <div>
                                <div className='w-fit text-2xl text-[#4a0faf] font-medium'>Store</div>
                                <div className='text-lg text-[#4a0faf]'>
                                    <ul className='ml-5'>
                                        <li>- Pet food</li>
                                        <li>- Pet accessories</li>
                                        <li>- Toys and Enrichment</li>
                                        <li>- Training and behavior aids</li>
                                        <li>- Pet travel essentials</li>
                                        <li>- Litter and waste management</li>
                                        <li>- Online ordering and home delivery</li>
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <footer className='p-20 border-t-2 bg-[#2a2f4f] text-white flex justify-between items-center gap-50'>
                <div className='flex gap-32'>
                    <div className='flex flex-col gap-10'>
                        <div className='text-xl font-bold'>POLGAHAWELA</div>
                        <div className='flex flex-col gap-2 font-semibold'>
                            <div className='flex gap-5 items-center'>
                                <FaPhone size={14} />
                                <div className='flex gap-5'>
                                    <span>+94 71 2345 678</span>
                                    <span>|</span>
                                    <span>+94 37 2234 567</span>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <FaEnvelope size={14} />
                                <Link className='underline'>petcare.polgahawela@gmail.com</Link>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <IoLocation size={16} />
                                <div>56/A, Colombo Road, Polgahawela</div>
                            </div>                            
                        </div>
                        <Link className='w-fit flex gap-2 justify-between items-center border-b font-semibold'>
                            SEE ON MAP
                            <BsArrowUpRight />
                        </Link>
                    </div>

                    <div className='flex flex-col gap-10'>
                        <div className='text-xl font-bold'>WARAKAPOLA</div>
                        <div className='flex flex-col gap-2 font-semibold'>
                            <div className='flex gap-5 items-center'>
                                <FaPhone size={14} />
                                <div className='flex gap-5'>
                                    <span>+94 71 2345 025</span>
                                    <span>|</span>
                                    <span>+94 35 2234 826</span>
                                </div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <FaEnvelope size={14} />
                                <Link className='underline'>petcare.warakapola@gmail.com</Link>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <IoLocation size={16} />
                                <div>63/1, Kandy Road, Warakapola</div>
                            </div>
                        </div>
                        <Link className='w-fit flex gap-2 justify-between items-center border-b font-semibold'>
                            SEE ON MAP
                            <BsArrowUpRight />
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='text-xl font-bold'>FOLLOW US</div>
                    <div className='flex justify-between items-center w-fit gap-5'>
                        <Link className='p-2 border-2 rounded-full'>
                            <FaYoutube size={24} />
                        </Link>
                        <Link className='p-2 border-2 rounded-full'>
                            <FaInstagram size={24} />
                        </Link>
                        <Link className='p-2 border-2 rounded-full'>
                            <FaFacebook size={24} />
                        </Link>
                        <Link className='p-2 border-2 rounded-full'>
                            <BsTwitterX size={24} />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage