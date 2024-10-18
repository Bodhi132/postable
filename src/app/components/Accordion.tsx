import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`w-full md:ms-auto md:max-w-xl font-aspekta`}>
      <div className="border-b">
        <div className="flex">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className='flex flex-1 items-center justify-between py-4 text-left text-md font-normal text-neutral-950 md:text-2xl md:font-medium'
        >
          <span>{title}</span>
          {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
          <FaAngleDown
            className={`transform transition-transform duration-300 ${accordionOpen ? "rotate-180" : ""
              }`} />
        </button>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;