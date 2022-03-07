import React from 'react';
import PostCard from '../Post/PostCard';
import PostInput from '../Post/PostInput';

function HomeContent() {
  return (
      <div className="HomeContent">
          {/* <PostInput/> */}
          <PostCard/>
          <PostCard/>
      </div>
  );
}

export default HomeContent;