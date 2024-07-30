import About from "@/components/About";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="relative flex items-center justify-center flex-col overflow-hidden mx-auto w-full  bg-black-100">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center  ">
        <Hero />
        <About/>

        <Projects heading="Recent Projects" num={4} />

      </div>
    </main>
  );
}
