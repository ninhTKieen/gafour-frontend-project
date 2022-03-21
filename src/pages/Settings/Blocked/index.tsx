import React from 'react';

import SettingsTemplate from 'src/layouts/Settings/Template';

import {
  Flex,
  Box,
  Stack,
  Text,
  Spacer,
  Button,
  Avatar,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

const SettingsBlockedPage: React.FC = (props) => {
  const [count, setCount] = React.useState(1);

  return (
    <React.Fragment>
      <SettingsTemplate>
        <Flex w="512px" bg="#fff" direction="column" h="auto">
          <Flex padding="24px" direction="column" align="flex-start">
            <Box paddingTop="16px" w="100%" cursor="pointer" borderBottom="1px solid #e5e5e5">
              <Stack direction="row" alignItems="center" marginBottom="16px">
                <Box paddingLeft="6px" textAlign="left">
                  <Text fontSize="16px" fontWeight={600}>
                    Blocked List
                  </Text>

                  <Text fontSize="12px" color="grey">
                    People from your blocked list will not :
                  </Text>
                  <UnorderedList fontSize="12px" color="grey">
                    <ListItem>See your post</ListItem>
                    <ListItem>Send you a message</ListItem>
                    <ListItem>Send you a friend request</ListItem>
                  </UnorderedList>
                </Box>
                <Spacer />
              </Stack>
            </Box>

            <Box paddingTop="16px" w="100%" justifyContent="center" alignItems="center">
              {count ? (
                <>
                  <Stack direction="row" alignItems="center" marginBottom="16px">
                    <Avatar name="Tran Duc Bo" src="https://bit.ly/botran" />
                    <Box paddingLeft="6px">
                      <Text fontSize="16px" textAlign="left">
                        Tran duc bo
                      </Text>
                    </Box>
                    <Spacer />
                    <Button>Unblocked</Button>
                  </Stack>
                </>
              ) : (
                <Text color="grey">Empty list</Text>
              )}
            </Box>
          </Flex>
        </Flex>
      </SettingsTemplate>
    </React.Fragment>
  );
};

export default SettingsBlockedPage;
