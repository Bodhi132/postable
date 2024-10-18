"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import postableLogo from '../../../public/PostableLogo.svg';
import postableText from '../../../public/postableText.svg';
import { IoIosLink } from "react-icons/io";

interface PostableProps {
  hasPassedHeader: boolean;
}

const Postable: React.FC<PostableProps> = ({ hasPassedHeader }) => {
  return (
    <header className="my-4 flex w-full max-w-6xl flex-col">
      <nav className="fixed left-1/2 top-8 isolate z-20 flex w-fit -translate-x-1/2 items-center justify-between self-stretch rounded-[20px] bg-neutral-900 pe-2 ps-5 shadow-[0px_3.35px_2.21px_#0000001c,0px_8.05px_5.32px_#00000014,0px_15.15px_10.02px_#00000011,0px_27.03px_17.87px_#0000000e,0px_50.55px_33.42px_#0000000b,0px_121px_80px_#00000008] md:ps-8">
        <div
          className="relative overflow-hidden"
          style={{ width: 44, willChange: 'auto', transform: 'none' }}
        >
          <Image src={postableLogo} alt="Postable Logo" />
        </div>
        <div className="pr-3">
          <Image src={postableText} alt="postable" />
        </div>
        <motion.div
          className="relative my-2 overflow-hidden transition-all duration-300"
          layout
          animate={{ width: hasPassedHeader ? 'auto' : '0' }}
          initial={{ width: '0' }}
        >
          <div className="hidden min-w-fit items-center gap-2 rounded-xl border border-transparent bg-neutral-800 py-2 pe-2 ps-4 transition-colors focus-within:border-white/10 hover:bg-neutral-700 md:flex">
            <input
              placeholder="Paste tweet link here..."
              className="w-32 bg-transparent py-2 text-sm text-neutral-10 focus-visible:bg-transparent focus-visible:outline-none active:bg-transparent md:w-80 lg:w-96"
              data-last-active-input=""
            />
            <button className="relative inline-flex h-10 items-center justify-center gap-1 rounded-[8px] bg-white/10 px-4 text-white transition-colors hover:bg-white/20">
              <p className="text-sm font-medium ">Paste</p>
                <IoIosLink className="text-sm" />
            </button>
          </div>
          <div className="flex h-10 md:hidden" />
        </motion.div>
      </nav>
    </header>
  );
};

export default Postable;