import React from 'react';
import { Flex, Box, Tabs, TabList, TabPanels, TabPanel, Tab, Heading } from '@chakra-ui/react';

const HeaderNavBar: React.FC = () => {
  return (
    <Flex w="60%" h="100%">
      <Box w="100%" h="100%">
        <Tabs align="center" variant="unstyled">
          <TabList >
            <Tab h="100%" p="28px">
              One
            </Tab>
            <Tab h="100%" p="28px">
              Two
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default HeaderNavBar;
