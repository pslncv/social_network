//* Base React imports
import React from 'react';

//* Components

//* Styles
import './Logo.scss'

const Logo = () => {
    return (
        <div className="header__logo logo">
            <a href="#" className="logo__link">
                <div className="logo__text">Jump</div>
            </a>
        </div>
    );
}
 
export default Logo;