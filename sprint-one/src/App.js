import "./App.scss";
import Header from "./Component/Header";
import VideoList from "./Component/VideoList";
import MainVideo from "./Component/MainVideo";
import videoDetails from "./Data/video-details.json";
import React, { Component } from "react";
import Hero from "./Component/Hero";
class App extends Component {
  state = { mainVideo: videoDetails[0] };

  // function to be added to onclick in video component to then display in the hero.

  displayVideo = (e, id) => {
    console.log(id);
    this.setState({
      mainVideo: videoDetails.find((video) => {
        return video.id == id;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Hero videoObj={this.state.mainVideo} />
        <div className="desktop">
          <MainVideo videoObj={this.state.mainVideo} />
          <VideoList
            displayVideo={this.displayVideo}
            videoObj={this.state.mainVideo}
          />
        </div>
      </div>
    );
  }
}
export default App;
