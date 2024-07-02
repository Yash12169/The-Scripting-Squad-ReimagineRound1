import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import '../stylesMobile/SliderMobile.css'
const wordList = [
    "Now ,", "lets", "Explore", "the", "future", "of", "electric", "scooters", "with",
    "cutting-edge", "technology", "and", "sustainable", "innovation",
];

const backgroundGradient = "radial-gradient(102.44% 136.73% at 6.63% -2.39%, #EBF3F5 0%, #C5E2F0 54.71%)";

const ExpandingCard = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const [words, setWords] = useState([]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(latest => {
            const wordCount = Math.min(Math.floor(latest * 30), 15); // Max 15 words
            const newWords = wordList.slice(0, wordCount);
            setWords(newWords);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const width = useTransform(scrollYProgress, [0, 0.5], ["0px", "100%"]);
    const translateY = useTransform(scrollYProgress, [0.5, 1], ["0%", "-100vh"]);

    return (
        <section
            ref={targetRef}
            className="relative h-[200vh] carda"
            style={{ background: backgroundGradient }}
        >
            <motion.div
                style={{ y: translateY }}
                className="sticky top-0 h-screen carda rounded-3xl flex flex-col justify-center overflow-hidden mt-[500px] ml-[10px] mr-[10px]"
            >
                <div className='fixed montserrat-reg top-1/2 left-1/2 transform -translate-x-1/2  slider-text-mobile -translate-y-1/2 text-in  p-4 rounded z-10'>
                    {words.join(" ")}
                </div>
                <div className="h-[80vh] absolute inset-x-0 top-1/2 transform -translate-y-1/2" style={{ background: backgroundGradient }}>
                    <motion.div
                        style={{ width }}
                        className="h-[900px] overflow-hidden rounded-lg origin-left absolute top-1/2 left-0 transform -translate-y-1/2"
                    >
                        <Card />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const Card = () => {
    return (
        <div className="relative h-[800px] mt-[100px] w-full bg-[#1D2951] text-[#FFF] rounded-3xl">
            <div
                style={{
                    backgroundImage: `url(/home/yash/Desktop/animations/src/img2.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
        </div>
    );
};

export default ExpandingCard;