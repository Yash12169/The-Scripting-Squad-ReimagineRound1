import React, { useEffect, useRef, useState } from 'react';
import TextReveal from "../Components/TextReveal";
import vid1 from "../assets/vidMobile_2.mp4";
import rizta from '../assets/MeetRizta.png';
import bike from "../assets/BikeScooters.png";
import bar from "../assets/dot.svg";
import dull_bar from "../assets/dull_dot.svg";
import arrow_down from "../assets/arrow_down.svg";
import img1 from '../assets/imag1.png';
import img2 from '../assets/imag2.png';
import '../stylesMobile/Animation2Mobile.css'
import img3 from '../assets/imag3.png';
import TransNavbarMobile from "../MobileComponent/TransNavbarMobile";

function Animation2Mobile() {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 2000 && scrollTop < 4300) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="anim2-mobile flex flex-col w-screen h-screen">
            <div className={`navbar-mob ${showNavbar ? 'visible' : ''} mix-blend-difference`}>
                <TransNavbarMobile />
            </div>

            <div
                className="montserrat-thick-2-mobile text-[em] text-[#1D2951] ml-[30px] mr-[30px] mt-[135px] mb-[30px]">
                <div className={'mb-[60px] montserrat-thick text-[#1D2951] text-[3rem] line-height-mobile'}>
                    <TextReveal delay={0.1}>
                        <p>Introducing Rizta</p>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                        <p className={''}>with Love and innovation.</p>
                    </TextReveal>
                </div>
            </div>

            <TextReveal delay={0.3}>
                <div className="ml-[15px] mr-[15px]">
                    <div className={'absolute top-[0px] left-[90px] flex flex-col gap-[15px]'}>
                        <div className={'montserrat-thick slide-text-mobile '}>
                            <p>Meet Rizta</p>
                        </div>
                        <div className={'poppins-regular slide-des-mobile'}>
                            <p>From our family to yours.</p>
                        </div>
                        <div className={'ani2-btn-container-mobile gap-[20px] flex '}>
                            <div className={'custom-mobile-bn poppins-regular'}>
                                <p>Book Now !</p>
                            </div>
                            <div className={'custom-mobile-lm h-fit poppins-regular'}>
                                <p>Explore Rizta</p>
                            </div>
                        </div>
                    </div>
                    <img className="rounded-[35px]" src={img1} alt="Rizta"/>
                </div>
            </TextReveal>

            <div className={'mt-[200px] flex flex-col gap-[15px]'}>
                <div className={'w-screen h-[6px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[8px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[10px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[15px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[20px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[28px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[35px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[50px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[70px] bg-[#1D2951] mb-[15px]'}></div>
            </div>

            <div className={'w-screen flex flex-col bg-[#1d2951]'}>
                <div className={'pt-[120px] text-[3.3rem] montserrat-thick text-[#A8D5BA] ml-[15px] line-height-mobile'}>
                    <TextReveal delay={0.1}>
                        <p>Ather 450</p>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                        <p>unveils <span
                            className={'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 to-red-400'}>Magic Twist</span> ride.
                        </p>
                    </TextReveal>
                </div>
                <div className={'video-cont-ani-mobile'}>
                    <TextReveal delay={0.3}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={'video-player-mobile h-screen'}
                        >
                            <source src={vid1} className={'h-screen'} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </TextReveal>
                </div>
                <div className="ml-[15px] mt-[30px] mr-[15px]">

                    <div className={'absolute top-[3700px] left-[0px] flex flex-col  gap-[15px]'}>
                        <TextReveal delay={0.1}>
                            <div className={'montserrat-thick ml-[20px] w-[90%] slide-text-mobile'}>
                                <p>The Bike of scooters</p>
                            </div>
                        </TextReveal>
                        <TextReveal delay={0.1}>
                            <div className={'slide-des-mobile poppins-regular'}>
                                <p>Ather 450</p>
                            </div>
                        </TextReveal>
                        <TextReveal delay={0.1}>
                            <div className={'ani2-btn-container flex justify-center'}>
                                <div className={'custom-mobile-bn poppins-regular'}>
                                    <p>Book Now !</p>
                                </div>
                                <div className={'custom-mobile-lm-2 poppins-regular'}>
                                    <p>Explore A450</p>
                                </div>
                            </div>
                        </TextReveal>
                    </div>

                    <img className="rounded-[35px]" src={img2} alt="450"/>
                </div>
            </div>

            <div className="ani2-empty-mobile">
                <div>a</div>
                <div>a</div>
                <div>a</div>
            </div>
        </div>
    );
}

export default Animation2Mobile;
