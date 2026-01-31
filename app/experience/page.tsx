import { Boldonse, Space_Grotesk } from "next/font/google";
const rubikMono = Boldonse({
    variable: "--font-rubik-one",
    weight: ["400"],
    display: 'swap', adjustFontFallback: false
});



export default function Home() {
    return (
        <>
            <div className={`h-[80%] w-[80%]  flex flex-col items-start  overflow-y-scroll `}>
                <h1 className={`${rubikMono.className} mb-10 w-full text-[5vw]`}>Experience</h1>


                <div className={` w-full h-max flex flex-col `}>
                    <h3 className="font-semibold text-[2vw]">Relavent Courses:</h3>
                    <div className="w-full h-max text-md flex flex-wrap text-foreground leading-7 ">
                        {
                            courses.map(
                                (c, i) => {
                                    return (
                                        <div className="font-bold bg-foreground text-background rounded p-1 m-1" key={i}>
                                            {c}
                                        </div>
                                    );
                                }
                            )
                        }

                    </div>
                    <h3 className="font-semibold text-[2vw]">Technical Skills:</h3>
                    <div className="w-full h-max text-md flex flex-wrap text-foreground leading-7 ">
                        {
                            skills.map(
                                (c, i) => {
                                    return (
                                        <div className="font-bold bg-foreground text-background rounded p-1 m-1" key={i}>
                                            {c}
                                        </div>
                                    );
                                }
                            )
                        }

                    </div>

                </div>
            </div>

        </>
    );
}
