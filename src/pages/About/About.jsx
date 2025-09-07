import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <>
    <div className='about'>
      <div className='border'>

        <div className='title tborder'>
          <Link className='name' to={"/"}><h1>SAMUEL CHAN</h1></Link>
          <div className='subtitles'>
            <Link className='subtitle' to ="/about">about</Link>
            <Link className='subtitle' to ="/dev">development</Link>
            <Link className='subtitle' to ="/photos">photography</Link>
          </div>
        </div>

        <div className='about_content'>
          <div className='description'>
            <p>Hi, I'm Sam.</p>

            <p>A developer with an eye for quality, <br/>
            and a photographer who captures memories.
            </p>

            <p>I'm an upcoming Computer Science graduate<br/>
            from the <strong>University of Alberta</strong>, pursing a career in<br/>
            full-stack development, UI/UX design, or data engineering.</p>

            <p>As someone of not many words, I prefer to let my work speak for itself.</p>
            
          </div>
          <div className='contact'>
            <h2>Contact</h2>
            <div className='profiles'>
              <a href="https://github.com/invindus" target='_blank' rel='noopener noreferrer' class='gh-link'>
                <img src="/github.svg" alt="GitHub"/>
              </a>
              <a href="https://www.instagram.com/inv.indus/" target='_blank' rel='noopener noreferrer' class='ig-link'>
                <img src="/instagram.svg" alt="Instagram"/>
              </a>
              <a href="https://www.linkedin.com/in/snchanxv/" target='_blank' rel='noopener noreferrer' class='ln-link'>
                <img src="/linkedin.svg" alt="LinkedIn"/>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>

    </>
  )
}

export default About