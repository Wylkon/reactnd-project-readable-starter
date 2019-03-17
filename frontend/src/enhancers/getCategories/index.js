import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { receive } from 'store/modules/categories';

const getCategories = () => Child =>
  withRouter(
    connect(
      null,
      { receive }
    )(
      class GetCategoriesWrapper extends Component {
        state = {
          data: {},
          loading: true,
        };

        componentDidMount() {
          // eslint-disable-next-line
          const { receive } = this.props;

          receive().then(success => {
            this.setState({
              data: success.categoriesList,
              loading: false,
            });
          });
        }

        render() {
          const { data, loading } = this.state;

          return loading ? null : <Child {...this.props} {...data} />;
        }
      }
    )
  );

getCategories.propTypes = {
  type: string.isRequired,
  path: string.isRequired,
};

export default getCategories;
