//* Base React imports
import React from 'react';

//* Components

//* Styles
import './Actions.scss'

const Actions = () => {
    return (
        <div className="header__actions actions">
            <input type="text" className="actions__search" />
            <button className="actions__notifications"></button>
            <button className="actions__messages"></button>
            <button className="actions__global"></button>
            <button className="actions__profile"></button>
            <button className="actions__burger"></button>
        </div>
    );
}
 
export default Actions;