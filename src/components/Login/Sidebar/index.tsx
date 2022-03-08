import React from 'react';

import {
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import flag from 'src/assets/icons/vietnam-flag.png';

import './LoginSidebar.css';

const LoginSideBar: React.FC = () => {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <div className="login-side-bar">
        <div className="login-side-bar-web-title">Gafour</div>

        <div className="login-side-bar-body">
          <div className="login-side-bar-body-title">Xin chào Gafourer!</div>
          <div className="login-side-bar-body-number">Số điện thoại</div>

          <div className="login-side-bar-body-input">
            <Stack>
              <InputGroup size="lg">
                <InputLeftAddon>
                  <img src={flag} style={{ width: 20, height: 'auto', marginRight: 5 }} />
                  +84
                </InputLeftAddon>
                <Input type={show ? 'text' : 'password'} placeholder="987654321" />

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginSideBar;
