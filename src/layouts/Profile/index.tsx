import React from 'react';
import Header from 'src/components/Header';
import ProfileHead from 'src/components/Profile/ProfileHead/ProfileHead';

const ProfileTemplate: React.FC = (props) => {
  return (
    <React.Fragment>
      <Header/>
      <div className='profile-container'>
        <ProfileHead/>
        <div className='profile__content'>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileTemplate;