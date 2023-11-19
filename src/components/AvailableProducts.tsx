import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const AvailableProducts = () => {
    return (
        <div className="container py-5">
            <h1 className='text-center mb-3'>Explore More Products</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-0'>
                {
                    Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
                        return (
                            <div key={i} className='w-full h-72 p-2 flex flex-col border border-secondary-foreground/20 dark:border-secondary/50  bg-gradient-to-b from-slate-500/10 to-slate-500/10 via-secondary/25 dark:from-slate-950/50 dark:via-secondary/25 dark:to-slate-950/50'>
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
            </div>
        </div>
    )
}

export default AvailableProducts