import { Avatar, Box, Divider, Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';


function FriendCard() {
  return (
      <div className="post-input">
           <Box h='50px' bg=''>
            <Tag size='lg' colorScheme='telegram' borderRadius='full'>
                <Avatar
                    src='https://bit.ly/sage-adebayo'
                    size='xs'
                    name='Toàn Elnino'
                    ml={-1}
                    mr={2}
                />
                <TagLabel>Nguyễn Quốc Toàn</TagLabel>
                </Tag>
            </Box>
      </div>
  );
}

export default FriendCard;