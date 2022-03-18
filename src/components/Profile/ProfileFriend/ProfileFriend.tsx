import { Flex, Box, SimpleGrid, Container, Text } from '@chakra-ui/react';
import React from 'react';
import FriendCard from 'src/components/Friend/FriendCard';
import ProfileTemplate from 'src/layouts/Profile';


const ProfileFriend =()=>{
    return(
        <ProfileTemplate>
            <Container maxW='2xl'  centerContent>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <Text fontSize='2xl' fontWeight='medium'>Your Friends</Text>
                <SimpleGrid columns={2} spacing={10}>
                    <Box >
                        <FriendCard/>
                    </Box>
                    <Box >
                        <FriendCard/>
                    </Box>
                    <Box >
                        <FriendCard/>
                    </Box>
                    <Box >
                        <FriendCard/>
                    </Box>
                    <Box >
                        <FriendCard/>
                    </Box>
                    <Box >
                        <FriendCard/>
                    </Box>
                    </SimpleGrid>
                </Box>
                   
            </Flex>
            </Container>
        </ProfileTemplate>
    )
}

export default ProfileFriend;