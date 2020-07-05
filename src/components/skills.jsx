import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    const This = this.props;
    return (
      <Grid>
        <Cell col={12}>
          <div className="d-flex">
            <div className="w-25">{This.skill}</div>
            <ProgressBar className="m-auto w-75" progress={This.progress} />
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;
