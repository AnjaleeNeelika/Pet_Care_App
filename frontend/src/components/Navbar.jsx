import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPawSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [selected, setSelected] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='w-full h-[10vh] bg-[#f5f1ff] text-[#2a2f4f] flex justify-between items-center gap-10 px-5 py-2 fixed'>
            <div className='flex justify-center items-center gap-1 text-3xl'>
                <IoPawSharp />
                <h1>CarePaw</h1>
            </div>
            <div>
                <ul  className={`h-fit md:flex md:flex-wrap md:items-center md:justify-center md:static md:z-auto md:w-auto md:p-0 md:bg-transparent p-10 pt-20 left-0 w-full gap-10 font-semibold absolute transition-all duration-150 ease-in bg-white ${menuOpen ? 'top-0 opacity-100 shadow-md' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                    <li>
                        <Link
                            to={{
                                pathname: '/home'
                            }}
                            className={selected === 'Home' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/pet-clinic'
                            }}
                            className={selected === 'Clinic' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Clinic')}
                        >
                            Clinic
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/pharmacy'
                            }}
                            className={selected === 'Pharmacy' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Pharmacy')}
                        >
                            Pharmacy
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/grooming'
                            }}
                            className={selected === 'Grooming' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Grooming')}
                        >
                            Grooming
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/pet-store'
                            }}
                            className={selected === 'Store' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Store')}
                        >
                            Store
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/pets'
                            }}
                            className={selected === 'Your Pets' ? `border-b-2 pb-1.5 border-[#2a2f4f]` : ``}
                            onClick={() => setSelected('Your Pets')}
                        >
                            Your Pets
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/owner-login'
                            }}
                            className='w-fit bg-[#2a2f4f] text-white text-sm text-center px-4 py-2 rounded-full shadow-md flex'
                        >
                            Owner Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/owner-registration'
                            }}
                            className='w-fit bg-[#2a2f4f] text-white text-sm text-center px-4 py-2 rounded-full shadow-md flex'
                        >
                            Owner Registration
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={{
                                pathname: '/pet-registration'
                            }}
                            className='w-fit bg-[#2a2f4f] text-white text-sm px-4 py-2 rounded-full shadow-md flex items-center justify-center gap-2'
                        >
                            <IoMdAdd />
                            Add Pet
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={() => setMenuOpen(!menuOpen)} className='text-2xl text-black absolute right-8 top-8 cursor-pointer md:hidden'>
                {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
        </div>
    )
}

export default Navbar