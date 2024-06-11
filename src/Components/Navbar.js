import React from 'react';
import ather_logo from '../assets/ather_logo.png'
import india from '../assets/india.png'
import dropdown from '../assets/dropdown.png'
import hamburger_menu from '../assets/hamburger_menu.png'

function Navbar() {
    return (
        <div className={'nav-container'}>
          <div className={"navbar"}>
              <div className={'logo-buttons'}>
                  <img id={'ather-logo'} src={ather_logo} />
                  <button className={'btn-1'}>Rizta</button>
                  <div className={'btn-1 type2'}>
                      <p className={'textspace'}>450</p>
                      <p className={'textspace'}>Series</p>
                      <img id={'dropdown'} src={dropdown}/>
                  </div>
              </div>

                    <ul className={'nav-links'}>
                        <li>Charging</li>
                        <li>Smart Helmets</li>
                        <li>Shop</li>
                        <li>Locate Us</li>
                        <li><img id={'india'} src={india}/></li>
                        <li><img  id={'ham'} src={hamburger_menu}/></li>
                    </ul>

          </div>
        </div>
    );
}

export default Navbar;
