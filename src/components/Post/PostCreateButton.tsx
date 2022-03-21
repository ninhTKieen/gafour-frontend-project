import React, { useState } from'react';
import { Tag, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Avatar, TagLabel } from '@chakra-ui/react';
import ProfileAvatar from 'src/assets/Profile/avatar.jpg';

const  PostCreateButton=() =>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [postImage, setPostImage]=useState();
    const [srcImage, setSrcImage]= useState('#');

    const handlePreviewPostImage =(e:any)=>{
        const file=e.target.files[0];
        const preview=URL.createObjectURL(file);
        setPostImage(file);
        setSrcImage(preview);    
    }

  return (
   <>
    <Tag size='lg' colorScheme='' borderRadius='full'>
      <Avatar
        src={ProfileAvatar}
        size='xs'
        name='Segun Adebayo'
        ml={-1}
        mr={2}
      />
      <TagLabel>
        <Button onClick={onOpen}>Create new post</Button>
      </TagLabel>
    </Tag>

    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new post</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl paddingBottom="50px">
                <FormLabel></FormLabel>
                <Input  placeholder='What are you thinking ?' padding="50px"/>
              </FormControl>

              <FormControl>
                <Input
                  type="file"
                  name='chose a picture'
                  onChange={handlePreviewPostImage}
                  padding="5px"
                >
                </Input>
                {postImage &&(
                  <img src={srcImage} alt="" width='100%'/>
                )}
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} colorScheme='blue' mr={3}>
                Post
              </Button>
          </ModalFooter>
         </ModalContent>
      </Modal>
    </>
    )
  }

export default PostCreateButton;