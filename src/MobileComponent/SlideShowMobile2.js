import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/imag1.png';
import img2 from '../assets/imag2.png';
import img3 from '../assets/imag3.png';

import '../stylesMobile/SlideShowMobile.css'
import TextReveal from "../Components/TextReveal";
import bar from '../assets/bar.png'
import dull_bar from "../assets/dull_bar.png"

gsap.registerPlugin(ScrollTrigger);

function SlideShowMobile() {
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);
    const imageRefs = useRef([]);
    const maskRef = useRef(null);

    const slides = [
        {
            index:0,
            img: img1,
            text: "Meet Rizta",
            description:"From our family to yours.",
            model: "Ather Rizta",
        },
        {
            index:1,
            img: img2,
            text: "The Bike of Scooters",
            description: "Ather 450",
            model: "Ather 450S"
        },
        {
            index:2,
            img: img3,
            text: "Ather 450 Apex™ unveiled",
            description: "Ather 450 Apex",
            model: "Model 3"
        },

    ];

    useLayoutEffect(() => {
        const container = containerRef.current;
        const imageContainer = imageContainerRef.current;
        const images = imageRefs.current;
        const mask = maskRef.current;
        const finalImage = images[images.length - 1];

        gsap.set(container, { height: '600vh' }); // Adjust as needed
        gsap.set(mask, { scale: 20, opacity: 0 });
        gsap.set(images, { yPercent: 100, opacity: 0 });
        gsap.set(images[0], { yPercent: 0, opacity: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: imageContainer,
                pinSpacing: false,
            },
        });

        // Slide and fade images
        images.forEach((img, index) => {
            if (index < images.length - 1) {
                tl.to(img, {
                    yPercent: -33,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.inOut'
                });
                tl.to(images[index + 1], {
                    yPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.inOut'
                }, '<');
            }
        });

        // Simultaneously scale in the mask and scale down the final image
        tl.to(mask, {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: 'power2.out'
        }, 'scaleEffect');

        tl.to(finalImage, {
            scale: 500 / Math.max(finalImage.offsetWidth, finalImage.offsetHeight),
            duration: 2,
            ease: 'power2.out'
        }, 'scaleEffect');

        // Move the final image and mask up together
        tl.to([finalImage, mask], {
            yPercent: -100,
            duration: 1,
            ease: 'power2.in'
        });

        // Move the image container up
        tl.to(imageContainer, { yPercent: -100, duration: 2, ease: 'none' }, '<');

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative z-[300]">
            <div ref={imageContainerRef}
                 className="w-screen h-screen flex items-center justify-center overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        ref={el => imageRefs.current[index] = el}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <img
                            src={slide.img}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className={'slide-content-mobile'}>

                            <div className={'slide-content-inner-mobile absolute top-[0px] left-[80px] w-[200px]'}>
                                <TextReveal delay={0.1}>
                                    <div className="slide-text-mobile  montserrat-font">
                                        {slide.text}
                                    </div>
                                </TextReveal>

                                <TextReveal delay={0.1}>
                                    <div className="slide-des-mobile poppins-regular">
                                        {slide.description}
                                    </div>
                                </TextReveal>
                                <TextReveal delay={0.1}>
                                    <div className="slide-model-mobile montserrat-reg">

                                        <div className="custom-mobile-bn">Explore Now !</div>
                                        <div className="custom-mobile-lm-2">View Specifications</div>

                                    </div>
                                </TextReveal>
                            </div>

                            <div>

                                {/*<div className="slide-bottom-mobile poppins-regular">*/}

                                {/*    <div className={'slide-object'}>*/}
                                {/*        <p className={'slide-bottom-text'}>Dashboard</p>*/}
                                {/*        {slide.index === 0 && (<img src={bar}/>)}*/}
                                {/*        {slide.index !== 0 && (<img src={dull_bar}/>)}*/}
                                {/*    </div>*/}
                                {/*    <div className={'slide-object'}>*/}
                                {/*        <p>Charging</p>*/}
                                {/*        {slide.index === 1 && (<img src={bar}/>)}*/}
                                {/*        {slide.index !== 1 && (<img src={dull_bar}/>)}*/}
                                {/*    </div>*/}
                                {/*    <div className={'slide-object'}>*/}
                                {/*        <p className={'slide-bottom-text'}>Storage</p>*/}
                                {/*        {slide.index === 2 && (<img src={bar}/>)}*/}
                                {/*        {slide.index !== 2 && (<img src={dull_bar}/>)}*/}
                                {/*    </div>*/}
                                {/*    <div className={'slide-object'}>*/}
                                {/*        <p>Modes</p>*/}
                                {/*        {slide.index === 3 && (<img src={bar}/>)}*/}
                                {/*        {slide.index !== 3 && (<img src={dull_bar}/>)}*/}
                                {/*    </div>*/}
                                {/*    <div className={'slide-object'}>*/}
                                {/*        <p>Lighting</p>*/}
                                {/*        {slide.index === 4 && (<img src={bar}/>)}*/}
                                {/*        {slide.index !== 4 && (<img src={dull_bar}/>)}*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default SlideShowMobile;
