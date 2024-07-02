import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import '../styles/Cards3.css'
import rizta from '../assets/AtherApex.png'

const Cards3 = ({isNew}) => {
    return (



            <div className="product-container-mobile">
                <TiltCard/>
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
            className="relative h-[0px] w-[0px] rounded-xl card-background-mobile"
        >
            <div
                style={{
                    transform: "translateZ(75px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute flex flex-col product-card-r w-[346px] h-[385px] rounded-xl  shadow-lg"
            >
                    <div>
                        <img className={'h-[170px] w-[170px]'} src={rizta}/>
                    </div>

                <div className={'bg-white'}>
                    <div className={'product-title-r montserrat-reg'}>
                        <p>Ather 450 Apex</p>
                    </div>
                    <div className={'product-price-r montserrat-reg'}>
                        <p>Starting at ₹ 1,94,999</p>
                    </div>
                    <div className={'product-btn-r poppins-regular'}>
                        <div className={'book-btn-r'}>
                            <p>Book Now !</p>
                        </div>
                        <div className={'learn-btn-r'}>
                            Learn More
                        </div>
                    </div>
                </div>
            </div>


        </motion.div>
    );
};

export default Cards3;