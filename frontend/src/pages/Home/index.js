import React from 'react';
import { Aside, Container, Section, TopBar, Posts } from 'components';

export const Home = () => {
  return (
    <Container>
      <Aside />
      <Section>
        <TopBar />
        <Posts />
      </Section>
    </Container>
  );
};
