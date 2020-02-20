import React from 'react'
import { Link } from 'react-router-dom';

import { navWrapper, heading } from './Header.module.scss';
const Header = () => {
  return (
    <nav>
      <div className={navWrapper}>
        <Link to="/" className={heading}>SnappyLog</Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/login" >Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Header;