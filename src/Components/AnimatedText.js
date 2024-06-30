import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Cards.css'
const AnimatedText = ({ text,cards2 }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1, // Percentage of the component's visibility before triggering
    });

    // Split the text into individual words
    const words = text.split('  ');

    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="animated-text-container"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', fontSize: '80pt', color: 'white', gap: '0.5em' }}
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={childVariants} style={{ display: 'inline-block' }} className={ cards2 ? 'pickAther text-[75px] montserrat-thick':'topup-start montserrat-thick'}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;
