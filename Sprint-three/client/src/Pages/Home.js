import React, { Component } from "react";
import Hero from "../Component/Hero";
import MainVideo from "../Component/MainVideo/MainVideo";
import VideoList from "../Component/VideoList/VideoList";
import axios from "axios";
import CommentForm from "../Component/CommentForm";
import CommentList from "../Component/CommentList";

export default class Home extends Component {
  state = { mainVideo: [] };

  videoUrl = "/api/videos";

  firstVideo = "/1af0jruup5gu";

  componentDidMount() {
    axios.get(`${this.videoUrl}${this.firstVideo}`).then((response) => {
      this.setState({ mainVideo: response.data });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(`${this.videoUrl}/${this.props.match.params.id}`)
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
