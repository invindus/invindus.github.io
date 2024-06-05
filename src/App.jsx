import { useState, useEffect } from 'react'
import './App.css'
import Title from './pages/title/Title'
import Authcord from './pages/authcord/Authcord';

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
      <div className='header'>
        <h2>about</h2>
        <h2>contact</h2>
      </div>

      <Title isMobile={isMobile}/>

      <Authcord/>


      <div className='footer'>
        <h2>In progress...</h2>
        <p>&copy; 2024</p>
      </div>
    </>
  )
}

export default App
