import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Section, Button } from 'components';

const P = styled.p`
  font-size: 1.4em;
`;

export const NotFound = () => {
  return (
    <Section>
      <box-icon name="error" type="solid" animation="flashing" size="lg" />
      <h1>Error 404</h1>
      <P>Sorry, you are trying to access a category or post that was removed.</P>
      <Button to="/" as={Link}>
        Go to home
      </Button>
    </Section>
  );
};
