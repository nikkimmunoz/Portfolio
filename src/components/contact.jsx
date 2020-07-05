import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Nikki Oliver Muñoz</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar_placeholder"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              ullam harum consequatur perspiciatis pariatur iste reiciendis,
              quia sint, assumenda quasi vitae aliquam obcaecati ipsa, tenetur
              porro animi provident numquam dolor. sint.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <i className="fa fa-phone-square w-25" aria-hidden="true" />
                  <ListItemContent className="item-content">
                    (+63) 000 834 1675
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <i className="fa fa-envelope w-25" aria-hidden="true" />
                  <ListItemContent className="item-content">
                    nikkimmunoz@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <i
                    className="fa fa-facebook-square w-25"
                    aria-hidden="true"
                  />
                  <ListItemContent className="item-content">
                    @nikkimmunoz
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
