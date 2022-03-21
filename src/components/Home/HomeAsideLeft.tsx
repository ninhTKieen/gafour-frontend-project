import React from 'react';

import { Box, StackDivider, VStack, Link, Icon } from '@chakra-ui/react';

import {FaCalendarWeek,FaUserFriends } from "react-icons/fa";

import './HomeComponentsCSS/HomeAsideLeft.css';


function HomeAsideLeft() {
  return (
      <div className="HomeAsideLeft">
          <p className="HomeAsideLeft-account">Nguyễn Quốc Toàn</p>
          <VStack
            divider={<StackDivider />}
            spacing={4}
            align='stretch'
            >
            <Link href="/">
                <Box h='40px' bg='' textAlign="left" paddingLeft="100px">
                    <Icon as={FaCalendarWeek}/>
                    <span> Event</span>
                </Box>
            </Link>
            <Link href="/">
                <Box h='40px' bg='' textAlign="left" paddingLeft="100px">
                    <Icon as={FaUserFriends}/>
                    <span> Friends</span>
                </Box>
            </Link>
            <Link href="/profile/friend">
                <Box h='40px' bg='' textAlign="left" paddingLeft="100px">
                    <Icon as={FaUserFriends}/>
                    <span> Group</span>
                </Box>
            </Link>
        </VStack>
      </div>
  );
}

export default HomeAsideLeft;