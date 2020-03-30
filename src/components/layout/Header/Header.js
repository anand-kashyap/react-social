import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

import './Header.scss';
const Header = () => {
  let Nref = useRef();
  useEffect(() => {
    setTimeout(() => {
      Nref.setAttribute('data-theme', 'dark')
    }, 2000);
  }, [])

  return (
    <nav ref={nref => Nref = nref}>
      <div className="nav-wrapper">
        <Link to="/" className="heading">SnappyLog</Link>
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