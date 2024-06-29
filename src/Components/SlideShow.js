import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/source_img1.png';
import img2 from '../assets/source_img2.png';
import img3 from '../assets/source_img3.png';
import img4 from '../assets/source_img4.png';
import img5 from '../assets/source_img5.png';
import mask3 from "../assets/mask4.png";
import '../styles/SlideShow.css'
import TextReveal from "./TextReveal";
import bar from '../assets/bar.png'
import dull_bar from "../assets/dull_bar.png"
import downarrow from '../assets/down_arrow.svg'
gsap.registerPlugin(ScrollTrigger);

function SlideShow() {
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);
    const imageRefs = useRef([]);
    const maskRef = useRef(null);

    const slides = [
        {
            index:0,
            img: img1,
            text: "Advanced Digital Dashboard",
            description:"Stay informed with real-time data on speed, battery status, and more.",
            model: "Ather Rizta",
        },
        {
            index:1,
            img: img2,
            text: "Efficient Charging Solutions",
            description: "Quick and convenient charging for uninterrupted journeys. Experience the power of advanced electric mobility.",
            model: "Ather 450S"
        },
        {
            index:2,
            img: img3,
            text: "Spacious Storage",
            description: "Designed to carry all your essentials with ease. Enjoy the convenience of a large trunk space for your daily needs.",
            model: "Model 3"
        },
        {
            index:3,
            img: img4,
            text: "Multiple Riding Modes",
            description: "Switch effortlessly between different riding modes to suit your journey. Experience ultimate control and adaptability.",
            model: "Ahter 450X"
        },
        {
            index:4,
            img: img5,
            text: "Enhanced Night Riding",
            model: "Ather 450X",
            description: "Experience safe and stylish rides even at night with advanced lighting features that illuminate your path.",
        }
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
            scale: 1600 / Math.max(finalImage.offsetWidth, finalImage.offsetHeight),
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
        <div ref={containerRef} className="relative">
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
                        <div className={'slide-content'}>
                           <div className={'slide-content-inner'}>
                               <TextReveal delay={0.1}>
                                   <div className="slide-text montserrat-font">
                                       {slide.text}
                                   </div>
                               </TextReveal>

                               <TextReveal delay={0.2}>
                                   <div className="slide-des poppins-regular">
                                       {slide.description}
                                   </div>
                               </TextReveal>
                               <TextReveal delay={0.3}>
                                   <div className="slide-model montserrat-reg">

                                       <div className="custom-img-bn-btn">Explore Now !</div>
                                       <div className="custom-img-lm-btn">View Specifications</div>

                                   </div>
                               </TextReveal>
                           </div>

                            <div>
                                <TextReveal delay={0.4}>
                                    <div className="slide-bottom poppins-regular">

                                        <div className={'slide-object'}>
                                            <p className={'slide-bottom-text'}>Dashboard</p>
                                            {slide.index === 0 && (<img src={bar}/>)}
                                            {slide.index !== 0 && (<img src={dull_bar}/>)}
                                        </div>
                                        <div className={'slide-object'}>
                                            <p>Charging</p>
                                            {slide.index === 1 && (<img src={bar}/>)}
                                            {slide.index !== 1 && (<img src={dull_bar}/>)}
                                        </div>
                                        <div className={'slide-object'}>
                                            <p className={'slide-bottom-text'}>Storage</p>
                                            {slide.index === 2 && (<img src={bar}/>)}
                                            {slide.index !== 2 && (<img src={dull_bar}/>)}
                                        </div>
                                        <div className={'slide-object'}>
                                            <p>Modes</p>
                                            {slide.index === 3 && (<img src={bar}/>)}
                                            {slide.index !== 3 && (<img src={dull_bar}/>)}
                                        </div>
                                        <div className={'slide-object'}>
                                            <p>Lighting</p>
                                            {slide.index === 4 && (<img src={bar}/>)}
                                            {slide.index !== 4 && (<img src={dull_bar}/>)}
                                        </div>
                                    </div>
                                </TextReveal>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default SlideShow;
