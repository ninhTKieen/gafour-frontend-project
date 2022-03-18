import { Box, Flex,Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import './PostCSS/PostComment.css';
import avatar_friend from 'src/assets/Avatar/avatar_friend_comment.jpg';

function PostComment() {
  return (
    <div className="post-comment">
      <Box h='40px' bg=''>
        <Flex>
          <Avatar src={avatar_friend} />
          <Box ml='3'>
            <Text fontWeight=''>Nguyễn Quốc Toàn</Text>
            <Text fontSize='sm'>Bài viết thật là cảm động !</Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default PostComment;