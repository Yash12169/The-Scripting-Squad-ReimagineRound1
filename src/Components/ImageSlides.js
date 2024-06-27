import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import '../styles/ImageSlides.css';
import img1 from '../assets/MeetRizta.png';
import img2 from '../assets/BikeScooters.png';
import img3 from '../assets/Apex.png';
import img4 from '../assets/yt.svg'
import Cards2 from "./Cards2";

import Slider from "./Slider";
const ImageSlides = () => {
    const sliderRef = useRef(null);
    const cardsRef = useRef([]);
    let isAnimating = false;

    useEffect(() => {
        gsap.registerPlugin(CustomEase);
        CustomEase.create("cubic", "0.83, 0, 0.17, 1");

        splitTextIntoSpans(".custom-copy h1");
        initializeCards();

        gsap.set("h1 span", { y: -200 });
        gsap.set(".custom-slider .custom-card:last-child h1 span", { y: 0 });

        // ScrollTrigger animations
        cardsRef.current.forEach((card, i) => {
            gsap.to(card.querySelectorAll("h1 span"), {
                y: 0,
                duration: 1,
                ease: "cubic",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: card,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        gsap.to(card.querySelectorAll("h1 span"), {
                            y: 0,
                            duration: 1,
                            ease: "cubic",
                            stagger: 0.05,
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(card.querySelectorAll("h1 span"), {
                            y: -200,
                            duration: 1,
                            ease: "cubic",
                            stagger: 0.05,
                        });
                    },
                },
            });
        });
    }, []);

    const splitTextIntoSpans = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            const text = element.innerText;
            const splitText = text
                .split("")
                .map((char) => (char === " " ? "&nbsp;&nbsp;" : <span>${char}</span>))
                .join("");
            element.innerHTML = splitText;
        });
    };

    const initializeCards = () => {
        cardsRef.current = Array.from(sliderRef.current.querySelectorAll(".custom-card"));
        gsap.to(cardsRef.current, {
            y: (i) => -15 + 15 * i + "%",
            z: (i) => 15 * i,
            duration: 1,
            ease: "cubic",
            stagger: -0.1,
        });
    };

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default click behavior

        if (isAnimating) return;

        isAnimating = true;

        const slider = sliderRef.current;
        const cards = Array.from(slider.querySelectorAll(".custom-card"));
        const lastCard = cards.pop();
        const nextCard = cards[cards.length - 1];

        gsap.to(lastCard.querySelectorAll("h1 span"), {
            y: 200,
            duration: 0.75,
            ease: "cubic",
        });

        gsap.to(lastCard, {
            y: "+=150%",
            duration: 0.75,
            ease: "cubic",
            onComplete: () => {
                slider.prepend(lastCard);
                initializeCards();
                gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });

                setTimeout(() => {
                    isAnimating = false;
                }, 1000);
            },
        });

        gsap.to(nextCard.querySelectorAll("h1 span"), {
            y: 0,
            duration: 1,
            ease: "cubic",
            stagger: 0.05,
        });
    };

    return (
        <div className="custom-container flex flex-col">
            <div className="custom-slider" ref={sliderRef}>
                <div  className="custom-card" onClick={handleClick}>
                    <img className={'custom-card-img'} src={img1} alt="Card 1"/>
                    <div className="custom-copy">
                        <div className="custom-img-head montserrat-reg">Meet Rizta</div>
                        <div className="custom-img-model montserrat-reg">From our family to yours</div>
                        <div className="custom-img-btn poppins-regular">
                            <div className="custom-img-bn-btn">Book Now !</div>
                            <div className="custom-img-lm-btn">Explore Rizta</div>
                        </div>
                    </div>
                </div>

                <div className="custom-card" onClick={handleClick}>
                    <img className={'custom-card-img'} src={img2} alt="Card 2"/>
                    <div className="custom-copy">
                        <div className="custom-img-head montserrat-reg">The Bike of Scooters</div>
                        <div className="custom-img-model montserrat-reg">Ather 450</div>
                        <div className="custom-img-btn poppins-regular">
                            <div className="custom-img-bn-btn">Book Now !</div>
                            <div className="custom-img-lm-btn">Explore A450</div>
                        </div>
                    </div>
                </div>

                <div className="custom-card" onClick={handleClick}>
                    <img className={'custom-card-img'} src={img3} alt="Card 3"/>
                    <div className="custom-copy">
                        <div className="custom-img-head montserrat-reg">Ather 450 Apex™ unveiled</div>
                        <div className="custom-img-model montserrat-reg">Ather 450 Apex</div>
                        <div className="custom-img-btn poppins-regular">
                            <div className="custom-img-bn-btn">Catch it Now</div>
                            <div className="custom-img-lm-btn">
                                <img className={'h-[21px] w-[22px]'} src={img4}/>
                                <p>Watch it live </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ImageSlides;