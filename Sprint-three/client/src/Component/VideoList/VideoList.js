import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Video from "../Video/Video";
import "./VideoList.scss";
export default class VideoList extends Component {
  state = { videoList: [] };

  // apiKey = "?api_key=85392de3-d044-486a-9f9a-8b631af1f6bc";
  videoUrl = "/api/videos";

  componentDidMount() {
    axios.get(`${this.videoUrl}`).then((response) => {
      this.setState({ videoList: response.data });
    });
  }
  // set function to filter  and remove the displayed video from the videoList

  removeVideo = (video) => {
    return video.id !== this.props.videoObj.id;
  };

  render() {
    const { displayVideo } = this.props;

    return (
      <div className="video__list">
        <h1 className="video__list--title">NEXT VIDEO</h1>
        {this.state.videoList.filter(this.removeVideo).map((video) => {
          return (
            <Link
              key={video.id}
              className="video__links"
              to={`/videos/${video.id}`}
            >
              <div key={video.id}>
                <Video
                  displayVideo={displayVideo}
                  key={video.id}
                  image={video.image}
                  title={video.title}
                  channel={video.channel}
                  id={video.id}
                />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
