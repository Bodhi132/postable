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
  const refs = [linkedInRef, instagramStoryRef, facebookPostRef, instagramPostRef];
  const controls = socialMediaConfigs.map(() => useAnimation());
  const views = refs.map(ref => useInView(ref, { once: true }));

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
              <h4 className={`flex items-center gap-2 rounded-t-3xl px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8 bg-[${bgColor}]`}>
                <svg
                  className="size-4 text-white md:size-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.67572 22.7344C10.2164 23.0885 13.7836 23.0885 17.3243 22.7344C20.1854 22.4483 22.4483 20.1854 22.7344 17.3243C23.0885 13.7836 23.0885 10.2164 22.7344 6.67572C22.4483 3.81463 20.1854 1.55166 17.3243 1.26555C13.7836 0.911483 10.2164 0.911483 6.67571 1.26555C3.81463 1.55166 1.55166 3.81463 1.26555 6.67571C0.911483 10.2164 0.911483 13.7836 1.26555 17.3243C1.55166 20.1854 3.81463 22.4483 6.67572 22.7344ZM10.3742 12.8721V19H13.3006V12.8836H15.4785L15.8957 10.3475H13.3006V8.70082C13.3006 8.00656 13.6626 7.32951 14.8221 7.32951H16V5.17213C16 5.17213 14.9325 5 13.908 5C11.7669 5 10.3742 6.21066 10.3742 8.4082V10.3418H8V12.8721H10.3742Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
                  {name}
                </span>
              </h4>
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