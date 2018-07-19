/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Toolbar } from 'react-md';

import './_styles.scss';
import './SearchPage.css';
import SearchNav from './SearchNav';
import SearchAction from './SearchAction';
import Search from './Search';
import SearchResult from './SearchResult';

export default class SearchPage extends PureComponent {
  state = { searching: false, search: '', results: null };
  startSearching = () => {
    this.setState({ searching: true });
  };

  stopSearching = () => {
    this.setState({ searching: false });
  };

  clearSearch = () => {
    this.setState({ search: '' });
  };

  handleChange = (value) => {
    this.setState({ search: value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.search(this.state.search);
    }
  };

  handleAutocomplete = (value) => {
    if (this.state.search === value) {
      return;
    }

    this.search(value);
  };

  search = (value) => {
    const now = Date.now();
    const results = Array.from(Array(3))
      .map((_, i) => <SearchResult index={i} value={value} key={`${now}-${i}`} />);

    this.setState({ search: value, results });
  };

  render() {
    const { searching, search, results } = this.state;

    return (
      <div>
        <Toolbar
          fixed
          inset
          nav={<SearchNav searching={searching} onClick={this.stopSearching} />}
          actions={<SearchAction searching={searching} onClick={this.clearSearch} />}
          title={
            <Search
              value={search}
              onFocus={this.startSearching}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onAutocomplete={this.handleAutocomplete}
            />
          }
          className="search__toolbar md-background--card"
          zDepth={1}
        />
        <CSSTransitionGroup
          className="md-toolbar-relative md-grid toolbar-search__results"
          component="section"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
        >
          {results}
        </CSSTransitionGroup>
      </div>
    );
  }
}
