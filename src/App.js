import './App.css';
import { useState, useEffect } from 'react';
import Cursor from './Cursor.js';
import Sidebar from './Sidebar';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Cursor />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;