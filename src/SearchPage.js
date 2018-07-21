/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { Paper, Toolbar } from 'react-md';

import './_styles.scss';
import './SearchPage.css';
import SearchNav from './SearchNav';
import SearchAction from './SearchAction';
import Search from './Search';
import SearchResult from './SearchResult';

export default class SearchPage extends PureComponent {
  state = { searching: false, search: '', results: null, companies: [] };
  startSearching = () => {
    this.setState({ searching: true });
  };

  stopSearching = () => {
    this.setState({ searching: false });
  };

  clearSearch = () => {
    this.setState({ search: '' });
  };

  handleChange = async (value) => {
    this.setState({ search: value });
    if (value.length < 3) { return }

    const companies = await fetch(`${process.env.REACT_APP_SERVER_URL}/search?companies[name]=${value}`, {
      mode: "cors",
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(companies) {
        return companies
      }).catch(error => console.log("ERROR! ", error));

    this.setState({ companies });
    this.search(this.state.search);
  };

  search = (value) => {
    const now = Date.now();
    const { companies } = this.state;

    const results = companies.items
      .map((company, i) => <SearchResult company={company} index={i} value={value} key={`${now}-${i}`} />);

    results.unshift(
      <Paper key="search_results" className="md-cell md-cell--12 toolbar-search__result md-background--card">
        <h3>{companies.items_per_page} out of {companies.total_results}</h3>
      </Paper>
    )
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
