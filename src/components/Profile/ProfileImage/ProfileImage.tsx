import { Flex, Box, Container, SimpleGrid,Image, Text } from '@chakra-ui/react';
import React from 'react';
import ProfileTemplate from 'src/layouts/Profile';
import ProfilePostImage from 'src/assets/Profile/post-image.jpg'

const ProfileImage =()=>{
    return(
        <ProfileTemplate>
            <Container maxW='2xl'  centerContent>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <Text fontSize='2xl' fontWeight='medium'>Your Images</Text>
                <SimpleGrid columns={4} spacing={5}>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    <Box >
                    <Image
                        boxSize='150px'
                        objectFit='cover'
                        src={ProfilePostImage}
                        alt='Dan Abramov'
                    />
                    </Box>
                    </SimpleGrid>
                </Box>   
            </Flex>
            </Container>
        </ProfileTemplate>
    )
}

export default ProfileImage;