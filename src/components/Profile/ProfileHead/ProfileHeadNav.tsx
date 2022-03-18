import { BreadcrumbItem, BreadcrumbLink, Tab, TabList, Tabs } from '@chakra-ui/react';
import React from 'react';

const ProfileHeadNav=()=>{
    return (
        <div className='profile__head-nav'>
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='/profile' fontSize='2xl'>Posts</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='/profile/about' fontSize='2xl'>Infomation</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='/profile/friend' fontSize='2xl'>Friends</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='/profile/image' fontSize='2xl'>Images</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                </TabList>
                </Tabs>
        </div>
    )
}

export default ProfileHeadNav;