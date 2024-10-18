"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { IconType } from "react-icons";
import Image from 'next/image';
import smallLogo from '../../../public/logoSmall.jpg'
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion'
import { useAnimation } from 'framer-motion';

interface PostType {
  icon: IconType
  title: string
  height: string,
}

const PostTypes = () => {

  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedPostType, setSelectedPostType] = useState<PostType>(
    {
      icon: RiInstagramFill,
      title: 'Instagram Story',
      height: '740px',
    })
    const leftControls = useAnimation();
    const rightControls = useAnimation();

    useEffect(() => {
      leftControls.start({
        x: [0, -50, 0],
        y: [0, 50, 0],
        rotate: [5, 10, 5],
        transition: { duration: 1, ease: "easeInOut" }
      });
      rightControls.start({
        x: [0, 50, 0],
        y: [0, -50, 0],
        rotate: [0, -10, 0],
        transition: { duration: 1, ease: "easeInOut" }
      });
    }, [selectedPostType, leftControls,rightControls]);

  const postTypes: PostType[] = [
    {
      icon: RiInstagramFill,
      title: 'Instagram Story',
      height: '740px',
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn Post',
      height: '416px',
    },
    {
      icon: FaFacebookSquare,
      title: 'Facebook Post',
      height: '260px',
    },
    {
      icon: RiInstagramFill,
      title: 'Instagram Post',
      height: '416px',
    },
  ]

  return (
    <div className=' md:px-[6rem] xl:px-[15rem] h-[300%]'>
      <div className="bg-section-background bg-no-repeat mx-auto max-w-full w-fit bg-cover rounded-[16px] sm:rounded-[32px] 
       md:rounded-[64px] pt-8 lg:pt-12 md:px-12 lg:px-24 ">
        <header className='px-4 sm:px-8 md:px-12 text-center'>
          <h1 className={` font-aspekta font-[850] text-center text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl md:leading-[48px] text-balance`}>
            Share Your Voice Beyond Just a Tweet
          </h1>
          <p className='mx-auto my-4 max-w-xs text-balance text-center text-md font-normal leading-[18px] text-white sm:my-5 sm:max-w-sm md:my-8 md:max-w-xl md:text-base lg:my-12 lg:text-lg'>
            Keep your online presence steady and growing by creating customizable images from your tweets,
            perfect for Instagram, Facebook, and more.
          </p>
        </header>
        <div className='scrollbar-hide mx-auto my-6 flex max-w-full items-center justify-start gap-3 overflow-x-auto px-4 sm:justify-center sm:gap-4 md:my-8 md:gap-5'>
          {postTypes.map((postType, index) => (
            <button
              key={index}
              className={`flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 hover:scale-105 active:scale-95 ${activeIndex === index ? 'bg-black/20 opacity-100' : ' opacity-50'
                }`}
              onClick={() => { setActiveIndex(index); setSelectedPostType(postType) }}
            >
              <postType.icon />
              <div className="text-xs font-medium sm:text-sm">{postType.title}</div>
            </button>
          ))}
          <button className="flex flex-shrink-0 items-center gap-1 rounded-[8px] px-2 py-1.5 text-white transition-all duration-200 ease-in-out sm:rounded-[10px] sm:px-3 sm:py-2 hover:scale-105 active:scale-95 opacity-50">
            +
            <div className="text-xs font-medium sm:text-sm">more</div>
          </button>
        </div>
        <div style={{ height: selectedPostType.height }} className='flex justify-center'>
          {
            
              selectedPostType && 
              <React.Fragment >
               <motion.div
                style={{ height: selectedPostType.height }}
                className='w-[416px] absolute origin-center rotate-6 opacity-30'
                animate={leftControls}
                transition={{ duration: 3, ease: "easeInOut" }}
              >
                <div className='h-12 bg-white/20 text-white px-5 flex items-center gap-1 backdrop-blur-lg rounded-t-3xl'>
                  <selectedPostType.icon className=' text-2xl' />
                  <h2 className='flex-1 text-xs font-medium'>{selectedPostType.title}</h2>
                </div>
                <div className='bg-post-background w-416 bg-cover rounded-b-3xl flex items-center justify-center' style={{ height: selectedPostType.height }}>
                  <section>
                    <div
                      className='max-w-96 origin-top drop-shadow-xl rounded-3xl scale-90 p-1 mt-3'
                    >
                      <div className='bg-white rounded-[20px] px-3 py-5'>
                        <header className="flex items-center gap-1.5">
                          <Image src={smallLogo} alt='img' className='h-10 w-10 rounded-full' />
                          <div className='flex flex-1 leading-none'>
                            <div className='flex flex-col'>
                              <div className='flex items-center gap-1'>
                                <p>Postable</p>
                                <RiVerifiedBadgeFill className='text-[#268aff]' />
                              </div>
                              <div className="text-xs font-medium text-neutral-500">
                                @postable_app
                              </div>
                            </div>
                          </div>
                          <FaXTwitter />
                        </header>
                        <p className='text-left text-sm my-3 font-semibold text-[#14171A]' style={{ color: 'rgb(20 ,23 ,26)' }}>
                          Sharing your tweets across multiple platform made easy. Postable helps you creating engaging vis
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </motion.div>
              <motion.div  
              animate={rightControls}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ height: selectedPostType.height }} 
              className='w-[416px] absolute'>
                <div className='h-12 bg-white/20 text-white px-5 flex items-center gap-1 backdrop-blur-lg rounded-t-3xl'>
                  <selectedPostType.icon className=' text-2xl' />
                  <h2 className='flex-1 text-xs font-medium'>{selectedPostType.title}</h2>
                </div>
                <div className='bg-post-background w-416 bg-cover rounded-b-3xl flex items-center justify-center' style={{ height: selectedPostType.height }}>
                  <section>
                    <div
                      className='max-w-96 origin-top drop-shadow-xl rounded-3xl scale-90 p-1 mt-3'
                    >
                      <div className='bg-white rounded-[20px] px-3 py-5'>
                        <header className="flex items-center gap-1.5">
                          <Image src={smallLogo} alt='img' className='h-10 w-10 rounded-full' />
                          <div className='flex flex-1 leading-none'>
                            <div className='flex flex-col'>
                              <div className='flex items-center gap-1'>
                                <p>Postable</p>
                                <RiVerifiedBadgeFill className='text-[#268aff]' />
                              </div>
                              <div className="text-xs font-medium text-neutral-500">
                                @postable_app
                              </div>
                            </div>
                          </div>
                          <FaXTwitter />
                        </header>
                        <p className='text-left text-sm my-3 font-semibold text-[#14171A]' style={{ color: 'rgb(20 ,23 ,26)' }}>
                          Sharing your tweets across multiple platform made easy. Postable helps you creating engaging vis
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
            </motion.div> 
            </React.Fragment >
            
          }
      </div>
    </div>
    </div >
  )
}

export default PostTypes