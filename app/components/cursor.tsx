'use client'
import gsap from 'gsap';
import React, { useEffect } from 'react'

const Cursor = () => {

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            gsap.to("#cursor", {
                x: clientX - 20,
                y: clientY - 20,
            });
        };


        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, []);

    return (
        <div id='cursor' className='z-10000 mix-blend-difference border-red-50 fixed hidden md:inline top-0 left-0 w-10 h-10 border-2 rounded-full' />
    )
}

export default Cursor