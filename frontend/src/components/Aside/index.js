import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { AsideStyled, AsideTitle, AsideFooter, AsideList } from './styles';
import { Logo } from 'components';

import { upFirstLetter } from 'utils/upFirstLetter';
import { getCategories } from 'store/modules/categories';

const mapStateToProps = ({ categories }) => ({
  categories,
});

class Aside extends Component {
  componentDidMount = () => {
    const { getCategories } = this.props;

    getCategories();
  };

  render() {
    const { categoriesList } = this.props.categories;
    return (
      <AsideStyled role="complementary">
        <Logo />
        <AsideTitle>Categories</AsideTitle>
        <AsideList>
          {categoriesList.map(category => (
            <li key={category.name}>
              <Link to={`/r/${category.path}`}>
                <box-icon name="chevron-right" /> r/{upFirstLetter(category.name)}
              </Link>
            </li>
          ))}
        </AsideList>
        <AsideFooter>
          made with <span>{'<3'}</span> by Wylkon
        </AsideFooter>
      </AsideStyled>
    );
  }
}

export default connect(
  mapStateToProps,
  { getCategories }
)(Aside);

Aside.propTypes = {
  categories: object.isRequired,
  getCategories: func.isRequired,
};
