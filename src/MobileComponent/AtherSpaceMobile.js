import React from 'react';
import '../stylesMobile/AtherSpaceMobile.css'
import arrow from '../assets/Vector2.svg'
import ather_space from '../assets/AtherSpaceMobile.png'

const AtherSpaceMobile = () => {
    return (
        <div className={'as-parent-mobile'}>


            <img src={ather_space}/>

            <div className={'ather-space-container-mobile'}>
                <div className={'ather-space-text-mobile'}>
                    <div className={'ather-space-title-mobile montserrat-reg'}>
                        <p>Ather Space</p>
                    </div>
                    <div className={'ather-space-des-mobile montserrat-reg '}>
                        <p>Take back all the answers.</p>
                         <p>   And a great test ride</p>
                        <p> experience.</p>
                    </div>
                    <div className={'ather-space-ul-mobile poppins-regular'}>
                        <p>Learn Experience Centre</p>
                        <img className={'w-[8px] h-[4px]'} src={arrow}/>
                    </div>
                    <div className={'ather-space-cities-mobile montserrat-font'}>
                        <div>
                            <p className={'as-bold-mobile'}>148+</p>
                            <p className={'as-text-mobile'}>Cities</p>
                        </div>
                        <div>
                            <p className={'as-bold-mobile'}>204+</p>
                            <p className={'as-text-mobile'}>Ather Space</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default AtherSpaceMobile;
