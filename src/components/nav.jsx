import React from 'react'
import './component-styles/nav.css'
import { Link} from 'react-router';
import leftArrow from './assets/leftArrow.svg'
import rightArrow from './assets/rightArrow.svg'

const Nav = () => {
  var posY= 0;
  function moveLeft(){
    posY+=90;
    document.getElementById('cube0001').style.transform=`rotateX(-10deg) rotateY(${posY}deg)`;
  }
  function moveRight(){
    posY-=90;
    document.getElementById('cube0001').style.transform=`rotateX(-10deg) rotateY(${posY}deg)`;
  }
  return (
    <>
      <div className='navBody'>
        <button className='cubeTurn' onClick={moveLeft} >
          <img src={leftArrow} alt='left'/>
        </button>
        <div className='cubeContainer'>
        <div className='navCube' id='cube0001'>
          <div className="navItem" id='front'>  <Link to='/home'>home</Link></div>
          <div className="navItem" id='back'>   <Link to='/'>portfolio</Link></div>
          <div className="navItem" id='right'>  <Link to='/'>gallery</Link></div>
          <div className="navItem" id='left'>   <Link to='/'>someLink</Link></div>

          <div className="navItem" id='top'></div>
          <div className="navItem" id='bottom'></div>
        </div>
        </div>
        <button className='cubeTurn' onClick={moveRight}>
          <img src={rightArrow} alt='right'/>
          </button>
      </div>
    </>
  )
}
export default Nav