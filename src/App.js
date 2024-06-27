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
import SlideShow from "./Components/SlideShow";
import {Carousel} from "react-responsive-carousel";

import Cards2 from "./Components/Cards2";
import OverlayOrig from "./Components/OverlayOrig";
import AnimationBlocks from "./Components/AnimationBlocks";
import AtherSpace from "./Components/AtherSpace";
import ImageSlides from "./Components/ImageSlides";

import TopUp from "./Components/TopUp";
import AnimatedText from "./Components/AnimatedText";
import MoreThrills from "./Components/MoreThrills";
import CardComponent from "./Components/CardComponent";
import AnimationBlocksHassle from "./Components/AnimationBlocksHassle";
import IndiaLargest from "./Components/IndiaLargest";
function App() {

    const text = "MOTION";

    const [showLoading, setShowLoading] = useState(true);
    const [showNav,setShowNav] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <OverlayOrig/>
            <div className={'mt-[1000px]'}>
                <AnimationBlocks/>
            </div>
            <div className={'mt-[-1700px]'}>
                <CardComponent/>
            </div>
            <div className={'mt-[-700px] mb-[400px]'}>
                <IndiaLargest/>
            </div>
            <Overlay2/>
            <div className={'mt-[-900px]'}>
                <SlideShow/>
            </div>

            <div className={'mt-[-800px]'}>
                <AtherSpace/>
            </div>
            <div className={'mt-[-1300px]'}>
                <AnimationBlocksHassle/>
            </div>

           <div className={'mt-[-1000px]'}>
               <TopUp/>
               <FAQ/>
               <Footer/>
           </div>
























        </>




    );
}

export default App;
