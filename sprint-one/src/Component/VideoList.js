import React, { Component } from "react";
import videoList from "../Data/videos.json";

import Video from "./Video";
import "./VideoList.scss";
export default class VideoList extends Component {
  state = {
    videos: videoList,
  };

  // set function to filter  and remove the displayed video from the videoList

  removeVideo = (video) => {
    return video.id !== this.props.videoObj.id;
  };

  render() {
    const { displayVideo } = this.props;

    return (
      <div className="video__list">
        <h1 className="video__list--title">NEXT VIDEO</h1>
        {this.state.videos.filter(this.removeVideo).map((video) => {
          return (
            <div>
              <Video
                displayVideo={displayVideo}
                key={video.id}
                image={video.image}
                title={video.title}
                channel={video.channel}
                id={video.id}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
