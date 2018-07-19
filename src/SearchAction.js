/* Action.jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-md';

const SearchAction = ({ searching, onClick, ...props }) => (
  <Button
    icon
    onClick={searching ? onClick : null}
    type={searching ? 'reset' : 'button'}
    {...props}
  >
    {searching ? 'close' : 'keyboard_voice'}
  </Button>
);

SearchAction.propTypes = {
  searching: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SearchAction;
