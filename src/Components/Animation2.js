import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import TextRevealStag2 from "./TextRevealStag2";
import TextReveal from "./TextReveal";
import vid1 from "../assets/crpd.mp4";
import rizta from '../assets/MeetRizta.png'
import bike from "../assets/BikeScooters.png";
import bar from "../assets/bar.png";
import dull_bar from "../assets/dull_bar.png";
import arrow_down from "../assets/arrow_down.svg";
import Overlay3 from "./Overlay3";
import TransNavbar from "./TransNavbar";
import ImageReveal from "./ImageReveal";

function Animation2() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [scrolledPastOverlay, setScrolledPastOverlay] = useState(false);

    useEffect(() => {
        // Show the navbar after a delay
        const showNavbarTimeout = setTimeout(() => {
            setShowNavbar(true);
        }, 8000); // Show the navbar after 6 seconds

        // Clean up timeout on unmount
        return () => clearTimeout(showNavbarTimeout);
    }, []);

    // Ref for navbar animation
    const navbarRef = useRef(null);

    useEffect(() => {
        // Animation using GSAP to show navbar
        if (showNavbar && navbarRef.current) {
            gsap.fromTo(navbarRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
            );
        }
    }, [showNavbar]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const navbarHeight = 4900; // Set the height in pixels where navbar should disappear

            if (scrollTop > navbarHeight) {
                setScrolledPastOverlay(true);
            } else {
                setScrolledPastOverlay(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Clean up GSAP animation on unmount
    useEffect(() => {
        return () => {
            if (navbarRef.current) {
                gsap.set(navbarRef.current, { opacity: 0, y: -50 });
            }
        };
    }, []);

    return (
        <div className="anim2 flex flex-col w-screen h-screen">
            <Overlay3 />

            <div className="montserrat-thick-2 text-[em] text-[#1D2951] ml-[30px] mr-[30px] mt-[135px] mb-[30px]">
                <div className={'mb-[60px] montserrat-thick text-[#1D2951] text-[7.5rem] line-height'}>
                    {/*<TextRevealStag2 text={'Introducing Rizta&with love and innovation'}/>*/}
                    <TextReveal delay={0.1}>
                        <p>Introducing Rizta</p>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                        <p>with Love and innovation.</p>
                    </TextReveal>

                </div>
            </div>

            <TextReveal delay={0.3}>
                <div className="ml-[30px] mr-[30px]">
                    <div className={'absolute top-[170px] z-[1] left-[201px] flex flex-col gap-[42px]'}>
                        <div className={'montserrat-thick ani2-title'}>
                            <p>Meet Rizta</p>
                        </div>
                        <div className={'model-ani2 montserrat-thick'}>
                            <p>From our family to yours.</p>
                        </div>
                        <div className={'ani2-btn-container'}>
                            <div className={'ani2-btn-bn poppins-regular'}>
                                <p>Book Now !</p>
                            </div>
                            <div className={'ani2-btn-lm poppins-regular'}>
                                <p>Explore Rizta</p>
                            </div>
                        </div>
                        <div className="slide-bottom-ani2 type2-bottom poppins-regular">
                            <div className={'slide-object'}>
                                <p className={'slide-bottom-text'}>Ather Rizta</p>
                                <img src={bar} alt="bar"/>
                            </div>
                            <div className={'slide-object'}>
                                <p>Ather Apex</p>
                                <img src={dull_bar} alt="dull_bar"/>
                            </div>
                            <div className={'slide-object-ani'}>
                                <div className={'flex flex-col gap-[24px]'}>
                                    <p className={'slide-bottom-text'}>Ather 450 Series</p>
                                    <img src={dull_bar} alt="dull_bar"/>
                                </div>
                                <div>
                                    <img src={arrow_down} alt="arrow_down"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ImageReveal imgSrc={rizta}/>
                    {/*<img className="rounded-[35px]" src={rizta} alt="Rizta"/>*/}
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
                <div className={'pt-[170px] text-[7.5rem] montserrat-thick text-[#A8D5BA] ml-[90px] line-height'}>
                    {/*<TextRevealStag2 text={'Ather 450 Apex&unveils Magic Twist ride.'}/>*/}
                    <TextReveal delay={0.1}>
                        <p>Ather 450</p>
                    </TextReveal>
                    <TextReveal delay={0.3}>
                        <p>unveils <span className={'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 to-red-400'}>Magic Twist</span>  ride.</p>
                    </TextReveal>
                </div>
                <div className={'video-cont-ani'}>
                    <div className={'absolute top-[3850px] z-[5] left-[201px] flex flex-col gap-[42px]'}>
                        <TextReveal delay={0.2}>
                            <div className="slide-bottom-ani2 poppins-regular">

                                <div className={'slide-object'}>
                                    <p className={'slide-bottom-text'}>Ather Rizta</p>
                                    <img src={dull_bar}/>
                                </div>
                                <div className={'slide-object'}>
                                    <p>Ather Apex</p>
                                    <img src={bar}/>
                                </div>
                                <div className={'slide-object-ani'}>
                                    <div className={'flex flex-col gap-[24px]'}>
                                        <p className={'slide-bottom-text'}>Ather 450 Series</p>
                                        <img src={dull_bar}/>
                                    </div>
                                    <div>
                                        <img src={arrow_down}/>
                                    </div>
                                </div>


                            </div>
                        </TextReveal>

                    </div>
                    <TextReveal delay={0.3}>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className={'video-player'}
                        >
                            <source src={vid1} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </TextReveal>
                </div>
                <div className="ml-[45px] mt-[30px] mr-[45px]">

                    <div className={'absolute top-[4400px] left-[201px] flex flex-col gap-[42px]'}>
                        <TextReveal delay={0.1}>
                            <div className={'montserrat-thick ani2-title'}>
                                <p>The Bike of scooters</p>
                            </div>
                        </TextReveal>
                        <TextReveal delay={0.1}>
                            <div className={'model-ani2 montserrat-thick'}>
                                    <p>Ather 450</p>
                                </div>
                            </TextReveal>
                            <TextReveal delay={0.1}>
                                <div className={'ani2-btn-container'}>
                                    <div className={'ani2-btn-bn poppins-regular'}>
                                        <p>Book Now !</p>
                                    </div>
                                    <div className={'ani2-btn-lm poppins-regular'}>
                                        <p>Explore A450</p>
                                    </div>
                                </div>
                            </TextReveal>
                            <TextReveal delay={0.2}>
                                <div className="slide-bottom-ani2 poppins-regular">

                                    <div className={'slide-object'}>
                                        <p className={'slide-bottom-text'}>Ather Rizta</p>
                                        <img src={dull_bar}/>
                                    </div>
                                    <div className={'slide-object'}>
                                        <p>Ather Apex</p>
                                        <img src={dull_bar}/>
                                    </div>
                                    <div className={'slide-object-ani'}>
                                        <div className={'flex flex-col gap-[24px]'}>
                                            <p className={'slide-bottom-text'}>Ather 450 Series</p>
                                            <img src={bar}/>
                                        </div>
                                        <div>
                                            <img src={arrow_down}/>
                                        </div>
                                    </div>


                                </div>
                            </TextReveal>

                        </div>

                    <img className="rounded-[35px]" src={bike} alt="450"/>
                </div>
            </div>

            <div className={'h-[210px] flex flex-col text-transparent  ani2-empty'}>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
            </div>

            {/* Conditional rendering of TransNavbar with transition */}
            <div ref={navbarRef} style={{
                opacity: scrolledPastOverlay ? 0 : 1,
                transition: 'opacity 0.3s ease-out',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                mixBlendMode: "difference"
            }}>
                {showNavbar && <TransNavbar/>}
            </div>

        </div>
    );
}

export default Animation2;
