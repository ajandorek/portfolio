import React from 'react';
import { Link, IndexLink } from 'react-router';

var Nav = () => {
    return (
        <div>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Alec Jandorek</li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <IndexLink to="/" activeClassName="active-link" >Home</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="hollow">About</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" activeClassName="hollow" >Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link">Blog Posts</Link>
                        </li>
                        <li>
                            <Link to="/" activeClassName="active-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

module.exports = Nav;