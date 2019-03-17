import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func, array, bool, object } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { TopBarPosts, Posts, Section, ModalForm } from 'components';
import { getPosts } from 'store/modules/posts';
import { toggleModalPost } from 'store/modules/ui';
import { sortPosts } from 'utils/sortBy';

class Home extends Component {
  state = {
    sortBy: 'best',
  };

  componentDidMount = () => {
    this.checkCategory();
  };

  componentDidUpdate = prevProps => {
    const {
      match: { params },
    } = this.props;

    if (prevProps.match.params !== params) {
      this.checkCategory();
    }
  };

  handleSortBy = sortBy => {
    this.setState({
      sortBy,
    });
  };

  checkCategory = () => {
    const {
      getPosts,
      match: { params },
      categories,
      history,
    } = this.props;

    if (Object.keys(params).length) {
      if (categories.filter(category => category.name === params.category).length) {
        getPosts(params.category);
      } else {
        history.push('/404');
      }
    } else {
      getPosts();
    }
  };

  render() {
    const {
      posts,
      loaded,
      match: { params },
      toggleModalPost,
    } = this.props;

    const { sortBy } = this.state;

    return (
      <Section>
        <TopBarPosts handleSortBy={this.handleSortBy} toggleModalPost={toggleModalPost} />
        {!!loaded && <Posts posts={sortPosts(params.category ? posts[params.category] : posts.all, sortBy)} />}
        <ModalForm />
      </Section>
    );
  }
}

const mapStateToProps = ({ posts, categories }) => ({
  posts: posts.posts,
  loaded: posts.loaded,
  categories: categories.categoriesList,
  categoriesLoaded: categories.loaded,
});

export default withRouter(
  connect(
    mapStateToProps,
    { getPosts, toggleModalPost }
  )(Home)
);

Home.propTypes = {
  getPosts: func.isRequired,
  toggleModalPost: func.isRequired,
  posts: object.isRequired,
  loaded: bool.isRequired,
  match: object.isRequired,
  history: object.isRequired,
  categories: array.isRequired,
};
