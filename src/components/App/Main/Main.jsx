//* Base React imports
import React from 'react';

//* Components
import Profile from './Profile/Profile';
import Menu from './Menu/Menu'
import Feed from './Feed/Feed';

//* Styles
import './Main.scss'

const Main = () => {
    return (
        <main className="main">
            <Menu />
            <Feed />
            <Profile />
        </main>
    );
}
 
export default Main;