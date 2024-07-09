import React from 'react';
import TextBoxWithLabel from '../components/TextBoxWithLabel';
import { Link } from 'react-router-dom';
import CatAndDog2 from '../assets/images/Cat&Dog2.png';

const OwnerLogin = () => {
    return (
        <div className='w-full h-full flex items-center justify-center gap-10'>
            <img src={CatAndDog2} className='w-[30vw]' />
            <div className='bg-white py-5 px-10 w-fit h-fit rounded-md shadow-md'>
            <h1 className='w-fit mx-auto'>Owner Login</h1>
                <form action="" method="post" className='max-w-[600px] min-w-[200px] w-full mt-8'>
                    <div className='w-full flex flex-auto justify-between items-center gap-5'>
                        <TextBoxWithLabel label="Email" placeholder="Email" />                      
                    </div>
                    <div className='mt-3'>
                        <TextBoxWithLabel label="Password" placeholder="Password" />
                    </div>
                    <div className='mt-10 mb-5 w-full flex justify-center items-center'>
                        <Link
                            to={{
                                pathname: '/home'
                            }}
                        >
                            <button className='bg-[#4a0faf] text-white px-7 py-2.5 rounded shadow-md hover:-translate-y-1 duration-150'>Login</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>        
    )
}

export default OwnerLogin