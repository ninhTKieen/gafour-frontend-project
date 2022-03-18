import React from 'react';

import PostCard from '../Post/PostCard';
import PostInput from '../Post/PostInput';

import './HomeComponentsCSS/HomeContent.css';

function HomeContent() {
  return (
      <div className="home-content">
          <PostInput/>
          <PostCard/>
          <PostCard/>
      </div>
  );
}

export default HomeContent;