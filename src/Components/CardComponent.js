import React, { useEffect } from 'react';
import '../styles/CardComponent.css';
import { ScrollObserver, valueAtPercentage } from 'aatjs'; // Assuming you have aat.js as a package

import Cards2 from "./Cards2";
import AnimatedText from "./AnimatedText";
import Cards3 from "./Cards3";
import Cards4 from "./Cards4";
import Cards5 from "./Cards5";

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
            <div className="space space--small"></div>
            <div className={'pickAther'}>
                <AnimatedText text={"Pick Your Ather"} cards2={cards2}/>
            </div>
            <div className="cards">
                <div className="card" data-index="0">
                    <div className="card__inner h-[620px] w-[1600px] rounded-xl card-background">
                        <Cards2/>
                    </div>
                </div>
                <div className="card" data-index="1">
                    <div className="card__inner h-[620px] w-[1600px] rounded-xl card-background">
                        <Cards3 isNew={false}/>
                    </div>
                </div>
                <div className="card" data-index="2">
                    <div className="card__inner h-[620px] w-[1630px] rounded-xl card-background">
                        <Cards4 isNew={false}/>
                    </div>
                </div>
                <div className="card" data-index="3">
                    <div className="card__inner h-[620px] w-[1630px] rounded-xl card-background">
                        <Cards5 isNew={false}/>
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </>
    );
};

export default CardComponent;
