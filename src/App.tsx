import React from 'react';

import HomePage from 'src/pages/Home';

import { ChakraProvider } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
