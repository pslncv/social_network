//* Base React imports
import React from 'react';

//* Components
import Dialog from './DialogProfile/DialogProfile'

//* Styles
import './DialogsList.scss'

const DialigsList = () => {
    return (
        <ul className="dialogs__list">
            <Dialog id='1' name='John'/>
            <Dialog id='2' name='Robert'/>
            <Dialog id='3' name='George'/>
            <Dialog id='4' name='Jacob'/>
            <Dialog id='5' name='Michael'/>
            <Dialog id='6' name='Alexander'/>
            <Dialog id='7' name='Daniel'/>
            <Dialog id='8' name='Matthew'/>
            <Dialog id='9' name='David'/>
            <Dialog id='10' name='Oliver'/>
        </ul>
    );
}
 
export default DialigsList;