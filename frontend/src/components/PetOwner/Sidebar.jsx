import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
import { FiMoreVertical } from 'react-icons/fi'
import { IoPawSharp } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'

const Sidebar = () => {
    return (
        <aside className='h-screen w-fit'>
            <nav className='h-full flex flex-col bg-[#2a2f4f] text-white border-r shadow-sm'>
                <div className='p-4 pb-2 flex justify-between items-center text-3xl gap-10'>
                    <div className='flex gap-2 items-center'>
                        <IoPawSharp />
                        <span>CarePaw</span>
                    </div>
                    <button className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-[#2a2f4f]'>
                        <BiChevronLeft />
                    </button>
                </div>

                <ul className='flex-1 px-3'>
                    
                </ul>

                <div className='border-t flex p-3'>
                    <RxAvatar className='w-10 h-10' />
                    <div className={`flex justify-between items-center w-52 ml-3`}>
                        <div className='leading-4'>
                            <h4 className='font-semibold'>Anjalee Neelika</h4>
                            <span className='text-xs text-gray-600'>anjaleeneelika20@gmail.com</span>
                        </div>
                        <FiMoreVertical className='text-2xl' />
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar