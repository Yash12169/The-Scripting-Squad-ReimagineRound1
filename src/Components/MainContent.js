import React from 'react';
import vid from '../assets/starting.mp4';
import '../styles/MainContent.css';

function MainContent() {
    return (

        <div className="video-container">
            <video autoPlay loop muted className="video-background">
                <source  src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1 className="libre-baskerville-regular h1">Welcome to the Future of Mobility</h1>
            </div>
        </div>
    );
}

export default MainContent;