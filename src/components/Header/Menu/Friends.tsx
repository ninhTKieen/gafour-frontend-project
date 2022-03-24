import React from 'react';

import BadgeIcon from 'src/components/commons/BadgeIcon';

import { IconButton, Popover, PopoverTrigger, PopoverContent, PopoverBody } from '@chakra-ui/react';

import { MdGroup as FriendsIcon } from 'react-icons/md';

const Friends: React.FC = () => {
  return (
    <React.Fragment>
      <Popover>
        <PopoverTrigger>
          <IconButton
            aria-label="notification"
            size="lg"
            icon={
              <BadgeIcon
                // eslint-disable-next-line react/no-children-prop
                children={<FriendsIcon size={30} />}
              />
            }
            borderRadius={30}
          />
        </PopoverTrigger>

        <PopoverContent
          alignItems="flex-start"
          _focus={{ borderShadow: 'none' }}
          h="600px"
          w="370px"
        >
          <PopoverBody>Welcome to GAPO</PopoverBody>
          <PopoverBody textAlign="left">
            Welcome to GAPO, chieu hom ay em noi voi anh rang minh khong nen gap nhau nua nguoi oi
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </React.Fragment>
  );
};

export default Friends;
