import React from 'react';
import MainLayout from 'src/layouts/Main';

import HomePage from 'src/pages/Home';
import LoginPage from 'src/pages/Login';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
];

export default routes;
