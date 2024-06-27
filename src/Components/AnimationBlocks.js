import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AnimationBlocks.css";
import SliderUtils from "./SliderUtils";
import FAQ from "./FAQ";
import Footer from "./Footer";
import AtherSpace from "./AtherSpace";
import Overlay2 from "./Overlay2";
import ImageSlides from "./ImageSlides";

gsap.registerPlugin(ScrollTrigger);

const AnimationBlocks = () => {
    useEffect(() => {
        const blockRows = document.querySelectorAll(".animation-blocks-row");
        blockRows.forEach((row) => {
            for (let i = 0; i < 16; i++) {
                const block = document.createElement("div");
                block.className = "animation-block";
                row.appendChild(block);
            }
        });

        const blockContainers = document.querySelectorAll(".animation-blocks-container");
        blockContainers.forEach((container) => {
            const rows = container.querySelectorAll(".animation-blocks-row");
            const numRows = rows.length;

            rows.forEach((row, rowIndex) => {
                let blocks = Array.from(row.querySelectorAll(".animation-block"));
                let isTop = container.classList.contains("animation-top");
                let randomizedOrder = gsap.utils.shuffle(blocks.map((block, idx) => idx));

                ScrollTrigger.create({
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    onUpdate: (self) => {
                        let progress = self.progress;
                        let rowDelay = 0.3 * (numRows - rowIndex - 1);
                        let adjustedProgress = Math.max(0, Math.min(1, progress - rowDelay));
                        updateBlockOpacity(blocks, randomizedOrder, isTop, adjustedProgress);
                    }
                });
            });
        });

        function updateBlockOpacity(blocks, order, isTop, progress) {
            blocks.forEach((block, idx) => {
                let offset = order.indexOf(idx) / blocks.length;
                let adjustedProgress = (progress - offset) * blocks.length;
                let opacity = isTop
                    ? 1 - Math.min(1, Math.max(0, adjustedProgress))
                    : Math.min(1, Math.max(0, adjustedProgress));

                block.style.opacity = opacity;
            });
        }
    }, []);

    return (
        <div className="animation-container">

            <section className="animation-hero-img">

                <div className="animation-blocks-container animation-top">
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                </div>
                <div className="animation-blocks-container animation-bottom">
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                </div>
            </section>
            <section className="animation-about">
                <ImageSlides/>
            </section>
            <section className={"animation-about-img"}>
                <div className="animation-blocks-container animation-top">
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                </div>
                <div className="animation-blocks-container animation-bottom">
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                    <div className="animation-blocks-row"></div>
                </div>
            </section>

        </div>
    );
}

export default AnimationBlocks;
