import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import ProfileImg from "../imgs/profile_img.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div className="text-align-center pt-2 mt-1">
              <img src={ProfileImg} alt="avatar" className="resume-avatar" />
            </div>
            <h2 className="pt-1">Oliver Muñoz</h2>
            <h4 className="text-grey">Computer Engineer - Software Engineer</h4>
            <hr className="resume-hr avatar" />
            <p>With a passion for challenges, improvement and milestones</p>
            <hr className="resume-hr avatar" />
            <h5>Address</h5>
            <p>Greenfields, Mambog IV, Bacoor, Cavite</p>
            <h5>Phone</h5>
            <p>(63) 995 834 1675</p>
            <h5>Email</h5>
            <p>nikkimmunoz@gmail.com</p>
            <h5>Web</h5>
            <p>https://github.com/nikkimmunoz</p>
            <hr className="resume-hr avatar" />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2019}
              schoolName={"Far Eastern University - Institute of Technology"}
              schoolAddress={
                "P. Paredes St, Sampaloc, Manila, 1015 Metro Manila"
              }
              schoolDescription={"Bachelors of Science in Computer Engineering"}
            />
            <hr className="resume-hr details" />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2020}
              jobName={"Software Engineer"}
              jobCompany={"Realtair Inc."}
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
