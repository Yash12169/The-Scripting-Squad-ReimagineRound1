import React from 'react';
import rizta from '../assets/MeetRizta.png';
import '../styles/Animation2.css';
import TextRevealStag from "./TextRevealStag";
import TextReveal from "./TextReveal";
import vid1 from "../assets/crpd.mp4";
import bike from "../assets/BikeScooters.png"
import bar from "../assets/bar.png";
import dull_bar from "../assets/dull_bar.png";
import arrow_down from "../assets/arrow_down.svg"
function Animation3() {
    return (
        <>
            <div className={'mt-[210px] flex flex-col gap-[15px]'}>
                <div className={'w-screen h-[8px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[12px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[16px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[21px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[27px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[35px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[50px] bg-[#1D2951]'}></div>
                <div className={'w-screen h-[70px] bg-[#1D2951]'}></div>


            </div>
            <div className={' w-screen flex flex-col bg-[#1d2951]'}>
                <div className={'pt-[210px] text-[#A8D5BA] ml-[90px]'}>
                    <TextRevealStag text={'Ather 450 Apex '}/>
                    <TextRevealStag text={" unveils Magic Twist ride."}/>
                </div>

                <div className={'video-cont-ani'}>
                    <div className={'absolute top-[3650px] left-[201px] flex flex-col gap-[42px]'}>
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

                    </div>
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
                </div>


                <TextReveal delay={0.8}>
                    <div className="ml-[45px] mt-[70px] mr-[45px]">
                        <div className={'absolute top-[170px] left-[201px] flex flex-col gap-[42px]'}>
                            <div className={'montserrat-thick ani2-title'}>
                                <p>The Bike of scooters</p>
                            </div>
                            <div className={'model-ani2 montserrat-thick'}>
                                <p>Ather 450</p>
                            </div>
                            <div className={'ani2-btn-container'}>
                                <div className={'ani2-btn-bn poppins-regular'}>
                                    <p>Book Now !</p>
                                </div>
                                <div className={'ani2-btn-lm poppins-regular'}>
                                    <p>Explore A450</p>
                                </div>
                            </div>
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

                        </div>
                        <img className="rounded-[35px]" src={bike} alt="450"/>
                    </div>
                </TextReveal>

            </div>

            <div className={'h-[210px]   ani2-empty'}></div>
        </>
    );
}

export default Animation3;
