import { Box, Flex,Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import './PostComment.css'

function PostComment() {
  return (
      <div className="post-comment">
          <Box h='40px' bg=''>
          <Flex>
            <Avatar src='https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/91547439_621164878664619_3001973254169559040_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_WXzI8gz8okAX-EzzJj&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8IQoKP_SSKpycy7Xn4vPt-TMoLCU_21n7jidfFVja6oQ&oe=624A18B3' />
            <Box ml='3'>
              <Text fontWeight=''>
                Nguyễn Quốc Toàn
               
              </Text>
              <Text fontSize='sm'>Bài viết thật là cảm động !</Text>
            </Box>
          </Flex>
          </Box>
      </div>
  );
}

export default PostComment;