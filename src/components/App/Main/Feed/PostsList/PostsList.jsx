//* Base React imports
import React from 'react';

//* Components
import Title from './Title/Title'
import Post from './Post/Post';

//* Styles
import './PostsList.scss'

const PostsList = () => {
    return (
        <div className="postsList">
            <Title />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}
 
export default PostsList;