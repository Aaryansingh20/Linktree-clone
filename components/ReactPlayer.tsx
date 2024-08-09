// components/ReactPlayer.tsx
import React from 'react';
import ReactPlayer from 'react-player';

interface ReactPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<ReactPlayerProps> = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        className="react-player"
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
