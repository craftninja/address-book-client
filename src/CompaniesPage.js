import React, { Component } from 'react';
import { Cell, Grid, Paper } from 'react-md';

export default class CompaniesPage extends Component {
  state = { companies: null }

  componentDidMount() {
    const that = this;
    this._asyncRequest =  fetch(`${process.env.REACT_APP_SERVER_URL}/companies`, {
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
          className="md-cell md-cell--12 company-page__company md-background--card"
        >
          <Grid
            className="company-page__company-title"
          >
            <Cell size={12}><h3>{company.title}</h3></Cell>
            <Cell size={12}>
              <h4><b>Company number:</b></h4>
            </Cell>
            <Cell offset={1} size={11}>
              {company.company_number}
            </Cell>
            <Cell size={12}>
              <h4><b>Address:</b></h4>
            </Cell>
            <Cell offset={1} size={11}>
              {company.address_snippet}
            </Cell>
          </Grid>
        </Paper>
      )
    })

    return formattedCompanies;
  }
}
