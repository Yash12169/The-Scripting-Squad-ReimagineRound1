import React from 'react';
import '../styles/Footer.css'
import flag from '../assets/india.png'
import ather_logo from '../assets/footer_logo.png'
import youtube from '../assets/YouTube.png'
import twitter from '../assets/TwitterX.png'
import insta from '../assets/Instagram.png'
import linkedin from '../assets/LinkedIn.png'
import facebook from '../assets/Facebook.png'
function Footer() {
    return (

        <div className={'footer-container poppins-regular'}>
            <footer>
                <div className={'footer-items'}>
                    <div id={'item1'} className={'item'}>
                        <span className={'head poppins-regular'}>Electric Scooters</span>
                        <p className={'mt-[10px]'}>Ather Rizta</p>
                        <p>Ather 450 Apex</p>
                        <p>Ather 450X</p>
                        <p>Ather 450S</p>
                        <p>Book Test Rides</p>
                        <p>Locate Dealers</p>
                    </div>
                    <div className={'item'}>
                        <span className={'head'}> Buy Electric</span>
                        <p className={'mt-[10px]'}>Book Ather Scooter</p>
                        <p>EMI Calculator</p>
                        <p>Pricing</p>
                        <p>Charging</p>
                    </div>
                    <div className={'item'}>
                        <span className={'head'}>Ownership</span>
                        <p className={'mt-[10px]'}>Ownership Cost </p>
                        <p>Calculator</p>
                        <p>Smart Helmets</p>
                        <p>Accessories</p>
                        <p>Merchandise</p>
                        <p>Ather Battery Protect™</p>
                        <p>Ather Connect™</p>
                    </div>
                    <div className={'item'}>
                        <span className={'head poppins-regular'}>Partnership</span>

                        <p className={'mt-[10px]'}>Ather Corporate Program</p>
                        <p>Retail Partnership</p>
                        <p>Host Neighbourhood Charger</p>
                    </div>
                    <div className={'item'}>
                        <span className={'head poppins-regular'}>About Us</span>
                        <p className={'mt-[10px]'}>Story</p>
                        <p>Blogs</p>
                        <p>Community</p>
                        <p>Press</p>
                        <p>Careers</p>

                    </div>
                    <div className={'item'}>
                        <span className={'head'}>Support</span>
                        <p className={'mt-[10px]'}>FAQs</p>
                        <p>Contact Us</p>
                        <p>Sitemap</p>
                    </div>
                </div>
                <div className={'locations'}>
                    <p> Electric Scooter in Bengaluru</p>
                    <p> Electric Scooter in Chennai</p>
                    <p> Electric Scooter in Hyderabad</p>
                    <p> Electric Scooter in New Delhi</p>
                    <p> Electric Scooter in Mumbai</p>
                    <p> Electric Scooter in Kolkata</p>
                </div>
                <div className={'footer-nav'}>
                    <div className={'footer-nav-logo'}>
                        <img src={ather_logo} className={'cursor-pointer'}/>
                    </div>
                    <div  className={'footer-nav-utils'}>
                        <p>Privacy Policy</p>
                        <p>CSR Policy</p>
                        <p>Bug Bounty</p>
                        <p>Code of Ethics</p>
                        <p>Trademarks</p>
                        <p>Corporate</p>
                        <p>Subscription</p>
                        <p>Warranty</p>
                        <p>Refund Policy</p>
                        <p>Credit Usage Policy</p>
                        <p>Terms</p>
                        <img src={flag} className={'cursor-pointer'}/>
                    </div>

                </div>
                <div className={'footer-utils'}>

                    <div className={'flex gap-[25px]'}>
                        <div className={'util-item'}>
                            <p className={'textBold'}>Registered Office Address</p>
                            <p>Ather Energy Private Limited, 3rd Floor, Tower D, IBC Knowledge Park, #4/1, Bannerghatta Main Road, Bangalore, Karnataka 560029, India</p>
                        </div>
                        <div className={'util-item'}>
                            <p>Tel No:+91-7676600900</p>
                            <p>Contact Person: Manager - Customer Services For Customer Support please write to :customercare@atherenergy.com</p>
                            <p>Need more information or have a query? Feel free to Contact us.</p>

                        </div>
                        <div className={'util-item'}>
                            <p>Corporate Identification Number (CIN)</p>
                            <p>U40100KA2013PTC093769</p>
                        </div>

                    </div>
                    <div className={'flex flex-col w-[150px] justify-between text-left '}>
                        <div className={'flex socials justify-end'}>
                            <img src={insta}/>
                            <img src={twitter}/>
                            <img src={youtube}/>
                            <img src={facebook}/>
                            <img src={linkedin}/>
                        </div>
                        <div className={'flex text-right'}>
                            <p>    All information is subject to specific conditions. 2024 Ather Energy. All rights
                                reserved</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    );
}

export default Footer;