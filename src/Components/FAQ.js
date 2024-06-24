import React, { useState } from 'react';
import '../styles/FAQ.css';
import plus from '../assets/plua.png';
import sound from '../assets/sound.svg'
import vector from '../assets/Vector.svg'
function FAQ() {
    const [rotation, setRotation] = useState({});
    const [openQuesIds, setOpenQuesIds] = useState([]);

    const handleImageClick = (id) => {
        setOpenQuesIds((prevOpenQuesIds) => {
            if (prevOpenQuesIds.includes(id)) {
                return prevOpenQuesIds.filter(quesId => quesId !== id);
            } else {
                return [...prevOpenQuesIds, id];
            }
        });
        setRotation((prevRotation) => ({
            ...prevRotation,
            [id]: prevRotation[id] === 45 ? 0 : 45
        }));
    };

    return (
        <div className={'flex flex-col z-[150]'}>
            <div className='faq-container'>
                <div className='faq-head montserrat-reg'>
                    <p>Your questions, answered</p>
                </div>
                <div className='faq-content mt-[35px] '>
                    {questions.map((question) => (
                        <div key={question.id} className='faq-question montserrat-reg mb-[60px]'>
                            <div className='flex justify-between ques-box'>
                                <p className='w-[800px]'>{question.question}</p>
                                <img
                                    onClick={() => handleImageClick(question.id)}
                                    className='cursor-pointer faq-close-img'
                                    style={{ transform: `rotate(${rotation[question.id] || 0}deg)` }}
                                    src={plus}
                                    alt='plus'
                                />
                            </div>
                            <div className={`faq-answer ${openQuesIds.includes(question.id) ? 'open' : ''}`}>
                                <p className='text-[15px] poppins-regular mt-[20px] mb-[20px]'>{question.answer}</p>
                            </div>
                        </div>
                    ))}
                    <p className={'link-faq montserrat-reg'}>Cant find what you're looking for?</p>
                    <p className={'link-faq montserrat-reg'}>Visit our <span  className={'underline-faq'}>FAQs page</span></p>
                </div>
            </div>
            <div className={'faq-para montserrat-reg'}>
                <p>Disclaimer: All specifications/figures are indicative only and subject to requisite certification(s). Declared certified range figures are as per ARAI IDC standard testing conditions and TrueRange of 110 km or 90 km is applicable on SmartEco riding mode, actual performance figures may vary depending on various conditions including driving patterns etc. Degradation/performance of the battery shall be solely determined by Ather. Ather may form partnerships or alliances with third parties from time to time in order to facilitate the provision of its products and services.  Specifications, pricing and product availability are subject to change without notice. Prices shown for Pro and Ather Battery Protect are discounted and will be applicable only if the customer purchases them along with the scooter. Images shown on the website are for representation purposes only. To know more about the inclusions refer to the Specifications or visit your nearest Ather Space. EMI cashback applicable on select credit card purchases. To know all about the current offering/pricing, change in product configurations and inclusions get in touch with your nearest Ather Space. Please follow applicable laws while using the vehicle. Ather Energy's trademarks are listed at  https://www.atherenergy.com/trademarks. All third party trademarks (including words, logos and icons) referenced by Ather Energy Private Limited remain the property of their respective owners. Ather Grid map shown is only indicative and not an exact representation of the GPS coordinates of the Ather Grid locations. *Average duration of a single blink = 0.1-0.4 seconds (Source: Schiffman, H.R., Sensation and Perception. An Integrated Approach, New York: John Wiley and Sons, Inc., 2001) **Based on internal testing# This is not an alternative to braking. Applying brakes wherever necessary is recommended. Image shown is for representation purpose only, actual Helmet may vary.</p>
            </div>
            <div className={'flex justify-between ml-[150px] mt-[100px] rounded-[25px] h-[115px] mr-[150px] bg-[#1D2951] caution-cont'}>
                <div className={'flex ml-[100px] caution'}>
                    <img className={'w-[64px] h-[64px]'} src={sound}/>
                    <p className={'montserrat-reg text-[30px] mr-[43px] ml-[20px] text-[#F8F8FF]'}>Caution Notice</p>
                    <p className={'montserrat-reg text-[14px] text-[#F8F8FF]'}>Beware of scammers in Ather's clothing. Don't get tricked into frauds.</p>
                </div>
                <div className={'flex mr-[100px]  w-fit caution1'}>
                    <p className={'text-[18px] mr-[6px] poppins-regular text-[#F8F8FF]'}>Learn Experience centre</p>
                    <img className={'w-[16px] h-[8px]'} src={vector}/>
                </div>
            </div>
        </div>
    );
}

