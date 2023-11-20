import Image from 'next/image'
import React from 'react'
import headerImage from "./header.jpg"
import { Button } from './ui/button'

const Hero = () => {
    return (
        <div className='relative -mt-[200px] mb-10'>
            <div className='absolute w-full h-full top-0 -z-0' style={{
                backgroundImage: "url(https://img.freepik.com/free-vector/colorful-abstract-background_23-2148811705.jpg?w=1380&t=st=1700466396~exp=1700466996~hmac=481de9cdae74e44548d2b8cb1d80aedc6a3d47bcd9eea2308420d3a0109b7897)",
                backgroundPosition: 'center',
                backgroundOrigin: "center"
            }}></div>

            <div className='bg-gradient-to-b from-secondary via-white/80 dark:via-secondary/95  to-white dark:to-slate-950 backdrop-filter backdrop-blur-xl h-full pt-[200px]'>
                <div className='container lg:h-[570px] overflow-hidden grid grid-cols-7 gap-5'>
                    <div className='col-span-7 lg:col-span-3 flex flex-col justify-center items-start gap-5 mt-4 text-center lg:text-start'>
                        <h1 className="text-2xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-primary/95 mx-auto lg:mx-0">
                            Latest PC On The Market Today
                        </h1>
                        <p className='text-primary/90'>
                            Purchase the latest PC on the market to get the bestout of all in the world of technology. Purchase the latest PC on the market to get the bestout of all in the world of technology.
                        </p>
                        <Button size={'lg'} variant={'outline'} className='px-10 bg-accent mx-auto lg:mx-0'>
                            Take a Look &nbsp; &gt;
                        </Button>
                    </div>
                    <div className='col-span-7 lg:col-span-4 flex items-center justify-center'>
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