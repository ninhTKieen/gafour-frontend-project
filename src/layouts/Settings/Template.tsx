import React from 'react';

import Header from 'src/components/Header';
import SettingsBox from 'src/components/Settings/Box';

import { Flex } from '@chakra-ui/react';

const SettingsTemplate: React.FC = (props) => {
  return (
    <React.Fragment>
      <div style={{ height: '100vh' }}>
        <Header />
        <Flex className="settings-page">
          <SettingsBox />
          {props.children}
        </Flex>
      </div>
    </React.Fragment>
  );
};

export default SettingsTemplate;
