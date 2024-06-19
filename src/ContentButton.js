import './App.css';
import { useState, useEffect } from 'react';

function ContentButton({text, onclick, currentButton}) {
    const handleClick = () => {
        onclick(text);
    }

    return (
        <div className="button" onClick={handleClick}>
            <p className={`${currentButton === text ? "sub-heading" : "shadow sub-heading"}`}>{text}</p>
        </div>
    )
}

export default ContentButton; 