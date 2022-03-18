import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import ProfileTemplate from 'src/layouts/Profile';
import ProfileLeftAside from './ProfileLeftAside';
import ProfileRightAside from './ProfileRightAside';

const ProfileImage =()=>{
    return(
        <ProfileTemplate>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <ProfileLeftAside/>
                </Box>
                <Box bg='' w='100%' p={3} color='black'>
                <ProfileRightAside/>
                </Box>      
          </Flex>
        </ProfileTemplate>
    )
}

export default ProfileImage;