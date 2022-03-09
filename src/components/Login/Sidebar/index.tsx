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
  const [disabled, setDisabled] = React.useState(false);

  return (
    <React.Fragment>
      <div className="login-side-bar">
        <div className="login-side-bar-web-title">Gafour</div>

        <div className="login-side-bar-body">
          <div className="login-side-bar-body-title">Xin chào Gafourer!</div>
          <div className="login-side-bar-body-number">Số điện thoại</div>

          <div className="login-side-bar-body-input">
            <Stack>
              <InputGroup size="lg" marginBottom="16px">
                <InputLeftAddon>
                  <img src={flag} style={{ width: 20, height: 'auto', marginRight: 5 }} />
                  +84
                </InputLeftAddon>
                <Input type="tel" placeholder="Nhập sđt" />
              </InputGroup>
              <InputGroup size="lg" marginBottom="16px">
                <Input type={show ? 'text' : 'password'} placeholder="Nhâp mật khẩu" />

                <InputRightElement width="72px">
                  <Button h="28px" size="sm" onClick={() => setShow(!show)}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Input
                type="submit"
                value="Tiếp tục"
                bg="#79bf43"
                border="none"
                height="52px"
                width="100%"
                disabled={true}
              />
            </Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginSideBar;
