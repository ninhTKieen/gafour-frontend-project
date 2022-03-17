import React from 'react';

import HeaderSearchBar from './SearchBar';
import HeaderNavBar from './NavBar';

import { Flex, Box, Heading, Stack } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Flex
        align="center"
        pos="fixed"
        top={0}
        right={0}
        left={0}
        boxShadow="inset 0 -1px 0 #ececec"
      >
        <Flex w="20%" align="center">
          <Box p="18px 10px">
            <Heading color="#79bf43">Gapo</Heading>
          </Box>

          <Box w="1px" h="34px" bg="#eeeeee"></Box>

          <Box p="18px 10px">
            <HeaderSearchBar />
          </Box>
        </Flex>

        <HeaderNavBar />
      </Flex>
    </React.Fragment>
  );
};

export default Header;
