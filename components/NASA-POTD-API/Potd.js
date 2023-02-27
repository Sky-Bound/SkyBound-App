import React, { Component } from "react";
import DateInput from "./DateInput"; 
import Photo from "./Photo";
import Text from "../AppText/Text";
import { title } from "process";

class POTD extends Component {
  state = {
    date: "",
    photo: "",
  };

  changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.getPhoto(dateFromInput);
  };

  getPhoto = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=IzI1tggvGQoqd425WYCQ2nGdY1ubGx9Geg3Yi084`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <DateInput changeDate={this.changeDate} />
        <Photo photo={this.state.photo} />
      </div>
    );
  }
}

export default POTD;