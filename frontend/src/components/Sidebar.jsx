import React, { useState } from 'react'
import { BiDotsVertical, BiLogOut } from 'react-icons/bi'
import { CgMoreVertical } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { HiDotsVertical, HiMenuAlt3 } from 'react-icons/hi'
import { IoLogOutOutline, IoLogOutSharp, IoPawSharp, IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Sidebar = ({ menus }) => {  
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState(menus[0].active);
    const [threeDotMenuOpen, setThreeDotMenuOpen] = useState(false);

    return (
        <div className={`bg-[#2a2f4f] min-h-screen text-white flex flex-col ${open ? 'w-80' : 'w-20'} duration-500`}>
            <div className={`py-3 px-4 flex items-center ${!open ? 'justify-center' : 'justify-end'}`}>
                {/* <div className='flex items-center gap-2 text-3xl font-semibold'>
                    <IoPawSharp />
                    <span>CarePaw</span>
                </div> */}
                <HiMenuAlt3 
                    className='cursor-pointer text-3xl' 
                    onClick={() => setOpen(!open)} 
                />
            </div>
            <div className='mt-10 flex-1 flex-col gap-4 relative px-4'>
                {menus?.map((menu, i) => (
                    <Link 
                        to={menu?.link} 
                        key={i} 
                        className={`group flex items-center gap-3.5 py-2 px-3.5 my-1 rounded-md transition-colors ${active === menu?.active ? 'bg-gray-600' : 'hover:bg-gray-800'}`}
                        onClick={() => setActive(menu.active)}
                    >
                        <div>
                            {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <span 
                        style={{
                            transitionDelay: `${i + 3}00ms`,
                        }}
                            className={`text-lg font-medium whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                        >
                            {menu?.name}
                        </span>
                        <span 
                            className={`${open && 'hidden'} absolute left-48 bg-indigo-100 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit group-hover:shadow-lg`}
                        >
                            {menu?.name}
                        </span>
                    </Link>
                    ))
                }
            </div>
            <div className='w-full border-t flex px-3 py-5 justify-between items-center'>
                
                {/* <div className='flex justify-between items-center overflow-hidden'>
                    <div className='flex flex-col gap-1'>
                        <div className='font-semibold'>Anjalee Neelika</div>
                        <span className='text-xs text-gray-300'>anjaleeneelika@gmail.com</span>
                    </div>
                    <HiDotsVertical size={20} />
                </div> */}
                <div className={`group flex items-center ${!open ? 'pl-2 cursor-pointer' : 'gap-3'}`}>
                    <div className='w-10 h-10 bg-purple-200 rounded-md'></div>
                    <div className={`flex flex-col whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                        <div className='font-semibold'>Anjalee Neelika</div>
                        <span className='text-xs text-gray-300'>anjaleeneelika@gmail.com</span>
                    </div>
                    <span 
                        className={`${open && 'hidden'} absolute left-48 bg-indigo-100 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit group-hover:shadow-lg`}
                    >
                        Anjalee Neelika
                    </span>
                </div>
                <div className=''>
                    <HiDotsVertical 
                        size={20} 
                        className={`cursor-pointer ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                        onClick={() => setThreeDotMenuOpen(!threeDotMenuOpen)}
                    />
                    {threeDotMenuOpen ? 
                        <div className='bg-indigo-200 absolute py-1 px-3 left-36 bottom-16 shadow-md rounded-md text-[#2a2f4f] flex flex-col'>
                            <div className='flex gap-3 items-center py-3 px-5'>
                                <IoLogOutOutline />
                                <span>Logout</span>
                            </div>
                            <div className='flex gap-3 items-center border-t border-[#2a2f4f] py-3 px-5'>
                                <IoSettingsOutline />
                                <span>Settings</span>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                </div>
                                
            </div>
        </div>
    )
}

export default Sidebar