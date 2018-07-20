import React, { Component } from 'react';
import { Cell, Grid, Paper } from 'react-md';

export default class CompaniesPage extends Component {
  state = { companies: null }

  componentDidMount() {
    const that = this;
    this._asyncRequest =  fetch(`http://localhost:3001/companies`, {
      mode: "cors",
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(companies) {
      that._asyncRequest = null;
      that.setState({ companies: companies.companies })
    }).catch(error => console.log("ERROR! ", error));
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { companies } = this.state;
    if (!companies) { return <p> Loading... </p> }

    const formattedCompanies = companies.map((company) => {
      return (
        <Paper
          key={`company-${company.id}`}
          className="md-cell md-cell--12 company-page__person md-background--card"
        >
        <Grid className="grid-example">
          <Cell size={4}>{company.title}</Cell>
          <Cell size={4}>{company.company_number}</Cell>
          <Cell size={4}>{company.address_snippet}</Cell>
        </Grid>
        </Paper>
      )
    })

    return formattedCompanies;
  }
}
