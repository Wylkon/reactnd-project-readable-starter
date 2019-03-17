import React from 'react';
import styled from 'styled-components';
import { array } from 'prop-types';
import { Post } from 'components';
import { Link } from 'react-router-dom';

const PostList = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
`;

export const Posts = ({ posts }) => {
  return posts && posts.length ? (
    <PostList>
      {posts.map(post => (
        <Post {...post} key={post.id}>
          <Link to={`/${post.category}/${post.id}`}>
            <h3>{post.title}</h3>
            <p>
              Posted by <em>{`u/${post.author}`}</em>
              <span>
                <box-icon type="solid" name="message" size="xs" />
                {post.commentCount}
              </span>
            </p>
          </Link>
        </Post>
      ))}
    </PostList>
  ) : (
    <p>This category does not have posts</p>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: array,
};
