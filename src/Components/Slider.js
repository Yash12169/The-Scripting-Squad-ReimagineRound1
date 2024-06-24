import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const wordList = [
    "More", "Thrills.", "Per", "Second."
];

const backgroundGradient = "radial-gradient(102.44% 136.73% at 6.63% -2.39%, #EBF3F5 0%, #C5E2F0 54.71%)";

const ExpandingCard = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const [words, setWords] = useState([]);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowScroll, setAllowScroll] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(latest => {
            const thresholds = [0.15, 0.3, 0.45, 0.6];
            const newWords = wordList.filter((_, index) => latest >= thresholds[index]);
            setWords(newWords);
            setSliderWidth(latest * 100);

            if (latest >= 0.6) {
                setTimeout(() => setShowParagraph(true), 500);
                setTimeout(() => setAllowScroll(true), 2000);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const width = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);
    const translateY = useTransform(scrollYProgress, [0.6, 1], allowScroll ? ["0%", "-100vh"] : ["0%", "0%"]);

    return (
        <section
            ref={targetRef}
            className="relative h-[200vh] carda"
            style={{ background: backgroundGradient }}
        >
            <motion.div
                style={{ y: translateY }}
                className="sticky top-0 h-screen carda rounded-3xl flex flex-col justify-center overflow-hidden mr-[10px] ml-[10px]"
            >
                <div className='fixed top-1/2 left-1/2 montserrat-font transform -translate-x-1/2 -translate-y-1/2 text-in text-[70px] font-bold text-[#1D2951] text-3xl p-4 rounded z-10'>
                    {words.map((word, index) => (
                        <span
                            key={index}
                            style={{
                                color: calculateTextColor(index, words.length, sliderWidth),
                                transition: 'color 0.3s ease',
                            }}
                        >
                            {word}{' '}
                        </span>
                    ))}
                    {showParagraph && (
                        <div className='mt-4 text-[24px] text-[#1D2951]'>
                            Presenting all-new electric scooters from Ather. Built to outperform both EV scooters and petrol scooters alike, with all the style, smarts and speed you need.
                        </div>
                    )}
                </div>
                <div className="h-[120vh] absolute inset-x-0 top-1/2 transform -translate-y-1/2" style={{ background: backgroundGradient }}>
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
        <div className="relative h-full w-full bg-#1D2951 rounded-3xl">
            <div
                style={{
                    backgroundImage: `url(/home/yash/Desktop/animations/src/img2.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                    backgroundColor: '#1D2951',
                    borderRadius: '25px',
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
        </div>
    );
};

const calculateTextColor = (index, totalWords, sliderWidth) => {
    const wordPosition = (index + 1) / totalWords * 100;
    return sliderWidth >= wordPosition ? backgroundGradient : 'green';
};

export default ExpandingCard;