import React from 'react';
import map from '../assets/mapMobile.png'
import vector from '../assets/Vector.svg'
import '../stylesMobile/IndiaLargestMobile.css'
import TextReveal from "../Components/TextReveal";
function IndiaLargestMobile() {
    return (
        <>
          <div className={'il-mobile-container'}>
                <div className={'il-mobile-content'}>
                    <TextReveal delay={0.1}>
                        <div className={'il-mobile-head montserrat-reg'}>
                            <p>Ather Grid™</p>
                        </div>
                    </TextReveal>
                    <TextReveal delay={0.2}>
                        <div className={'il-mobile-des montserrat-reg'}>
                            <p>India’s largest</p>
                            <p>EV two-wheeler</p>
                            <p>fast charging network</p>
                        </div>
                    </TextReveal>
                    <TextReveal delay={0.4}>
                        <div className={'il-mobile-ul poppins-regular'}>
                            <p>Learn More</p>
                            <img className={'w-[8px] h-[4px]'} src={vector}/>
                        </div>
                    </TextReveal>
                </div>
              <div className={'il-mobile-img'}>
                  <img className={'w-[211px] h-[213px]'} src={map}/>
              </div>
          </div>
        </>
    );
}

export default IndiaLargestMobile;
