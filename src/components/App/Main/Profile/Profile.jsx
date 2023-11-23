//* Base React imports
import React from 'react';

//* Components

//* Styles
import './Profile.scss'

const Profile = () => {
    return (
        <aside className="profile">
        <div className="profile__title title">
            Profile
        </div>
        <div className="profile__image"></div>
        </aside>
    );
}
 
export default Profile;