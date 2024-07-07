import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/ImageReveal.css'; // Make sure to include your CSS file

const ImageSection = ({ imgSrc="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" }) => {
    const imgContainerRef = useRef(null);

    useEffect(() => {
        const image = imgContainerRef.current;

        const removeOverlay = (overlay) => {
            let tl = gsap.timeline();

            tl.to(overlay, {
                duration: 1.4,
                ease: 'Power2.easeInOut',
                width: '0%',
            });

            return tl;
        };

        const scaleInImage = (img) => {
            let tl = gsap.timeline();

            tl.from(img, {
                duration: 1.4,
                scale: 1.4,
                ease: 'Power2.easeInOut',
            });

            return tl;
        };

        gsap.set(image, {
            visibility: 'visible',
        });

        const overlay = image.querySelector('.image-reveal-overlay');
        const img = image.querySelector('.image-reveal-img');

        const masterTL = gsap.timeline({ paused: true });
        masterTL.add(removeOverlay(overlay)).add(scaleInImage(img), '-=1.4');

        const options = {
            threshold: 0,
        };

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    masterTL.play();
                } else {
                    masterTL.progress(0).pause();
                }
            });
        }, options);

        io.observe(image);

        return () => {
            io.disconnect();
        };
    }, []);

    return (
        <section className="image-reveal-section">
            <div className="image-reveal-container" ref={imgContainerRef}>
                <div className="image-reveal-overlay"></div>
                <img className="image-reveal-img" src={imgSrc} alt="" />
            </div>
        </section>
    );
};

export default ImageSection;
