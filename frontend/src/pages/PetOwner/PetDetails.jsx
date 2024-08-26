import React from 'react'
import Cat1 from '../../assets/images/Cat1.png'

const PetDetails = () => {
    return (
        <section className='h-full w-full flex'>
            <div className='w-full h-full'></div>
            <div className='w-1/3 min-w-[300px] h-full bg-white px-10 py-10 shadow-lg border-l-2'>
                <div className='w-48 h-48 bg-secondary-600 rounded-full object-contain overflow-hidden p-5 mx-auto shadow-md border-2'>
                    <img src={Cat1} className='rounded-full w-full h-fit mx-auto' />
                </div> 
                <div className='mt-3'>
                    <div className='w-fit text-3xl font-semibold mx-auto'>Mew</div>
                    <div className='w-fit text-gray-400 font-semibold mx-auto'>PERSIAN CAT</div>

                    <div className='flex justify-between items-center gap-5 mt-5 text-center'>
                        <div className='w-24 h-16 p-2 bg-primary-100 rounded-md shadow-sm flex flex-col justify-between items-center'>
                            <div className='font-semibold'>1</div>
                            <div className='text-xs text-secondary-400 font-semibold'>AGE</div>
                        </div>
                        <div className='w-24 h-16 p-2 bg-primary-100 rounded-md shadow-sm flex flex-col justify-between items-center'>
                            <div className='font-semibold'>Male</div>
                            <div className='text-xs text-secondary-400 font-semibold'>GENDER</div>
                        </div>
                        <div className='w-24 h-16 p-2 bg-primary-100 rounded-md shadow-sm flex flex-col justify-between items-center'>
                            <div className='font-semibold'>1 kg</div>
                            <div className='text-xs text-secondary-400 font-semibold'>WEIGHT</div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <div className='flex justify-between gap-5 items-baseline'>
                            <div className='text-xl font-semibold'>Previous Health Checks</div>
                            <button className='text-sm text-secondary-400 hover:border-b-2 hover:border-secondary-300 hover:-translate-y-0.5 duration-100 transition-all'>See All</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PetDetails