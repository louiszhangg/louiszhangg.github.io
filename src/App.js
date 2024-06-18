import './App.css';
import { useState, useEffect } from 'react';
import Cursor from './Cursor.js';

function App() {
  return (
    <div className="App">
      <Cursor />
      <h1 className="title">Hello World</h1>
    </div>
  );
}

export default App;