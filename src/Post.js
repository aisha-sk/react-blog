import { Link } from 'react-router-dom';
/* The Link component provided by react-router-dom is used to create links 
between different routes in your application. It is similar to the HTML anchor 
tag (<a>), but it handles the navigation without requiring a full page reload.

Instead of loading a new page, when a user clicks on a Link component, 
the router will update the URL in the browser's address bar and render 
the corresponding component for the linked route, without refreshing the 
entire page. 

This makes for a smooth and fast navigation experience in a 
Single Page Application (SPA) built with React and React Router. */
import React from 'react';

const Post = ({ post }) => {
    return (
        <article className="post">
            <Link to={`post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </Link>
            <p className="postBody">{
                (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0, 25)}...`
            }</p>
        </article>
    )
}

export default Post