//* Base React imports
import React from 'react';

//* Components
import CreatePost from './CreatePost/CreatePost'
import News from './News/News'

//* Styles
import './Feed.scss'

const Feed = () => {
    return (
        <div className="feed">
            <CreatePost />
            <News />
        </div>
    );
}
 
export default Feed;