import React from 'react';
import MainLayout from 'src/layouts/Main';

import HomePage from 'src/pages/Home';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
];

export default routes;
