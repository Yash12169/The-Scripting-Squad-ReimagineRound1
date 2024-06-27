import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../assets/source_img1.png';
import img2 from '../assets/source_img2.png';
import img3 from '../assets/source_img3.png';
import img4 from '../assets/source_img4.png';
import img5 from '../assets/source_img5.png';
import mask3 from "../assets/mask4.png";

gsap.registerPlugin(ScrollTrigger);

function SlideShow() {
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);
    const imageRefs = useRef([]);
    const maskRef = useRef(null);

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
                {[img1, img2, img3, img4, img5].map((img, index) => (
                    <img
                        key={index}
                        ref={el => imageRefs.current[index] = el}
                        src={img}
                        alt={`Image ${index + 1}`}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                ))}
                {/*<img*/}
                {/*    ref={maskRef}*/}
                {/*    src={mask3}*/}
                {/*    alt="Mask"*/}
                {/*    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"*/}
                {/*/>*/}
            </div>
        </div>
    );
}

export default SlideShow;