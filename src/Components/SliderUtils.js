import { motion, useTransform, useScroll } from "framer-motion";
import { useRef,useState,useEffect } from "react";
import '../styles/SliderUtils.css'
import shield from '../assets/shield.png'
import truck from '../assets/truck.png'
import scooty from '../assets/scooty.png'
import pump from '../assets/pump.svg'
import community from '../assets/community.svg'
import wrench from '../assets/wrench.svg'
import TextReveal from "./TextReveal";

const SliderUtils = () => {
    return (
        <div className="bg-neutral-800">

            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-30%"]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2 } // Adjust this value as needed
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    const backgroundColor = isInView ? "#1D2951" : "#1D2951";

    return (
        <section
            ref={targetRef}
            className="relative h-[1700px]"
            style={{
                backgroundColor,
                transition: "background-color 0.5s ease-in-out"
            }}
        >
            <div className="sticky top-0 flex flex-col h-screen items-center overflow-hidden">
                <TextReveal delay={0.5}>
                    <div className={"montserrat-font-reg mb-[63px] mt-[130px] text-[55px] text-[#A8D5BA]"}>
                        Hassle Free Ownership
                    </div>
                </TextReveal>
                <TextReveal delay={0.2}>
                    <motion.div style={{x}} className="flex gap-[79px] ml-[200px]">
                        {cards.map((card) => (
                            <Card card={card} key={card.id}/>
                        ))}
                    </motion.div>
                </TextReveal>

            </div>
        </section>
    );
};

const Card = ({card}) => {
    const [hovered, setHovered] = useState(false);

    const contentStyle = {
        transition: 'transform 0.3s ease-in-out',
        transform: hovered ? 'translateY(-60px)' : 'translateY(0)',
        borderRadius: '15px',
        marginTop: '100px',
        cursor: 'pointer',
    };
    const pointer ={
        cursor:'pointer',
    }

    return (
        <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.id * 0.1 }}
            className="group relative flex flex-col h-[460px] drop-shadow w-[465px] rounded-[25px] overflow-hidden card-bg"
            onMouseEnter={() => {
                setHovered(true);
                console.log('Mouse entered');
            }}
            onMouseLeave={() => {
                setHovered(false);
                console.log('Mouse left');
            }}
            style={pointer}
        >
            <div className={'mt-[45px] ml-[45px]'}>
                <img src={card.icon} alt={card.title} />
            </div>
            <div style={contentStyle}>
                <div className="flex justify-center mb-[45px]">
                    <p className="text-[25px] poppins-regular text-white">
                        {card.title}
                    </p>
                </div>
                <div className={'w-[292px] h-[214px] flex flex-col ml-[86px]'}>
                    <p className="text-[18px] text-[#333] poppins-regular text-center">
                        {card.text}
                    </p>
                </div>
                <p className="block card-text text-[18px] text-[#333] poppins-regular text-center mt-4">
                    Learn More
                </p>
            </div>
        </motion.div>
    );
};

const cards = [
    {
        url: "/home/yash/Desktop/animations/src/img2.png",
        icon: shield,
        title: "Ather Battery Protect™",
        text: "A warranty that not just covers battery failure, but degradation too. If the battery State-of-Health falls below 70% anytime in 5 years, we will replace it, no questions asked ",
        id: 1,
    },
    {
        url: "/imgs/abstract/2.jpg",
        icon: scooty,
        title: "Ather Connect™",

        text: "Unlock a smarter ride with Google Maps, multi-stop Trip Planner™. Bluetooth call & music control, theft & tow alerts and a lot more.",
        id: 2,
    },
    {
        url: "/imgs/abstract/3.jpg",
        icon:truck,
        title: "Ather Roadside Assistance",
        text:"24x7 emergency assistance in case of accident, breakdown, puncture or when your Ather runs out of charge. Ride worry-free.",
        id: 3,
    },
    {
        url: "/imgs/abstract/4.jpg",
        title: "Ather Maintenance Plan",
        icon:wrench,
        id: 4,
        text:"Ensure your Ather scooter is always in top condition with our comprehensive maintenance plan. Includes regular servicing and parts replacement.",
    },
    {
        url: "/imgs/abstract/5.jpg",
        title: "Ather Charging Network",
        icon:pump,
        id: 5,
        text: "Access our extensive network of fast-charging stations across the city. Locate the nearest station through our app and charge on the go."
    },
    {
        url: "/imgs/abstract/6.jpg",
        title: "Ather Community",
        icon:community,
        id: 6,
        text:"Join the Ather community and connect with other Ather owners. Share tips, plan group rides, and stay updated on the latest news and events."
    },

];

export default SliderUtils;