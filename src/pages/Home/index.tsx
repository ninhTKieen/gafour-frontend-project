import React from 'react';
import { Button } from '@chakra-ui/react';
import Header from 'src/components/Header';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <div>Dit me may</div>
      <Button colorScheme="blue">Go to login page</Button>
    </React.Fragment>
  );
};

export default HomePage;