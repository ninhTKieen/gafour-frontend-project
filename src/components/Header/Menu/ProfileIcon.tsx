import React from 'react';

import {
  Flex,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Icon,
} from '@chakra-ui/react';

import {
  FaCaretDown as DownIcon,
  FaUserEdit as UserEditIcon,
  FaCog as SettingIcon,
  FaSignOutAlt as SignOutIcon,
} from 'react-icons/fa';

const ProfileIcon: React.FC = () => {
  return (
    <React.Fragment>
      <Menu>
        <MenuButton _hover={{ fontWeight: 'bold' }}>
          <Flex w="50%" align="center">
            <Avatar name="Trung Kien" src="https://bit.ly/nolink" size="md" marginRight="5px" />
            <Text overflow="hidden" isTruncated title="Trung Kien dep trai khoai to">
              Trung Kiên ddejp traifraifsd khoai to
            </Text>
            <Icon as={DownIcon} />
          </Flex>
        </MenuButton>

        <MenuList>
          <MenuItem closeOnSelect={false} justifyContent="center" flexDir="column">
            <Avatar name="Trung Kien" src="https://bit.ly/nolink" size="xl" marginBottom="10px" />
            <Text fontWeight="bold">Trung Kien dep trai khoai to</Text>
          </MenuItem>

          <MenuDivider />

          <MenuGroup>
            <MenuItem closeOnSelect={false} icon={<UserEditIcon size="23px" color="green" />}>
              Edit profile
            </MenuItem>
            <MenuItem closeOnSelect={false} icon={<SettingIcon size="23px" color="orange" />}>
              Setting
            </MenuItem>
          </MenuGroup>

          <MenuDivider />

          <MenuItem closeOnSelect={false} icon={<SignOutIcon size="23px" color="grey" />}>
            Sign Out
          </MenuItem>
        </MenuList>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileIcon;
