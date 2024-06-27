import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import '../styles/Cards.css';
import helm from '../assets/helm.png';
import access from '../assets/access.png';
import merch from '../assets/merch.png';
import arrow from '../assets/Vector2.svg';
import AnimatedText from "./AnimatedText";

const cardData = [
    {
        img: helm,
        title: "Smart Helmet",
        price: "Say Halo to an all-new helmet experience.",
        btnText: "Explore Smart Helmets"
    },
    {
        img: access,
        title: "Accessories",
        price: "Wonderful. Purposeful.",
        btnText: "Shop Accessories"
    },
    {
        img: merch,
        title: "Merchandise",
        price: "Apparel. Made of Ather.",
        btnText: "Shop Merch"
    }
];

const TopUp = () => {
    const titleRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!titleRef.current) return;

        const rect = titleRef.current.getBoundingClientRect();
        const titleX = e.clientX - rect.left - rect.width / 2;
        const titleY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (titleY / rect.height) * 30;
        const rotationY = (titleX / rect.width) * -30;

        x.set(rotationX);
        y.set(rotationY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="topup-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
           <div className={'topup-start montserrat-reg'}>
               <AnimatedText text={"Top up your Ather experience."} cards2={false}/>
           </div>
            <div className={'shadow-circle'}>
                    <p>----------</p>
            </div>


            <div className="flex w-full justify-evenly product-container px-4 py-12 text-slate-900">
                {cardData.map((card, index) => (
                    <TiltCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ img, title, price, btnText }) => {
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
                display:"flex",
                justifyContent:"center",
                alignItems: "center"
            }}
            className="relative h-[590px] w-[540px] rounded-xl card-background"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute flex flex-col h-[550px] w-[500px] product-card-topup rounded-xl bg-white shadow-lg"
            >
                <div className={'topup-img'}>
                    <img src={img} className={'h-[350px]'}/>
                </div>
                <div className={'topup-container'}>
                    <div className={'topup-head montserrat-reg'}>
                        <p>{title}</p>
                    </div>
                    <div className={'topup-des montserrat-reg'}>
                        <p>{price}</p>
                    </div>
                    <div className={'topup-ul poppins-regular'}>
                        <p>{btnText}</p>
                        <img src={arrow}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TopUp;
