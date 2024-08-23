import React from 'react';
import { BiCart, BiCartAlt } from 'react-icons/bi';
import { BsArrowRight, BsCart, BsCart2, BsCart3, BsCart4, BsCartFill, BsCartX } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';

const Store = () => {
    return (
        <section>
            <div className='h-fit w-full py-2 flex justify-end'>
                <div className='w-fit flex mt-2 flex-'>
                    <button className='bg-secondary-100 p-2 border border-secondary-500 w-fit h-fit rounded-full shadow-md'>
                        <PiShoppingCart size={30} className='text-secondary-500' />
                    </button>
                    <div className='w-7 h-7 bg-secondary-500 rounded-full text-white flex justify-center items-center font-medium relative right-4 -top-2 shadow-md'>10</div>                   
                </div>               
                
            </div>
            <div className='py-5 px-7'>
                <div className='w-full flex justify-between items-center bg-white rounded-md shadow-md px-7 py-5'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-2xl text-[#0D1626] font-medium'>Upcoming Events</div>
                        <button className='text-gray-400 flex gap-2 justify-center items-center hover:border-b hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-200'>
                            See More
                            <BsArrowRight />
                        </button>
                    </div>
                    
                </div>
            </div>
            {/* <div className='w-full text-secondary-600'>
                <button className='flex justify-center items-center gap-2 bg-secondary-500 text-white px-4 py-2 rounded-md shadow-md'>
                    <PiShoppingCart size={30} />
                    <span className='font-medium'>
                        Show Cart
                    </span>
                </button>
            </div> */}
        </section>
    )
}

export default Store