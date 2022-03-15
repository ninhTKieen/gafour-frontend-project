import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import routes from 'src/app/routes';
import { useRoutes } from 'react-router-dom';
import './App.css';

function App() {
  const routing = useRoutes(routes);

  return (
    <ChakraProvider>
      <div className="App">{routing}</div>
    </ChakraProvider>
  );
}

export default App;
