import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Animation2.css'
const charVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.02 * i },
    }),
};

const lineVariants = (index) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.01,
            delayChildren: 0.01,
            delay: index * 1.5, // Add delay for subsequent lines
        },
    },
});

const AnimatedText = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const splitStringUsingRegex = (str) => {
        return str.split('&');
    };

    const textLines = splitStringUsingRegex(text);

    return (
        <div ref={containerRef} className="animated-text-container">
            {textLines.map((line, lineIndex) => (
                <motion.div
                    key={lineIndex}
                    variants={lineVariants(lineIndex)}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                    style={{ overflow: 'hidden' }}
                    className="line-container"
                >
                    {line.split('').map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={charVariants}
                            style={{ display: 'inline-block' }}
                            className="text-[7rem] montserrat-thick"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

function TextRevealStag2({ text }) {
    return (
        <div>
            <AnimatedText text={text} />
        </div>
    );
}

export default TextRevealStag2;
