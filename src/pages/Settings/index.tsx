import React from 'react';

import { Helmet } from 'react-helmet';

import SettingsTemplate from 'src/layouts/Settings/Template';

import './Settings.css';

const SettingsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Gafour | Settings Page</title>
      </Helmet>
      <SettingsTemplate />
    </React.Fragment>
  );
};

export default SettingsPage;
