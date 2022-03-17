import React from 'react';
import PostCreateButton from './PostCreateButton';

import './ProfileCSS/PostInput.css';

const PostInput =()=>{
    return(
        <div className='profile-post__input'>
            <PostCreateButton/>
        </div>
    )
}

export default PostInput;