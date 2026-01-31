import React from "react";
import GridGlobe from "./ui/GridGlobe";
import { techStack } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <div className="w-full py-20 flex-col items-center   flex justify-center">
        <h1 className="heading mb-10">About me</h1>
        <div className="flex gap-5 flex-col md:flex-row">
      
          <div
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            className="w-96 relative h-52 overflow-hidden rounded-3xl   hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-green-500   border-2 border-white/[0.3]  flex flex-col items-center justify-start"
          >
            <div className="p-4 w-full flex gap-5 flex-col">
              <h1 className="text-2xl  font-bold">My tech stack</h1>
              <div className="flex gap-2 flex-wrap">
                {techStack.map((item) => (
                  <span
                    key={item.name}
                    className={`border-2 p-1 rounded-lg text-base  bg-black-200 ${item.color}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            className="w-96 relative h-52 overflow-hidden rounded-3xl   hover:shadow-xl transition duration-200 shadow-input dark:shadow-none bg-green-500   border-2 border-white/[0.3]  flex flex-col items-center justify-start"
          >
            <div className="p-4 w-full flex gap-5 flex-col">
              <h1 className="text-2xl font-bold">Hobbies</h1>
              <div className="flex gap-2 flex-wrap">
                Reading is a favorite pastime of mine, and I often finish a book
                in just one day. My taste in music is drawn to songs with a
                strong percussion element and I a have a knack for origami,
                which is another paper-based hobby.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
