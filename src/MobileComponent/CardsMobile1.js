import React from 'react';
import '../stylesMobile/Cards3Mobile.css'
import rizta from '../assets/AtherApex.png'
function CardsMobile1() {
    return (
        <>
            <div className={'cards-mobile-parent'}>
                <div className={'cards-mobile-image'}>
                    <img className={'w-[190px] h-[170px]'} src={rizta}/>
                </div>
                <div className={'cards-mobile-content'}>
                    <div className={'cards-mobile-head montserrat-reg'}>
                        <p>Ather Apex</p>
                    </div>
                    <div className={'cards-mobile-price montserrat-reg'}>
                        <p>Starting at ₹ 1,94,599</p>
                    </div>
                    <div className={'cards-mobile-btncont'}>
                        <div className={'cards-mobile-book poppins-regular'}>
                            <p>Book Now !</p>
                        </div>
                        <div className={'cards-mobile-learn poppins-regular'}>
                            <p>Explore Apex</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsMobile1;
