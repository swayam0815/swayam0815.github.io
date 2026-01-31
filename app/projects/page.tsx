import Projects from "@/components/Projects";
import { myProjects } from "@/data";
import React from "react";

const page = () => {
  return (
    <div>
      <Projects heading="Projects" num={myProjects.length} />
    </div>
  );
};

export default page;
