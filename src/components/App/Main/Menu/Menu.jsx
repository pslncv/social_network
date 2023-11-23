import React from 'react';
import './Menu.scss'

const Menu = () => {
    return (
        <aside className="menu">
        <div className="menu__title title">
            Menu   
        </div>
        <ul className="menu__list">
            <li className="menu__item">
                <a href="#" className="menu__link">Profile</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Content</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Messages</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">News</a>
            </li>
            <li className="menu__item">
                <a href="#" className="menu__link">Music</a>
            </li>
        </ul>
        </aside>
    );
}
 
export default Menu;