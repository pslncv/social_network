//* Base React imports
import React from 'react';

//* Components
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Actions from './Actions/Actions'

//* Styles
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navigation />
            <Actions />
        </header>
    );
}
 
export default Header;