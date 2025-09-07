import React from 'react'
import { Link } from 'react-router-dom';
import './Development.css';

const Development = () => {
  return (
    <>
    <div className='dev'>
      <div className='border'>

        <div className='title'>
          <Link className='name' to={"/"}><h1>SAMUEL CHAN</h1></Link>
          <div className='subtitles'>
            <Link className='subtitle' to ="/about">about</Link>
            <Link className='subtitle' to ="/dev">development</Link>
            <Link className='subtitle' to ="/photos">photography</Link>
          </div>
        </div>

        <div className="dev_content">

        </div>
      </div>
    </div>
    </>
  )
}

export default Development