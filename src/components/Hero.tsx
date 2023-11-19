import Image from 'next/image'
import React from 'react'
import headerImage from "./header.jpg"
import { Button } from './ui/button'

const Hero = () => {
    return (
        <div className='relative -mt-[200px]'>
            <Image src={'/geo-bg.jpg'} alt='adsf' width={1000} height={1000} className='absolute w-full h-full top-0 -z-0' />
            <div className='bg-gradient-to-b from-secondary to-secondary/75  backdrop-filter backdrop-blur-xl h-full pt-[200px]'>
                <div className='container h-[570px] overflow-hidden grid grid-cols-7 gap-5'>
                    <div className='col-span-3 flex flex-col justify-center items-start gap-5'>
                        <h1 className="text-7xl font-extrabold text-primary/95">
                            Latest PC On The Market
                        </h1>
                        <p className='text-primary/90'>
                            Purchase the latest PC on the market to get the bestout of all in the world of technology. Purchase the latest PC on the market to get the bestout of all in the world of technology.
                        </p>
                        <Button size={'lg'} variant={'outline'} className='px-10 bg-accent'>
                            Take a Look &nbsp; &gt;
                        </Button>
                    </div>
                    <div className='col-span-4 flex items-center justify-center'>
                        <Image src={'/computer.png'} alt="Computer" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

{/* <div className='relative h-[500px] overflow-hidden'>
<Image
    src={"/header.jpg"}
    alt="Header image"
    width={1000}
    height={1000}
    className='w-full h-full object-cover absolute top-0 left-0 -z-10'
/>
<div className="px-11 w-full h-full bg-black/25 text-white/75 flex justify-center flex-col items-center text-center gap-3">
    <h3 className='text-4xl font-bold'>A quick brown fox jumps over the lazy dog</h3>
    <p className='w-3/5'>A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.</p>
    <Button variant={'default'}>
        View Product
    </Button>
</div>
</div> */}