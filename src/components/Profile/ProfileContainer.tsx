import React from 'react';
import Header from 'src/components/Header';
import { Box, Flex } from '@chakra-ui/react';

import './ProfileCSS/ProfileContainer.css';
import ProfileHead from './ProfileHead';
import ProfileLeftAside from './ProfileLeftAside';
import ProfileRightAside from './ProfileRightAside';

const ProfileContainer = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className='profile-container'>
        <ProfileHead/>
        <div className='profile__content'>
          <Flex color='white'> 
            <Box bg='' w='100%' p={3} color='black'>
              <ProfileLeftAside/>
            </Box>
            <Box bg='' w='100%' p={3} color='black'>
              <ProfileRightAside/>
            </Box>      
          </Flex>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileContainer;