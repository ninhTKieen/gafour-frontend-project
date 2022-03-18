import React from 'react';
import PostCard from 'src/components/Post/PostCard';
import PostInput from 'src/components/Post/PostInput';


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