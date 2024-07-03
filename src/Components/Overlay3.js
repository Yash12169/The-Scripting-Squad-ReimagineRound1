
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import TransNavbar from "./TransNavbar";
import mask3 from "../assets/maskFinal.png";
import vid from "../assets/starting.mp4";
import '../styles/Overlay2.css';
import {VIDEOS} from './Videos'
import LoadingScreen from "./LoadingScreen";
function Overlay3() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [videoFullWidth, setVideoFullWidth] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [allowScroll, setAllowScroll] = useState(false);
    const [percentComplete, setPercentComplete] = useState(0);
    const [showPercentage, setShowPercentage] = useState(true);

    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const maskRef = useRef(null);
    const navbarRef = useRef(null);
    const lastScrollTop = useRef(0);
    const elementRef = useRef(null);
    const [width,setWidth]= useState(0);






    useEffect(() => {
        const getElementWidth = () => {
            if (elementRef.current) {
                const currentWidth = elementRef.current.clientWidth; // or use offsetWidth for total width including padding and borders
                setWidth(currentWidth);
            }
        };

        // Call once when component mounts
        getElementWidth();

        // Call whenever window is resized
        window.addEventListener('resize', getElementWidth);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', getElementWidth);
        };
    }, []);






    useEffect(() => {
        const mask = maskRef.current;
        const video = videoRef.current;

        gsap.set(video, { width: '400px', height: '250px' });

        const tl = gsap.timeline();

        setTimeout(() => {
            tl.to(mask, {
                scale: 10,
                opacity: 0,
                duration: 2,
                onComplete: () => {
                    gsap.set(mask, { display: 'none' });
                }
            })
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
        }, 3500);

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
                }, 500);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

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

            lastScrollTop.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videoFullWidth, allowScroll]);

    useEffect(() => {
        if (navbarRef.current) {
            gsap.to(navbarRef.current, {
                opacity: isNavbarVisible ? 1 : 0,
                y: isNavbarVisible ? 0 : -50,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }, [isNavbarVisible]);

    useEffect(() => {
        if (!allowScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [allowScroll]);

    return (
        <div ref={elementRef}>
            <div ref={navbarRef} style={{opacity: 0, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}}>
                {showNavbar && <TransNavbar/>}
            </div>


            <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden">
                <div ref={videoContainerRef}
                     className="w-full h-full flex items-center justify-center overflow-hidden">
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
                    <div
                        className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
                        style={{
                            opacity: showPercentage ? 1 : 0,
                            transition: 'opacity 0.5s ease-out'
                        }}
                    >
                        {showPercentage && (
                            <p className={'absolute bottom-[100px] left-[100px] montserrat-font text-[100px]'}
                               style={{color: 'white'}}>{percentComplete}%</p>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Overlay3;
