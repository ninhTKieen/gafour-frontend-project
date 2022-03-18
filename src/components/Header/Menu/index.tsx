import React from 'react';

import Notification from './Notification';
import Friends from './Friends';
import ProfileIcon from './ProfileIcon';

import { Flex, HStack } from '@chakra-ui/react';

const HeaderMenu: React.FC = () => {
  return (
    <React.Fragment>
      <Flex w="20%" align="center">
        <HStack spacing={10}>
          <Notification />
          <Friends />
          <ProfileIcon />
        </HStack>
      </Flex>
    </React.Fragment>
  );
};

export default HeaderMenu;
