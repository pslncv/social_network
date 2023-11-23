//* Base React imports
import React from 'react';

//* Components

//* Styles
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav className="header__navigation navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <a href="#" className="navigation__link">
                    Home
                </a>
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