import { Flex, Box, SimpleGrid, Container, Text, Link, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React from 'react';
import FriendCard from 'src/components/Friend/FriendCard';
import ProfileTemplate from 'src/layouts/Profile';


const ProfileFriend =()=>{
    return(
        <ProfileTemplate>
            <Container maxW='2xl'  centerContent>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <Text fontSize='2xl' fontWeight='medium' paddingBottom="24px">Your Friends</Text>
                
                <InputGroup size='md' marginBottom="15px">
                    <Input
                        pr='4.5rem'
                        // type={show ? 'text' : 'password'}
                        placeholder="Enter Friend's Name"
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' marginRight="5px">
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>


                <SimpleGrid columns={2} spacing={10}>
                    <Box borderBottom="1px solid #e5e5e5">
                        <Link href="/profile">
                            <FriendCard/>
                        </Link>
                    </Box>
                    <Box borderBottom="1px solid #e5e5e5">
                        <Link href="/profile">
                            <FriendCard/>
                        </Link>
                    </Box>
                    <Box borderBottom="1px solid #e5e5e5">
                        <Link href="/profile">
                            <FriendCard/>
                        </Link>
                    </Box>
                    <Box borderBottom="1px solid #e5e5e5">
                        <Link href="/profile">
                            <FriendCard/>
                        </Link>
                    </Box>
                    <Box borderBottom="1px solid #e5e5e5">
                        <Link href="/profile">
                            <FriendCard/>
                        </Link>
                    </Box>
                    <Box borderBottom="1px solid #e5e5e5">
                        <Link href="/profile">
                            <FriendCard/>
                        </Link>
                    </Box>
                    </SimpleGrid>
                </Box>
                   
            </Flex>
            </Container>
        </ProfileTemplate>
    )
}

export default ProfileFriend;