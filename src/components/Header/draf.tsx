import {
  EditIcon,
  WarningIcon,
  SettingsIcon,
  ArrowRightIcon,
  ChatIcon,
  BellIcon,
  Search2Icon,
} from '@chakra-ui/icons';
import {
  Button,
  Box,
  Text,
  Heading,
  Spacer,
  IconButton,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  MenuGroup,
  MenuItem,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';

import './Header.css';

const Header = () => {
  return (
    <React.Fragment>
      <Flex className="header">
        {/* tên app */}
        <Box p="2" className="header-appName">
          <Heading size="md">GAPO App</Heading>
        </Box>
        {/* Input search */}
        <Box p="2">
          <Stack spacing={4}>
            <InputGroup className="header-searchInput">
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<Search2Icon />}
              />
              <Input type="tel" placeholder="Search on Gapo" />
            </InputGroup>
          </Stack>
        </Box>

        <Spacer />
        {/* Tin nhắn + thông báo + cá nhân*/}
        <Box className="header-menu">
          <Button colorScheme="linkedin" mr="2">
            <ChatIcon />
          </Button>

          {/* thông báo  */}
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="linkedin" mr="2">
                <BellIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Notifications!</PopoverHeader>
              <PopoverBody>Bùi Đức Nhật vừa gửi lời mời kết bạn</PopoverBody>
              <PopoverBody>Trung Kiên cũng đã bình luận về bài viết của Thái Lee</PopoverBody>
              <PopoverBody>Minh Béo đã mời bạn vào Group Gay Lọ</PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Box className="header-menu">
          <Menu>
            <MenuButton as={Button} colorScheme="pink">
              Profile
            </MenuButton>
            <MenuList>
              <MenuItem minH="48px">
                <Box boxSize="">
                  <Stack direction="row" className="header-avatarAndName">
                    <Image
                      borderRadius="full"
                      objectFit="cover"
                      boxSize="100px"
                      src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/274384738_3017623581885761_5467180606294157672_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yp0s64h42-EAX_lAnj2&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-vCn_-4hZPLa8M0_kzZ2pGhvjO77MBnsxuo_f9tAGJiw&oe=622A4B87"
                      alt="Avatar header"
                    />
                    <p className="header-profile-name">Ninh Thế Toàn</p>
                  </Stack>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuGroup title="">
                <MenuItem icon={<EditIcon />}>My Account</MenuItem>
                <MenuItem icon={<SettingsIcon />}>Setting</MenuItem>
                <MenuItem icon={<WarningIcon />}>Help</MenuItem>
                <MenuItem icon={<ArrowRightIcon />}>Sign out</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default Header;
