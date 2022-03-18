import React from 'react';
import ProfileFriend from 'src/components/Profile/ProfileFriend/ProfileFriend';
import ProfileImage from 'src/components/Profile/ProfileImage/ProfileImage';
import ProfileInformation from 'src/components/Profile/ProfileInformation/ProfileInformation';
import ProfilePost from 'src/components/Profile/ProfilePost/ProfilePost';
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
      { path: 'about', element: <ProfileInformation /> },
      { path: 'friend', element: <ProfileFriend /> },
      { path: 'image', element: <ProfileImage /> },
    ],
  },
];

export default routes;
