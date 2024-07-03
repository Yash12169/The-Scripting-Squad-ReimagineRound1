// import React, { useEffect, useRef, useState } from 'react';
// import Overlay3 from "./Components/Overlay3";
// import Footer from "./Components/Footer";
// import AnimationBlocks from "./Components/AnimationBlocks";
// import FAQ from "./Components/FAQ";
// import Cards2 from "./Components/Cards2";
// import Cards from "./Components/Cards";
// import Slider from "./Components/Slider";
// import Overlay2 from "./Components/Overlay2";
// import SlideShow from "./Components/SlideShow";
// import IndiaLargest from "./Components/IndiaLargest";
// import AtherSpace from "./Components/AtherSpace";
// import AnimationBlocksHassle from "./Components/AnimationBlocksHassle";
// import TopUp from "./Components/TopUp";
// import Overlay3Mobile from "./MobileComponent/Overlay3Mobile";
// // import FooterMobile from "./MobileComponent/FooterMobile";
// import FAQmobile from "./MobileComponent/FAQmobile";
// import TopUpMobile from "./MobileComponent/TopUpMobile";
// import SliderUtilsMobile from "./MobileComponent/SliderUtilsMobile";
// import AtherSpaceMobile from "./MobileComponent/AtherSpaceMobile";
// import IndiaLargestMobile from "./MobileComponent/IndiaLargestMobile";
// import CardsMobile from "./MobileComponent/CardsMobile";
// import CardComponent from "./Components/CardComponent";
// import Cards3 from "./Components/Cards3";
// import Overlay2Mobile from "./MobileComponent/Overlay2Mobile";
// import CardScroll from "./MobileComponent/CardScroll";
// import HassleFreeMobile from "./MobileComponent/HassleFreeMobile";
// import Overlay from "./Components/Overlay";
// import OverlayCapsule from "./Components/OverlayCapsule";
// import SliderMobile from "./MobileComponent/SliderMobile";
// import SlideShowMobile from "./MobileComponent/SlideShowMobile";
// import HorizontalSliderMobile from "./MobileComponent/HorizontalSliderMobile";
// import StaticComponent from "./Components/StaticComponent";
//   // Import the loading screen
// import  starting from './assets/starting.mp4'
// import image from './assets/MeetRizta.png'
//
// function App() {
//     const elementRef = useRef(null);
//     const [width, setWidth] = useState(0);
//
//
//     useEffect(() => {
//         const getElemenWidth = () => {
//             if (elementRef.current) {
//                 const currentWidth = elementRef.current.clientWidth; // or use offsetWidth for total width including padding and borders
//                 setWidth(currentWidth);
//             }
//         };
//
//         // Call once when component mounts
//         getElementWidth();
//
//         // Call whenever window is resized
//         window.addEventListener('resize', getElementWidth);
//
//         // Cleanup listener on component unmount
//         return () => {
//             window.removeEventListener('resize', getElementWidth);
//         };
//     }, []);
//
//     return (
//         <div ref={elementRef}>
//             {width > 480 && (
//                 <div>
//                     <div className={'overflow-x-hidden'}>
//                         <Overlay3 />
//                     </div>
//                 </div>
//             )}
//             {/*{width <= 480 && (*/}
//             {/*    <div>*/}
//             {/*        <Overlay3Mobile />*/}
//             {/*        <CardComponent />*/}
//             {/*        <SliderMobile />*/}
//             {/*        <Overlay2Mobile />*/}
//             {/*        <SlideShowMobile />*/}
//             {/*        <IndiaLargestMobile />*/}
//             {/*        <AtherSpaceMobile />*/}
//             {/*        <HassleFreeMobile />*/}
//             {/*        <HorizontalSliderMobile />*/}
//             {/*        <FAQmobile />*/}
//             {/*        /!*<FooterMobile />*!/*/}
//             {/*    </div>*/}
//             {/*)}*/}
//         </div>
//     );
// }
//
// export default App;
