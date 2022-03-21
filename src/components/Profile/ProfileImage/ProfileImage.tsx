import { Flex, Box, Container, SimpleGrid,Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import ProfileTemplate from 'src/layouts/Profile';
import ProfilePostImage from 'src/assets/Profile/post-image.jpg'

const ProfileImage =()=>{
    return(
        <ProfileTemplate>
            <Container maxW='2xl'  centerContent>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <Text fontSize='2xl' fontWeight='medium' paddingBottom="24px">Your Images</Text>
                <SimpleGrid columns={4} spacing={5}>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    <Box  border="2px solid #e5e5e5" padding="5px">
                        <Link href="/profile">
                            <Image
                                boxSize='150px'
                                objectFit='cover'
                                src={ProfilePostImage}
                                alt=''
                                borderRadius="10px"
                            
                            />
                        </Link>
                    </Box>
                    </SimpleGrid>
                </Box>   
            </Flex>
            </Container>
        </ProfileTemplate>
    )
}

export default ProfileImage;