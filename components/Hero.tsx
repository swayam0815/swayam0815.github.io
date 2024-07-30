
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextEffect";
import { FaLocationArrow } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";
import { BiLogoLinkedin } from "react-icons/bi";
import Tooltip from "./ui/ToolTip";
import { cn } from "@/lib/utils";
import Button from "./Button";
import Arrow from "./Arrow";

const Hero = () => {
  return (
    <TextGenerateEffect>
      <div className="pb-20 pt-36 h-screen flex justify-center items-center">
        <div className="">
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full  h-[80vh] w-[50vw]"
            fill="purple"
          />

          <Spotlight className="top-10 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div className="">
          <div className="h-screen w-full bg-black-100  bg-grid-white/[0.05]  flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

          <div className="flex justify-center relative my-20 z-10">
            <div className="w-full  flex flex-col items-center justify-center">
              <TextGenerateEffect>
                <h2 className=" uppercase tracking-widest text-xs md:text=sm lg:text-base text-center text-blue-100 ">
                  <span className="inline-block underline text-red-50">
                    <Link
                      href="https://www.google.com/search?q=gruntled+meaning"
                      passHref
                      legacyBehavior
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Arrow text="Gruntled," className="border-b-2"/>
                      </a>
                    </Link>
                  </span>
                   Full Stack Developer.
                </h2>
              </TextGenerateEffect>
              <TextGenerateEffect
                className="text-center text-6xl  lg:text-9xl"
                words="Swayam Sachdeva"
              />
              <TextGenerateEffect
                className="text-center text-white md:tracking-wider  text-sm md:text-lg lg:text-2xl"
                words=" Welcome to my website! Check out my work and feel free to contact me."
              />
              <div className="flex justify-center items-center gap-5">
                <Link href="/#projects">
                  <MagicButton
                    title="Show my work"
                    position="right"
                    icon={<FaLocationArrow />}
                  />
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MagicButton
                    title="Resume"
                    position="right"
                    icon={<IoDocument />}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center h-10 gap-2 my-8 w-full ">
                  <Button button={true} text=""/>

                <Tooltip text="Github">
                  <Link
                    href="https://github.com/swayam0815"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <VscGithubAlt className="border-violet-500 rounded-full p-2 border-2 h-14 w-14 fill-violet-500 hover:bg-violet-500 hover:fill-black-100 transition-all duration-300" />
                  </Link>
                </Tooltip>
                <Tooltip text="Linkedin">
                  <Link
                    href="https://www.linkedin.com/in/swayam-sachdeva-000223224/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoLinkedin className="
                     border-sky-500 rounded-full p-2 border-2 h-14 w-14 fill-sky-500 hover:bg-sky-500 hover:fill-black-100 transition-all duration-300" />
                  </Link>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TextGenerateEffect>
  );
};

export default Hero;
