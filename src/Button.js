import './App.css';
import { useState, useEffect } from 'react';

function Button({text, year, onclick, currentButton}) {
    const handleClick = () => {
        onclick(text);
    }

    return (
        <div className="button" onClick={handleClick}>
            <p className={`${currentButton === text ? "text" : "shadow text"}`}>{text}</p>
            <p className="shadow text">{year}</p>
        </div>
    )
}

export default Button; 