import React from 'react'
import "./Title.css"

const Title = ({ isMobile }) => {

  const handleButtonClick = (url) => {
    window.open(url, '_blank'); // _blank opens URL in new tab
  }
  
  return (
    <div className='page-1'>

        <div className='title'>
          <h1>Hey, <br/>I'm Sam</h1> 
            
          {/* Show icons to the right of I'm Sam if large screen */}
          {!isMobile && (
            <div className='profile'> 
              <div className='profile-icons'>
                <button className='gh-icon' onClick={() => handleButtonClick('https://github.com/invindus')}> </button>
                <button className='ig-icon' onClick={() => handleButtonClick('https://www.instagram.com/inv.indus/')}> </button>
                <button className='ln-icon' onClick={() => handleButtonClick('https://www.linkedin.com/in/snchanxv/')}> </button>
              </div>

              <div className='profile-desc'> 
                <h2> - student, developer,</h2>
                <h2> photographer.</h2>
              </div>
            </div>
          )}

        </div>

        {/* Show icons below I'm Sam if mobile screen */}
        {isMobile && (
          <div className='profile-mobile'>
            <div className='profile-icons-mobile'>
              <button className='gh-icon'> </button>
              <button className='ig-icon'> </button>
              <button className='ln-icon'> </button>
            </div>
            
            <div className='profile-desc'> 
              <h2> - student, developer,</h2>
              <h2> photographer.</h2>
            </div>
          </div>
        )}

        

      </div>
  )
}

export default Title