import React from 'react';
import { CustomSelect, CustomLabel, Header } from './styles';
import { Button } from 'components';

export const TopBarPosts = () => {
  return (
    <Header>
      <Button>Create a new post</Button>
      <CustomLabel>
        <span>Order by:</span>
        <CustomSelect>
          <option>Best</option>
          <option>New</option>
        </CustomSelect>
      </CustomLabel>
    </Header>
  );
};
