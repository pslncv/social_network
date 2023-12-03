import React from 'react';

import { NavLink } from 'react-router-dom';

const DialogProfile = (props) => {
    return (
        <li className="dialogs__item active">
            <NavLink to={`${props.id}`}>{props.name}</NavLink>
        </li>
    );
}
 
export default DialogProfile;