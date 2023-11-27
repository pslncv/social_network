//* Base React imports
import React from 'react';

//* Components

//* Styles
import './Post.scss'

const Post = () => {
    return (
        <div className="post">
            <div className="post__head">
                <div className="post__logo">LOGO</div>
                <div className="post__info">                            
                    <div className="post__autor">Alexander Poselentsev</div>
                    <div className="post__date">Published November 23 23:30</div>
                </div>
            </div>
            <div className="post__content">
                <div className="post__image">props.image</div>
                <div className="post__text">Lorem ipsum</div>
            </div>
            <div className="post__feedback feedback">
                <div className="feedback__view action"></div>
                <div className="feedback__like action"></div>
                <div className="feedback__repost action"></div>
            </div>
        </div>
    );
}
 
export default Post;