import React from 'react'
import './Authcord.css'

import IconButton from '@mui/material/IconButton';
import { Box, Icon, Toolbar } from '@mui/material';

const Authcord = () => {
  return (
    <div className='page-2'>
      <div className='proj-title'>
        <h3>PROJECT 01</h3>

        <div className='title-buttons'>
          <h1>AUTHCORD</h1>
          <IconButton className='gh-iconbutton' component='a' href='https://github.com/invindus/Authcord' target='_blank'>
            <img src='/github.svg' alt='Github Icon'/>
          </IconButton>
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

      <Box className='tech-icons'>
        <img src='/react.svg' alt='React Icon'/>
        <img src='/django.svg' alt='Django Icon'/>
        <img src='/heroku.svg' alt='Heroku Icon'/>
        <img src='/postgres.svg' alt='PostgreSQL Icon'/>
      </Box>

      <div className='macbook'>
        <img src='/macbook.png' alt="Macbook Air M2 Mockup" />
      </div>

      <div className='figma'>

        <div className='figma-icon-desc'>
          <IconButton className='figma-iconbutton' component='a' href='https://www.figma.com/design/YQ3Ej9ATORi2AmeX9LBZjF/CMPUT404-PROJECT-UI?node-id=0-1&t=pYIUqnKHWOquXG7R-1' target='_blank'>
            <img src="/figma.svg" alt="Figma Icon" />
          </IconButton>
          
          <div className='figma_desc'>
            <h2>DESIGNED</h2>
            <p>with Figma</p>
          </div>        
        </div>

        <div className='figma_img'>
          <img src='/figma_temp.png' alt="" />
        </div>
      </div>
        
    </div>
  )
}

export default Authcord