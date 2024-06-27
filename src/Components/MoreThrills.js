import React from 'react';
import AnimatedText from "./AnimatedText";
import TextReveal from "./TextReveal";
import '../styles/MoreThrills.css'
function MoreThrills() {
    return (
        <div className={'more-thrills'}>
            <AnimatedText text={'More Thrills. Per Second.'} cards2={false}/>
            <TextReveal delay={0.6}>
                <p className={'mt-txt poppins-regular'}>Presenting all-new electric scooters from Ather. Built to
                    outperform both EV scooters and petrol scooters alike, with all the style, smarts and speed you
                    need.</p>
            </TextReveal>
            <div className={'shadow-circle2'}>
                <p>----------</p>
            </div>
        </div>
    );
}

export default MoreThrills;
