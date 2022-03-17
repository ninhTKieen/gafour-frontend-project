import React from 'react';

import './LoginIntro.css';

const LoginIntro: React.FC = () => {
  return (
    <React.Fragment>
      <div className="login-intro">
        <div className="login-intro-body">
          <span className="login-intro-title">Công ty Cổ phần công nghệ sản xuất Chuối</span>
          <div className="login-intro-content-wrapper">
            <span className="login-intro-content">
              Địa chỉ: Số 1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội
            </span>
            <span className="login-intro-content">SĐT: 0933699918 Email: chuoisp@gapo.vn</span>
            <span className="login-intro-content">
              Chịu trách nhiệm quản lý nội dung: {"Chuoi's team"}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginIntro;