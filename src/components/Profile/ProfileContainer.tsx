import React from 'react';
import Header from 'src/components/Header';

import './ProfileCSS/ProfileContainer.css';
import ProfileHead from './ProfileHead';
import ProfileLeftAside from './ProfileLeftAside';
import ProfileRightAside from './ProfileRightAside';

const ProfileContainer = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className='profile-container'>
        <ProfileHead/>
        <div className='profile__content'>
          <ProfileLeftAside/>
          <ProfileRightAside/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileContainer;