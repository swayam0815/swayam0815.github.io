import { Boldonse, Space_Grotesk } from "next/font/google";
import { courses, projects } from "../data/data";
import Link from "next/link";
const rubikMono = Boldonse({
    variable: "--font-rubik-one",
    weight: ["400"],
    display: 'swap', adjustFontFallback: false
});



const topics = [
    { heading: "Building", line: "As a Software Developer Intern @ JD Power" },
    {
        heading: "Studying",
        line: "Computer Science @ Western University",
    },
    { heading: "Experimenting With", line: "Computer Networking and Hardware" },
];


export default function Project() {
    return (
        <>
            <div className={`min-h-screen h-max w-screen  flex flex-col items-center justify-center`}>
                <div className=" w-[80%] h-max pt-40 flex flex-col items-start justify-center">
                    <h1 className={`${rubikMono.className} mb-20 w-full text-6xl lg:text-8xl`}>Projects</h1>

                    <div className="w-full lg:w-[80%] h-full items-start flex flex-col gap-9">
                        {
                            projects.map(
                                (p, i) => {
                                    return (
                                        <div className={`w-full py-4 flex flex-col gap-3 border-b-2 my-2`} key={i}>
                                            <h1 className="text-5xl  font-semibold">{p.title}</h1>
                                            <p className="font-medium">{p.body}</p>

                                            <div className="flex items-center justify-between w-full  min-h-2">
                                                <div className="flex gap-2">
                                                    {
                                                        p.github && <a target="_blank" rel="noopener" className="underline" href={p.github}>Github</a>
                                                    }
                                                    {
                                                        p.demo && <a target="_blank" rel="noopener" className="underline" href={p.demo}>Demo</a>
                                                    }
                                                </div>
                                                <div className="text-sm w-7/12 lg:w-1/2 flex-wrap justify-end opacity-80 font-medium flex gap-2">
                                                    {
                                                        p.tech && p.tech.map(
                                                            (t, j) => {
                                                                return (
                                                                    <div className="" key={j}>
                                                                        {t}
                                                                    </div>
                                                                )
                                                            }
                                                        )
                                                    }
                                                </div>

                                            </div>
                                        </div>
                                    );
                                }
                            )
                        }
                        <div className="w-full h-12" />
                    </div>

                </div>
            </div>

        </>
    );
}
