import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#f2f2f2', '#000000')(props),
      scrollBehavior: 'smooth',
    },
  }),
};

export default styles;
