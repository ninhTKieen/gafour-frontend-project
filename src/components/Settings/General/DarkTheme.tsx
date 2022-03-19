import React from 'react';

import { Flex, Box, Heading, Stack, Text, Spacer, Switch } from '@chakra-ui/react';

import { CgDarkMode as DarkModeIcon } from 'react-icons/cg';

const SettingsDarkTheme: React.FC = () => {
  return (
    <React.Fragment>
      <Flex padding="24px" direction="column" align="flex-start">
        <Heading fontSize="18px">Theme Settings</Heading>
        <Box paddingTop="16px" w="100%" borderBottom="1px solid #e5e5e5">
          <Stack direction="row" alignItems="center" marginBottom="16px">
            <DarkModeIcon size="30px" />
            <Box paddingLeft="6px">
              <Text fontSize="16px" fontWeight={600}>
                Dark theme
              </Text>
            </Box>
            <Spacer />
            <Switch size="lg" colorScheme="green" />
          </Stack>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default SettingsDarkTheme;
