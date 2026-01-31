"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Boldonse } from 'next/font/google';
import React, { useState } from 'react'


const copyCB = (msg: string) => {
    navigator.clipboard.writeText(msg);
}

const rubikMono = Boldonse({
    variable: "--font-rubik-one",
    weight: ["400"],
    display: 'swap', adjustFontFallback: false
});


const AlertBox = ({ message, children }: { message: string, children: React.ReactNode }) => {

    return (
        <>
            <div className='absolute w-screen h-max top-0 left-0 flex justify-center items-center'>
                <div className="w-max rounded-full bg-foreground text-background border-2 h-max p-2 flex items-center justify-center">
                    {message}
                </div>
            </div>
            {children}
        </>
    )
}

const MessageChange = ({ messageString, messageString2 }: { messageString: string, messageString2: string }) => {
    const [msg, setMSG] = useState(messageString);

    const handleClick = () => {
        setMSG(messageString2);
        copyCB(messageString);
        setTimeout(() => { setMSG(messageString) }, 1000);
    }

    return (
        <div onClick={() => { handleClick() }} className="w-max h-max">
            {msg}
        </div>
    );
}



const ScaleLogo = () => {

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.create({
            animation: gsap.from("#logo", {
                y: "49vh",
                scale: 5,
                yPercent: -50
            }),
            scrub: true,
            trigger: "#triggered",
            start: "top bottom",
            endTrigger: '#triggered',
            end: 'top center',
            markers: true,
            pin: true,
            pinSpacing: false
        });
    }, [])

    return (

        <div id="logo" className={`${rubikMono.className} fixed top-5 left-1/2 -translate-x-1/2`}>SWAYAM</div>
    )
}




export { AlertBox, MessageChange, ScaleLogo };