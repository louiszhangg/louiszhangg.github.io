import './App.css';
import { useState, useEffect } from 'react';
import Cursor from './components/Cursor.js';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CVPage from './pages/CVPage';
import MinecraftPage from './pages/MinecraftPage';
import SalonPage from './pages/SalonPage';
import HacksPage from './pages/HacksPage';
import CoursePage from './pages/CoursePage';
import OopsPage from './pages/OopsPage';

function App() {
  const [currentPage, setCurrentPage] = useState("CONTENT");

  const changePage = (content) => {
    setCurrentPage(content);
  }

  // Make sure the case and the button text align PERFECTLY
  const renderPage = () => {
    switch (currentPage) {
      case "CONTENT":
        return <HomePage />
      case "About":
        return <AboutPage />
      case "CV":
        return <CVPage />
      case "MinecraftAI":
        return <MinecraftPage />
      case "Salon App":
        return <SalonPage />
      case "VTHacks":
        return <HacksPage />
      case "CS Course":
        return <CoursePage />
      default:
        return <OopsPage />
    }
  }

  return (
    <div className="App">
      <Cursor />
      <Sidebar changeContent={changePage}/>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;