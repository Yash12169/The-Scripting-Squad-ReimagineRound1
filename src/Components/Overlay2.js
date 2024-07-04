import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import vid from '../assets/video2.mp4';
import mask3 from "../assets/mask3.png";
import '../styles/Overlay2.css';

gsap.registerPlugin(ScrollTrigger);

function Overlay2() {
    const containerRef = useRef(null);
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const maskRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const videoContainer = videoContainerRef.current;
        const video = videoRef.current;
        const mask = maskRef.current;
        const text = textRef.current;

        gsap.set(container, { height: '400vh' });

        gsap.set(video, { width: '960px', height: '515px' });
        gsap.set(text, { opacity: 0 });

        // Initial pause
        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: '+=1', // 1 second pause
                pin: videoContainer,
                pinSpacing: false,
            }
        });

        // Main animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: '+=1 top', // Start after the initial pause
                end: 'bottom bottom',
                scrub: 2,
                pin: videoContainer,
                pinSpacing: false,
                onUpdate: (self) => {
                    if (self.progress >= 0.1) {
                        gsap.to(text, { opacity: 1, duration: 1 });
                    } else {
                        gsap.to(text, { opacity: 0, duration: 1 });
                    }
                }
            },
        });

        tl.to(mask, { scale: 10, opacity: 0, duration: 20 }) // Increased duration to slow down the scaling
            .to(video, {
                width: '100%',
                height: '100%',
                duration: 2,
            }, '<') // Start at the same time as mask animation
            .to(videoContainer, { yPercent: -100, duration: 2, ease: 'none' }, '>');

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative overflow-x-hidden">
            <div ref={videoContainerRef}
                 className="w-screen h-screen flex items-center justify-center overflow-hidden">
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
                    ref={textRef}
                    className="overlay2-content"
                >
                    <div className="overlay2-head montserrat-font">
                        <p>Introducing Halo & Halo bit</p>
                    </div>
                    <div className="overlay2-des montserrat-reg">
                        <p>Shine Bright, Ride Light - Ather’s Halo & Halobit!</p>
                    </div>
                    <div className="overlay2-btn">
                        <div className="custom-img-bn-btn poppins-regular">Book Now!</div>
                        <div className="custom-img-lm-btn-ovl poppins-regular">Pre-Book Halo</div>
                    </div>
                    <div className="overlay2-bottom poppins-regular">
                        <p>Smart Helmets</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overlay2;
