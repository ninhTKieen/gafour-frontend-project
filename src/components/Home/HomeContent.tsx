import React from 'react';
import PostCard from '../PostCard';
import PostInput from '../PostInput';

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