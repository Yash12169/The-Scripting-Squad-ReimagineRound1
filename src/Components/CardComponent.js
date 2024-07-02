import React, { useEffect } from 'react';
import '../styles/CardComponent.css';
import { ScrollObserver, valueAtPercentage } from 'aatjs'; // Assuming you have aat.js as a package

import Cards2 from "./Cards2";
import AnimatedText from "./AnimatedText";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";
import Cards5 from "./Cards5";
import CardsMobile from "../MobileComponent/CardsMobile";
import CardsMobile1 from "../MobileComponent/CardsMobile1";
import CardsMobile2 from "../MobileComponent/CardsMobile2";
import CardsMobile3 from "../MobileComponent/CardsMobile3";
import TextReveal from "./TextReveal";

const CardComponent = () => {
    const cards2= true;
    useEffect(() => {
        const cardsContainer = document.querySelector('.cards');
        const cards = document.querySelectorAll('.card');
        cardsContainer.style.setProperty('--cards-count', cards.length);
        cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`);
        Array.from(cards).forEach((card, index) => {
            const offsetTop = 20 + index * 20;
            card.style.paddingTop = `${offsetTop}px`;
            if (index === cards.length - 1) return;
            const toScale = 1 - (cards.length - 1 - index) * 0.1;
            const nextCard = cards[index + 1];
            const cardInner = card.querySelector('.card__inner');
            ScrollObserver.Element(nextCard, {
                offsetTop,
                offsetBottom: window.innerHeight - card.clientHeight
            }).onScroll(({ percentageY }) => {
                cardInner.style.transform = `scale(${valueAtPercentage({ from: 1, to: toScale, percentage: percentageY })})`;
                cardInner.style.filter = `brightness(${valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY })})`;
            });
        });
    }, []);

    return (
        <>
            <div className={'more-thrills-container'} >
                <TextReveal delay={0.1}>
                    <div className={'more-thrills-mobile montserrat-reg'}>
                        <p>More Thrills.</p>
                        <p>Per Second.</p>
                    </div>
                    <div className={'shadow-mobile-circle'}>
                        <p>---------</p>
                    </div>
                </TextReveal>
                <TextReveal delay={0.2}>
                    <div className={'more-thrills-para poppins-regular'}>
                        <p>Presenting all-new electric scooters from Ather. Built to outperform both EV scooters and
                            petrol
                            scooters alike, with all the style, smarts and speed you need.</p>
                    </div>
                </TextReveal>
            </div>
            <div className="space space--small"></div>
            <TextReveal delay={0.3}>
                <div className={'pickAther-mob'}>
                    <p>Pick Your Ather</p>
                </div>
            </TextReveal>
            <div className="cards">
                <div className="card" data-index="0">
                <div className="card__inner  rounded-xl card-background">
                        <CardsMobile/>
                    </div>
                </div>
                <div className="card" data-index="1">
                    <div className="card__inner rounded-xl card-background">
                        <CardsMobile2/>
                    </div>
                </div>
                <div className="card" data-index="2">
                    <div className="card__inner rounded-xl card-background">
                        <CardsMobile3/>
                    </div>
                </div>
                <div className="card" data-index="3">
                    <div className="card__inner  rounded-xl card-background">
                        <CardsMobile1/>
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </>
    );
};

export default CardComponent;