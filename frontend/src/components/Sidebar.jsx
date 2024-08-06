import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiSolidClinic } from 'react-icons/bi';
import { FaStore } from 'react-icons/fa';
import { FaScissors } from 'react-icons/fa6';
import { GiMedicines } from 'react-icons/gi';
import { ImHome } from 'react-icons/im';
import { IoPawSharp } from 'react-icons/io5';
import { MdArrowDropDown, MdArrowDropUp, MdPets } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AvatarAli from '../assets/images/avatar-ali.png';
import { RxDropdownMenu } from 'react-icons/rx';

const Sidebar = () => {
    const [selected, setSelected] = useState('Home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className='h-full w-full max-w-sm bg-[#f5f1ff] text-[#2a2f4f] gap-10 py-10'>
            <div className='w-fit h-fit flex justify-center items-center gap-1 text-3xl mb-10 mx-auto'>
                <IoPawSharp />
                <h1>CarePaw</h1>
            </div>
            <div className='h-fit'>
                <ul className={`h-fit md:static md:z-auto md:w-auto md:p-0 md:bg-transparent p-10 pt-20 left-0 w-full gap-10 font-semibold absolute transition-all duration-150 ease-in bg-white ${menuOpen ? 'top-0 opacity-100 shadow-md' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                    <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white ${selected ? `bg-[#2a2f4f] text-white` : ``}`}>
                        <ImHome className='text-lg' />
                        <Link
                            to={{
                                pathname: '/home'
                            }}
                            className='w-full'
                            onClick={() => setSelected('Home')}
                        >
                            Home
                        </Link>
                    </li>
                    <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white`}>
                        <BiSolidClinic className='text-xl' />
                        <Link
                            to={{
                                pathname: '/pet-clinic'
                            }}
                            className={`w-full`}
                            onClick={() => setSelected('Clinic')}
                        >
                            Clinic
                        </Link>
                    </li>
                    <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white`}>
                        <GiMedicines className='text-xl' />
                        <Link
                            to={{
                                pathname: '/pharmacy'
                            }}
                            className={`w-full`}
                            onClick={() => setSelected('Pharmacy')}
                        >
                            Pharmacy
                        </Link>
                    </li>
                    <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white`}>
                        <FaScissors className='text-lg' />
                        <Link
                            to={{
                                pathname: '/grooming'
                            }}
                            className={`w-full`}
                            onClick={() => setSelected('Grooming')}
                        >
                            Grooming
                        </Link>
                    </li>
                    <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white`}>
                        <FaStore className='text-lg' />
                        <Link
                            to={{
                                pathname: '/pet-store'
                            }}
                            className={`w-full`}
                            onClick={() => setSelected('Store')}
                        >
                            Store
                        </Link>
                    </li>
                    <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white`}>
                        <MdPets className='text-xl' />
                        <Link
                            to={{
                                pathname: '/pets'
                            }}
                            className={`w-full`}
                            onClick={() => setSelected('Your Pets')}
                        >
                            Your Pets
                        </Link>
                    </li>
                    {/* */}
                    {/* <li>
                        <Link
                            to={{
                                pathname: '/owner-registration'
                            }}
                            className='w-fit bg-[#2a2f4f] text-white text-sm text-center px-4 py-2 rounded-full shadow-md flex'
                        >
                            Owner Registration
                        </Link>
                    </li> */}
                    {/* <li className={`px-10 py-5 flex gap-2 items-center hover:bg-[#2a2f4f] hover:text-white`}>
                        <Link
                            to={{
                                pathname: '/pet-registration'
                            }}
                            className='w-fit bg-[#2a2f4f] text-white text-sm px-4 py-2 rounded-full shadow-md flex items-center justify-center gap-2'
                        >
                            <IoMdAdd />
                            Add Pet
                        </Link>
                    </li> */}
                    {/* <li className={`px-10 py-5 flex gap-2 items-center`}>
                        <Link
                            // to={{
                            //     pathname: '/owner-login'
                            // }}
                            className='w-fit bg-[#2a2f4f] text-white text-sm text-center px-4 py-2 rounded-full shadow-md flex'
                        >
                            Logout 
                        </Link>
                    </li>  */}
                    
                </ul>
            </div>
            <div className='w-full px-5 pt-5 pb-3 border-t-2 border-[#d9dcee] flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img src={AvatarAli} className='rounded-full shadow-md w-14 h-14' />
                    <span className='text-sm text-[#5a506d] font-medium'>Anjalee Neelika</span>
                </div>
                <button onClick={() => setShowDropdown(!showDropdown)} className='text-2xl'>
                    {showDropdown ? <MdArrowDropUp /> : <MdArrowDropDown />}                    
                </button>
            </div>
            {/* <div onClick={() => setMenuOpen(!menuOpen)} className='text-2xl text-black absolute right-8 top-8 cursor-pointer md:hidden'>
                {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div> */}
            {showDropdown ? 
                <div className='w-fit bg-white text-center text-sm text-[#876eb6] font-medium px-5'>
                    <ul>
                        <li className='p-5'>
                            <Link>Logout</Link>
                        </li>
                        <li className='p-5 border-t'>
                            <Link>Your Profile</Link>
                        </li>
                    </ul>                
                </div>
                :
                <div></div>
            }
            
        </div>
    )
}

export default Sidebar