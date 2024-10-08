import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vid from '../assets/video2.mp4';
import mask3 from "../assets/capsuleMaskMob.png";
import '../styles/Overlay2.css';
import rizta from '../assets/BikeScooters.png'
import StaticComponent from "../Components/StaticComponent";
import StaticComponentMobile from "./StaticComponentMobile";
gsap.registerPlugin(ScrollTrigger);

function OverlayCapsuleMobile() {
    const containerRef = useRef(null);
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const maskRef = useRef(null);
    const textRef = useRef(null); // Reference for the text element
    <StaticComponent />
    useLayoutEffect(() => {
        const container = containerRef.current;
        const videoContainer = videoContainerRef.current;
        const video = videoRef.current;
        const mask = maskRef.current;
        const text = textRef.current; // Text element

        gsap.set(container, { height: '400vh' }); // Increased for more scroll room

        // Set initial video size
        // gsap.set(video, { width: '960px', height: '515px' });
        gsap.set(video, { width: '100%', height: '100%' });
        gsap.set(text, { opacity: 0 }); // Initially hide the text

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: videoContainer, // Pin the video container
                pinSpacing: false, // Ensure smooth transition without abrupt disappearance
                onUpdate: (self) => {
                    if (self.progress >= 0.3) {
                        gsap.to(text, { opacity: 1, duration: 1 });
                    } else {
                        gsap.to(text, { opacity: 0, duration: 1 });
                    }
                }
            },
        });

        tl.to(mask, { scale: 10, opacity: 0, duration: 2 })
            .to(video, {
                width: '100%',
                height: '100%',
                duration: 2,
            }, '<') // Start at the same time as mask animation
            .to(videoContainer, { yPercent: -100, duration: 2, ease: 'none' }, '>'); // Smooth scroll up and out

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative">
            <div ref={videoContainerRef}
                 className="w-screen h-screen flex items-center justify-center overflow-hidden">
                <StaticComponentMobile/>



                <img
                    ref={maskRef}
                    src={mask3}
                    alt="Mask"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                />

            </div>
            {/*<div className="bg-[#1a2b49] text-white h-screen flex flex-col items-center justify-center">*/}
            {/*    <SlideShow/>*/}
            {/*</div>*/}
        </div>
    );
}

export default OverlayCapsuleMobile;