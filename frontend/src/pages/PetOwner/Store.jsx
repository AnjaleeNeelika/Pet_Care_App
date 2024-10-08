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
import CatTreeWithScratchingPost1 from '../../assets/images/cat_tree_with_scratching_post.png'
import PlayingRodWithFeathers1 from '../../assets/images/playing_rod_with_feathers.png'
import PlayingRopeWithBall1 from '../../assets/images/playing_rope_with_rubber_ball.png'
import RubberBone1 from '../../assets/images/rubber_bone.png'
import StuffedPuppyToy1 from '../../assets/images/stuffed_puppy.png'
import Shampoo1 from '../../assets/images/duke_shampoo.png'
import HairBrush1 from '../../assets/images/hair_brush_for_dogs1.png'
import PetOralKit1 from '../../assets/images/pet_oral_care_kit.png'
import PetGroomingScissors1 from '../../assets/images/pet_grooming_scissors.png'
import PetHairClipper1 from '../../assets/images/pet_hair_clipper.png'

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
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>North Paw Grain Free</div>
                                <div className='text-sm font-medium'>Rs. 1500.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>EVOLVE Chicken Flavoured</div>
                                <div className='text-sm font-medium'>Rs. 2000.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={DogFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pedigree - Adult</div>
                                <div className='text-sm font-medium'>Rs. 2350.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatFoods2} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Whiskas for Kittens</div>
                                <div className='text-sm font-medium'>Rs. 1200.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
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
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={Shampoo1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Duke & Daisy Pet Shampoo (Vanilla Bean)</div>
                                <div className='text-sm font-medium'>Rs. 1500.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={HairBrush1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pet Hair Brush</div>
                                <div className='text-sm font-medium'>Rs. 2000.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={PetOralKit1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>FreshBreath Oral Care Kit</div>
                                <div className='text-sm font-medium'>Rs. 1730.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={PetGroomingScissors1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pet Grooming Scissors</div>
                                <div className='text-sm font-medium'>Rs. 1400.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={PetHairClipper1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Pulse iON Pet Hair Clipper</div>
                                <div className='text-sm font-medium'>Rs. 7400.00</div>
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
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={CatTreeWithScratchingPost1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Cat Tree with Scratching Post</div>
                                <div className='text-sm font-medium'>Rs. 8300.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={PlayingRodWithFeathers1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Playing Rod with Feathers</div>
                                <div className='text-sm font-medium'>Rs. 1200.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={PlayingRopeWithBall1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Playing Rope with Ball</div>
                                <div className='text-sm font-medium'>Rs. 1350.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={RubberBone1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Rubber Bone</div>
                                <div className='text-sm font-medium'>Rs. 1200.00</div>
                            </div>
                        </div>
                        <div className='peer bg-white rounded-md shadow-md border-2 border-borderForWhite p-5 w-60 h-96 flex flex-col justify-center cursor-pointer hover:scale-110 hover:border-secondary-200 hover:border-3 transition-transform duration-500'>
                            <div className='w-full h-52 mx-auto'>
                                <img src={StuffedPuppyToy1} className='h-full w-fit mx-auto object-contain' />
                            </div>
                            <div className='text-center mt-3'> 
                                <div className='text-lg font-medium'>Stuffed Puppy Toy</div>
                                <div className='text-sm font-medium'>Rs. 2650.00</div>
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