import React, { useState } from 'react'
import Cat1 from '../../assets/images/Cat1.png'
import Dog1 from '../../assets/images/Dog1.png'
import { GrAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom'



const AllPets = () => {
    const [addPet, setAddPet] = useState(false);

    const addPetClick = () => {
        setAddPet(!addPet);
    }

    return (
        <section className='flex flex-auto gap-5 px-12 py-10'> 
            <div className='flex flex-col gap-5 w-1/2 min-w-[300px]'>            
                <div className='flex flex-col gap-5 w-full'>
                    <h1 className='text-[#2a2f4f]'>Your Pets</h1>
                    <div className='flex flex-auto gap-5 flex-wrap'>
                        <div className='bg-white border border-gray-300 p-5 rounded-md shadow-md flex gap-3 items-center max-w-[300px] w-full h-64'>
                            <img src={Cat1} alt="" className='max-w-32' />
                            <div className='flex flex-col gap-3'>
                                <h2>Mew</h2>
                                <div className='text-gray-400'>
                                    <div>Weight: 3.4 kg</div>
                                    <div>Age: 3 years</div>
                                </div>
                                <div>
                                    <Link
                                        className='bg-[#b47fe5] text-white text-sm px-3 py-1.5 rounded-full mt-2 font-medium border border-[#8029d0] hover:bg-gradient-to-tr hover:from-[#6e23b2] hover:to-[#b47fe5] hover:-translate-y-0.5 transition-transform duration-200 shadow-md'
                                        to={`/pet-owner/pets/Mew`}
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border border-gray-300 p-5 rounded-md shadow-md flex gap-3 items-center max-w-[300px] w-full'>
                            <img src={Dog1} alt="" className='max-w-32' />
                            <div className='flex flex-col gap-3'>
                                <h2>Shadow</h2>
                                <div className='text-gray-400'>
                                    <div>Weight: 4.1 kg</div>
                                    <div>Age: 8 months</div>
                                </div>
                                <div>
                                    <Link
                                        className='bg-[#b47fe5] text-white text-sm px-3 py-1.5 rounded-full mt-2 font-medium border border-[#8029d0] hover:bg-gradient-to-tr hover:from-[#6e23b2] hover:to-[#b47fe5] hover:-translate-y-0.5 transition-transform duration-200 shadow-md'
                                        to={`/pet-owner/pets/Shadow`}
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-1/2'>
                <div className='flex justify-end'>
                    <button onClick={addPetClick} className='flex  items-center gap-2 bg-[#4a0faf] text-white py-3 px-5 rounded-md shadow-md font-medium hover:bg-[#733de0] hover:-translate-y-1 transition-transform duration-300'>
                        <GrAdd />
                        Add New Pet
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AllPets