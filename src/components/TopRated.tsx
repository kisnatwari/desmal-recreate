"use client"

import { Heart, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';



const TopRated = () => {
    return (
        <div>
            <div className='container py-4'>
                <h2 className='text-xl mb-3 text-center'>Top Rated Products</h2>
                {/* <div className='grid grid-cols-7 gap-0'>
                    {
                        Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
                            return (
                                <div key={i} className='w-full h-72 p-2 flex flex-col bg-black/20 rounded border border-secondary/50'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-[10px] text-secondary-foreground/75'>CATEGORY 1</span>
                                        <Heart className='w-4' />
                                    </div>
                                    <div className='flex-grow flex items-center'>
                                        <Image src={"/computer.png"} alt='Product' width={200} height={200} className='w-full h-full object-contain' />
                                    </div>
                                    <div>
                                        <h1 className='text-[12px] line-clamp-2 mt-1 mb-2 text-justify'>
                                            FTW-3553 8GB 2666MHz DDR4 DIMM Desktop Memory
                                        </h1>
                                        <div className='text-[14px] flex justify-between'>
                                            <span>Rs 5000</span>
                                            <ShoppingCart className='w-4' />
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div> */}
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    navigation={true}
                    modules={[Mousewheel, Navigation, Autoplay]}
                    mousewheel={true}
                    breakpoints={{
                        640: { slidesPerView: 3, },
                        768: { slidesPerView: 4, },
                        1024: { slidesPerView: 5, },
                        1280: { slidesPerView: 7, }
                    }}
                    loop
                    rewind
                    autoplay={{
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    className="mySwiper"
                >
                    {
                        Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <div className='w-full h-72 p-2 flex flex-col bg-gradient-to-b from-white to-secondary dark:from-secondary/10 dark:to-secondary/60 border'>
                                        <div className='flex justify-between items-center'>
                                            <span className='text-[10px] text-secondary-foreground/75'>CATEGORY 1</span>
                                            <Heart className='w-4' />
                                        </div>
                                        <div className='flex-grow flex items-center'>
                                            <Image src={"/computer.png"} alt='Product' width={200} height={200} className='w-full h-full object-contain' />
                                        </div>
                                        <div className='text-secondary-foreground'>
                                            <h1 className='text-[12px] line-clamp-2 mt-1 mb-2 text-justify'>
                                                FTW-3553 8GB 2666MHz DDR4 DIMM Desktop Memory
                                            </h1>
                                            <div className='text-[14px] flex justify-between'>
                                                <span>Rs 5000</span>
                                                <ShoppingCart className='w-4' />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TopRated