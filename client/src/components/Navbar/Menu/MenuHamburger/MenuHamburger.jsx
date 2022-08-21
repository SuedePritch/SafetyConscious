import React from 'react'
import './MenuHamburger.scss'
function MenuHamburger({menuState, setMenuState}) {
  //menuState is null on page load
  //no animations on pageload
  //once clicked it sets menuState to true or false causing animations
  const toggleMenu = () => {
    setMenuState(prevState =>{
      return !prevState
    })

  }


  return (
    
    <div>
      {/* The classname is changed based on the menuState. menuState is null(onload) the only classname is menu-toggle-button
      when the hamburger button is clicked the menuState is set to true which will apply the animateMenuHamburgerOpen
      when the X button is clicked the menuState is set to false which will apply the animateMenuHamburgerClose
        */}
        <button onClick={toggleMenu} className={
            `menu-toggle-button ${
            menuState === null ? '' : 
            menuState ? 'animateMenuHamburgerOpen' : 'animateMenuHamburgerClose'
            }`}>


          {/* Hamburger SVG     */}
          <svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">
          <g id="Hamburger">
            <line id="bottom" x1="15" y1="115"  x2="185" y2="115" strokeLinecap="round"/>
            <line id="middle" x1="15" y1="65"   x2="185" y2="65" strokeLinecap="round"/>
            <line id="top"    x1="15" y1="15"   x2="185" y2="15" strokeLinecap="round"/>
          </g>
        </svg>
        
        </button>
    </div>
  )
}

export default MenuHamburger