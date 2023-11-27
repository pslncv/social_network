//* Base React imports
import React from 'react';

//* Components
import CreatePost from './../CreatePost/CreatePost'
import PostsList from './PostsList/PostsList'

//* Styles
import './Feed.scss'

const Feed = () => {
    return (
        <div className="feed">
            <CreatePost />
            <PostsList />
        </div>
    );
}
 
export default Feed;