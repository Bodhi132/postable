import React from 'react'
import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import influencers from '../../../public/influencers.webp'
import individuals from '../../../public/individuals.webp'
import businesses from '../../../public/businesses.webp'
import { aspekta } from '../layout'

interface Solution {
    id: number
    title: string
    image: StaticImageData,
    desc: string
}

const Solutions = () => {


    const Solutions: Solution[] = [
        {
            id: 1,
            title: 'Individuals',
            image: individuals,
            desc: "Postable is perfect for individuals who want to elevate their social media presence without the hassle. Whether you're sharing thoughts, opinions, or everyday moments, Postable makes it easy to create and share beautiful, impactful posts from your tweets."
        },
        {
            id: 2,
            title: 'Influencers',
            image: influencers,
            desc: "For influencers, maintaining a consistent and visually appealing social media presence is crucial. Postable empowers you to convert your tweets into captivating images that align with your brand, helping you to keep your content fresh and engaging across all platforms."
        },
        {
            id: 3,
            title: 'Businesses',
            image: businesses,
            desc: "Businesses need to stay agile and maintain a strong social media presence. Postable helps you quickly turn tweets into polished visuals that resonate with your audience, reinforcing your brand and driving engagement without the need for a full design team."
        }
    ]

    const [solutionType, setSolutionType] = useState(Solutions[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Solutions.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [Solutions.length,index]);

    useEffect(() => {
        setSolutionType(Solutions[index]);
    }, [index]);

    return (
        <div className='w-full flex md:flex-row flex-col px-4 md:justify-center'>
            <div>
                <h2 className={`max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px] ${aspekta.className}`}>One Solution for All!</h2>
                <p className='mt-1 max-w-80 text-xs font-medium leading-[20px] text-neutral-700 md:mt-4 md:max-w-full md:text-2xl md:text-neutral-950'>Postable helps everyone to share their thoughts across multiple platforms</p>
                <div className='md:md-10 mt-6 bg-[hsl(0,0,95%)] md:w-fit w-full flex rounded-2xl p-2 gap-2'>
                    {
                        Solutions.map((solution, index) => (
                            <button key={index} className={`px-10 py-4 rounded-xl block ${solutionType.title === solution.title ? 'bg-white ring-offset-2 drop-shadow-md' : ''}`} onClick={() => setIndex(solution.id - 1)}>{solution.title}</button>
                        ))
                    }
                </div>
                <div className='max-w-xl'>
                    <p className='my-4 text-xs leading-[20px] text-neutral-600 md:py-14 md:text-lg'>{solutionType.desc}</p>
                    <ul className='relative flex flex-col items-start gap-2 md:gap-4'>
                        <li className='flex items-center gap-3'>
                            <div className='w-2 h-2 rounded-full bg-gray-400'>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-2 h-2 rounded-full bg-gray-400'>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <div className='w-2 h-2 rounded-full bg-gray-400'>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-1/3'>
                {
                    Solutions.map((solution, index) => (
                        solutionType.title === solution.title &&
                        <div key={index} className='h-full w-full'>
                            <Image src={solution.image} alt={solution.title} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Solutions