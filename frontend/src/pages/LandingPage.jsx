import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import CatAndDog3 from '../assets/images/Cat&Dog3.png'
import PetClinicImg1 from '../assets/images/pet-clinic-1.jpg'
import PetPharmacyImg1 from "../assets/images/pet-pharmacy-2.jpg"
import PetGroomingImg1 from '../assets/images/pet-grooming-3.jpg'
import PetStore1 from '../assets/images/pet-store-2.jpg'

const LandingPage = () => {
    return (
        <div className='w-full h-full'>
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
                <img src={CatAndDog3} className='h-full w-auto' />
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
                            
                            <div>
                                <div className='w-fit mx-auto text-2xl text-[#4a0faf] font-medium'>Clinic</div>
                            </div>                            
                        </div>
                        <div className='bg-white  p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            {/* <GiMedicines className='text-7xl text-[#4a0faf] mx-auto' /> */}
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetPharmacyImg1} className='max-w-[15rem] w-full rounded-md' />
                            </div>
                            
                            <div>
                                <div className='w-fit mx-auto text-2xl text-[#4a0faf] font-medium'>Pharmacy</div>
                            </div>                            
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-10 gap-10'>
                        <div className='bg-white p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetGroomingImg1} className='max-w-[15rem] w-full rounded-md' />
                            </div>

                            <div>
                                <div className='w-fit mx-auto text-2xl text-[#4a0faf] font-medium'>Grooming</div>
                            </div>                            
                        </div>
                        <div className='bg-white p-5 shadow-md rounded-md border border-[#ddd] flex justify-start items-center gap-10 max-w-[40rem] w-full'>
                            <div className='w-fit h-fit rounded-md shadow-md'>
                                <img src={PetStore1} className='max-w-[15rem] w-full rounded-md' />
                            </div>

                            <div>
                                <div className='w-fit mx-auto text-2xl text-[#4a0faf] font-medium'>Store</div>
                            </div>                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <footer className='p-20 border-t-2 bg-[#2a2f4f] text-white'>
                <div className=''>
                    <div>
                        <div className='text-xl font-medium'>Contact</div>
                        <div></div>
                    </div>
                    <div>
                        <div className='text-xl font-medium'>Email</div>
                        <div></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default LandingPage