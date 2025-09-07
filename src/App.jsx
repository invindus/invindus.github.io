import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Development from './pages/Development/Development';
import Photography from './pages/Photography/Photography';

function App() {
  
  // [CHECK MOBILE] ------------------------------------------------------------------------
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 700); // Adjust the threshold as needed
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  // END [CHECK MOBILE] ---------------------------------------------------------------------



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dev" element={<Development />} />
        <Route path="/photos" element={<Photography />} />

      </Routes>
    </Router>
    // <>
    //   <Home/>

    //   <div className='in-progress'>
    //     <h2>In progress...</h2>
    //   </div>
    //   <footer class="footer">
    //     &copy; {new Date().getFullYear()} Samuel Chan
    //   </footer>
    // </>
  )
}

export default App
