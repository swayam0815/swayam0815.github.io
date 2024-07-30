"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/ThreeCard";
import Link from "next/link";

export function ThreeDCardDemo({
  children,
  title,
  image,
  body,
  color,
  iconList,
  link,
  moreLink,
}: {
  children?: React.ReactNode;
  title?: string;
  image: string;
  body?: string;
  color: string;
  iconList: string[];
  link: string;
  moreLink: string;

}) {
  return (
    <CardContainer className="inter-var ">
      <CardBody
        className={` relative group/card  hover:shadow-2xl    w-96 sm:w-[30rem] h-[37rem] rounded-xl p-6 border-2 ${color} `}
      >
        <div className=" h-3/4">
          <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-white leading-relaxed h-2/6"
        >
          {body}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
        </div>
        <div className={`flex border-t-2  border-b-2  p-1  justify-between items-center mt-20 ${color}`}>
          <div className="flex items-center ">
          {iconList.map((icon, i) => (
                    <div
                      className="border-2 border-white/[0.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * i * 2}px)` }}
                      key={icon}
                    >
                      <img src={icon} alt="png-img" className="p-1" />
                    </div>
                  ))}
          </div>
          <div className=" ">
            <CardItem
              translateZ={20}
              as={Link}
              href={moreLink}
              target="__blank"
              className="px-4 py-2 mr-2 rounded-xl text-xs font-normal bg-black-100 text-white hover:bg-white  hover:text-black"
            >
              View Code
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              href={link}
              target="__blank"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live Demo
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
