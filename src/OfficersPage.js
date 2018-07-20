import React, { Component } from 'react';
import { Cell, Grid, Paper } from 'react-md';

export default class OfficerPage extends Component {
  state = { officers: null }

  componentDidMount() {
    const that = this;
    this._asyncRequest =  fetch(`http://localhost:3001/officers`, {
      mode: "cors",
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(officers) {
      that._asyncRequest = null;
      that.setState({ officers: officers.officers })
    }).catch(error => console.log("ERROR! ", error));
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  render() {
    const { officers } = this.state;
    if (!officers) { return <p> Loading... </p> }

    const formattedOfficers = officers.map((officer) => {
      return (
        <Paper
          key={`officer-${officer.id}`}
          className="md-cell md-cell--12 officer-page__person md-background--card"
        >
        <Grid className="grid-example">
          <Cell size={4}>{officer.name}</Cell>
          <Cell size={4}>{officer.company.address_snippet}</Cell>
          <Cell size={4}></Cell>
        </Grid>
        </Paper>
      )
    })

    return formattedOfficers;
  }
}
