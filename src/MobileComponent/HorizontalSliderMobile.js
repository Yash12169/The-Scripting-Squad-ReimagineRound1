import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import '../stylesMobile/TopUpMobile.css';
import helm from '../assets/helm.png';
import access from '../assets/access.png';
import merch from '../assets/merch.png';
import arrow from '../assets/Vector2.svg';
import TextReveal from "../Components/TextReveal";

const cards = [
    {
        id: 1,
        image: helm,
        title: "Smart Helmet",
        price: "Say Halo to an all-new helmet experience.",
        btnText: "Explore Smart Helmets"
    },
    {
        id: 2,
        image: access,
        title: "Accessories",
        price: "Wonderful. Purposeful.",
        btnText: "Shop Accessories"
    },
    {
        id: 3,
        image: merch,
        title: "Merchandise",
        price: "Apparel. Made of Ather.",
        btnText: "Shop Merch"
    }
];

const HorizontalSliderMobile = () => {
    return (
        <div className={'flex flex-col relative'}>
            <div className={'topup-mobile-start-container'}>
                <div className={'topup-mobile-start montserrat-reg'}>
                    <TextReveal delay={0.2}>
                        <p>Top up Your Ather experience.</p>
                        <div className={'shadow-mobile-circle'}>
                            <p>----------</p>
                        </div>
                    </TextReveal>
                </div>
            </div>
            <div className="bg-transparent">

            <HorizontalScrollCarousel />
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative product-mobile-card-topup  ml-[30px] h-[300px] w-[280px] overflow-hidden bg-neutral-200"
        >
            <div className={'topup-mobile-img'}>
                <img src={card.image} className={'h-[190px]'} alt={card.title} />
            </div>
            <div className={'topup-mobile-container'}>
                <div className={'topup-mobile-head montserrat-reg'}>
                    <p>{card.title}</p>
                </div>
                <div className={'topup-mobile-des montserrat-reg'}>
                    <p>{card.price}</p>
                </div>
                <div className={'topup-mobile-ul poppins-regular'}>
                    <p>{card.btnText}</p>
                    <img className={'w-[8px] h-[4px]'} src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default HorizontalSliderMobile;
