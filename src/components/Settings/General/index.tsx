import React from 'react';

import SettingsNotification from './Notification';
import SettingsDarkTheme from './DarkTheme';

import { Flex, Box, Heading, Stack, Text, Spacer, useColorMode } from '@chakra-ui/react';

import { AiOutlineLock as LockIcon, AiOutlineRight as ArrowIcon } from 'react-icons/ai';

import './SettingsGeneral.css';

const SettingsGeneral: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <Flex w="512px" direction="column" bg={colorMode === 'light' ? '#fff' : '#18191a'}>
        {/* Security settings */}
        <Flex padding="24px" direction="column" align="flex-start">
          <Heading fontSize="18px">Security Settings</Heading>
          <Box paddingTop="16px" w="100%" cursor="pointer" borderBottom="1px solid #e5e5e5">
            <Stack direction="row" alignItems="center" marginBottom="16px">
              <LockIcon size="30px" />
              <Box paddingLeft="6px">
                <Text fontSize="16px" fontWeight={600}>
                  Change password
                </Text>
              </Box>
              <Spacer />
              <ArrowIcon size="30px" />
            </Stack>
          </Box>
        </Flex>

        {/* Notification Settings */}
        <SettingsNotification />

        <SettingsDarkTheme />
      </Flex>
    </React.Fragment>
  );
};

export default SettingsGeneral;
