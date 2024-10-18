"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import step1 from '../../../public/step1.webp'
import step2 from '../../../public/step2.webp'
import step3 from '../../../public/step3.webp'
import { aspekta } from '../layout'
import { StaticImageData } from 'next/image'

interface StepsProps {
    step: string,
    title: string,
    description: string,
    image: StaticImageData,
}

const Steps = () => {

    const steps: StepsProps[] = [
        {
            step: 'Step 1',
            title: "Copy tweet's link",
            description: "On X/Twitter, click the share icon at the bottom-right of the tweet and select 'Copy Link.' Then, paste the link into the box above.",
            image: step1
        },
        {
            step: 'Step 2',
            title: 'Customize Design',
            description: 'Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.',
            image: step2
        },
        {
            step: 'Step 3',
            title: 'Customize Design',
            description: 'Choose social media sizes, adjust the style, set the border radius, and customise the design to your liking and preferred branding—all with a single click.',
            image: step3
        }
    ]

    return (
        <div className='mx-auto flex h-fit w-full max-w-6xl flex-col gap-3.5 py-12 md:gap-8 md:py-24'>
            <h1 className={`${aspekta.className} px-4 text-2xl font-medium xl:pe-4 xl:ps-0 tracking-[-0.2px] text-neutral-800 md:text-[40px] md:leading-[42px] md:tracking-[-1px]`}>How it works?</h1>
            <div className='flex gap-4 overflow-y-visible overflow-x-scroll px-4 pb-4 md:overflow-x-visible lg:pb-4 lg:pe-4 lg:ps-0'>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className=" gap-4 transition-transform ease-linear will-change-transform flex w-fit min-w-72 flex-1 flex-shrink-0 flex-col rounded-[32px] bg-neutral-50/70 p-2"
                        whileHover={{ rotateY: [0, 10, -10, 0] }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, mass: 1 }}
                    >
                        <div className='flex flex-col px-4 pb-2 pt-6 md:px-6 md:pb-8 md:pt-8'>
                        <Image src={step.image} alt='img' className='bg-neutral-500 rounded-3xl' />
                        <h1 className="text-xs font-semibold uppercase text-neutral-400 md:text-md mt-4">{step.step}</h1>
                        <h1 className="mb-4 text-md font-medium text-neutral-800 md:mb-5 md:text-lg">{step.title}</h1>
                        <p className="text-sm text-neutral-500">{step.description}</p>

                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Steps