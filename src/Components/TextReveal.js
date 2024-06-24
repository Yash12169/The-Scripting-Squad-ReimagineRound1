// TextReveal.js
import React, { useEffect, useRef } from 'react';
import '../App.css'
const TextReveal = ({ children, delay = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observerElement = elementRef.current;
        if (observerElement) {
            observer.observe(observerElement);
        }

        return () => {
            if (observerElement) {
                observer.unobserve(observerElement);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className="reveal"
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default TextReveal;