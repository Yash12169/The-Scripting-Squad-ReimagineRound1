import React from 'react';
import ather_logo from '../assets/ather_logo_nav.png';
import india from '../assets/india.png';
import dropdown from '../assets/dropdown.png';
import hamburger_menu from '../assets/hamburger_menu.png';
import '../styles/TransNavbar.css';

function TransNavbar() {
    return (
        <div className={`navbar-trans z-[100]`}>
            <div className="navbar-content">
                <div className="logo-buttons poppins-regular">
                    <img id="ather-logo" src={ather_logo} alt="Ather Logo" />
                    <button className={'btn-1'}>Rizta</button>
                    <div className={"btn-1 type2 cursor-pointer"}>
                        <p className="textspace">450</p>
                        <p className="textspace">Series</p>
                        <img id="dropdown" src={dropdown} alt="Dropdown Icon" />
                    </div>
                </div>

                <ul className="nav-links poppins-regular">
                    <li className={'nav-utils'}>Charging</li>
                    <li>Smart Helmets</li>
                    <li>Shop</li>
                    <li>Locate Us</li>
                    <li>
                        <img id="india" src={india} alt="India Flag" />
                    </li>
                    <li>
                        <img id="ham" src={hamburger_menu} alt="Hamburger Menu" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TransNavbar;