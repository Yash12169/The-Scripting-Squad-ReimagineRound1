import React, { useEffect, useRef, useState } from 'react';
import Overlay3 from "./Components/Overlay3";
import Footer from "./Components/Footer";
import FAQ from "./Components/FAQ";
import Cards2 from "./Components/Cards2";
import Cards from "./Components/Cards";
import Slider from "./Components/Slider";
import Overlay2 from "./Components/Overlay2";
import SlideShow from "./Components/SlideShow";
import IndiaLargest from "./Components/IndiaLargest";
import AtherSpace from "./Components/AtherSpace";
import AnimationBlocksHassle from "./Components/AnimationBlocksHassle";
import TopUp from "./Components/TopUp";
import Overlay3Mobile from "./MobileComponent/Overlay3Mobile";
import FAQmobile from "./MobileComponent/FAQmobile";
import SliderUtilsMobile from "./MobileComponent/SliderUtilsMobile";
import AtherSpaceMobile from "./MobileComponent/AtherSpaceMobile";
import IndiaLargestMobile from "./MobileComponent/IndiaLargestMobile";
import CardsMobile from "./MobileComponent/CardsMobile";
import CardComponent from "./Components/CardComponent";
import Overlay2Mobile from "./MobileComponent/Overlay2Mobile";
import HassleFreeMobile from "./MobileComponent/HassleFreeMobile";
import SliderMobile from "./MobileComponent/SliderMobile";
import SlideShowMobile from "./MobileComponent/SlideShowMobile";
import HorizontalSliderMobile from "./MobileComponent/HorizontalSliderMobile";
import StaticComponent from "./Components/StaticComponent";
import LoadingScreen from "./Components/LoadingScreen";
import { VIDEOS } from "./Components/Videos";

function App() {
    const elementRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const [videosLoaded, setVideosLoaded] = useState(false);

    useEffect(() => {
        console.log("Starting video loading...");
        const loadVideo = video => {
            return new Promise((resolve, reject) => {
                const loadVid = document.createElement("video");
                loadVid.src = video.url;
                loadVid.onloadeddata = () => {
                    console.log(`Video loaded: ${video.url}`);
                    video.loaded = true;
                    resolve(video.url);
                };
                loadVid.onerror = err => {
                    console.error(`Error loading video: ${video.url}`, err);
                    reject(err);
                };
            });
        };

        Promise.all(VIDEOS.map(video => loadVideo(video)))
            .then(() => {
                console.log("All videos loaded successfully");
                setVideosLoaded(true);
            })
            .catch(err => {
                console.log("Failed to load videos", err);
                setVideosLoaded(true); // Set to true even on error to show main content
            });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderDesktopContent = () => (
        <div>
            <div className={'overflow-x-hidden'}>
                <Overlay3 />
            </div>
            <StaticComponent />
            <div>
                <Cards2 />
                <Cards />
            </div>
            <Slider />
            <div className={''}>
                <Overlay2 />
            </div>
            <div className={'mt-[-1000px]'}>
                <SlideShow />
            </div>
            <div className={'mt-[-1000px] mb-[200px]'}>
                <IndiaLargest />
            </div>
            <AtherSpace />
            <div className={'mt-[-1200px]'}>
                <AnimationBlocksHassle />
            </div>
            <div className={'mt-[-1200px]'}>
                <TopUp />
                <FAQ />
                <Footer />
            </div>
        </div>
    );

    const renderMobileContent = () => (
        <div>
            <Overlay3Mobile />
            <CardComponent />
            <SliderMobile />
            <Overlay2Mobile />
            <SlideShowMobile />
            <IndiaLargestMobile />
            <AtherSpaceMobile />
            <HassleFreeMobile />
            <HorizontalSliderMobile />
            <FAQmobile />
        </div>
    );

    return (
        <div>
            {videosLoaded ? (
                <div ref={elementRef}>
                    {width > 480 ? renderDesktopContent() : renderMobileContent()}
                </div>
            ) : (
                <LoadingScreen />
            )}
        </div>
    );
}

export default App;