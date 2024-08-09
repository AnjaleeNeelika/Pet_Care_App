import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoPawSharp } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Sidebar = ({ menus }) => {  
    const [open, setOpen] = useState(true);

    return (
        <div className={`bg-[#2a2f4f] min-h-screen w-80 text-white flex flex-col ${open ? 'w-80' : 'w-16'} duration-500`}>
            <div className='py-3 px-4 flex justify-end items-center'>
                {/* <div className='flex items-center gap-2 text-3xl font-semibold'>
                    <IoPawSharp />
                    <span>CarePaw</span>
                </div> */}
                <HiMenuAlt3 
                    className='cursor-pointer text-3xl' 
                    onClick={() => setOpen(!open)} 
                />
            </div>
            <div className='mt-4 flex-1 flex-col gap-4 relative px-4'>
                {menus?.map((menu, i) => (
                    <Link 
                        to={menu?.link} 
                        key={i} 
                        className='group flex items-center gap-3.5 p-2 hover:bg-gray-800 rounded-md'
                    >
                        <div>
                            {React.createElement(menu?.icon, { size: "20" })}
                        </div>
                        <span 
                        style={{
                            transitionDelay: `${i + 3}00ms`,
                        }}
                            className={`text-lg font-semibold whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
                        >
                            {menu?.name}
                        </span>
                        <span 
                            className={`${open && 'hidden'} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                        >
                            {menu?.name}
                        </span>
                    </Link>
                    ))
                }
            </div>
            <div className='border-t flex p-3'>
                <RxAvatar className='w-10 h-10' />
                <div className='flex justify-between items-center overflow-hidden'>
                    <div className='leading-4'>
                        <div className='font-semibold'>Anjalee Neelika</div>
                        <span>anjaleeneelika@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar