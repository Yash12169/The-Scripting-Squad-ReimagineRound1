import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import '../styles/CustomCursor.css'

function CustomCursor() {
    const [cursorVarient,setCursorVarient] = useState("default")
    const [mousePosition,setMousePosition] = useState({
        x:0,
        y:0
    })
    console.log(mousePosition)
    useEffect(() => {
        const mouseMove  = (e) => {
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener('mousemove',mouseMove)


        return   () => {
            window.removeEventListener('mousemove',mouseMove)
        }
    }, []);
    const variants = {
        default:{
            x:mousePosition.x-16,
            y:mousePosition.y-16
        },
        text:{
            height:100,
            width:100,
            x:mousePosition.x-75,
            y:mousePosition.y-75,
            backgroundColor:"white",
            mixBlendMode:"difference"

        }
    }
    const onTextEnter  = () => {
        setCursorVarient("text")
    }
    const onTextLeave = () => {
        setCursorVarient('default')
    }
    return (
        <>

        </>
    );
}

export default CustomCursor;
