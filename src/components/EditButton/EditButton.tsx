import React, { useState } from'react';
import { Tag, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Avatar, TagLabel, IconButton } from '@chakra-ui/react';
import ProfileAvatar from 'src/assets/Profile/avatar.jpg';
import { EditIcon } from '@chakra-ui/icons';

const  EditButton: React.FC=(props) =>{
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
        <Button leftIcon={<EditIcon />} colorScheme='teal' variant='outline' onClick={onOpen}>
          Edit
        </Button>

    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit {props.children}</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <FormControl>
                <FormLabel></FormLabel>
                <Input  placeholder='Type new information' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose} colorScheme='blue' mr={3}>
                Save
              </Button>
          </ModalFooter>
         </ModalContent>
      </Modal>
    </>
    )
  }

export default EditButton;