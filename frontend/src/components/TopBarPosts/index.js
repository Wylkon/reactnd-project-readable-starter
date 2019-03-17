import React from 'react';
import { func } from 'prop-types';

import { CustomSelect, CustomLabel, Header } from './styles';
import { Button } from 'components';

export const TopBarPosts = ({ handleSortBy, toggleModalPost }) => {
  return (
    <Header>
      <Button onClick={toggleModalPost}>Create a new post</Button>
      <CustomLabel>
        <span>Order by:</span>
        <CustomSelect onChange={e => handleSortBy(e.currentTarget.value)}>
          <option value="best">Best</option>
          <option value="new">New</option>
        </CustomSelect>
      </CustomLabel>
    </Header>
  );
};

TopBarPosts.propTypes = {
  handleSortBy: func.isRequired,
  toggleModalPost: func.isRequired,
};
