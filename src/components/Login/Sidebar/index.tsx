import React from 'react';

import './LoginSidebar.css';

const LoginSideBar: React.FC = () => {
  return (
    <React.Fragment>
      <div className="login-side-bar">
        <div className="login-side-bar-web-title">Gafour</div>

        <div className="login-side-bar-body">
          <div className="login-side-bar-body-title">Xin chào Gafourer!</div>
          <div className="login-side-bar-body-number">Số điện thoại</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginSideBar;
