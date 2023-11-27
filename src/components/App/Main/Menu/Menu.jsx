import React from 'react';
import './Menu.scss'

import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <aside className="aside-menu">
            <div className="menu__title title">
                Menu   
            </div>
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink to={`profile`}>Profile</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={`content`}>Content</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={`messages`}>Messages</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={`news`}>News</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={`music`}>Music</NavLink>
                </li>
            </ul>
        </aside>
    );
}
 
export default Menu;