import React, {forwardRef} from 'react';
import '../styles/AtherSpace.css'
import arrow from '../assets/Vector.svg'
import ather_space from '../assets/AtherSpace.png'

const AtherSpace = () => {
    return (
        <div className={'as-parent'}>


              <img src={ather_space}/>

          <div className={'ather-space-container'}>
              <div className={'ather-space-text'}>
                <div className={'ather-space-title montserrat-reg'}>
                    <p>Ather Space</p>
                </div>
                <div className={'ather-space-des montserrat-reg'}>
                    <p>Take back all the answers.
                        And a great test ride experience.</p>
                </div>
                  <div className={'ather-space-ul poppins-regular'}>
                      <p>Learn Experience Centre</p>
                      <img src={arrow}/>
                  </div>
              </div>
              <div className={'ather-space-cities montserrat-font'}>
                  <div>
                      <p className={'as-bold'}>148+</p>
                      <p className={'as-text'}>Cities</p>
                  </div>
                  <div>
                      <p className={'as-bold'}>204+</p>
                      <p className={'as-text'}>Ather Space</p>
                  </div>
              </div>

          </div>
        </div>
    );
}

export default AtherSpace;
