import React from 'react';
import MainLayout from 'src/layouts/Main';

import HomePage from 'src/pages/Home';
import SettingsPage from 'src/pages/Settings';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/settings', element: <SettingsPage /> },
    ],
  },
];

export default routes;
