//* Base React imports
import React from 'react';

//* Styles
import './CreatePost.scss'

const CreatePost = () => {
    return (
    <div className="create">
        <div className="create__title title">Create post</div>
        <input type="text" className="create__post" />
        <div className="create__action action">
            <button className="action__file"></button>
        </div>
    </div>
    );
}
 
export default CreatePost;
