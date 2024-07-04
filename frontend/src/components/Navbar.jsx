import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPawSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';

const Navbar = () => {
    const [selected, setSelected] = useState('Home');

    return (
        <div className='w-full h-[10vh] bg-[#f5f1ff] text-[#2a2f4f] flex justify-between items-center px-5 py-2 fixed'>
            <div className='flex justify-center items-center gap-1 text-3xl'>
                <IoPawSharp />
                <h1>CarePaw</h1>
            </div>
            <div>
                <ul>
                    <li className='flex gap-10 font-semibold items-center justify-center'>
                        <Link
                            to={{
                                pathname: '/home'
                            }}
                            className={selected === 'Home' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Home')}
                        >
                            Home
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-clinic'
                            }}
                            className={selected === 'Clinic' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Clinic')}
                        >
                            Clinic
                        </Link>
                        <Link
                            to={{
                                pathname: '/pharmacy'
                            }}
                            className={selected === 'Pharmacy' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Pharmacy')}
                        >
                            Pharmacy
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-spa'
                            }}
                            className={selected === 'Spa' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Spa')}
                        >
                            Spa
                        </Link>
                        <Link
                            to={{
                                pathname: '/grooming'
                            }}
                            className={selected === 'Grooming' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Grooming')}
                        >
                            Grooming
                        </Link>
                        <Link
                            to={{
                                pathname: '/pet-store'
                            }}
                            className={selected === 'Store' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Store')}
                        >
                            Store
                        </Link>
                        <Link
                            to={{
                                pathname: '/pets'
                            }}
                            className={selected === 'Your Pets' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Your Pets')}
                        >
                            Your Pets
                        </Link>
                        <Link
                            to={{
                                pathname: '/owner-login'
                            }}
                            className='bg-[#2a2f4f] text-white text-sm px-4 py-2 rounded-full shadow-md'
                        >
                            Owner Login
                        </Link>
                        <Link
                            to={{
                                pathname: '/owner-registration'
                            }}
                            className='bg-[#2a2f4f] text-white text-sm px-4 py-2 rounded-full shadow-md'
                        >
                            Owner Registration
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