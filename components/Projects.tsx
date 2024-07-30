import { myProjects } from "@/data";
import React from "react";
import { ThreeDCardDemo } from "./Card";

const Projects = ({ heading, num }: { heading: string; num: number }) => {
  const [first, ...rest] = heading.split(" ");
  return (
    <div className="py-20 bg-black-100" id="projects">
      <h1 className="heading">
        {first} <span className="text-blue-700">{rest.join(" ")}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10 mt-10 w-full">
        {myProjects.map(
          (project, i) =>
            i < num && (
              <ThreeDCardDemo
                title={project.title}
                image={project.images[0]}
                body={project.body}
                color={project.color}
                iconList={project.iconLists}
                link={project.link}
                moreLink={project.moreLink}
                key={project.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Projects;
