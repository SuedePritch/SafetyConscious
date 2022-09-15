import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuHamburger from './MenuHamburger/MenuHamburger'
import './Menu.scss'

function Menu() {
    //menuState could be isMenuOpen
    //default to hamburger - menuState false
    //shows X - menuState true
    const [menuState, setMenuState] = useState(null)

    
  return (
    <div>
        <MenuHamburger menuState={menuState} setMenuState={setMenuState} />

        {/* The classname is changed based on the menuState. menuState is null(onload) the only classname is Menu
      when the hamburger button is clicked the menuState is set to true which will apply the Open
      when the X button is clicked the menuState is set to false which will apply the Close
        */}
          <div className={
            `Menu ${
            menuState === null ? '' : 
            menuState ? 'Open' : 'Closed'
            }`}>
              <ul className='menu-ul'>
                  {/* <li><Link to="/company">Company</Link></li>
                  <li><Link to="/company">Projects</Link></li>
                  <li><Link to="/Employees">Employees</Link></li>
                  <li><Link to="/company">SOPs</Link></li>
                  <li><Link to="/company">Regulations</Link></li>
                  <li><Link to="/company">Inspection Forms</Link></li>
                  <li><Link to="/company">Incident Reporting</Link></li>
                  <li><Link to="/company">Safety Permits</Link></li> */}

                  <li><Link to="/newFlha">New Flha</Link></li>
                  <li><Link to="/reviewFlhas">Review FLHA</Link></li>
              </ul>
          </div>

    </div>
  )
}

export default Menu