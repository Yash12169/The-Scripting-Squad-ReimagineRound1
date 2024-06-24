import React, { useState, useEffect } from 'react';
import './App.css';
import img2 from './assets/img2.png';
import LoadingScreen from "./Components/LoadingScreen";
import CustomCursor from "./Components/CustomCursor";
import {motion} from "framer-motion";
import Overlay from "./Components/Overlay";
import MainContent from "./Components/MainContent";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {RevealLinks} from "./Components/RevealLinks";
import SliderUtils from "./Components/SliderUtils";
import Example from "./Components/SliderUtils";
import Overlay2 from "./Components/Overlay2";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import Navbar from "./Components/Navbar";
import Animation1 from "./Animations/Animation1";
import Slider from "./Components/Slider";
function App() {



    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (

        <>
            {/*<Overlay/>*/}
            {/*<LoadingScreen/>*/}
            <Overlay2/>
            {/*<Navbar/>*/}
           {/*/!*<div className={'mt-[3000px]'}>*!/*/}
           {/*    <Example/>*/}
           {/*/!*</div>*!/*/}
            <div className={'mt-[-1000px]'}>
                <Example/>
            </div>
            <FAQ/>
          <Animation1/>
            <Slider/>
            <Footer/>

        </>


    );
}

export default App;
