import React from 'react';

import { Helmet } from 'react-helmet';

const SettingsPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Gafour | Settings Page</title>
      </Helmet>
      <div>This is setting page</div>
    </React.Fragment>
  );
};

export default SettingsPage;
