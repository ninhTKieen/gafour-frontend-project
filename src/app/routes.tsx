import React from 'react';
import MainLayout from 'src/layouts/Main';

import HomePage from 'src/pages/Home';
import SettingsPage from 'src/pages/Settings';
import SettingsGeneralPage from 'src/pages/Settings/General';

const routes: {
  path: string;
  element: JSX.Element;
  children: {
    path: string;
    element: JSX.Element;
  }[];
}[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/settings', element: <SettingsPage /> },
    ],
  },
  {
    path: '/settings',
    element: <MainLayout />,
    children: [
      { path: '', element: <SettingsPage /> },
      { path: 'general', element: <SettingsGeneralPage /> },
    ],
  },
];

export default routes;
