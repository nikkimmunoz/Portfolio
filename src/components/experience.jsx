import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
  render() {
    const This = this.props;
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {This.startYear} - {This.endYear}
          </p>
        </Cell>
        <Cell col={8}>
          <h4 className="mt-0 mb-0 lh-16">{This.jobName}</h4>
          <small className="mt-0 lh-32 ed-ex-det">{This.jobCompany}</small>
          <p>{This.jobDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Experience;
