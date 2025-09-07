import React from 'react'
import { Link } from 'react-router-dom';
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
            <Link className='name' to={"/"}><h1>SAMUEL CHAN</h1></Link>
            <div className='subtitles'>
              <Link className='subtitle' to ="/about">about</Link>
              <Link className='subtitle' to ="/dev">development</Link>
              <Link className='subtitle' to ="/photos">photography</Link>
            </div>
          </div>

          <div className='homeImg'>
            <img src="/images/van.jpg" alt="Vancouver '23" />
          </div>

        </div>
      </div>
  </>
  )
}

export default Home