'use client'

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"

const Intro = () => {


    const comp = useRef(null)
    useGSAP(
        () => {
            const ctx = gsap.context(() => { }, comp);
            const tl = gsap.timeline();

            tl.to("#welcome", {
                opacity: 0,
                xPercent: "-100",
                duration: 0.3
            }).from(['#title-1', '#title-2', '#title-3'], {
                opacity: 0,
                y: "+=30",
                stagger: .5
            }).to(['#title-1', '#title-2', '#title-3'], {
                opacity: 0,
                y: "-=30",
                delay: 0.5,
                stagger: .5
            }).to("#intro-slider", {
                opacity: "0",

            })
            gsap.to("#intro-slider", {
                xPercent: "-100",
                delay: 4.5
            })

            return () => ctx.revert();
        }, []
    )

    return (
        <div ref={comp} className="">

            <div id="welcome" className="absolute h-screen w-screen bg-background z-10001"></div>
            <div id="intro-slider" className="justify-center items-center fixed top-0 left-0 h-screen w-screen z-10000 text-foreground bg-background flex flex-col gap-10 tracking-tight text-[10vw]">
                <h1 id="title-1" className="">Adventurer.</h1>
                <h1 id="title-2" className="">Developer.</h1>
                <h1 id="title-3" className="">Tinkerer.</h1>
            </div>

        </div>
    )
}

export default Intro