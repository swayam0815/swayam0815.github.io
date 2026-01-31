"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import Tooltip from "./ui/ToolTip";

const Button = ({
  text,
  button,
  children,
}: {
  text: string;
  button: boolean;
  children?: React.ReactNode;
}) => {
  const [status, setStatus] = React.useState("Copy Email");

  return (
    <>
      {button ? (
        <Tooltip text={status}>
          <button
            onClick={async () => {
              await navigator.clipboard.writeText("swayam0815@gmail.com");
              setStatus("Copied!");
              setTimeout(() => {
                setStatus("Copy Email");
              }, 500);
            }}
            className={cn(
              "flex items-center group/bento justify-center h-14 w-14 hover:w-80 gap-2 border-yellow-400 border-2 rounded-full fill-yellow-400 hover:bg-yellow-400 hover:fill-black-100 relative overflow-hidden cursor-pointer transition-all duration-300"
            )}
          >
            <MdOutlineMailOutline className="group-hover/bento:fill-black rounded-full p-2 fill-yellow-400 transition-all duration-150 h-14 w-14" />
            <p className="group-hover:inline-block hidden text-black transition-all duration-300">
              swayam0815@gmail.com
            </p>
          </button>
        </Tooltip>
      ) : (
        <span
          className={cn(
            "flex items-center group/jake text-white justify-center h-14 w-14 hover:w-36   gap-2 rounded-full bg-black overflow-hidden cursor-pointer transition-all duration-300"
          )}
        >
          {children}
          <p className="group-hover/jake:inline-block hidden text-white transition-all duration-300">
            {text}
          </p>
        </span>
      )}
    </>
  );
};

export default Button;
