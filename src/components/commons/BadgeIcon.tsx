import React from 'react';

import { Box } from '@chakra-ui/react';

const BadgeIcon: React.FC = (props) => {
  return (
    <React.Fragment>
      {props.children}
      <Box
        as={'span'}
        color={'white'}
        position={'absolute'}
        top={'6px'}
        right={'4px'}
        h={5}
        w={5}
        bgColor={'red'}
        borderRadius={10}
        zIndex={9999}
      >
        {99}
      </Box>
    </React.Fragment>
  );
};

export default BadgeIcon;
