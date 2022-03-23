import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

import styles from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const overrides = extendTheme({
  config,
  styles,
});

const theme = extendTheme(overrides);

export default theme;
