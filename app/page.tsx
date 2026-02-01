import About from "./components/about";
import Contact from "./components/contact";
import Landing from "./components/landing";
import Project from "./components/projects";



export default function Home() {
  return (
    <>
      <Landing />

      <About />
      <Project />
      <Contact />
    </>
  );
}
