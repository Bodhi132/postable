"use client"
import { useRef,useState,useEffect } from "react";
import Header from "./components/Header";
import PostTypes from "./components/PostTypes";
import Steps from "./components/Steps";
import SocialMedia from "./components/SocialMedia";
import Solutions from "./components/Solutions";
import { aspekta } from "./layout";
import { FaArrowRight } from "react-icons/fa";
import Features from "./components/Features";
import Engaging from "./components/Engaging";
import Faq from "./components/Faq";
import Parallex from "./components/Parallex";
import Postable from "./components/Postable";

export default function Home() {

  const [hasPassedHeader, setHasPassedHeader] = useState(false);
  const postableRef = useRef(null);
  const headerRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 0) {
          console.log('passed header');
          
          setHasPassedHeader(true);
        } else {
          setHasPassedHeader(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (postableRef.current) {
      observer.observe(postableRef.current);
    }

    return () => {
      if (postableRef.current) {
        observer.unobserve(postableRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white w-full overflow-x-hidden flex flex-col">
      <div ref={postableRef}>
        <Postable hasPassedHeader={hasPassedHeader} />
      </div>
      <div ref={headerRef}>
        <Header />
      </div>
      <PostTypes />
      <Steps />
      <SocialMedia />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0 mt-8 md:mt-0">
        <p className={`max-w-4xl text-balance text-3xl font-medium tracking-[-0.4px] text-neutral-400 md:text-[40px] md:leading-[42px] ${aspekta.className}`}>We help you create postable content that <span className="text-neutral-800">not only looks great</span> but also
          <span className="text-neutral-800"> engages your audience</span>.</p>
        <button className="bg-black text-white px-3 py-3 flex items-center gap-2 rounded-xl hover:bg-neutral-800 transition-colors">
          <p className="font-bold">Get Started for FREE</p>
          <FaArrowRight className="text-sm" />
        </button>
      </div>
      <Features />
      <Solutions />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0 mt-8 md:mt-0">
        <p className={`max-w-4xl text-balance text-3xl font-medium tracking-[-0.4px] text-neutral-400 md:text-[40px] md:leading-[42px] ${aspekta.className}`}>We help you create postable content that not only <span className="text-neutral-800">looks great</span> but also
          <span className="text-neutral-800"> engages your audience</span>.</p>
        <button className="bg-black text-white px-3 py-3 flex items-center gap-2 rounded-xl hover:bg-neutral-800 transition-colors">
          <p className="font-bold">Get Started for FREE</p>
          <FaArrowRight className="text-sm" />
        </button>
      </div>
      <Engaging />
      <Faq/>
      <Parallex/>
    </div>
  );
}
