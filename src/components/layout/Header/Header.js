import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './Header.scss';
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="heading">SnappyLog</Link>
        <ul id="nav-mobile" className="right">
          <li className="dark-mode">
            <button className="btn btn-small waves-effect btn-flat" onClick={() => setDarkMode(!darkMode)}>
              <i className="material-icons-outlined">{darkMode ? 'brightness_2' : 'wb_sunny'}</i>
            </button>
          </li>
          <li>
            <Link to="/login" >Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Header;