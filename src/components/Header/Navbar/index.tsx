import React from 'react';
import { Flex, Box, Tabs, TabList, Tab } from '@chakra-ui/react';

const HeaderNavBar: React.FC = () => {
  return (
    <Flex w="60%" h="100%" >
      <Box w="100%" h="100%">
        <Tabs align="center" variant="line" colorScheme="green">
          <TabList>
            <Tab
              h="100%"
              p="28px"
              // onClick={() => console.log('this is tab 1')}
              _focus={{ boxShadow: 'none' }}
            >
              One
            </Tab>
            <Tab
              h="100%"
              p="28px"
              // onClick={() => console.log('this is tab 2')}
              _focus={{ boxShadow: 'none' }}
            >
              Two
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default HeaderNavBar;
