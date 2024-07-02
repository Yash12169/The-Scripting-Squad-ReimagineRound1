import React from 'react';
import ather_logo from '../assets/ather_logo_nav.png';
import india from '../assets/india.png';
import dropdown from '../assets/dropdown.png';
import hamburger_menu from '../assets/hamburger_menu.png';
import '../stylesMobile/TransNavbarMobile.css';
import location from '../assets/location.svg'

function TransNavbarMobile() {
    return (
        <div className={`navbar-trans-mobile z-[100]`}>

                <div className="logo-buttons-mobile poppins-regular">
                    <img id="ather-logo-mobile" src={ather_logo} alt="Ather Logo" />

                </div>

            <div className="nav-links-mobile poppins-regular">

                    <img id="india-mobile" src={india} alt="India Flag"/>

                    <img id="india-mobile" src={location} alt="India Flag"/>
                    <img id="ham-mobile" src={hamburger_menu} alt="Hamburger Menu"/>
            </div>

        </div>
    );
}

export default TransNavbarMobile;
