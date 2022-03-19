import React from 'react';
import { Flex, Box, Heading, Stack, Text, Spacer, Switch } from '@chakra-ui/react';

import { AiOutlineUserAdd as FriendRqIcon } from 'react-icons/ai';
import { FaPencilAlt as PostedIcon, FaHeart as ReactionIcon } from 'react-icons/fa';
import { MdOutlineComment as CommentIcon } from 'react-icons/md';

const items: { id: number; title: string; icon: JSX.Element }[] = [
  {
    id: 0,
    title: 'Friends request',
    icon: <FriendRqIcon size="30px" />,
  },
  {
    id: 1,
    title: 'Friends posted',
    icon: <PostedIcon size="30px" />,
  },
  {
    id: 2,
    title: 'Your posts or comments are expressed with emotions',
    icon: <ReactionIcon size="30px" />,
  },
  {
    id: 3,
    title: 'Your post or comment is answered',
    icon: <CommentIcon size="30px" />,
  },
];

const SettingsNotification: React.FC = () => {
  return (
    <React.Fragment>
      <Flex padding="24px" direction="column" align="flex-start">
        <Heading fontSize="18px">Notification Settings</Heading>
        {items.map((item) => (
          <Box key={item.id} paddingTop="16px" w="100%" borderBottom="1px solid #e5e5e5">
            <Stack direction="row" alignItems="center" marginBottom="16px">
              {item.icon}
              <Box paddingLeft="6px">
                <Text fontSize="16px" fontWeight={600} textAlign="left">
                  {item.title}
                </Text>
              </Box>
              <Spacer />
              <Switch size="lg" colorScheme="green" />
            </Stack>
          </Box>
        ))}
      </Flex>
    </React.Fragment>
  );
};

export default SettingsNotification;
