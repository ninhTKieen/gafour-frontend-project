import React from 'react';
import { Flex, Box, Heading, Stack, Text, Spacer, Switch, Container, Icon, List, ListItem, SimpleGrid, Button } from '@chakra-ui/react';

import { AiOutlineUserAdd as FriendRqIcon } from 'react-icons/ai';
import { FaPencilAlt as PostedIcon, FaHeart as ReactionIcon, FaHome, FaSchool, FaSearchLocation, FaWallet } from 'react-icons/fa';
import { MdOutlineComment as CommentIcon } from 'react-icons/md';
import ProfileTemplate from 'src/layouts/Profile';
import { EditIcon } from '@chakra-ui/icons';
import EditButton from 'src/components/EditButton/EditButton';


const items: { id: number; field:string; title: string; icon: JSX.Element }[] = [
    {
      id: 0,
      field:'Work',
      title: 'Studies in HUST',
      icon: <FaWallet size="30px" />,
    },
    {
      id: 1,
      field:'Education',
      title: 'Went to THPT Yen Dinh I',
      icon: <FaSchool size="30px" />,
    },
    {
      id: 2,
      field:'Current City',
      title: 'Lives in HaNoi,Vietnam',
      icon: <FaHome size="30px" />,
    },
    {
      id: 3,
      field:'HomeTown',
      title: 'From Yen Dinh, Thanh Hoa, Vietnam',
      icon: <FaSearchLocation size="30px" />,
    },
  ];
const ProfileInformation =()=>{
    return(
        <ProfileTemplate>
            <Container maxW='2xl'  centerContent>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <Flex padding="24px" direction="column" align="flex-start">
                    <Heading fontSize="18px">Your Information</Heading>
                    {items.map((item) => (
                    <Box key={item.id} paddingTop="16px" w="100%" borderBottom="1px solid #e5e5e5">
                        <Stack direction="row" alignItems="center" marginBottom="16px">
                        {item.icon}
                        <Box paddingLeft="6px">
                            <Text fontSize="16px" fontWeight={600} textAlign="left">
                            {item.title}
                            </Text>
                        </Box>
                        <Spacer />
                        <EditButton>{item.field}</EditButton>
                        {/* <Switch size="lg" colorScheme="green" /> */}
                        </Stack>
                    </Box>
                    ))}
                </Flex>
                </Box>   
            </Flex>
            </Container>
        </ProfileTemplate>
    )
}

export default ProfileInformation;