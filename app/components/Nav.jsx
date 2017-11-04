import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = () => {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <Link to="/" className="menu-text logo">Alec Jandorek</Link>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <IndexLink to="/"
                className='currentPage'
                activeClassName='currentPage'>Home</IndexLink>
            </li>
            {/* <li>
                            <Link to="/about" activeClassName='currentPage'>About</Link>
                        </li> */}
            <li>
              <Link to="/portfolio" activeClassName='currentPage'>Portfolio</Link>
            </li>
            <li>
              <Link to="/contact_me" activeClassName='currentPage'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

module.exports = Nav;