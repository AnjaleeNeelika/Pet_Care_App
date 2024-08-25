import React from 'react';
import TextBoxWithLabel from '../components/TextBoxWithLabel';
import { Link } from 'react-router-dom';

const OwnerRegistration = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-secondary-100'>
            <div className='bg-white py-5 px-8 shadow-md rounded-md border-solid border border-[#e9e9e9] m-5 w-fit'>
                <h1>Owner Registration</h1>
                <form action="" method="post" className='max-w-[600px] min-w-[200px] w-full mt-8'>
                    <div className='w-full flex flex-auto justify-between items-center gap-5'>
                        <TextBoxWithLabel label="First Name" placeholder="First Name" />
                        <TextBoxWithLabel label="Last Name" placeholder="Last Name" />
                    </div>
                    <div className='mt-3'>
                        <TextBoxWithLabel label="Address" placeholder="Address" />
                    </div>
                    <div className='mt-3 w-full flex flex-auto justify-between items-center gap-5'>
                        <TextBoxWithLabel label="Email" placeholder="Email" />
                        <TextBoxWithLabel label="Telephone Number" placeholder="Phone" />
                    </div>
                    <div className='mt-10 mb-5 w-full flex justify-center items-center'>
                        <Link
                            to={{
                                pathname: '/confirmation-code'
                            }}
                        >
                            <button className='bg-[#4a0faf] text-white px-7 py-2.5 rounded shadow-md hover:-translate-y-1 duration-150'>Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default OwnerRegistration