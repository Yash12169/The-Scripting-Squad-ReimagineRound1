import React, {useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AnimatedBlockHassle.css";
import CardScroll from "./CardScroll";


gsap.registerPlugin(ScrollTrigger);


function AnimationBlocksHassle(){

    useEffect(() => {
        const blockRows = document.querySelectorAll(".unique-animation-blocks-row");
        blockRows.forEach((row) => {
            for (let i = 0; i < 16; i++) {
                const block = document.createElement("div");
                block.className = "unique-animation-block";
                row.appendChild(block);
            }
        });

        const blockContainers = document.querySelectorAll(".unique-animation-blocks-container");
        blockContainers.forEach((container) => {
            const rows = container.querySelectorAll(".unique-animation-blocks-row");
            const numRows = rows.length;

            rows.forEach((row, rowIndex) => {
                let blocks = Array.from(row.querySelectorAll(".unique-animation-block"));
                let isTop = container.classList.contains("unique-animation-top");
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
        <div className="unique-animation-container">

            <section className="unique-animation-hero-img">

                <div className="unique-animation-blocks-container unique-animation-top">
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                </div>
                <div className="unique-animation-blocks-container unique-animation-bottom">
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                </div>
            </section>
            <section className="unique-animation-about">
                <CardScroll/>

            </section>
            <section className={"unique-animation-about-img"}>
                <div className="unique-animation-blocks-container unique-animation-top">
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                </div>
                <div className="unique-animation-blocks-container unique-animation-bottom">
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                    <div className="unique-animation-blocks-row"></div>
                </div>
            </section>

        </div>
    );
}

export default AnimationBlocksHassle;
