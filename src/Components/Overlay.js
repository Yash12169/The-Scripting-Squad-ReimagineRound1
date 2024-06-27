import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import maskImg from '../assets/mask.png';
import mask2 from '../assets/mask2.png';
import vid from '../assets/starting.mp4';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from "./TextReveal";
import TextTrain from "./TextTrain";
import ather from "../assets/Ather.svg"

gsap.registerPlugin(ScrollTrigger);

function Overlay({ setShowNav }) {
    const [percentage, setPercentage] = useState(0);
    const [message, setMessage] = useState('');
    const [showPercentage, setShowPercentage] = useState(true);
    const [showTextReveal, setShowTextReveal] = useState(false);
    const [showMask, setShowMask] = useState(false);
    const bg1 = useRef(null);
    const img_container = useRef(null);
    const img = useRef(null);
    const mask = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const container = useRef(null);
    const atherLogo = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTextReveal(true);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMask(true);
        }, 5500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        document.body.classList.add('no-scroll');

        const timer = setInterval(() => {
            setPercentage((prevPercentage) => {
                if (prevPercentage >= 100) {
                    clearInterval(timer);
                    document.body.classList.remove('no-scroll');
                    return 100;
                }
                const nextPercentage = prevPercentage + 1;
                if (nextPercentage <= 20) {
                    setMessage('Recharging Your Ride ...');
                } else if (nextPercentage > 20 && nextPercentage < 40) {
                    setMessage('Warming Up The Motors ...');
                } else if (nextPercentage >= 40 && nextPercentage < 60) {
                    setMessage('Energizing Your Experience ...');
                } else if (nextPercentage >= 60 && nextPercentage < 80) {
                    setMessage('Finalizing Performance Checks ...');
                } else if (nextPercentage >= 80 && nextPercentage <= 100) {
                    setMessage('Revving Up for Launch ...');
                }
                return nextPercentage;
            });
        }, 5);
        return () => {
            clearInterval(timer);
            document.body.classList.remove('no-scroll');
        };
    }, []);

    useEffect(() => {
        if (percentage === 100) {
            gsap.to(text2.current, {
                opacity: 0,
                duration: 1,
                onComplete: () => setShowPercentage(false)
            });
        }
    }, [percentage]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let showNavTimeout;

            ScrollTrigger.create({
                trigger: bg1.current,
                pin: true,
                pinSpacing: false,  // Changed to false
                start: 'top top',
                end: '+=300%',  // Increased from 200% to 300%
            });

            ScrollTrigger.create({  // New ScrollTrigger for img_container
                trigger: img_container.current,
                pin: true,
                pinSpacing: false,
                start: 'top top',
                end: '+=400%',
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: true,
                    scrub: 1,
                    start: 'top top',
                    end: '+=300%',  // Increased from 200% to 300%
                    onUpdate: (self) => {
                        if (self.progress > 0.95 && !showNavTimeout) {
                            showNavTimeout = setTimeout(() => {
                                setShowNav(true);
                            }, 2000);
                        }
                    },
                },
            })
                .to(img.current, { scale: 1.5 }, 0)  // Increased from 1.2 to 1.5
                .to(mask.current, { scale: 10 }, 0)
                .to(text1.current, { y: 40000 }, 0.05, '<')
                .to(text2.current, { y: -80000 }, 0.08, '<')
                .to(atherLogo.current, { y: -800 }, 0.05, '<')
                .fromTo(container.current, { yPercent: 100, scaleY: 2 }, { yPercent: 0, scaleY: 1 });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={bg1} className="relative">
            <div className="bg absolute h-screen w-screen z-10"></div>
            <section>
                <div
                    ref={img_container}
                    className="img-container perspective flex items-center justify-center h-screen w-screen z-20"
                >
                    <video autoPlay loop muted className="image absolute z-50" ref={img}>
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <img ref={mask} className="mask absolute" src={maskImg} alt="Mask" />
                    {/*{showMask===false && (<img ref={mask} className="mask absolute" src={mask2} alt="Mask"/>)}*/}
                    <div className="absolute flex text-white flex-col items-center justify-center z-30">
                        <h1 ref={text2} className="text-[100px]">
                            {/*<span className="text-white mb-[200px]">Ather.</span>*/}
                            {/*<img ref={atherLogo} src={ather} />*/}
                        </h1>
                        <div ref={text1} className={`mt-[400px] textTrain ${showTextReveal ? 'visible' : ''}`}>
                            <TextTrain />
                        </div>
                        {showPercentage && (
                            <p
                                ref={text2}
                                className={'text-[120px] mt-[150px] mr-[1500px] montserrat-font'}
                            >
                                {percentage}%
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Overlay;