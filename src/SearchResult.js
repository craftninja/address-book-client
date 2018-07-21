import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Cell, FontIcon, Grid, Paper } from 'react-md';

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { detailsVisible: false, officers: null, saved: false }
  }
  showDetails = async () => {
    const company_number = this.props.company.company_number;
    const officers = await fetch(`${process.env.REACT_APP_SERVER_URL}/search?officers_for_company_id=${company_number}`, {
      mode: "cors",
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(officers) {
        return officers;
      }).catch(error => console.log("ERROR! ", error));

    const renderedOfficers = officers.items
      .map((officer, i) => {
        return (
          <Cell className="md-subheading-2" offset={1} size={11} key={`officer-${i}`} >
            {officer.name}
          </Cell>
        )
      });
    this.setState({ officers, renderedOfficers, detailsVisible: true });
  }

  hideDetails = () => {
    this.setState({ detailsVisible: false });
  }

  save = () => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/companies`, {
      method: 'POST',
      mode: "cors",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        company: this.props.company,
        officers: this.state.officers,
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(savedStuff) {
      }).catch(error => console.log("ERROR! ", error));
    this.setState({ saved: true });
  }

  render() {
    const { detailsVisible, renderedOfficers, saved } = this.state;
    const { company } = this.props
    if (!detailsVisible) {
      return  (
        <Paper
          className={`md-cell md-cell--12 toolbar-search__result md-background--card ${saved ? 'search-result__saved' : undefined }`}
        >
          <Grid
            className="search-result__company-title"
            onClick={this.showDetails}
          >
            <Cell className="md-display-1" size={12}>{company.title}</Cell>
          </Grid>
        </Paper>
      );
    }
    return (
      <Paper
        className="md-cell md-cell--12 toolbar-search__result md-background--card"
      >
        <Grid
          className="search-result__company-title"
          onClick={this.hideDetails}
        >
          <Cell className="md-display-1" size={11}>{company.title}</Cell>
          <Cell size={1}>
            <FontIcon
              className="search-result__save"
              alt="Save to My Address Book"
              onClick={this.save}
            >
              save_alt
            </FontIcon>
          </Cell>
          <Cell className="md-title" size={12}>
            Company number:
          </Cell>
          <Cell className="md-subheading-2"  offset={1} size={11}>
            {company.company_number}
          </Cell>
          <Cell className="md-title" size={12}>
            Address:
          </Cell>
          <Cell className="md-subheading-2" offset={1} size={11}>
            {company.address_snippet}
          </Cell>
        </Grid>
        <Grid className="search-result__officer">
          <Cell className="md-title"  size={12}>
            Officers:
          </Cell>
          {renderedOfficers}
        </Grid>
      </Paper>
    );
  }
};

SearchResult.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};
