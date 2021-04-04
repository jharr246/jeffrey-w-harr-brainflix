import React, { Component } from "react";
import "./MainVideo.scss";
import views from "../../assets/Icons/Icon-views.svg";
import likes from "../../assets/Icons/Icon-likes.svg";

export default class MainVideo extends Component {
  render() {
    const timeStamp = this.props.videoObj.timestamp;
    const dateObj = new Date(timeStamp);
    const displayDate = dateObj.toLocaleString("en-us", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return (
      <div className="video">
        <div>
          <p className="video__current-title">{this.props.videoObj.title}</p>
          <div className="desktop__layout">
            <div className="video__current-channel--container">
              <p className="video__current-channel">
                By {this.props.videoObj.channel}
              </p>
              <p className="video__date">{displayDate}</p>
            </div>
            <div className="video__data">
              <img
                className="video__views--img"
                src={views}
                alt="viewsIcon"
              ></img>
              <p className="video__views">{this.props.videoObj.views}</p>
              <img
                className="video__likes--img"
                src={likes}
                alt="likesIcon"
              ></img>
              <p className="video__likes">{this.props.videoObj.likes}</p>
            </div>
          </div>
          <p className="video__description">
            {this.props.videoObj.description}
          </p>
        </div>
      </div>
    );
  }
}
