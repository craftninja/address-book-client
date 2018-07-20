import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Autocomplete } from 'react-md';

export default class Search extends PureComponent {
  static propTypes = {
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onAutocomplete: PropTypes.func,
    value: PropTypes.string,
  };

  render() {
    return (
      <Autocomplete
        {...this.props}
        id="toolbar-search"
        className="toolbar-search"
        type="search"
        data={[]}
        placeholder="For Companies by name"
        customSize="search"
        filter={null}
        block
        dataLabel="label"
        dataValue="value"
        listClassName="toolbar-search__list"
      />
    );
  }
}
