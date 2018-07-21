import React, { Component } from 'react';
import { Cell, Grid, Paper } from 'react-md';

export default class OfficerPage extends Component {
  state = { officers: null }

  componentDidMount() {
    const that = this;
    this._asyncRequest =  fetch(`${process.env.REACT_APP_SERVER_URL}/officers`, {
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
          <Grid
            className="officer-page__officer-name"
          >
            <Cell className="md-display-1" size={12}>{officer.name}</Cell>
            <Cell className="md-title" size={12}>
              Company address:
            </Cell>
            <Cell className="md-subheading-2" offset={1} size={11}>
              {officer.company.address_snippet}
            </Cell>
          </Grid>
        </Paper>
      )
    })

    return formattedOfficers;
  }
}
