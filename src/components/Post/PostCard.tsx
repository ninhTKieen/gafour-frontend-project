import { ArrowForwardIcon, ChatIcon, LinkIcon, StarIcon } from '@chakra-ui/icons';
import { Image, Avatar, TagLabel, Badge, Box, Flex,Text, StackDivider, VStack, Stack, Button, IconButton, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import React from 'react';
import './PostCard.css';
import PostComment from './PostComment';
import PostButtons from './PostButtons';



function PostCard() {
  return (
      <div className="post-card">
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Box h='40px' bg=''>
          <Flex>
            <Avatar src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/274184434_3116187161979818_1349060874152922876_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=6cE0sZsMPTIAX8kAEBa&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-gpJqCpUZ83Qv-KY_JxN2xgaNA-vnJeXftOi_5M8LqKA&oe=622AABA8' />
            <Box ml='3'>
              <Text fontWeight='bold'>
                Nguyễn Quốc Toàn
               
              </Text>
              <Text fontSize='sm'>Friend</Text>
            </Box>
          </Flex>
          </Box>
          <Box  bg=''>
            <p>Vãi lồng. Bỏ 75tr bảng mua trung vệ. Đéo biết nói gì luôn
🤩</p>
          </Box>
            <img src='https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/275298855_4873800476066362_2212531170644338131_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=kcHyIJFQzg8AX8lPNWr&tn=XMuX_YWJbgDKqs4l&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8KoQhDXk1-ungaFd0CuRhYlyEFrPib4DXcJQUnkVMwhA&oe=622B9AD0'>
            </img>
            <Box  bg=''>
            <Stack direction='row'>
              <LinkIcon/>
              <Badge colorScheme='purple'>3000 Likes</Badge>
              <Badge colorScheme='green'>69 Comments</Badge>
              <Badge colorScheme='red'>96 Shares</Badge>
            </Stack>
          </Box>
          <Box  bg=''>
          <Stack direction='row' spacing={4} align='center'>
            {/* button */}
          </Stack>
          <PostButtons/>
          <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                
                <h2>
                  <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Show Comment
                  </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
               <PostComment/>
               <PostComment/>
               <PostComment/>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>


        </VStack>
          
      </div>
  );
}

export default PostCard;