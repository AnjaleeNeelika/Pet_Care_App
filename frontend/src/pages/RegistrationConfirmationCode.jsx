import React from 'react';
import Dog3 from '../assets/images/Dog3.png';
import CatDog2 from '../assets/images/Cat&Dog2.png';

const RegistrationConfirmationCode = () => {
    return (
        <div className='w-full h-full p-5 flex justify-center items-center overflow-auto'>
            <div className='w-fit flex justify-center items-center'>
                <img src={CatDog2} className='w-[25vw]' />
            </div>
            <div className='w-fit px-20 py-5'>
                <p className='text-xl'>We have sent a 6-digit confirmation code to your email. </p>
                <p className='text-xl'>Please enter the code to process further.</p>
                <div className='flex justify-center items-center gap-2 mt-10'>
                    <input type="text" name="" id="" className='p-2 w-10 h-10 border rounded text-center outline-none hover:border-green-400' />
                    <input type="text" name="" id="" className='p-2 w-10 h-10 border rounded text-center outline-none hover:border-green-400' />
                    <input type="text" name="" id="" className='p-2 w-10 h-10 border rounded text-center outline-none hover:border-green-400' />
                    <input type="text" name="" id="" className='p-2 w-10 h-10 border rounded text-center outline-none hover:border-green-400' />
                    <input type="text" name="" id="" className='p-2 w-10 h-10 border rounded text-center outline-none hover:border-green-400' />
                    <input type="text" name="" id="" className='p-2 w-10 h-10 border rounded text-center outline-none hover:border-green-400' />
                </div>
                <div className='w-full flex items-center justify-center mt-8'>
                    <button className='bg-green-300 px-10 py-2 rounded'>Confirm Account</button>
                </div>
                <div className='mt-8 text-sm text-gray-500'>
                    Haven't received the code? 
                    <button className='ml-2 hover:border-b text-purple-600 hover:border-purple-600 hover:-translate-y-0.5 duration-150'>Re-send Code</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationConfirmationCode