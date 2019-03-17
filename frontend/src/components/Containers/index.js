import React, { Component } from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

export const ContainerStyled = styled.main`
  display: flex;
`;

export const Section = styled.section`
  width: 100%;
  padding: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export default class Container extends Component {
  render() {
    const { children } = this.props;
    return <ContainerStyled>{children}</ContainerStyled>;
  }
}

Container.propTypes = {
  children: node.isRequired,
};