const questions = [
    {
        id: 1,
        question: "How do I charge an electric scooter?",
        answer: "Ather has the largest Fast charging grid network in India for any 2 Wheeler OEM. There are 3 ways to charge an Ather EV Electric Scooter. The first is with the portable charger provided with your Ather scooter that can be plugged into any 5 amp socket at home, just like you charge your mobile phone. The second is through 2500+ fast-charging grids across the country that can give you 1.5 km range for every minute of charging. The third is at the select public spaces like apartment complexes, malls, university campuses and office buildings where Ather Neighbourhood charges are installed. To request for one to be installed in your building, contact us here."
    },
    {
        id: 2,
        question:"Can I use an electric scooter if I live in an apartment?",
        answer:"Yes. You just need a 5amp socket at your parking slot. Most apartments with a basic electric connection in the parking area are convenient for charging your Ather EV with the portable charger."
    },
    {
        id: 3,
        question:"Do I need a Drivers' License, Helmet and Registration to use an electric scooter?",
        answer:"An Ather electric scooter is subject to the same Central & State road safety laws as any other scooter. Therefore, yes, a valid drivers' license, registration & helmet are absolutely mandatory for riding an Ather Electric Scooter."

    },
    {
        id: 4,
        question:"How do I avail Government provided subsidies on EVs?",
        answer:"There are two types of subsidies. One is the FAME subsidy provided by the Ministry of Heavy Industries, and the second one is provided by few of the state governments. FAME subsidy is claimed by the manufacturers and customers only pay the reduced cost. For state subsidies where it exists, customers can submit the claims directly with the government and get the subsidy amount reimbursed directly to their bank accounts. It's done online and is a very easy process. For more info, you can check with our product specialists at Ather Experience Center near you."

    },
    {
        id: 5,
        question:"Why do Electric Scooters have riding modes?",
        answer:"Ather 450 Electric scooters provide different riding modes to suit the riding needs of its customers. If you need more range, then you can choose Smart ECO or Eco Mode. If you need more acceleration and higher speed then you can switch to other models such as Ride, Sport, Zip or Warp. Warp and Zip modes offer highest acceleration and top speed."

    },
    {
        id: 6,
        question:"What is the cost of charging an electric scooter?",
        answer:"You can charge Ather Electric scooters at home using portable chargers provided with Ather electric scooters by connecting to a normal 5 amp socket that you generally use for mobile phones. The cost is standard electricity bill charges. Our fast charging network is also currently free to use in most places across India, except 5 states (Karnataka, Delhi, Maharashtra, Tamil Nadu and Telangana) where we charge ₹ 1 /Min."
    },
    {
        id: 7,
        question:"What is the cost of servicing an electric scooter?",
        answer:"Ather has one of the best and largest service networks in the country. The cost of servicing electric scooters is way lesser than petrol scooters as there are fewer moving parts and they don't have consumables such as engine oil or filters."
    },
    {
        id: 8,
        question:"Do I ever need to replace an electric scooter's battery?",
        answer:"Ather Battery Protect™ comes with a 5-year/60,000 km battery warranty. Under this program your Ather electric scooter battery will be replaced for free, if the State-of-Health of the battery falls below 70% within 5 years/60,000 km. No questions asked.",
    },
    {
        id: 9,
        question:"Can electric scooters be used in the rain?",
        answer:"Ather Electric scooter battery is IP67 rated, which means the battery is Water Resistant. Even the electronic dashboard is water resistant. So, whether it's heavy rain or high heat, riding an Ather is worry free."
    },
];

export default FAQ;