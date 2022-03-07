import { StarIcon } from '@chakra-ui/icons';
import { Box, Divider, StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';
import FriendList from '../Friend/FriendList';

import './HomeComponentsCSS/HomeAsideRight.css';
function HomeAsideRight() {
  return (
      <div className="HomeAsideRight">
          <p className="HomeAsideRight-label">Online Friends</p>
          <Divider />
          <VStack
            divider={<StackDivider />}
            spacing={4}
            align='left'
            >
                <FriendList></FriendList>
        </VStack>
      </div>
  );
}

export default HomeAsideRight;