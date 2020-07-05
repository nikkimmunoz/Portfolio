import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div className="text-align-center">
              <img
                src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                alt="avatar"
                className="resume-avatar"
              />
            </div>
            <h2 className="pt-2">Oliver Muñoz</h2>
            <h4 className="text-grey">Programmer</h4>
            <hr className="resume-hr avatar" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              voluptatem enim reprehenderit, quos ab soluta amet, ex corporis
              cum delectus ad molestiae placeat nihil ut.
            </p>
            <hr className="resume-hr avatar" />
            <h5>Address</h5>
            <p>Greenfields, Mambog IV, Bacoor, Cavite</p>
            <h5>Phone</h5>
            <p>(63) 995 834 1675</p>
            <h5>Email</h5>
            <p>nikkimmunoz@gmail.com</p>
            <h5>Web</h5>
            <p>github.com</p>
            <hr className="resume-hr avatar" />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2019}
              schoolName={"Far Eastern University - Institute of Technology"}
              schoolDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni repudiandae iure quia asperiores consequatur nihil inventore, quibusdam doloribus. Pariatur veniam at assumenda, soluta totam nostrum vel excepturi labore fugiat."
              }
            />
            <Education
              startYear={2014}
              endYear={2019}
              schoolName={"Far Eastern University - Institute of Technology"}
              schoolDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni repudiandae iure quia asperiores consequatur nihil inventore, quibusdam doloribus. Pariatur veniam at assumenda, soluta totam nostrum vel excepturi labore fugiat."
              }
            />
            <hr className="resume-hr details" />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2020}
              jobName={"Software Engineer"}
              jobDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni repudiandae iure quia asperiores consequatur nihil inventore, quibusdam doloribus. Pariatur veniam at assumenda, soluta totam nostrum vel excepturi labore fugiat."
              }
            />
            <hr className="resume-hr details" />
            <h2>Skills</h2>
            <Skills skill={"C #"} progress={"80"} />
            <Skills skill={"HTML5"} progress={"80"} />
            <Skills skill={"Javascript"} progress={"67"} />
            <Skills skill={"ASP.Net"} progress={"37"} />
            <Skills skill={"React"} progress={"28"} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
