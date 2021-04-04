import React, { Component } from "react";
import "./MainVideo.scss";
export default class Hero extends Component {
  render() {
    return (
      <div>
        {" "}
        <video
          className="video__img"
          controls
          poster={this.props.videoObj.image}
        >
          <source src={this.props.videoObj.video}></source>
        </video>
      </div>
    );
  }
}
