import React from 'react';
import PostCard from '../Post/PostCard';
import PostInput from './PostInput';

const ProfileRightAside =()=>{
    return(
        <div className='profile__content-right__aside'>
            <PostInput/>
            <PostCard/>
            <PostCard/>
      </div>
    )
}
export default ProfileRightAside;