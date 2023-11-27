//* Base React imports
import React from 'react';

import { Link } from 'react-router-dom';

//* Components

//* Styles
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav className="header__navigation navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <Link to={`/`}>Home</Link>
            </li>
            <li className="navigation__item">
                <a href="#" className="navigation__link">
                    Media
                </a>
            </li>
            <li className="navigation__item">
                <a href="#" className="navigation__link">
                    Actions
                </a>
            </li>
        </ul>
        </nav>
    );
}
 
export default Navigation;