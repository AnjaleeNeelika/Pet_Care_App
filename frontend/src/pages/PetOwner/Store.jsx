import React from 'react';
import { BiCart, BiCartAlt } from 'react-icons/bi';
import { BsArrowRight, BsCart, BsCart2, BsCart3, BsCart4, BsCartFill, BsCartX } from 'react-icons/bs';
import { GrCart } from 'react-icons/gr';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';
import CatFoods1 from '../../assets/images/CatFoods1.png'
import CatFoods2 from '../../assets/images/CatFoods2.png'
import DogFoods1 from '../../assets/images/DogFoods1.png'
import DogFoods2 from '../../assets/images/DogFoods2.png'
import DogFoods3 from '../../assets/images/DogFoods3.png'

const Store = () => {
    return (
        <section className='w-full h-full overflow-auto'>
            <div className='h-fit w-full py-2 flex justify-end'>
                <div className='w-fit flex mt-2 flex-'>
                    <button className='bg-secondary-100 p-2 border border-secondary-500 w-fit h-fit rounded-full shadow-md'>
                        <PiShoppingCart size={30} className='text-secondary-500' />
                    </button>
                    <div className='w-7 h-7 bg-secondary-500 rounded-full text-white flex justify-center items-center font-medium relative right-4 -top-2 shadow-md'>10</div>                   
                </div>               
                
            </div>
            <div className='pb-5 px-7'>
                <div className='w-full flex flex-col gap-5 px-7 py-5'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-3xl text-[#0D1626] font-semibold'>Pet Foods</div>
                        <button className='text-secondary-400 flex gap-2 justify-center items-center hover:border-b hover:border-secondary-300 hover:-translate-y-0.5 transition-all duration-200'>
                            See More
                            <BsArrowRight />
                        </button>
                    </div>
                    <div className='flex justify-start items-center gap-10 mt-5'>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>North Paw Grain Free</div>
                                <div className='text-sm font-medium'>Rs. 1500.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>EVOLVE Chicken Flavoured</div>
                                <div className='text-sm font-medium'>Rs. 2000.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pedigree - Adult</div>
                                <div className='text-sm font-medium'>Rs. 2350.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Whiskas for Kittens</div>
                                <div className='text-sm font-medium'>Rs. 1200.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods3} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Brit Premium</div>
                                <div className='text-sm font-medium'>Rs. 1400.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-5 px-7'>
                <div className='w-full flex flex-col gap-5 px-7 py-5'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-3xl text-[#0D1626] font-semibold'>Grooming & Hygiene</div>
                        <button className='text-secondary-400 flex gap-2 justify-center items-center hover:border-b hover:border-secondary-300 hover:-translate-y-0.5 transition-all duration-200'>
                            See More
                            <BsArrowRight />
                        </button>
                    </div>
                    <div className='flex justify-start items-center gap-10 mt-5'>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>North Paw Grain Free</div>
                                <div className='text-sm font-medium'>Rs. 1500.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>EVOLVE Chicken Flavoured</div>
                                <div className='text-sm font-medium'>Rs. 2000.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pedigree - Adult</div>
                                <div className='text-sm font-medium'>Rs. 2350.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Whiskas for Kittens</div>
                                <div className='text-sm font-medium'>Rs. 1200.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods3} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Brit Premium</div>
                                <div className='text-sm font-medium'>Rs. 1400.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-5 px-7'>
                <div className='w-full flex flex-col gap-5 px-7 py-5'>
                    <div className='w-full flex justify-between items-center'>
                        <div className='text-3xl text-[#0D1626] font-semibold'>Toys & Entertainment</div>
                        <button className='text-secondary-400 flex gap-2 justify-center items-center hover:border-b hover:border-secondary-300 hover:-translate-y-0.5 transition-all duration-200'>
                            See More
                            <BsArrowRight />
                        </button>
                    </div>
                    <div className='flex justify-start items-center gap-10 mt-5'>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>North Paw Grain Free</div>
                                <div className='text-sm font-medium'>Rs. 1500.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>EVOLVE Chicken Flavoured</div>
                                <div className='text-sm font-medium'>Rs. 2000.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pedigree - Adult</div>
                                <div className='text-sm font-medium'>Rs. 2350.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Whiskas for Kittens</div>
                                <div className='text-sm font-medium'>Rs. 1200.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-80 flex flex-col justify-between cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods3} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Brit Premium</div>
                                <div className='text-sm font-medium'>Rs. 1400.00</div>
                            </div>
                        </div>
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