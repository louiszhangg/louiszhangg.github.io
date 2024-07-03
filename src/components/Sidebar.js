import '../App.css';
import { useState, useEffect, useRef } from 'react';
import Button from './Button.js';
import ContentButton from './ContentButton.js';

function Sidebar({changeContent}) {
    const [clickedButton, setClickedButton] = useState("CONTENT"); 
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
    const sidebarRef = useRef(null)

    const handleSidebarClick = (clickedId) => {
        setClickedButton(clickedId);
        changeContent(clickedId);
    }

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
        console.log('client height: ', clientHeight);
        console.log(scrollHeight - scrollTop);
        // use 1 as an extra buffer
        if (scrollHeight - scrollTop < clientHeight + 5) {
            console.log('bottom');
            setIsScrolledToBottom(true);
        }
        else {
            console.log(scrollHeight - scrollTop);
            setIsScrolledToBottom(false);
        }
    }

    useEffect(() => {
        sidebarRef.current.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        // initialize
        handleScroll();

        return () => {
            sidebarRef.current.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        }

    }, [])

    return (
        <div className="sidebar-container">
            <div className="sidebar" ref={sidebarRef}>
                <ContentButton text="CONTENT" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="About" year="" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="CV" year="" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="MinecraftAI" year="2023" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="Salon App" year="2023" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="VTHacks" year="2023" onclick={handleSidebarClick} currentButton={clickedButton}/>
                <Button text="CS Course" year="2022" onclick={handleSidebarClick} currentButton={clickedButton}/>
            </div> 
            {!isScrolledToBottom && (
                <div className="arrow-container">
                    <i className="arrow down"></i>
                </div>
            )}
        </div>
    )
}

export default Sidebar;