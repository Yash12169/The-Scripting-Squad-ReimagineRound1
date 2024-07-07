import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import TransNavbar from "./TransNavbar";
import mask3 from "../assets/mask2.png";
import newMask from "../assets/maskTop.png"; // Add this line
import vid from "../assets/starting.mp4";
import '../styles/Overlay2.css';
import {VIDEOS} from './Videos'
import LoadingScreen from "./LoadingScreen";
import StaticComponent from "./StaticComponent";
import Navbar from "./Navbar";
import vid2 from '../assets/apex_video.mp4'
import Animation2 from "./Animation2";

function Overlay3() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [videoFullWidth, setVideoFullWidth] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [allowScroll, setAllowScroll] = useState(false);
    const [percentComplete, setPercentComplete] = useState(0);
    const [showPercentage, setShowPercentage] = useState(true);
    const [scrolledPastOverlay, setScrolledPastOverlay] = useState(false);

    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const maskRef = useRef(null);
    const newMaskRef = useRef(null); // Add this line
    const navbarRef = useRef(null);
    const lastScrollTop = useRef(0);
    const elementRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const getElementWidth = () => {
            if (elementRef.current) {
                const currentWidth = elementRef.current.clientWidth;
                setWidth(currentWidth);
            }
        };

        getElementWidth();
        window.addEventListener('resize', getElementWidth);

        return () => {
            window.removeEventListener('resize', getElementWidth);
        };
    }, []);

    useEffect(() => {
        const mask = maskRef.current;
        const newMask = newMaskRef.current;
        const video = videoRef.current;

        gsap.set(video, { width: '100%', height: '100vh' });
        gsap.set(newMask, { opacity: 1 });

        const tl = gsap.timeline();

        setTimeout(() => {
            // Fade out the new mask over 2 seconds
            tl.to(newMask, {
                opacity: 0,
                duration: 3.5,
                onComplete: () => {
                    gsap.set(newMask, { display: 'none' });
                }
            });

            // After 1 second (3 seconds total), start the original mask animation
            tl.to(mask, {
                scale: 80,
                opacity: 1,
                duration: 2,
                onComplete: () => {
                    gsap.set(mask, { display: 'none' });
                }
            }, "+=1")
                .to(video, {
                    width: '100%',
                    height: '100%',
                    duration: 2,
                    onComplete: () => {
                        setVideoFullWidth(true);
                        setTimeout(() => {
                            setShowNavbar(true);
                            setAllowScroll(true);
                            if (navbarRef.current) {
                                gsap.fromTo(navbarRef.current,
                                    { opacity: 0, y: -50 },
                                    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
                                );
                            }
                            startMaskScaling();
                        }, 1000);
                    }
                }, '<');
        }, 1500);

        return () => {
            tl.kill();
        };
    }, []);

    const startMaskScaling = () => {
        gsap.to(maskRef.current, {
            scale: 10,
            duration: 2,
            opacity: 0,
            onComplete: () => {
                gsap.set(maskRef.current, { display: 'none' });
            }
        });
    };

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            setPercentComplete(counter);

            if (counter === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setShowPercentage(false);
                }, 50);
            }
        }, 60);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const overlayHeight = elementRef.current?.clientHeight || 0;

            if (!allowScroll) {
                window.scrollTo(0, 0);
            }

            if (videoFullWidth) {
                if (scrollTop > lastScrollTop.current) {
                    setIsNavbarVisible(false);
                } else {
                    setIsNavbarVisible(true);
                }
            }

            setScrolledPastOverlay(scrollTop > overlayHeight);

            lastScrollTop.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videoFullWidth, allowScroll]);

    useEffect(() => {
        if (navbarRef.current) {
            gsap.to(navbarRef.current, {
                opacity: isNavbarVisible && !scrolledPastOverlay ? 1 : 0,
                y: isNavbarVisible && !scrolledPastOverlay ? 0 : -50,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }, [isNavbarVisible, scrolledPastOverlay]);

    useEffect(() => {
        if (!allowScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [allowScroll]);

    return (
        <div ref={elementRef}>
            <div ref={navbarRef} style={{
                opacity: 0,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                mixBlendMode: "difference"
            }}>
                {/*{showNavbar && (*/}
                {/*    <TransNavbar/>*/}
                {/*)}*/}
            </div>

            <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
                <div ref={videoContainerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover"
                    >
                        <source src={vid} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <img
                        ref={maskRef}
                        src={mask3}
                        alt="Mask"
                        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    />
                    <img
                        ref={newMaskRef}
                        src={newMask}
                        alt="New Mask"
                        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                        style={{
                            opacity: showPercentage ? 1 : 0,
                            transition: 'opacity 0.5s ease-out'
                        }}
                    >
                        {showPercentage && (
                            <p className={'absolute bottom-[100px] montserrat-font text-[100px]'}
                               style={{color: 'white'}}>{percentComplete}%</p>
                        )}
                    </div>
                    {
                        showPercentage && (
                            <div>
                                <div
                                    className="w-0 h-[5px] bg-white absolute bottom-[170px] right-[1100px] animate-line"></div>
                                <div
                                    className="w-0 h-[5px] bg-white absolute bottom-[170px] left-[1100px] animate-line"></div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Overlay3;