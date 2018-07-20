import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Paper } from 'react-md';

const SearchResult = ({ index, value, company }) => {
  return (
    <Paper
      className="md-cell md-cell--12 toolbar-search__result md-background--card"
    >
      <Grid className="grid-example">
        <Cell size={4}>{company.title}</Cell>
      </Grid>
    </Paper>
  );
};

SearchResult.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchResult;
