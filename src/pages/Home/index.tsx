import React from 'react';

import Header from 'src/components/Header';
import HomeContentContainer from 'src/components/Home/HomeContentContainer';

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Header/>
      <HomeContentContainer/>
      <div>Dit me may</div>
    </React.Fragment>
  );
};

export default HomePage;