// LoadingScreen.js
import React from 'react';
import logo from '../assets/loading_logo.png'
import '../styles/LoadingScreen.css'
const LoadingScreen = () => {
    return (
        <div className="loading-screen w-screen h-screen bg-black">
            <img className={'img-big'} src={logo}/>
            <img className={'img-small'} src={logo}/>
        </div>
    );
};

export default LoadingScreen;