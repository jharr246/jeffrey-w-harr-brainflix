import React, { Component } from "react";
import "./Video.scss";

export default class Video extends Component {
  render() {
    const { displayVideo } = this.props;
    const { id } = this.props;

    return (
      <section
        id={id}
        onClick={(e) => {
          displayVideo(e, id);
        }}
        className="video"
      >
        <div
          className="video__image"
          style={{ backgroundImage: `url(${this.props.image})` }}
        ></div>
        <div className="video__details">
          <p className="video__title">{this.props.title}</p>
          <p className="video__channel">{this.props.channel}</p>
        </div>
      </section>
    );
  }
}
