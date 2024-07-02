import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../stylesMobile/CardScroll.css'; // Make sure to create this CSS file
import shield from '../assets/shield.png'
import truck from '../assets/truck.png'
import scooty from '../assets/scooty.png'
import pump from '../assets/pump.svg'
import community from '../assets/community.svg'
import wrench from '../assets/wrench.svg'
import TextReveal from "../Components/TextReveal";
const Card = ({ icon, title, description, isVisible }) => (

        <div className={`mobile-card ${isVisible ? 'mobile-visible' : ''}`}>
            <div className="mobile-icon">
                <img className={'w-[12px] h-[12px]'} src={icon}/>
            </div>
            <h2 className="mobile-title montserrat-reg">{title}</h2>
            <p className="mobile-description poppins-regular">{description}</p>
            <div className={'hassle-mobile-lm poppins-regular '}>
                <p>Learn More</p>
            </div>
        </div>


);

const CardScroll = () => {
    const [ref1, inView1] = useInView({threshold: 0.5});
    const [ref2, inView2] = useInView({ threshold: 0.5 });
    const [ref3, inView3] = useInView({ threshold: 0.5 });
    const [ref4, inView4] = useInView({ threshold: 0.5 });
    const [ref5, inView5] = useInView({ threshold: 0.5 });
    const [ref6, inView6] = useInView({ threshold: 0.5 });
    const [ref7, inView7] = useInView({ threshold: 0.5 });

    return (
        <div className="mobile-card-scroll-container">

                <div className="mobile-fixed-header montserrat-reg">
                    <TextReveal delay={0.2}>
                    <p>Hassle-free ownership.</p>
                    </TextReveal>
                </div>

            <div className="mobile-cards">
                <div ref={ref1}><Card icon={shield} title="Ather Battery Protect™" description="A warranty that not just covers battery failure, but degradation too. If the battery State-of-Health falls below 70% anytime in 5 years, we will replace it, no questions asked " isVisible={inView1} /></div>
                <div ref={ref2}><Card icon={scooty} title="Ather Connect™" description="Unlock a smarter ride with Google Maps, multi-stop Trip Planner™. Bluetooth call & music control, theft & tow alerts and a lot more." isVisible={inView2} /></div>
                <div ref={ref3}><Card icon={truck} title="Ather Roadside Assistance" description="24x7 emergency assistance in case of accident, breakdown, puncture or when your Ather runs out of charge. Ride worry-free." isVisible={inView3} /></div>
                <div ref={ref4}><Card icon={wrench} title="Ather Maintenance Plan" description="Ensure your Ather scooter is always in top condition with our comprehensive maintenance plan. Includes regular servicing and parts replacement." isVisible={inView4} /></div>
                <div ref={ref5}><Card icon={pump} title="Ather Charging Network" description="Access our extensive network of fast-charging stations across the city. Locate the nearest station through our app and charge on the go." isVisible={inView5} /></div>
                <div ref={ref6}><Card icon={community} title="Ather Community" description="Join the Ather community and connect with other Ather owners. Share tips, plan group rides, and stay updated on the latest news and events." isVisible={inView6} /></div>
            </div>
        </div>
    );
};

export default CardScroll;
