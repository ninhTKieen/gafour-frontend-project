import React from 'react';

import { Avatar, Box, Tag, TagLabel } from '@chakra-ui/react';

import FriendAvatar from 'src/assets/Avatar/avatar.jpg';

function FriendCard() {
  return (
      <div className="post-input">
           <Box h='50px' bg=''>
                <Tag size='lg' colorScheme='telegram' borderRadius='full'>
                    <Avatar
                        src={FriendAvatar}
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