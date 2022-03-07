import { Avatar, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';


function PostInput() {
  return (
      <div className="post-input">
          <Tag size='lg' colorScheme='red' borderRadius='full'>
            <Avatar
                src='https://bit.ly/sage-adebayo'
                size='xs'
                name='Toàn Elnino'
                ml={-1}
                mr={2}
            />
            <TagLabel>Toàn Elino</TagLabel>
            </Tag>
      </div>
  );
}

export default PostInput;