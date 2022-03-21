
import { Text, Icon, List, ListItem} from '@chakra-ui/react';
import React from 'react';
import { FaWallet,FaSchool,FaHome,FaSearchLocation } from "react-icons/fa";

import './ProfileLeftAside.css';

const ProfileLeftAside =()=>{
    return(
        <div className='profile__content-left__aside'>
            <Text fontSize='2xl' fontWeight='bold' paddingBottom="24px">Information</Text>
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
        </div>
    )
}
export default ProfileLeftAside;