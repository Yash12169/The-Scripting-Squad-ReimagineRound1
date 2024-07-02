import React from 'react';
import '../stylesMobile/Cards3Mobile.css'
import rizta from '../assets/riztaMobile.png'
function CardsMobile() {
    return (
        <>
          <div className={'cards-mobile-parent'}>
              <div className={'cards-mobile-image'}>
                  <img src={rizta}/>
              </div>
              <div className={'cards-mobile-content'}>
                  <div className={'cards-mobile-head montserrat-reg'}>
                      <p>Ather Rizta</p>
                  </div>
                  <div className={'cards-mobile-price montserrat-reg'}>
                      <p>Starting at ₹ 1,09,999</p>
                  </div>
                  <div className={'cards-mobile-btncont'}>
                      <div className={'cards-mobile-book poppins-regular'}>
                          <p>Book Now !</p>
                      </div>
                      <div className={'cards-mobile-learn poppins-regular'}>
                          <p>Explore Rizta</p>
                      </div>
                  </div>
              </div>
          </div>
        </>
    );
}

export default CardsMobile;
