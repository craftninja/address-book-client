import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const SearchNav = ({ searching, onClick, ...props }) => {
  const icon = searching ? 'arrow_back' : 'search';

  return <Button icon onClick={searching ? onClick : null} {...props}>{icon}</Button>;
};

SearchNav.propTypes = {
  searching: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SearchNav;
