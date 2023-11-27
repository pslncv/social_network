//* Base React imports
import React from 'react';

//* Components
import Menu from './Menu/Menu'
import { Outlet } from 'react-router-dom';

//* Styles
import './Main.scss'

const Main = () => {
    return (
        <main className="main">
            <Menu />
            <Outlet />
        </main>
    );
}
 
export default Main;