import React, { useEffect, useRef, useState } from 'react';
import ather_logo from '../assets/ather_logo.png';
import india from '../assets/india.png';
import dropdown from '../assets/dropdown.png';
import hamburger_menu from '../assets/hamburger_menu.png';
import '../App.css'; // Ensure your CSS file is imported

function Navbar() {
    const navRef = useRef(null);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [scrollDirection, setScrollDirection] = useState('down');
    const scrollDownThreshold = 100; // Threshold for scrolling down
    const scrollUpThreshold = 50; // Threshold for scrolling up

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const navContainer = navRef.current;

            if (currentScrollPos > prevScrollPos) {
                // Scrolling down
                setScrollDirection('down');
                if (currentScrollPos > scrollDownThreshold) {
                    navContainer.classList.add('full-width');
                } else {
                    navContainer.classList.remove('full-width');
                }
            } else {
                // Scrolling up
                setScrollDirection('up');
                if (currentScrollPos > scrollUpThreshold) {
                    navContainer.classList.add('full-width');
                } else {
                    navContainer.classList.remove('full-width');
                }
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className="nav-container">
            <div className="navbar" ref={navRef}>
                <div className="logo-buttons">
                    <img id="ather-logo" src={ather_logo} alt="Ather Logo" />
                    <button className={scrollDirection === 'down' ? "btn-1" : "btn-1 full-width"}>Rizta</button>
                    <div className={scrollDirection === 'down' ? "btn-1 type2" : "btn-1 type2 full-width"}>
                        <p className="textspace">450</p>
                        <p className="textspace">Series</p>
                        <img id="dropdown" src={dropdown} alt="Dropdown Icon" />
                    </div>
                </div>

                <ul className="nav-links">
                    <li>Charging</li>
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

export default Navbar;
