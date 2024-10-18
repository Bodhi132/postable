import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
import Accordion from './Accordion';

const Faq = () => {
    return (
        <div className='mx-auto w-full max-w-6xl px-4 py-12 md:py-24 xl:pe-4 xl:ps-0'>
            <h1 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">FAQ</h1>
            <p className='hidden text-balance text-2xl font-medium text-neutral-950 md:mb-9 md:mt-4 md:block'>Let’s help you with some of your <br /> frequently asked questions.</p>
            <div className='flex'>
                <div className="max-w-sm">
                    <div className="hidden w-max flex-col md:flex">
                        <span className="text-lg font-medium text-neutral-500">Couldn't find your answer?</span>
                        <Link href="https://forms.gle/DAowWbDE9fNKh8Ji8" className='flex items-center gap-1 text-md font-medium text-purple-400'>
                        Ask a question
                        <FaArrowRight className='font-normal text-xs'/>
                        </Link>
                    </div>
                </div>
                <div className='w-full md:ms-auto md:max-w-xl'>
                <Accordion title="Sample Title" answer="Sample Answer" />
                <Accordion title="Sample Title" answer="Sample Answer" />
                <Accordion title="Sample Title" answer="Sample Answer" />
                <Accordion title="Sample Title" answer="Sample Answer" />
                <Accordion title="Sample Title" answer="Sample Answer" />
                </div>
            </div>
        </div>
    )
}

export default Faq