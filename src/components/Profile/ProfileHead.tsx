import React from 'react';
import { Avatar, Badge, Box, Divider, Flex, Text } from '@chakra-ui/react';

import CoverImage from '../../../src/assets/Profile/cover-image.jpg';
import AvatarImage from '../../../src/assets/Profile/avatar.jpg';
import '../Profile/ProfileCSS/ProfileHead.css';
import ProfileHeadNav from './ProfileHeadNav';

const ProfileHead =()=>{
    return(
        <div className='profile__head'>
          <div className='profile__head-cover-image'>
              <img
                className='cover-image'
                src={CoverImage}
                >
              </img>
          </div>
          <div className='profile__head-info'>
                <Avatar src={AvatarImage} size='2xl'/>
                <Box ml='3'>
                    <Text fontWeight='bold' fontSize='2xl'>
                    Nguyễn Quốc Toàn (Toàn El Nino)
                    </Text>
                    <Text fontSize='2xl'>575 Friends</Text>
                </Box>    
          </div>
          <Divider variant='dashed'/>
          <ProfileHeadNav/>
        </div>
    )
}
export default ProfileHead;