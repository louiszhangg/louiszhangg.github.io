import './App.css';
import { useState, useEffect } from 'react';
import Button from './Button.js';
import ContentButton from './ContentButton.js';

function Sidebar() {
    const [clickedButton, setClickedButton] = useState("CONTENT"); 

    const handleSidebarClick = (clickedId) => {
        setClickedButton(clickedId);
    }

    return (
        <div className="sidebar">
            <ContentButton text="CONTENT" onclick={handleSidebarClick} currentButton={clickedButton}/>
            <Button text="About" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
            <Button text="Project" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
            <Button text="VTHacks" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
        </div>
    )
}

export default Sidebar;