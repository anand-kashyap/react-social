import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import authContext from 'context/auth/authContext';

import './Header.scss';
const Header = () => {
  const [darkMode, setDarkMode] = useState(true),
    hist = useHistory(),
    { isAuth, deleteToken } = useContext(authContext);
  // useEffect(() => {}, []);

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  const logOut = () => {
    deleteToken();
    hist.push('/login');
  }
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='heading'>
          SnappyLog
        </Link>
        <ul id='nav-mobile' className='right'>
          <li className='dark-mode'>
            <button
              className='btn btn-small waves-effect btn-flat'
              onClick={() => setDarkMode(!darkMode)}
            >
              <i className='material-icons-outlined'>
                {darkMode ? 'wb_sunny' : 'brightness_2'}
              </i>
            </button>
          </li>
          {isAuth ? <li className='logout-link'>
            <button
              className='btn btn-small waves-effect btn-flat'
              onClick={logOut}
            ><i className='material-icons-outlined'>exit_to_app</i>
            </button>
          </li>
            : <li className='login-link'>
              <Link to='/login'>
                <i className='material-icons-outlined small'>perm_identity</i>
              </Link>
            </li>}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
