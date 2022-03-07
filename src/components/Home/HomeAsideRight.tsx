import { StarIcon } from '@chakra-ui/icons';
import { Box, StackDivider, VStack } from '@chakra-ui/react';
import React from 'react';

import './HomeComponentsCSS/HomeAsideRight.css';
function HomeAsideRight() {
  return (
      <div className="HomeAsideRight">
          <p className="HomeAsideRight-label">Online Friends</p>
          <VStack
            divider={<StackDivider />}
            spacing={4}
            align='stretch'
            >
            <Box h='40px' bg=''>
                <StarIcon/>
                <span> Nguyễn Quốc Toàn</span>
            </Box>
            <Box h='40px' bg=''>
            <StarIcon/>
                <span> Thái Nê </span>
            </Box>
            <Box h='40px' bg=''>
            <StarIcon/>
                <span> Nhật Buồi</span>
            </Box>
        </VStack>
      </div>
  );
}

export default HomeAsideRight;