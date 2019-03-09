import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { object, func, bool } from 'prop-types';

import { AsideStyled, AsideTitle, AsideFooter, AsideList, CloseButton, AsideOverlay } from './styles';
import { Logo } from 'components';

import { upFirstLetter } from 'utils/upFirstLetter';
import { getCategories } from 'store/modules/categories';
import { toggleMenu } from 'store/modules/ui';

const mapStateToProps = ({ categories, ui: { menu } }) => ({
  categories,
  menu,
});

class Aside extends Component {
  componentDidMount = () => {
    const { getCategories } = this.props;

    getCategories();
  };

  render() {
    const { categories, menu, toggleMenu } = this.props;
    return (
      <Fragment>
        <AsideStyled role="complementary" menu={menu}>
          <CloseButton onClick={toggleMenu}>
            <box-icon name="x" />
          </CloseButton>
          <Logo />
          <AsideTitle>Categories</AsideTitle>
          <AsideList>
            {categories.categoriesList.map(category => (
              <li key={category.name}>
                <Link to={`/${category.path}`}>
                  <box-icon name="chevron-right" /> {upFirstLetter(category.name)}
                </Link>
              </li>
            ))}
          </AsideList>
          <AsideFooter>
            made with <span>{'<3'}</span> by Wylkon
          </AsideFooter>
        </AsideStyled>
        <AsideOverlay menu={menu} onClick={toggleMenu} />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  { getCategories, toggleMenu }
)(Aside);

Aside.propTypes = {
  categories: object.isRequired,
  menu: bool.isRequired,
  getCategories: func.isRequired,
  toggleMenu: func.isRequired,
};
