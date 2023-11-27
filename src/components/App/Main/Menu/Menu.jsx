import React from 'react';
import './Menu.scss'

import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <aside className="aside-menu">
            <div className="menu__title title">
                Menu   
            </div>
            <ul className="menu__list">
                <li className="menu__item">
                    <Link to={`profile`}>Profile</Link>
                </li>
                <li className="menu__item">
                    <Link to={`content`}>Content</Link>
                </li>
                <li className="menu__item">
                    <Link to={`messages`}>Messages</Link>
                </li>
                <li className="menu__item">
                    <Link to={`news`}>News</Link>
                </li>
                <li className="menu__item">
                    <Link to={`music`}>Music</Link>
                </li>
            </ul>
        </aside>
    );
}
 
export default Menu;