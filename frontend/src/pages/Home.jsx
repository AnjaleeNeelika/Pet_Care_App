import React from 'react';
import CatAndDog3 from '../assets/images/Cat&Dog3.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full h-fit'>
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
        </div>
    )
}

export default Home