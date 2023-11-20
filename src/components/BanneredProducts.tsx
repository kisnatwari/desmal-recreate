/* eslint-disable @next/next/no-img-element */
import React from 'react'

const BanneredProducts = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="grid grid-cols-12 gap-1">
                    {
                        Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
                            <div key={i} className='grid grid-cols-6 sm:col-span-6  bg-gradient-to-tr from-secondary/50 to-slate-950 lg:col-span-4 p-3 col-span-12'>
                                <div className='flex flex-col gap-2 justify-center col-span-3'>
                                    <h2 className='text-xl font-bold'>EZ-77 PC WORLDWIDE</h2>
                                    <div>
                                        <small className='text-secondary-foreground/80'>STARTING AT</small>
                                        <h3 className='text-xl'>
                                            RS 180000
                                        </h3>
                                    </div>
                                </div>
                                <div className='col-span-3'>
                                    <img src="https://ecommerce.datablitz.com.ph/cdn/shop/products/ezgif.com-gif-maker_1_d960da77-7ab4-4a8f-b1e2-f384834d9072_1024x.png?v=1676799070" alt="" className='w-full h-full object-contain' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BanneredProducts