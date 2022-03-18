import { Flex, Box, Container, SimpleGrid, Icon, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import ProfileTemplate from 'src/layouts/Profile';
import { FaWallet, FaSchool, FaHome, FaSearchLocation } from 'react-icons/fa';

const ProfileInformation =()=>{
    return(
        <ProfileTemplate>
            <Container maxW='2xl'  centerContent>
            <Flex color='white'> 
                <Box bg='' w='100%' p={3} color='black'>
                <SimpleGrid columns={1} spacing={5}>
                    <Box>
                <Text fontSize='2xl' fontWeight='bold'>Your Informations</Text>
                <List spacing={6}>
                    <ListItem>
                        <Icon as={FaWallet} />
                        <span>  Studies in HUST</span>
                    </ListItem>
                    <ListItem>
                        <Icon as={FaSchool}/>
                        <span> Went to THPT Yen Dinh I</span>    
                    </ListItem>
                    <ListItem>
                        <Icon as={FaHome}/>
                        <span> Lives in HaNoi,Vietnam</span>
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                        <Icon as={FaSearchLocation}/>
                        <span> From Yen Dinh, Thanh Hoa, Vietnam</span>
                    </ListItem>
                </List>

                    </Box>
                    </SimpleGrid>
                </Box>   
            </Flex>
            </Container>
        </ProfileTemplate>
    )
}

export default ProfileInformation;