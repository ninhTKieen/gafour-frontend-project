import React from 'react';
import { Helmet } from 'react-helmet';
import ProfileTemplate from 'src/layouts/Profile';

const ProfilePage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Gafour | Personal Page</title>
      </Helmet>
      <ProfileTemplate/>
    </React.Fragment>
  );
};

export default ProfilePage;