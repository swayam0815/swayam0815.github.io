import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const Arrow = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={`relative   inline-block  hover:cursor-pointer group`}>
      <span className={`${className} mr-4`}> {text}</span>
      <IoIosArrowRoundUp className="absolute top-0 right-0 w-8 h-8 rotate-45 -mt-2 -mr-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
    </span>
  );
};

export default Arrow;
