import React from 'react';

import { Helmet } from 'react-helmet';
import LoginSideBar from 'src/components/Login/Sidebar';

import './Login.css';

const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Gafour | Login Page</title>
      </Helmet>

      <div className="login">
        <LoginSideBar />
        <div className="login-right-cover" />
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
