import { ArrowForwardIcon, ChatIcon, LinkIcon, StarIcon } from '@chakra-ui/icons';
import { Image, Avatar, TagLabel, Badge, Box, Flex,Text, StackDivider, VStack, Stack, Button, IconButton, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react';
import React from 'react';
import './PostCard.css';
import PostComment from './PostComment';

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
            <p>🎀 FRAME MỚI: GIẤY CHỨNG NHẬN ĐẶC BIỆT CHO NỬA KIA THẾ GIỚI 🤩</p>
          </Box>
            <img src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/275433854_515183333309538_5477076693480872936_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_bP-llOd5VMAX_McZpT&tn=XMuX_YWJbgDKqs4l&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-x84MvemBSJpdzc_7_GxcAb1jAzcGjkyTL6DIf1Uhjng&oe=622AD2E4'>
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
            <Button colorScheme='teal' variant='solid'>
              <StarIcon/>
              <p className='post-card-option'> Like</p>
            </Button>
            <Button colorScheme='teal' variant='outline'>
              <ChatIcon/>
              <p className='post-card-option'>Comment</p>
            </Button>
            <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>
              Share
            </Button>
          </Stack>
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