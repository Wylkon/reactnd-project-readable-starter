import React from 'react';
import styled, { css } from 'styled-components';
import { array } from 'prop-types';
import { Total } from 'components';
import { Link } from 'react-router-dom';
import { resetButton } from 'themes';

const PostList = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
`;

const PostStyled = styled(Link)`
  align-items: center;
  display: flex;
  text-decoration: none;

  + a {
    border-top: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

const Counter = styled.div`
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.borderGray};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 16px;
  padding: 24px 0;
  width: 100px;
`;

const CounterButton = styled.button`
  ${resetButton};

  ${({ active, theme }) =>
    active &&
    css`
      fill: ${theme.colors.orange};
      opacity: 0.2;
    `}
`;

export const Posts = ({ posts }) => {
  return (
    <PostList>
      {posts.map(post => (
        <PostStyled key={post.id} to={`/${post.category}/${post.id}`}>
          <Counter>
            <CounterButton onClick={e => e.preventDefault()}>
              <box-icon name="upvote" />
            </CounterButton>
            <Total value={post.voteScore} />
            <CounterButton onClick={e => e.preventDefault()}>
              <box-icon name="downvote" />
            </CounterButton>
          </Counter>
          <div>
            <h3>{post.title}</h3>
            <p>
              Posted by {`u/${post.author}`} <box-icon type="solid" name="message" />
              {post.commentCount}
            </p>
          </div>
        </PostStyled>
      ))}
    </PostList>
  );
};

Posts.propTypes = {
  posts: array.isRequired,
};
