import './App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  console.log(cursorPos);
  
  useEffect(() => {
    const cursorMoved = e => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", cursorMoved)

    return () => {
      window.removeEventListener("mousemove", cursorMoved);
    }
  }, []);

  const variants = {
    default: {
      x: cursorPos.x - 10,
      y: cursorPos.y - 10,
    }
  }

  return (
    <div className="App">
      <h1 className="title">Hello World</h1>
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
    </div>
  );
}

export default App;
