import React from 'react';
import { BiCart, BiCartAlt } from 'react-icons/bi';
import { BsCart, BsCart2, BsCart3, BsCart4, BsCartFill, BsCartX } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';

const Store = () => {
    return (
        <section>
            <div className='bg-white h-fit w-full px-5 py-2 shadow-md'>
                <div className='w-fit flex mt-2'>
                    <div className='p-2 border border-secondary-200 w-fit h-fit rounded-full'>
                        <PiShoppingCart size={30} className='text-primary-500' />
                    </div>
                    <div className='w-7 h-7 bg-secondary-500 rounded-full text-white flex justify-center items-center font-medium relative right-4 -top-2'>10</div>                   
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