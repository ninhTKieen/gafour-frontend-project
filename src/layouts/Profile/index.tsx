import React from 'react';
import Header from 'src/components/Header';
import { Box, Flex } from '@chakra-ui/react';

import ProfileHead from 'src/components/Profile/ProfileHead';

interface Props {
    children: any
  }
const ProfileTemplate = ({children}:Props) => {
  return (
    <React.Fragment>
      <Header/>
      <div className='profile-container'>
        <ProfileHead/>
        <div className='profile__content'>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileTemplate;