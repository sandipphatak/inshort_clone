import React from 'react'
import './NavInshorts.css';
import HamburgerDrawer from './HamburgerDrawer.js';


const NavInshorts = ({setcategories}) => {
  return (
    <div className='nav'>
        <div className='icon'>
          <HamburgerDrawer setcategories={setcategories} />
        </div>

        <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='logo' width={200} />
    </div>
  )
}

export default NavInshorts