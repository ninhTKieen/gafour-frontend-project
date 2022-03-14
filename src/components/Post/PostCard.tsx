import { ArrowForwardIcon, ChatIcon, LinkIcon, TimeIcon } from '@chakra-ui/icons';
import { Image, Avatar, TagLabel, Badge, Box, Flex,Text, StackDivider, VStack, Stack, Button, IconButton, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import React from 'react';
import './PostCard.css';
import PostComment from './PostComment';
import PostButtons from './PostButtons';
import avatar from 'src/assets/Avatar/avatar.jpg';
import post_image from 'src/assets/Post/post_image.jpg';



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
            <Avatar src={avatar} />
            <Box ml='3'>
              <Text fontWeight='bold'>
                Nguyễn Quốc Toàn
               
              </Text>
              <Text fontSize=''>
              <TimeIcon/>
                 2 hours ago
              </Text>
            </Box>
          </Flex>
          </Box>
          <Box  bg=''>
            <p>Vãi lồng. Bỏ 75tr bảng mua trung vệ. Đéo biết nói gì luôn
🤩</p>
          </Box>
            <img src={post_image}>
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