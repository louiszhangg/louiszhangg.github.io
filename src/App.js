import './App.css';
import { useState, useEffect } from 'react';
import Cursor from './components/Cursor.js';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OopsPage from './pages/OopsPage';
import CVPage from './pages/CVPage';

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