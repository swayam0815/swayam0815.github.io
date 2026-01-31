import { Boldonse, Space_Grotesk } from "next/font/google";
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


export default function About() {
    return (
        <>
            <div id="triggered" className={`h-[110svh] w-screen flex flex-col items-center pt-40`}>
                <div className=" w-[80%] h-max flex flex-col items-center justify-center">
                    <h1 className={`${rubikMono.className}  w-full text-6xl lg:text-8xl mb-7`}>About</h1>


                    <div className=" w-full  flex flex-col lg:flex-row gap-10 items">
                        <div className="w-full font-semibold lg:w-1/2 text-md md:text-lg lg:text-xl text-foreground text-justify pr-8 leading-10 ">Hey there, I&apos;m Swayam Sachdeva. I&apos;m a full stack developer
                            that loves to work with various technologies and tech stacks. I love
                            to constantly challenge myself and strive to find new opportunites
                            to apply myself. Whether it be exploring a new area of software
                            development or diving into the hardware side of things. Feel free to
                            reach out to me or look around to see what I&apos;m up to.
                        </div>
                        <div className="lg:pl-5 flex flex-col items-start gap-5 lg:border-l-2 border-l-foreground" >
                            <h1 className={`text-2xl font-semibold`}>Currently:</h1>
                            {
                                topics.map(
                                    (t, i) => {
                                        return (
                                            <div className="w-full " key={i}>
                                                <h3 className="text-lg lg:text-2xl font-medium">{t.heading}</h3>
                                                <p className="font-semibold text-xl lg:text-3xl">{t.line}</p>
                                            </div>
                                        );
                                    }
                                )
                            }
                        </div>
                    </div>


                </div>
            </div>

        </>
    );
}
