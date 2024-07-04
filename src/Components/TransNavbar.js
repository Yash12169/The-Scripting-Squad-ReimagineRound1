import React from 'react';
import ather_logo from '../assets/ather_logo_nav.png';
import india from '../assets/india.png';
import dropdown from '../assets/dropdown-trans.svg';
import hamburger_menu from '../assets/ham-trans.png';
import '../styles/TransNavbar.css';
import {DrawOutlineButton, DrawOutlineButtonCircular} from "./Outline";

function TransNavbar() {
    return (
        <div className={`navbar-trans z-[100]`}>
            <div className="navbar-content">
                <div className="logo-buttons-trans poppins-regular">
                    <img id="ather-logo" src={ather_logo} alt="Ather Logo"/>
                    <button className={'btn-1-trans'}>Rizta</button>
                    <div className={"btn-1-trans type2-trans cursor-pointer"}>
                        <p className="textspace">450</p>
                        <p className="textspace">Series</p>
                        <img id="dropdown" src={dropdown} alt="Dropdown Icon"/>
                    </div>
                </div>

                {/*<ul className="nav-links-trans poppins-regular">*/}
                {/*    <li className={'nav-utils'}>Charging</li>*/}
                {/*    <li><DrawOutlineButton>Smart Helmets</DrawOutlineButton></li>*/}
                {/*    <li><DrawOutlineButton>Shop</DrawOutlineButton></li>*/}
                {/*    <li><DrawOutlineButton>Locate Us</DrawOutlineButton></li>*/}
                {/*    <li><DrawOutlineButton>Smart Helmets</DrawOutlineButton></li>*/}

                {/*    <li>*/}
                {/*        <img id="india" src={india} alt="India Flag"/>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <img id="ham" src={hamburger_menu} alt="Hamburger Menu"/>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <ul className="nav-links-trans poppins-regular">
                    <li className={'nav-utils'}><DrawOutlineButton>Charging</DrawOutlineButton></li>
                    <li><DrawOutlineButton>Smart Helmets</DrawOutlineButton></li>
                    <li><DrawOutlineButton>Shop</DrawOutlineButton></li>
                    <li><DrawOutlineButton>Locate Us</DrawOutlineButton></li>
                    <li>
                        <img id="india" src={india} alt="India Flag"/>
                    </li>
                    <li>
                        <img id="ham" src={hamburger_menu} alt="Hamburger Menu"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TransNavbar;