import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import maskImg from '../assets/mask.png';
import vid from '../assets/starting.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextTrain from "./TextTrain";
import ather from "../assets/Ather.svg";
import  '../App.css'
gsap.registerPlugin(ScrollTrigger);

function OverlayOrig() {
    const [percentage, setPercentage] = useState(0);
    const [showPercentage, setShowPercentage] = useState(true);
    const [showTextReveal, setShowTextReveal] = useState(false);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const mask = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const container = useRef(null);
    const atherLogo = useRef(null);

    useEffect(() => {
        if (isLoading) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isLoading]);

    useEffect(() => {
        let interval = null;

        if (percentage < 100) {
            interval = setInterval(() => {
                setPercentage((prev) => {
                    const newPercentage = Math.min(prev + 2, 100);
                    if (newPercentage === 100) {
                        setIsLoading(false);
                        setIsScrollEnabled(true);
                    }
                    return newPercentage;
                });
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [percentage]);

    useLayoutEffect(() => {
        if (!isScrollEnabled) return;

        let ctx = gsap.context(() => {
            let showNavTimeout;

            ScrollTrigger.create({
                trigger: bg1.current,
                pin: true,
                pinSpacing: false,
                start: 'top top',
                end: '+=600%',
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: '+=600%', // Increased for longer animation sequence
                    onUpdate: (self) => {
                        if (self.progress > 0.95 && !showNavTimeout) {
                            showNavTimeout = setTimeout(() => {
                                // setShowNav(true);
                            }, 2000);
                        }
                    },
                },
            });

            // Mask zoom out animation
            tl.to(mask.current, {
                scale: 20,
                duration: 2,
            }, 0);

            // Text animations
            tl.to([text1.current, text2.current, atherLogo.current], {
                y: -1000,
                opacity: 0,
                duration: 1,
            }, 0);

            // Image scale animation
            tl.to(img.current, {
                scale: 1.5,
                duration: 2,
            }, 0);

            // Image size adjustment
            tl.to(img.current, {
                width: '100%',
                height: '100%',
                duration: 2,
            }, 0);

            // Page move up animation - starts after the mask zoom out completes
            tl.to(img_container.current, {
                yPercent: -100,
                duration: 2,
                ease: 'none',
            }, '+=1'); // Start after 1 second delay to ensure other animations complete

        });

        return () => ctx.revert();
    }, [isScrollEnabled]);

    return (
        <div ref={bg1} className="relative overflow-hidden">
            <div className="bg absolute h-screen w-screen z-10"></div>
            <section>
                <div
                    ref={img_container}
                    className="img-container perspective flex items-center justify-center h-screen w-screen z-20 overflow-hidden"
                >
                    <video autoPlay loop muted className="image absolute w-full h-full object-cover" ref={img}>
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <img ref={mask} className="mask absolute w-full h-full object-cover" src={maskImg} alt="Mask" />
                    <div className="absolute flex text-white flex-col items-center justify-center z-30">
                        <h1 ref={text2} className="text-[100px]">
                            {/* <img ref={atherLogo} src={ather} /> */}
                        </h1>
                        <div ref={text1} className={`mt-[400px] textTrain ${showTextReveal ? 'visible' : ''}`}>
                            <TextTrain />
                        </div>
                        {showPercentage && (
                            <p
                                ref={text2}
                                className={'text-[120px] mt-[150px] mr-[1500px] montserrat-font'}
                            >
                                {percentage}%
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OverlayOrig;