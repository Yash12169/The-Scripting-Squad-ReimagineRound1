import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import '../styles/Cards.css'
import rizta from '../assets/AtherRizta.png'
import AnimatedText from "./AnimatedText";
import TextReveal from "./TextReveal";
const Cards2 = () => {
    const cards2= true;
    return (
        <div className={'primary-bg'}>
            <div className={'more-thrills'}>
                <AnimatedText text={'More Thrills. Per Second.'} cards2={false}/>
                <TextReveal delay={0.6}>
                    <p className={'mt-txt poppins-regular'}>Presenting all-new electric scooters from Ather. Built to
                        outperform both EV scooters and petrol scooters alike, with all the style, smarts and speed you
                        need.</p>
                </TextReveal>
                <div className={'shadow-circle2'}>
                    <p>----------</p>
                </div>
            </div>
            <TextReveal delay={0.9}>
                <div className={'pickAther'}>
                    <AnimatedText text={"Pick Your Ather"} cards2={cards2}/>
                </div>
            </TextReveal>
            <div className="grid w-full place-content-center product-container px-4 py-12 text-slate-900">
            <TiltCard/>
            </div>
        </div>

    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return [0, 0];

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="relative h-[620px] w-[1600px] rounded-xl card-background"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute product-card-r w-[1530px] h-[551px] rounded-xl  shadow-lg"
            >
                <div className={'ml-[205px]'}>
                    <div className={'product-btn-green poppins-regular'}>
                        <p>. All New .</p>
                    </div>
                    <div className={'product-title-r montserrat-reg'}>
                        <p>Ather Rizta</p>
                    </div>
                    <div className={'product-price-r montserrat-reg'}>
                        <p>Starting at ₹ 1,09,999</p>
                    </div>
                    <div className={'product-btn-r poppins-regular'}>
                        <div className={'book-btn-r'}>
                            <p>Book Now !</p>
                        </div>
                        <div className={'learn-btn-r'}>
                            Explore Rizta
                        </div>
                    </div>
                </div>
                <img  className={'mr-[205px] w-[440px] h-[459px] mt-[45px]'} src={rizta}/>
            </div>
        </motion.div>
    );
};

export default Cards2;