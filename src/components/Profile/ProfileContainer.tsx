import React from 'react';
import Header from 'src/components/Header';
import { Box, Flex } from '@chakra-ui/react';

import './ProfileCSS/ProfileContainer.css';
// import ProfileHead from './ProfileHead/ProfileHead';
import ProfileLeftAside from './ProfilePost/ProfileLeftAside';
import ProfileRightAside from './ProfilePost/ProfileRightAside';

const ProfileContainer = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className='profile-container'>
        {/* <ProfileHead/> */}
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