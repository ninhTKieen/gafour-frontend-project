import React from 'react';
import ProfileFriend from 'src/components/Profile/ProfileFriend';
import ProfileImage from 'src/components/Profile/ProfileImage';
import ProfileInformation from 'src/components/Profile/ProfileInformation';
import ProfilePost from 'src/components/Profile/ProfilePost';
import MainLayout from 'src/layouts/Main';

import HomePage from 'src/pages/Home';


const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
  {
    path: '/profile',
    element: <MainLayout />,
    children: [
      { path: '', element: <ProfilePost /> },
      { path: 'information', element: <ProfileInformation /> },
      { path: 'friend', element: <ProfileFriend /> },
      { path: 'image', element: <ProfileImage /> },
    ],
  },
];

export default routes;
