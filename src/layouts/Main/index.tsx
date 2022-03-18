import React from 'react';

// import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <React.Fragment>
      {/* <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      /> */}
      <Outlet />
      {/* to render child element route */}
    </React.Fragment>
  );
};

export default MainLayout;
