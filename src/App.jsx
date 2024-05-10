import { useState, useEffect } from 'react'
import './App.css'

function App() {
  
  // [CHECK MOBILE] ------------------------------------------------------------------------
  const [isMobile, setIsMobile] = useState(false);
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 600); // Adjust the threshold as needed
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
      <div className='page-1'>

        <div className='title'>
          <h1>Hey,</h1> 

          <div className='title-icon'> 
            <h1>I'm Sam</h1>

            {/* Show icons to the right of I'm Sam if large screen */}
            {!isMobile && (
              <div className='profile-icons'>
                <button className='gh-icon'> </button>
                <button className='ig-icon'> </button>
                <button className='ln-icon'> </button>
              </div>
            )}
            
          </div>

        </div>

        {/* Show icons below I'm Sam if mobile screen */}
        {isMobile && (
          <div className='profile-icons'>
            <button className='gh-icon'> </button>
            <button className='ig-icon'> </button>
            <button className='ln-icon'> </button>
          </div>
        )}

        

      </div>

      <div className='page-2'>
        <h2>In progress...</h2>

      </div>
    </>
  )
}

export default App
