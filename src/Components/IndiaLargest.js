import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import map from '../assets/map.png';
import '../styles/IndiaLargest.css';
import arrow from '../assets/Vector.svg'
gsap.registerPlugin(ScrollTrigger);

function IndiaLargest() {
    const containerRef = useRef(null);
    const videoContainerRef = useRef(null);
    const videoRef = useRef(null);
    const textRef = useRef(null);

    useLayoutEffect(() => {
        const container = containerRef.current;
        const videoContainer = videoContainerRef.current;
        const video = videoRef.current;
        const text = textRef.current;

        gsap.set(container, { height: '400vh' });
        gsap.set(video, { width: '960px', height: '515px' });
        gsap.set(text, { opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: videoContainer,
                pinSpacing: false,
            },
        });

        tl.to(video, {
            width: '100%',
            height: '100%',
            duration: 2,
        })
            .to(text, { opacity: 1, duration: 0.5 }, "-=0.5");

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div>
            <div ref={containerRef} className="relative">
                <div ref={videoContainerRef} className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
                    <img ref={videoRef} src={map} alt="Map" />
                    <div ref={textRef} className="absolute il-content">
                      <div className={'il-left'}>
                          <p className={'il-head montserrat-reg'}>Ather Grid™</p>
                          <div className={'il-des montserrat-reg'}>
                              <p>India's Largest</p>
                              <p>EV two-</p>
                              <p>wheeler</p>
                              <p>fast charging</p>
                              <p>network</p>
                          </div>
                          <div className={'il-ul poppins-regular'}>
                              <p>Learn More</p>
                              <img className={'w-[24px] h-[16px]'} src={arrow}/>
                          </div>
                      </div>
                        <div className={'il-right montserrat-reg'}>
                            <p>2500+</p>
                            <p>Fast Chargers</p>
                            <p>and Growing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndiaLargest;