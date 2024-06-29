import { useAnimate } from "framer-motion";
import React, { useRef, useEffect } from "react";
import leaf from '../assets/leaf.svg';
import Cards2 from "./Cards2";
import Cards from "./Cards";

export const ImageTrail = () => {
    return (
        <MouseImageTrail
            renderImageBuffer={50}
            rotationRange={25}
            images={[leaf, leaf, leaf, leaf, leaf, leaf]}
        >
            <section className="grid place-content-center bg-white">
                <div className="image-trail-container flex items-center flex-col gap-2">
                    <Cards2 />
                    <Cards />
                </div>
            </section>
        </MouseImageTrail>
    );
};

const MouseImageTrail = ({
                             children,
                             images,
                             renderImageBuffer,
                             rotationRange,
                         }) => {
    const [scope, animate] = useAnimate();
    const lastRenderPosition = useRef({ x: 0, y: 0 });
    const imageRenderCount = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            const container = document.querySelector('.image-trail-container');
            if (!container.contains(e.target)) {
                return;
            }

            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;

            const distance = calculateDistance(
                clientX + scrollX,
                clientY + scrollY,
                lastRenderPosition.current.x,
                lastRenderPosition.current.y
            );

            if (distance >= renderImageBuffer) {
                lastRenderPosition.current.x = clientX + scrollX;
                lastRenderPosition.current.y = clientY + scrollY;

                renderNextImage(clientX + scrollX, clientY + scrollY);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [animate, renderImageBuffer, images.length, rotationRange]);

    const calculateDistance = (x1, y1, x2, y2) => {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    const renderNextImage = (clientX, clientY) => {
        const imageIndex = imageRenderCount.current % images.length;
        const selector = `[data-mouse-move-index="${imageIndex}"]`;
        const el = document.querySelector(selector);

        // Calculate random angle and distance for initial position
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 100 + 50; // Adjust as needed

        // Calculate initial position
        const initialX = clientX + Math.cos(angle) * distance;
        const initialY = clientY + Math.sin(angle) * distance;

        // Set initial position
        el.style.top = `${initialY}px`;
        el.style.left = `${initialX}px`;
        el.style.zIndex = imageRenderCount.current.toString();

        const rotation = Math.random() * rotationRange;

        // Animate from initial position to cursor position
        animate(
            selector,
            {
                opacity: [0, 1],
                top: [initialY, clientY],
                left: [initialX, clientX],
                transform: [
                    `translate(-50%, -50%) scale(0.5) ${
                        imageIndex % 2
                            ? `rotate(${rotation}deg)`
                            : `rotate(-${rotation}deg)`
                    }`,
                    `translate(-50%, -50%) scale(1) ${
                        imageIndex % 2
                            ? `rotate(-${rotation}deg)`
                            : `rotate(${rotation}deg)`
                    }`,
                ],
            },
            { type: "spring", damping: 15, stiffness: 200 }
        );

        // Fade out animation
        animate(
            selector,
            {
                opacity: [1, 0],
            },
            { ease: "linear", duration: 0.5, delay: 5 }
        );

        imageRenderCount.current += 1;
    };

    return (
        <div
            ref={scope}
            className="relative w-full h-full"
        >
            {children}
            {images.map((img, index) => (
                <img
                    className="pointer-events-none absolute left-0 top-0 h-[56px] w-auto rounded-xl bg-transparent object-cover opacity-0"
                    src={img}
                    alt={`Mouse move image ${index}`}
                    key={index}
                    data-mouse-move-index={index}
                />
            ))}
        </div>
    );
};
