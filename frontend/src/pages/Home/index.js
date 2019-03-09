import React, { Component } from 'react';
import { TopBarPosts, Posts, Section } from 'components';
import { connect } from 'react-redux';
import { getPosts } from 'store/modules/posts';
import { func, array, bool } from 'prop-types';

class Home extends Component {
  componentDidMount = () => {
    const { getPosts } = this.props;
    getPosts();
  };

  render() {
    const { posts, loaded } = this.props;

    return (
      <Section>
        <TopBarPosts />
        {!!loaded && <Posts posts={posts} />}
      </Section>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.data,
  loaded: posts.loaded,
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Home);

Home.propTypes = {
  getPosts: func.isRequired,
  posts: array.isRequired,
  loaded: bool.isRequired,
};
