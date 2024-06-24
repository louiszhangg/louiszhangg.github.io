import '../App.css';
import { useState, useEffect } from 'react';
import Button from './Button.js';
import ContentButton from './ContentButton.js';

function Sidebar({changeContent}) {
    const [clickedButton, setClickedButton] = useState("CONTENT"); 

    const handleSidebarClick = (clickedId) => {
        setClickedButton(clickedId);
        changeContent(clickedId);
    }

    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <ContentButton text="CONTENT" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="About" year="" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="CV" year="" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="MinecraftAI" year="2023" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="Salon App" year="2023" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="VTHacks" year="2023" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="CS Course" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
                {/* <Button text="VTHacks" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="VTHacks" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="VTHacks" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="VTHacks" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="VTHacks" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="Bottomr" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/> */}
            </div>
        </div>
    )
}

export default Sidebar;