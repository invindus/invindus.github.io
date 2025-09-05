import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home/Home';

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
    <>
      <Home/>

      <div className='in-progress'>
        <h2>In progress...</h2>
        <p>&copy; 2024</p>
      </div>
      <footer class="footer">
        © {new Date().getFullYear()} Samuel Chan
      </footer>
    </>
  )
}

export default App
