import React from 'react'
import './component-styles/home.css'
import ammu from './assets/ammu.jpg'

const Home = () => {
  return (
    <>
      <div className='about-section'>
        About Lokesh Barathwaj
      </div>
      <div className='timeLine'>
        <div className='vertical-line'></div>
        <div className='leftBranch'></div>
        <img alt='1'className='rightBranch' src={ammu}/>
        <img alt='4'className='leftBranch' src={ammu}/>
        <img alt='3'className='rightBranch' src={ammu}/>
        <img alt='5'className='leftBranch' src={ammu}/>
        <img alt='2'className='rightBranch' src={ammu}/>
        <img alt='6'className='leftBranch' src={ammu}/>
      </div><br/><br/>
      <div className='footer'>Footer goes here</div>
    </>
  )
}

export default Home
