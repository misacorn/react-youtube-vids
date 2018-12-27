import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  max-width: 180px;
`;

const StyledVideo = styled.div`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
`;

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <StyledVideo onClick={() => onVideoSelect(video)} className="video-item item">
      <StyledImg>
        <img
          className="ui image"
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
      </StyledImg>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </StyledVideo>
  );
};

export default VideoItem;
