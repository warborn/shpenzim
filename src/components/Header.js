import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  const isLoggedIn = true;
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <div className="auth-info">
        {
          isLoggedIn 
            ? <div className="user">
                <img src="https://avatars2.githubusercontent.com/u/10677789?v=4" alt="User profile" className="photo" />
                <span className="username">Iván Munguía</span>
              </div>
            : null
        }
        <button className="action">{ isLoggedIn ? 'Log Out' : 'Log In'}</button>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;