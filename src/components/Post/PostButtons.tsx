/* eslint-disable react/jsx-no-undef */
import { ArrowForwardIcon, ChatIcon, StarIcon } from '@chakra-ui/icons';
import { useDisclosure, Button, Collapse, Box, FormControl, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';

function PostButtons() {
    const { isOpen, onToggle } = useDisclosure()
  
    return (
      <>
        <Box>
        <Button colorScheme='teal' variant='solid' className='post-buttons'>
            <StarIcon/>
            <p className='post-card-option'> Like</p>
       </Button>
                  
        <Button onClick={onToggle} colorScheme='teal' variant='outline'className='post-buttons'>
            <ChatIcon/>
            <p className='post-card-option'>Comment</p>
        </Button>
        <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'className='post-buttons'>
              Share
            </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='silver'
            rounded='md'
            shadow='md'
          >
            <FormControl isRequired>
                <Input id="post-comment-input" placeholder='Type your comment...' />
                </FormControl>
          </Box>
        </Collapse>
        </Box>
      </>
    )
  }
  export default PostButtons;