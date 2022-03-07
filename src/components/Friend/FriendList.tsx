import { Avatar, Box, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import FriendCard from './FriendCard';
import './FriendList.css';

function FriendList() {
  return (
      <div className="friend-list">
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
          <FriendCard></FriendCard>
      </div>
  );
}

export default FriendList;