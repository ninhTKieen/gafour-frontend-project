import React from 'react';

import HomePage from 'src/pages/Home';

import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Profile from './pages/Profile';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Profile/>
      </div>
    </ChakraProvider>
  );
}

export default App;
