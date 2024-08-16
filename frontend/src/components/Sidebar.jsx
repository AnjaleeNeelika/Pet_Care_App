import React, { useState } from 'react'
import { HiDotsVertical, HiMenuAlt3 } from 'react-icons/hi'
import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ menus }) => {  
    const location = useLocation();
    const currentPath = location.pathname;
    const [open, setOpen] = useState(true);
    const [active, setActive] = useState(menus[0].active);
    const [threeDotMenuOpen, setThreeDotMenuOpen] = useState(false);

    return (
        <div className={`bg-primary-900 min-h-screen text-white flex flex-col ${open ? 'w-80' : 'w-20'} duration-500`}>
            <div className={`py-3 px-4 flex items-center ${!open ? 'justify-center' : 'justify-end'}`}>
                <HiMenuAlt3 
                    className='cursor-pointer text-3xl' 
                    onClick={() => setOpen(!open)} 
                />
            </div>
            <div className='mt-10 flex-1 flex-col gap-4 relative px-4'>
                {menus?.map((menu, i) => {
                    const isActive = currentPath.includes(menu.link);

                    return (
                    
                        <Link 
                            to={menu?.link} 
                            key={i} 
                            className={`group flex items-center gap-3.5 py-2 px-3.5 my-1 rounded-md transition-colors ${isActive ? 'bg-gray-600' : 'hover:bg-gray-800'}`}
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
                                className={`${open && 'hidden'} absolute left-48 bg-primary-100 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 ml-2 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-16 group-hover:duration-300 group-hover:w-fit group-hover:shadow-lg group-hover:border group-hover:border-primary-200`}
                            >
                                {menu?.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
            
            <div className='w-full border-t flex px-3 py-5 justify-between items-center'>
                <div className={`group flex items-center ${!open ? 'pl-2 cursor-pointer' : 'gap-3'}`}>
                    <div className='w-10 h-10 bg-white rounded-md'></div>
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
                            <div className='py-3 px-5'>
                                <button className='flex gap-3 items-center'>
                                    <IoLogOutOutline />
                                    <span>Logout</span>
                                </button>                                
                            </div>
                            <div className='border-t border-[#2a2f4f] py-3 px-5'>
                                <button className='flex gap-3 items-center'>
                                    <IoSettingsOutline />
                                    <span>Settings</span>
                                </button>                                
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