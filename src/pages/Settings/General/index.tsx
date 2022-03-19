import React from 'react';

import SettingsTemplate from 'src/layouts/Settings/Template';
import SettingsGeneral from 'src/components/Settings/General';

const SettingsGeneralPage: React.FC = () => {
  return (
    <React.Fragment>
      <SettingsTemplate>
        <SettingsGeneral />
      </SettingsTemplate>
    </React.Fragment>
  );
};

export default SettingsGeneralPage;
