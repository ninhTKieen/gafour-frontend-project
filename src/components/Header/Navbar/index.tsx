import React from 'react';

import { useNavigate } from 'react-router-dom';

import { Flex, Box, Tabs, TabList, Tab, IconButton } from '@chakra-ui/react';

import BadgeIcon from 'src/components/commons/BadgeIcon';

import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { HiOutlineChatAlt2 as ChatIcon } from 'react-icons/hi';

const HeaderNavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Flex w="60%" h="100%">
      <Box w="100%" h="100%">
        <Tabs align="center" variant="line" colorScheme="green" isFitted>
          <TabList>
            <Tab h="100%" p="12px" onClick={() => navigate('/')} _focus={{ boxShadow: 'none' }}>
              <IconButton
                aria-label="notification"
                icon={<HomeIcon size={24} />}
                bg="transparent"
                isRound
                size="lg"
              />
            </Tab>
            <Tab
              h="100%"
              p="12px"
              onClick={() => navigate('/messenger')}
              _focus={{ boxShadow: 'none' }}
            >
              <IconButton
                aria-label="notification"
                icon={
                  <BadgeIcon
                    // eslint-disable-next-line react/no-children-prop
                    children={<ChatIcon size={24} />}
                  />
                }
                bg="transparent"
                isRound
                size="lg"
              />
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default HeaderNavBar;
