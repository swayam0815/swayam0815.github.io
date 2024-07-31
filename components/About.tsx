import Link from "next/link";
import React from "react";
import Arrow from "./Arrow";
import { techStack, tools } from "@/data";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full px-10 lg:px-20 flex">
      <div className="w-full  py-20 flex flex-col lg:flex-row justify-between">
        <div className="heading mb-10 w-full  lg:w-1/2 flex flex-col gap-3.5 items-start">
          <h1>
            Hey, I&apos;m <span className="text-yellow-400">Swayam!</span>
          </h1>
          <p className="text-lg font-normal text-justify">
            I&apos;m currently a computer science student student at{" "}
            <span className="font-bold">Western University</span>, with a focus
            on <span className="font-bold"> full-stack development</span>.
          </p>
          <span className="text-lg w-full inline-block font-normal text-justify">
            <p className="font-semibold flex flex-wrap w-full lg:w-max leading-relaxed border-b-2 border-b-yellow-400 mb-3">
              I believe in creating projects that are for everyone.
            </p>{" "}
            This has been my guiding philosophy through my developer journey.
            Web development has been the ideal medium for me, as anyone with an
            internet connection can engage with my work from anywhere.
          </span>
          <p className="text-lg font-normal text-justify">
            <span className="italic">Outside of coding</span>, I&apos;m a huge
            fan of{" "}
            <span className="bg-gradient-to-r font-bold">
              sci-fi and fantasy
            </span>{" "}
            across all forms of media.
            <span className="font-bold"> Reading</span> is one of my favorite
            hobbies, and I can usually finish{" "}
            <span className="italic font-semibold">any book</span> in a{" "}
            <span className="italic font-semibold">day</span>. Check out my{" "}
            <Link
              href="https://www.goodreads.com/user/show/102502203-0815"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Arrow
                text="Goodreads"
                className="text-teal-400 font-bold border-b-2 border-b-teal-400"
              />
            </Link>{" "}
            to see what I&apos;m reading!
          </p>
        </div>
        <div className=" py-4 px-2 w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-4 ">
          <div className="w-96 flex gap-5 flex-col border-2 border-white/[0.2] px-2 rounded-lg py-4">
            <h1 className="text-2xl font-bold pl-3">Known Languages</h1>
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-center">
              {techStack.map((item) => (
                <span
                  key={item.name}
                  className={`border-2 p-1 rounded-lg text-base bg-black-200 border-white/[0.2] ${item.color}`}
                >
                  <Image
                    alt={item.name}
                    src={item.src}
                    width={100}
                    height={100}
                    className="w-9 h-8"
                  />{" "}
                </span>
              ))}
            </div>
          </div>
          <div className="w-96 flex gap-5 flex-col border-2 border-white/[0.2] px-2 rounded-lg py-4">
            <h1 className="text-2xl font-bold pl-3">Tools Used</h1>
            <div className=" gap-x-3 flex flex-wrap gap-y-2 items-center px-3">
              {tools.map((item) => (
                <span
                  key={item.name}
                  className={`border-2 w-max p-1 rounded-full text-base bg-black-200 ${item.color} hover:scale-105`}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:shadow-black-300 hover:shadow-3xl"
                  >
                    <Image
                      alt={item.name}
                      src={item.src}
                      width={100}
                      height={100}
                      className="w-8 h-8"
                    />
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
