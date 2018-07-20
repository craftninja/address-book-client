import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'react-md';

const SearchResult = ({ index, value, company }) => {
  return (
    <Paper
      className="md-cell md-cell--12 toolbar-search__result md-background--card"
    >
      <p>{company.title}</p>
    </Paper>
  );
};

SearchResult.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchResult;
