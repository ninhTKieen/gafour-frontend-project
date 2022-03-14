import { EditIcon, WarningIcon,SettingsIcon,ArrowRightIcon,ChatIcon,BellIcon,Search2Icon } from '@chakra-ui/icons';
import { Button,  Box,Heading, Spacer, Flex, InputGroup, InputLeftElement, Input, Stack, Menu, MenuButton, MenuList, MenuDivider, MenuGroup, MenuItem} from '@chakra-ui/react';
import React from 'react';
import { Image } from '@chakra-ui/react';
import avatar from 'src/assets/Avatar/avatar.jpg';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react'

import './Header.css';

const Header = () => {
  return (
    <React.Fragment> 
       <Flex className="header">
         {/* tên app */}
          <Box p='2'className='header-appName'>
            <Heading size='md'>GAPO App</Heading>
          </Box>
          {/* Input search */}
          <Box p='2'>
          <Stack spacing={4}>
            <InputGroup className='header-searchInput'>
              <InputLeftElement
                pointerEvents='none'
                // eslint-disable-next-line react/no-children-prop
                children={<Search2Icon/>}
              />
              <Input type='tel' placeholder='Search on Gapo' />
            </InputGroup>
          </Stack>
          </Box>

          <Spacer />
          {/* Tin nhắn + thông báo + cá nhân*/}
          <Box className="header-menu">
            <Button colorScheme='linkedin' mr='2'>
            <ChatIcon/>
            </Button>

            {/* thông báo  */}
            <Popover>
              <PopoverTrigger>
              <Button colorScheme='linkedin' mr='2'>
            <BellIcon/>
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
            <MenuButton as={Button} colorScheme='pink'>
              Profile
            </MenuButton>
            <MenuList>
              <MenuItem minH='48px'>
                <Box boxSize=''>
                <Stack direction='row' className='header-avatarAndName'>
                  <Image 
                    borderRadius='full'
                    objectFit='cover'
                    boxSize='100px'
                    src={avatar}
                    alt='Avatar header' 
                  />
                  <p className='header-profile-name'>Ninh Thế Toàn</p>
                </Stack>
                </Box>
              </MenuItem>
              <MenuDivider />
              <MenuGroup title=''>
                <MenuItem icon={<EditIcon/>}>My Account</MenuItem>
                <MenuItem icon={<SettingsIcon />}>Setting</MenuItem>
                <MenuItem icon={<WarningIcon/>}>Help</MenuItem>
                <MenuItem icon={<ArrowRightIcon/>}>Sign out</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
    </React.Fragment>
  );
};

export default Header;
