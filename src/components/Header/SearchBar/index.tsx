import React from 'react';

import { Stack, InputLeftElement, InputGroup, Input } from '@chakra-ui/react';
import { GoSearch as SearchIcon } from 'react-icons/go';

const HeaderSearchBar: React.FC = () => {
  return (
    <React.Fragment>
      <Stack spacing={4}>
        <InputGroup w="100%">
          <InputLeftElement
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color="grey.300" />}
            bg="transparent"
            cursor="pointer"
          />
          <Input type="tel" placeholder="Tìm kiếm" borderRadius="20px" focusBorderColor="#79bf43" />
        </InputGroup>
      </Stack>
    </React.Fragment>
  );
};

export default HeaderSearchBar;
