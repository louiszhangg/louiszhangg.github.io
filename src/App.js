import './App.css';
import { useState, useEffect } from 'react';
import Cursor from './Cursor.js';
import Sidebar from './Sidebar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

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
      default:
        return <HomePage />
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