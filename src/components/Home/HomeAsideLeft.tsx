import { ViewIcon } from '@chakra-ui/icons';
import { Box, StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';
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
            <Box h='40px' bg=''>
                <ViewIcon/>
                <span> Event</span>
            </Box>
            <Box h='40px' bg=''>
            <ViewIcon/>
                <span> Friend</span>
            </Box>
            <Box h='40px' bg=''>
            <ViewIcon/>
                <span> Group</span>
            </Box>
        </VStack>
      </div>
  );
}

export default HomeAsideLeft;