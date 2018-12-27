import React, { Component } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail"

const StyledTitle = styled.div`
  color: violet;
`;

class App extends Component {
  state = { videos: [] , selectedVideo: ""};
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <StyledTitle>Most related video:</StyledTitle>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
