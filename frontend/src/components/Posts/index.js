import React, { Component } from 'react';
import styled from 'styled-components';
import { resetList } from 'themes';

const PostList = styled.ul`
  ${resetList};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
`;

const PostStyled = styled.li`
  width: 100%;
  padding: 24px 0;

  + li {
    border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

class Posts extends Component {
  render() {
    return (
      <PostList>
        <PostStyled>Post</PostStyled>
        <PostStyled>Post</PostStyled>
        <PostStyled>Post</PostStyled>
        <PostStyled>Post</PostStyled>
        <PostStyled>Post</PostStyled>
        <PostStyled>Post</PostStyled>
        <PostStyled>Post</PostStyled>
      </PostList>
    );
  }
}

export default Posts;
