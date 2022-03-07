import React from 'react';
import Header from 'src/components/Header';

import { Box, Button, Flex } from '@chakra-ui/react';
import HomeContent from '../../components/Home/HomeContent';
import HomeAsideLeft from '../../components/Home/HomeAsideLeft';
import HomeAsideRight from '../../components/Home/HomeAsideRight';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <Button colorScheme="blue">Go to login page</Button>
      <Flex color='white'>
      <Box bg='' w='100%' p={3} color='black'>
        <HomeAsideLeft></HomeAsideLeft>
      </Box>

      <Box bg='' w='100%' p={5} color='black'>
       <HomeContent/>
      </Box>
     
      <Box bg='' w='100%' p={3} color='black'>
        <HomeAsideRight/>
      </Box>
      </Flex>
    </React.Fragment>
  );
};

export default HomePage;
