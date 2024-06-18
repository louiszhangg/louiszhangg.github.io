import './App.css';
import { useState, useEffect } from 'react';

function Cursor() {
    const [cursorPos, setCursorPos] = useState({
        x: 0,
        y: 0,
    });
    // const [deviceType, setDeviceType] = useState("");
    const [isClicking, setIsClicking] = useState(false);
    // const [hovering, setHovering] = useState(false);

    // const isTouchDevice = () => {
    //   try {
    //     document.createEvent("TouchEvent");
    //     setDeviceType("touch");
    //     return true;
    //   } catch (e) {
    //     setDeviceType("mouse");
    //     return false;
    //   }
    // };

    const cursorMoved = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        setCursorPos({
            x: x,
            y: y,
        })
    };

    const handleMouseDown = () => {
        setIsClicking(true);
    }

    const handleMouseUp = () => {
        setIsClicking(false);
    }

    useEffect(() => {
        document.addEventListener("mousemove", cursorMoved);
        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", cursorMoved);
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mouseup", handleMouseUp);
        }
    }, []);

    return (
        <div
        className="cursor"
        style={{ 
            left: `${cursorPos.x}px`, 
            top: `${cursorPos.y}px`, 
            height: `${isClicking ? '17px' : '20px'}`,
            width: `${isClicking ? '17px' : '20px'}`,
            opacity: `${isClicking ? 0.85 : 0.6}`,
        }}
        ></div>
    )
}

export default Cursor;