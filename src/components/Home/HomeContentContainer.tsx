import React from 'react';

import { Flex, Box } from '@chakra-ui/react';

import HomeAsideLeft from './HomeAsideLeft';
import HomeAsideRight from './HomeAsideRight';
import HomeContent from './HomeContent';

import './HomeComponentsCSS/HomeContentContainer.css';

const HomeContentContainer =()=>{
    return(
        <div className='home-content-container'>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                    <HomeAsideLeft/>
                </Box>
                <Box bg='' w='100%' p={5} color='black'>
                    <HomeContent/>
                </Box>
                <Box bg='' w='100%' p={3} color='black'>
                    <HomeAsideRight/>
                </Box>
            </Flex>
        </div>
    )
}
export default HomeContentContainer;