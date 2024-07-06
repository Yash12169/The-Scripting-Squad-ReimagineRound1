import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import '../App.css';

function TextRevealStag({ text }) {
    const textRef = useRef(null);

    useEffect(() => {
        const myText = new SplitType(textRef.current, { types: 'chars' });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.to('.char', {
                            y: 0,
                            stagger: 0.02,
                            delay: 0.01,
                            duration: 0.1,
                            ease: 'power3.out',
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const observerElement = textRef.current;
        if (observerElement) {
            observer.observe(observerElement);
        }

        return () => {
            if (observerElement) {
                observer.unobserve(observerElement);
            }
        };
    }, []);

    return (
        <div className="App">
            <header className={'montserrat-thick'}>
                <h1 className={'montserrat-thick h-[150px] pt-[0px]'} ref={textRef}>{text}</h1>
            </header>
        </div>
    );
}

// CSS (you can put this in a separate CSS file)
const styles = `
  header {
   
  }

  h1 {
    font-size: 7rem;
    clip-path: polygon(0% 0%, 80% 0%, 90% 110%, 0% 110%);
    line-height: 10rem;
  }

  .char {
    transform: translateY(200px);
    display: inline-block;
  }
`;

// Inject the styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default TextRevealStag;
