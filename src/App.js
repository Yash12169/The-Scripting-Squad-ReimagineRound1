import React from 'react';
import Overlay3 from "./Components/Overlay3";
import Footer from "./Components/Footer";
import AnimationBlocks from "./Components/AnimationBlocks";
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

function App() {
    return (
        <div>
         <div className={'overflow-x-hidden'}>
             <Overlay3/>
         </div>
            <div className={'mt-[-1700px]'}>
                <AnimationBlocks/>
            </div>


             <div className={'mt-[-1200px]'}>
                 <Cards2/>
                 <Cards/>
             </div>

            <Slider/>
          <div className={''}>
              <Overlay2/>
          </div>
         <div className={'mt-[-1000px]'}>
             <SlideShow/>
         </div>
           <div className={'mt-[-1000px] mb-[200px]'}>
               <IndiaLargest/>
           </div>
            <AtherSpace/>
          <div className={'mt-[-1200px]'}>
              <AnimationBlocksHassle/>
          </div>
          <div className={'mt-[-1200px]'} >
              <TopUp/>
              <FAQ/>
              <Footer/>
          </div>

        </div>
    );
}

export default App;
