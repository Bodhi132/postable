import React from 'react'
import { aspekta } from '../layout'
import Image from 'next/image'
import feature1 from '../../../public/feature1.webp'
import feature2 from '../../../public/feature2.webp'
import feature3 from '../../../public/feature3.webp'
import feature4 from '../../../public/feature4.webp'

const Features = () => {
    return (
        <div className='flex w-full flex-col items-start py-12 md:py-24 overflow-hidden'>
            <h3 className={`mx-auto w-full max-w-6xl px-4 text-3xl font-medium tracking-[-0.2px] md:mb-2 md:text-[40px] md:leading-[42px] md:tracking-[-1px] xl:pe-4 xl:ps-0 ${aspekta.className}`}>
                Our Features
            </h3>
            <div className='w-full overflow-x-scroll py-3'>
                <div className='flex pl-56 gap-5'>
                <div className='md:min-w-96 min-w-72 overflow-hidden'>
                    <Image src={feature1} alt='feature1' />
                </div>
                <div className='md:min-w-96 min-w-72 overflow-hidden'>
                    <Image src={feature2} alt='feature2' />
                </div>
                <div className='md:min-w-96 min-w-72 overflow-hidden'>
                    <Image src={feature3} alt='feature3' />
                </div>
                <div className='md:min-w-96 min-w-72 overflow-hidden'>
                    <Image src={feature4} alt='feature4' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Features