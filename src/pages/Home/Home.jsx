import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='intro'>

        <div className='title'>
          <h1>SAMUEL CHAN</h1>
          <div className='subtitles'>
            <p>student</p>
            <p>developer</p>
            <p>photographer</p>
          </div>
        </div>
            



      </div>
      {/* END PAGE 1 */}

      <div className='home'>
        <div className='border'>
          <div className='title tborder'>
            <h1>SAMUEL CHAN</h1>
            <div className='subtitles'>
              <p>student</p>
              <p>developer</p>
              <p>photographer</p>
            </div>
          </div>


          {/* <div className='profiles'>
            <a href="https://github.com/invindus" target='_blank' rel='noopener noreferrer' class='gh-link'>
              <img src="/github.svg" alt="GitHub"/>
            </a>
            <a href="https://www.instagram.com/inv.indus/" target='_blank' rel='noopener noreferrer' class='ig-link'>
              <img src="/instagram.svg" alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/snchanxv/" target='_blank' rel='noopener noreferrer' class='ln-link'>
              <img src="/linkedin.svg" alt="LinkedIn"/>
            </a>
          </div> */}

        </div>
      </div>
  </>
  )
}

export default Home