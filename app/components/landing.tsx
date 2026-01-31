import { Boldonse } from "next/font/google";
import { MessageChange } from "./AlertBox";


const rubikMono = Boldonse({
    variable: "--font-rubik-one",
    weight: ["400"],
    display: 'swap', adjustFontFallback: false
});

const Landing = () => {
    const lastN = "SACHDEVA";

    return (
        <div className={`h-screen w-screen flex  items-center justify-center  `}>
            <div className="w-[80%] h-[80%] flex flex-col items-center justify-center">
                <div className={`text-[18vw] ${rubikMono.className}`}>SWAYAM</div>
                <div className={`flex text-[4vw] justify-between w-full ${rubikMono.className}`}>
                    {
                        lastN.split("").map(
                            (l, i) =>
                                <div className="" key={i}>{l}</div>
                        )
                    }
                </div>
                <div className={` w-full z-1000 flex  items-start text-xl md:text-3xl lg:text-5xl`}>
                    {/* <AlertBox message="Copied to clipboard!"> */}
                    <h1 className="font-extrabold mt-5 underline-effect cursor-pointer">
                        <MessageChange messageString="swayam0815@gmail.com" messageString2="Copied to clipboard!" />
                    </h1>
                    {/* </AlertBox> */}
                </div>
            </div>
        </div>
    )
}

export default Landing