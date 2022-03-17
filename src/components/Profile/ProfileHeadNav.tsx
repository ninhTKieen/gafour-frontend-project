import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

const ProfileHeadNav=()=>{
    return (
        <div className='profile__head-nav'>
            <Tabs size='md' variant='enclosed'>
                <TabList>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='#' fontSize='2xl'>Posts</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='#' fontSize='2xl'>Infomation</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='#' fontSize='2xl'>Friends</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                    <Tab>
                        <BreadcrumbItem>
                        <BreadcrumbLink href='#' fontSize='2xl'>Images</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Tab>
                </TabList>
                </Tabs>
        </div>

        
    )
}

export default ProfileHeadNav;