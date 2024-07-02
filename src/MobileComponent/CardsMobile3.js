import React from 'react';
import '../stylesMobile/Cards3Mobile.css'
import rizta from '../assets/Ather450X.png'
function CardsMobile2() {
    return (
        <>
            <div className={'cards-mobile-parent'}>
                <div className={'cards-mobile-image'}>
                    <img className={'w-[190px] h-[170px]'} src={rizta}/>
                </div>
                <div className={'cards-mobile-content'}>
                    <div className={'cards-mobile-head montserrat-reg'}>
                        <p>Ather 450X</p>
                    </div>
                    <div className={'cards-mobile-price montserrat-reg'}>
                        <p>Starting at ₹ 1,40,599</p>
                    </div>
                    <div className={'cards-mobile-btncont'}>
                        <div className={'cards-mobile-book poppins-regular'}>
                            <p>Book Now !</p>
                        </div>
                        <div className={'cards-mobile-learn poppins-regular'}>
                            <p>Explore 450X</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardsMobile2;
