import React from 'react'
import './Authcord.css'

const Authcord = () => {
  return (
    <div className='page-2'>
      <div className='proj-title'>
        <h3>PROJECT 01</h3>

        <div className='title-buttons'>
          <h1>AUTHCORD</h1>
          <button className='gh-icon' />
        </div>
        <p>Distributed Social Networking</p>
      </div>

      <div className='proj-headers'>

        <div className='description'>
          <h3>DESCRIPTION</h3>
          <p>
            A social network platform that allows the distribution of posts
            and user interaction between servers, each hosting their own
            platform.
            <br/>
            <br/>
            By removing a central server, all user data is distributed across
            3 other servers. This allows users to select their preferred
            platform while maintaining connectivity and interaction
            between different platforms.
          </p>
        </div>

        <div className='responsibilities'>
          <h3>RESPONSIBILITIES</h3>
          <p>
            UI/UX Design & Development<br/>
            REST API Integration<br/>
            Product Presentation
          </p>
        </div>

        <div className='team'>
          <h3>TEAM</h3>
          <p>
          Abdullah Mohammed<br/>
          Amirul Hossain<br/>
          Corbin Beck<br/>
          Harjot Singh<br/>
          Sam Chan
          </p>
        </div>

        <div className='year'>
          <h3>YEAR</h3>
          <p>
          2024
          </p>
        </div>

      </div>

        <div className='macbook'>
          <img src='/macbook.png' alt="Macbook Air M2 Mockup" />
        </div>

        <div className='figma'>
          <div className='figma_desc'>
            <h2>DESIGNED</h2>
            <p>with Figma</p>
          </div>

          <div className='figma_img'>
            <img src='/figma_temp.png' alt="" />
          </div>
        </div>
        
    </div>
  )
}

export default Authcord