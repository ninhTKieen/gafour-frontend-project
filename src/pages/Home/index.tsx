import React from 'react';
import Header from 'src/components/Header';

import { Button } from '@chakra-ui/react';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <Button colorScheme="blue">Go to login page</Button>
    </React.Fragment>
  );
};

export default HomePage;
