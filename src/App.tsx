import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import routes from 'src/app/routes';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Profile from './pages/Profile';

function App() {
  const routing = useRoutes(routes);

  return (
    <ChakraProvider>
<<<<<<< HEAD
      <div className="App">
        <Profile/>
      </div>
=======
      <div className="App">{routing}</div>
>>>>>>> 17dc10ec79dcb8d789488424983170d0bce62a7b
    </ChakraProvider>
  );
}

export default App;
