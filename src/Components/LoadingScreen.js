import React, {useEffect, useState} from 'react';
import '../styles/LoadingScreen.css'
function LoadingScreen() {
    const [percentage, setPercentage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [message,setMessage] = useState('');
    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage((prevPercentage) => {
                if (prevPercentage >= 100) {
                    setIsZoomed(true);
                    clearInterval(timer);
                    return 100;
                }
                const nextPercentage =  prevPercentage + 1;
                if(nextPercentage <= 20) {
                    setMessage('Recharging Your Ride ...');
                } else if(nextPercentage > 20 && nextPercentage < 40) {
                    setMessage('Warming Up The Motors ...');
                } else if(nextPercentage >= 40 && nextPercentage < 60) {
                    setMessage('Energizing Your Experience ...');
                } else if(nextPercentage >= 60 && nextPercentage < 80) {
                    setMessage('Finalizing Performance Checks ...');
                } else if(nextPercentage >= 80 && nextPercentage <= 100) {
                    setMessage('Revving Up for Launch ...');
                }
                return nextPercentage;
            });
        }, 50);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className={`App`}>
            <div className="text lato-bold">Ather.</div>
            {/*<div className="punch lato-regular blink_me">{message}</div>*/}

            {/*<div className="percentage libre-baskerville-regular-italic">{percentage}%</div>*/}
        </div>
    );
}

export default LoadingScreen;
