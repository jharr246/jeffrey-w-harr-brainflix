import React, { Component } from "react";
import Hero from "../Component/Hero";
import MainVideo from "../Component/MainVideo/MainVideo";
import VideoList from "../Component/VideoList/VideoList";
import axios from "axios";
import CommentForm from "../Component/CommentForm";
import CommentList from "../Component/CommentList";

export default class Home extends Component {
  state = { mainVideo: [] };

  apiKey = "?api_key=85392de3-d044-486a-9f9a-8b631af1f6bc";
  videoUrl = "https://project-2-api.herokuapp.com/";

  firstVideo = "videos/1af0jruup5gu";

  componentDidMount() {
    axios
      .get(`${this.videoUrl}${this.firstVideo}${this.apiKey}`)
      .then((response) => {
        this.setState({ mainVideo: response.data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(
          `${this.videoUrl}videos/${this.props.match.params.id}${this.apiKey}`
        )
        .then((response) => {
          this.setState({ mainVideo: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div>
        <Hero videoObj={this.state.mainVideo} />
        <div className="desktop">
          <div>
            <MainVideo videoObj={this.state.mainVideo} />
            <CommentForm commentObj={this.state.mainVideo.comments} />
            <CommentList commentObj={this.state.mainVideo.comments} />
          </div>
          <VideoList
            displayVideo={this.displayVideo}
            videoObj={this.state.mainVideo}
          />
        </div>
      </div>
    );
  }
}
