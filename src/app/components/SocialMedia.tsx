"use client"
import React, { useEffect, useRef } from 'react';
import { MdOutlineCheck } from "react-icons/md";
import { useAnimation, useInView } from 'framer-motion';
import { motion } from 'framer-motion';

const socialMediaConfigs = [
  {
    name: 'LinkedIn Post',
    bgColor: '#80C0EE',
    imgSrc: 'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp',
    initial: { x: '-30%', rotate: '3deg', y: '120px' },
    animate: { x: '0%', y: '120px', rotate: '3deg' },
  },
  {
    name: 'Instagram Story',
    bgColor: '#F6A886',
    imgSrc: 'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp',
    initial: { x: '-60%', rotate: '3deg', y: '90px' },
    animate: { x: '-30%', y: '90px', rotate: '3deg' },
  },
  {
    name: 'Facebook Post',
    bgColor: '#77BE7E',
    imgSrc: 'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-4_cgvesv.webp',
    initial: { x: '-90%', rotate: '3deg', y: '60px' },
    animate: { x: '-60%', y: '60px', rotate: '3deg' },
  },
  {
    name: 'Instagram Post',
    bgColor: '#E7C694',
    imgSrc: 'https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-4_cgvesv.webp',
    initial: { x: '-120%', rotate: '3deg', y: '30px' },
    animate: { x: '-90%', y: '30px', rotate: '3deg' },
  },
];

const SocialMedia = () => {
  const linkedInRef = useRef(null);
  const instagramStoryRef = useRef(null);
  const facebookPostRef = useRef(null);
  const instagramPostRef = useRef(null); 
  const linkedInControls = useAnimation();
  const instagramStoryControls = useAnimation();
  const facebookPostControls = useAnimation();
  const instagramPostControls = useAnimation();
  const linkedInInView = useInView(linkedInRef, { once: true });
  const instagramStoryInView = useInView(instagramStoryRef, { once: true });
  const facebookPostInView = useInView(facebookPostRef, { once: true });
  const instagramPostInView = useInView(instagramPostRef, { once: true });
  const refs = [linkedInRef, instagramStoryRef, facebookPostRef, instagramPostRef];
  const controls = [linkedInControls, instagramStoryControls, facebookPostControls, instagramPostControls];
  const views = [linkedInInView, instagramStoryInView, facebookPostInView, instagramPostInView];

  useEffect(() => {
    views.forEach((view, index) => {
      if (view) {
        controls[index].start(socialMediaConfigs[index].animate);
      }
    });
  }, [views, controls]);

  return (
    <>
      <div className='relative mx-auto flex w-full max-w-6xl flex-col items-start md:px-4 pt-7 md:pt-24 xl:pe-4 xl:ps-0'>
        <div>
          <h1 className="mb-5 max-w-sm text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
            Optimized for all social media
          </h1>
        </div>
        <div className='flex flex-col gap-4 md:flex-row'>
          <p className='max-w-xl leading-[20px] text-neutral-700 md:text-balance md:text-md'>
            We&apos;ve meticulously designed each template to meet the specific guidelines and format requirements of all social media platforms.
            By preserving safe zones and adhering to platform standards, we ensure that your posts will always be visually striking, no matter where you share them.
          </p>
          <ul className='flex flex-row gap-4 md:flex-col md:gap-1.5'>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-md">
              <MdOutlineCheck className='text-purple-400 text-sm' />
              <p>Readable</p>
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-md">
              <MdOutlineCheck className='text-purple-400' />
              <p>Visible</p>
            </li>
            <li className="flex min-h-6 items-center gap-2 text-sm text-neutral-700 md:text-md">
              <MdOutlineCheck className='text-purple-400' />
              <p>Accessible</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative mb-16 md:mb-32 overflow-x-hidden overflow-y-hidden">
        <div className="mx-auto flex w-full max-w-6xl px-4 xl:pe-4 xl:ps-0">
          {socialMediaConfigs.map(({ name, bgColor, imgSrc, initial }, index) => (
            <motion.div
              key={name}
              className="flex flex-col"
              style={{
                opacity: 1,
                willChange: "auto",
              }}
              initial={initial}
              animate={controls[index]}
              transition={{ duration: 1 }}
              ref={refs[index]}
            >
<h4 className={`flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8 bg-[#F6A886]`}>
  <svg className="size-4 text-white md:size-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3253 22.7344C13.7846 23.0885 10.2174 23.0885 6.67669 22.7344C3.81561 22.4483 1.55264 20.1854 1.26653 17.3243C0.912459 13.7836 0.912459 10.2164 1.26653 6.67571C1.55264 3.81463 3.81561 1.55166 6.67669 1.26555C10.2174 0.911483 13.7846 0.911483 17.3253 1.26555C20.1863 1.55166 22.4493 3.81463 22.7354 6.67572C23.0895 10.2164 23.0895 13.7836 22.7354 17.3243C22.4493 20.1854 20.1863 22.4483 17.3253 22.7344ZM12 18C10.8133 18 9.65327 17.6481 8.66658 16.9888C7.67988 16.3295 6.91085 15.3925 6.45673 14.2961C6.0026 13.1997 5.88378 11.9933 6.11529 10.8295C6.3468 9.66557 6.91825 8.59648 7.75736 7.75736C8.59648 6.91825 9.66557 6.3468 10.8295 6.11529C11.9933 5.88378 13.1997 6.0026 14.2961 6.45673C15.3925 6.91085 16.3295 7.67988 16.9888 8.66658C17.6481 9.65327 18 10.8133 18 12C17.9982 13.5907 17.3655 15.1158 16.2407 16.2407C15.1158 17.3655 13.5907 17.9982 12 18ZM12 16C11.2089 16 10.4355 15.7654 9.77772 15.3259C9.11992 14.8864 8.60723 14.2616 8.30448 13.5307C8.00173 12.7998 7.92252 11.9956 8.07686 11.2196C8.2312 10.4437 8.61216 9.73098 9.17157 9.17157C9.73098 8.61216 10.4437 8.2312 11.2196 8.07686C11.9956 7.92252 12.7998 8.00173 13.5307 8.30448C14.2616 8.60723 14.8864 9.11992 15.3259 9.77772C15.7654 10.4355 16 11.2089 16 12C15.9988 13.0605 15.577 14.0772 14.8271 14.8271C14.0772 15.577 13.0605 15.9988 12 16ZM18.5 7C18.2033 7 17.9133 6.91203 17.6666 6.7472C17.42 6.58238 17.2277 6.34811 17.1142 6.07403C17.0007 5.79994 16.9709 5.49834 17.0288 5.20736C17.0867 4.91639 17.2296 4.64912 17.4393 4.43934C17.6491 4.22956 17.9164 4.0867 18.2074 4.02882C18.4983 3.97094 18.7999 4.00065 19.074 4.11418C19.3481 4.22771 19.5824 4.41997 19.7472 4.66665C19.912 4.91332 20 5.20333 20 5.5C20 5.89783 19.842 6.27936 19.5607 6.56066C19.2794 6.84197 18.8978 7 18.5 7Z" fill="currentColor"></path></svg>
  <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">{name}</span></h4>
              <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
                <img
                  src={imgSrc}
                  alt={name}
                  className="size-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 translate-y-36 bg-gradient-to-b from-transparent via-white/50 via-50% to-white to-75%"></div>
      </div>
    </>
  );
};

export default SocialMedia;