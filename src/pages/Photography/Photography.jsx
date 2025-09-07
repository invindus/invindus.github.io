import React from 'react'
import { Link } from 'react-router-dom';
import './Photography.css';

const Photography = () => {
  return (
    <>
    <div className='photos'>
      <div className='border'>
        <div className='title tborder'>
          <Link className='name' to={"/"}><h1>SAMUEL CHAN</h1></Link>
          <div className='subtitles'>
            <Link className='subtitle' to ="/about">about</Link>
            <Link className='subtitle' to ="/dev">development</Link>
            <Link className='subtitle' to ="/photos">photography</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Photography