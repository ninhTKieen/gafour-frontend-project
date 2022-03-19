import React from 'react';

import { Link } from 'react-router-dom';

import { Flex, Box, Heading, List, ListIcon, ListItem, Button } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import {
  FcSettings as SettingsIcon,
  FcLock as BlockedIcon,
  FcNext as ArrowIcon,
} from 'react-icons/fc';

import './SettingsBox.css';

const items: { id: number; title: string; ref: string; icon: IconType }[] = [
  {
    id: 0,
    title: 'General',
    ref: '/settings/general',
    icon: SettingsIcon,
  },
  {
    id: 1,
    title: 'Blocked',
    ref: '/settings/blocked',
    icon: BlockedIcon,
  },
];

const SettingsBox: React.FC = () => {
  return (
    <React.Fragment>
      <Flex
        className="settings-box"
        bg="#fff"
        direction="column"
        align="flex-start"
        marginRight="12px"
        maxH="204px"
      >
        <Heading
          fontSize={30}
          fontWeight={700}
          paddingLeft="16px"
          paddingRight="16px"
          marginBottom="8px"
        >
          Settings
        </Heading>

        <Box w="100%">
          <List spacing={3}>
            {items.map((item) => (
              <ListItem key={item.id} display="flex" padding="17px 16px">
                <Link to={item.ref} style={{ width: '100%' }}>
                  <Button alignItems="center" w="100%" bg="transparent" _focus={{ bg: '#e2e8f0' }}>
                    <ListIcon as={item.icon} />
                    <Flex justify="space-between" alignItems="center" w="100%">
                      <span>{item.title}</span>
                      <ArrowIcon />
                    </Flex>
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default SettingsBox;
