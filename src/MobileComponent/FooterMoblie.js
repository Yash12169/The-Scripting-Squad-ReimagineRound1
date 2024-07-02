import React, { useState } from 'react';
import '../stylesMobile/FooterMobile.css';
import flag from '../assets/india.png';
import ather_logo from '../assets/footer_logo.png';
import youtube from '../assets/YouTube.png';
import twitter from '../assets/TwitterX.png';
import insta from '../assets/Instagram.png';
import linkedin from '../assets/LinkedIn.png';
import facebook from '../assets/Facebook.png';
import plus from '../assets/plus.svg'

function FooterMobile() {
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const sections = [
        {
            title: "Electric Scooters",
            content: ["Ather Rizta", "Ather 450 Apex", "Ather 450X", "Ather 450S", "Book Test Ride", "Locate Dealers"]
        },
        {
            title: "Buy Electric Scooter",
            content: ["Book Ather Scooter", "EMI Calculator", "Pricing", "Charging"]
        },
        {
            title: "Ownership",
            content: ["Ownership Cost Calculator", "Smart Helmets", "Accessories", "Merchandise", "Ather Battery Protect™", "Ather Connect"]
        },
        {
            title: "Partnership",
            content: ["Ather Corporate Program", "Retail Partnership", "Host Neighbourhood Charger"]
        },
        {
            title: "About Us",
            content: ["Story", "Blogs", "Community", "Press", "Careers"]
        },
        {
            title: "Support",
            content: ["FAQs", "Contact Us", "Sitemap"]
        }
    ];


    return (
        <div className={'footer-container-mobile poppins-regular'}>
            <footer className={'footer-mobile'}>
                <div className={'montserrat-reg'}>
                    {sections.map((section, index) => (
                        <div key={index} className="footer-section-mobile">
                            <div
                                className={`footer-header-mobile ${openSections[section.title] ? 'open' : ''}`}
                                onClick={() => toggleSection(section.title)}
                            >
                                <p>{section.title}</p>
                                <img
                                    className="toggle-icon-mobile"
                                    src={plus}
                                    alt="Toggle"
                                    style={{ transform: openSections[section.title] ? 'rotate(45deg)' : 'rotate(0deg)' }}
                                />
                            </div>
                            <div className={`footer-content-mobile ${openSections[section.title] ? 'open' : ''}`}>
                                {section.content.map((item, itemIndex) => (
                                    <p key={itemIndex}>{item}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={'locations-mobile'}>
                    <p>Electric Scooter in Bengaluru</p>
                    <p>Electric Scooter in Chennai</p>
                    <p>Electric Scooter in Hyderabad</p>
                    <p>Electric Scooter in New Delhi</p>
                    <p>Electric Scooter in Mumbai</p>
                    <p>Electric Scooter in Kolkata</p>
                </div>

                <div className={'footer-nav-mobile'}>
                    <div className={'footer-nav-logo-mobile'}>
                        <img src={ather_logo} className={'cursor-pointer'} alt={'Ather Logo'} />
                    </div>
                    <div className={'footer-nav-utils-mobile'}>
                        <div className={'footer-mobile-content'}>
                            <div className={'flex gap-[24px]'}>
                                <p>Privacy Policy</p>
                                <p>CSR Policy</p>
                                <p>Bug Bounty</p>
                            </div>
                            <div className={'flex gap-[24px]'}>
                                <p>Code of Ethics</p>
                                <p>Trademarks</p>
                                <p>Corporate</p>
                            </div>
                            <div className={'flex gap-[24px]'}>
                                <p>Subscription</p>
                                <p>Warranty</p>
                                <p>Refund Policy</p>
                            </div>
                            <div className={'flex gap-[24px] ml-[35px] mb-[30px]'}>
                                <p>Credit Usage Policy</p>
                                <p>Terms</p>
                            </div>
                        </div>
                        <div>
                            <img src={flag} className={'cursor-pointer'} alt={'Indian Flag'}/>
                        </div>
                    </div>
                </div>

                <div className={'footer-utils-mobile'}>
                    <div className={'flex mb-[28px] poppins-regular gap-[30px]'}>
                        <div className={'flex flex-col gap-[15px]'}>
                            <div className={'util-item-mobile'}>
                                <p className="textBold-mobile">Registered Office Address</p>
                                <p>Ather Energy Private Limited, 3rd Floor, Tower D, IBC Knowledge Park, #4/1,
                                    Bannerghatta Main Road, Bangalore, Karnataka 560029, India</p>
                            </div>
                            <div className={'util-item-mobile'}>
                                <p className="textBold-mobile">Tel No:+91-7676600900</p>
                                <p>Contact Person: Manager - Customer Services For Customer Support please write to
                                    :customercare@atherenergy.com</p>
                                <p>Need more information or have a query? Feel free to Contact us.</p>
                            </div>
                        </div>
                        <div className={'util-item-mobile'}>
                            <p className="textBold-mobile">Corporate Identification Number (CIN)</p>
                            <p>U40100KA2013PTC093769</p>
                        </div>
                    </div>
                    <div className={'flex flex-col w-[150px] justify-between text-left'}>
                        <div className={'flex socials-mobile gap-[5px] mb-[17px]'}>
                            <img src={insta} alt={'Instagram'}/>
                            <img src={twitter} alt={'Twitter'}/>
                            <img src={youtube} alt={'YouTube'}/>
                            <img src={facebook} alt={'Facebook'}/>
                            <img src={linkedin} alt={'LinkedIn'}/>
                        </div>
                    </div>
                    <div className={'flex text-left'}>
                        <p>All information is subject to specific conditions. 2024 Ather Energy. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterMobile;