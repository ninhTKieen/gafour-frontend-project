import React from 'react';

import HeaderSearchBar from './SearchBar';
import HeaderNavBar from './Navbar';
import HeaderMenu from './Menu';

import { Link } from 'react-router-dom';

import { MdLightMode as LightModeIcon, MdDarkMode as DarkModeIcon } from 'react-icons/md';

import { Flex, Box, Heading, IconButton, useColorMode } from '@chakra-ui/react';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Flex
        align="center"
        pos="fixed"
        bg={colorMode === 'light' ? "#fff" : "#000"}
        top={0}
        right={0}
        left={0}
        boxShadow="inset 0 -1px 0 #ececec"
        zIndex={99}
        // h="74px"
      >
        <Flex w="20%" align="center">
          <Box p="18px 10px">
            <Link to="/">
              <Heading color="#79bf43" cursor="pointer">
                Gapo
              </Heading>
            </Link>
          </Box>

          <Box w="1px" h="34px" bg="#eeeeee"></Box>

          <Box p="18px 10px">
            <HeaderSearchBar />
          </Box>

          <IconButton
            aria-label="ui mode"
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
          />
        </Flex>

        <HeaderNavBar />

        <HeaderMenu />
      </Flex>
    </React.Fragment>
  );
};

export default Header;
