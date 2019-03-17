import React, { Component } from 'react';
import styled from 'styled-components';

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
    return <ContainerStyled>{this.props.children}</ContainerStyled>;
  }
}
