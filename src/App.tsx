import React from 'react';

import HomePage from 'src/pages/Home';
import LoginPage from 'src/pages/Login';

import { ChakraProvider } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <HomePage /> */}
        <LoginPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
