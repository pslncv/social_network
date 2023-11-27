//* Base React imports
import React from 'react';

import { NavLink } from 'react-router-dom';

//* Components

//* Styles
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav className="header__navigation navigation">
        <ul className="navigation__list">
            <li className="navigation__item">
                <NavLink to={`/`}>Home</NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to={`media`}>Media</NavLink>
            </li>
            <li className="navigation__item">
                <NavLink to={`activity`}>Actions</NavLink>
            </li>
        </ul>
        </nav>
    );
}
 
export default Navigation;