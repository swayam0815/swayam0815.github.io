import { Boldonse } from 'next/font/google';
import React from 'react'
import { MessageChange } from './AlertBox';

const rubikMono = Boldonse({
    variable: "--font-rubik-one",
    weight: ["400"],
    display: 'swap', adjustFontFallback: false
});


const Contact = () => {
    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className={`${rubikMono.className} mb-10 w-[80%] text-5xl md:text-6xl lg:text-7xl`}>Contact</h1>
            <div className="text-xl md:text-5xl w-[80%]">
                <h1 className="  font-semibold">Looking to get in touch or up for a chat?</h1>
                <h1 className="font-extrabold mt-5 w-min underline-effect cursor-pointer">
                    <MessageChange messageString="swayam0815@gmail.com" messageString2="Copied to clipboard!" />
                </h1>
            </div>
        </div>
    )
}

export default Contact