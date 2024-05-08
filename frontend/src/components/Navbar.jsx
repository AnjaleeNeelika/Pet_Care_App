import React from 'react';
import { Link } from 'react-router-dom';
import { IoPawSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';

const Navbar = () => {
    return (
        <div className='w-full h-[10vh] bg-[#f5f1ff] text-[#2a2f4f] flex justify-between items-center px-5 py-2'>
            <div className='flex justify-center items-center gap-1 text-3xl'>
                <IoPawSharp />
                <h1>CarePaw</h1>
            </div>
            <div>
                <ul>
                    <li className='flex gap-5 font-semibold items-center justify-center'>
                        <Link
                            to={{
                                pathname: '/home'
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to={{
                                pathname: '/pets'
                            }}
                        >
                            Pets
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-clinic'
                            }}
                        >
                            Clinic
                        </Link>
                        <Link
                            to={{
                                pathname: '/pharmacy'
                            }}
                        >
                            Pharmacy
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-spa'
                            }}
                        >
                            Spa
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-store'
                            }}
                        >
                            Store
                        </Link>
                        <Link
                            to={{
                                pathname: '/owner-registration'
                            }}
                            className='bg-[#2a2f4f] text-white text-sm px-4 py-2 rounded-full shadow-md'
                        >
                            Owner Login
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-registration'
                            }}
                            className='bg-[#2a2f4f] text-white text-sm px-4 py-2 rounded-full shadow-md flex items-center justify-center gap-2'
                        >
                            <IoMdAdd />
                            Add Pet
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar