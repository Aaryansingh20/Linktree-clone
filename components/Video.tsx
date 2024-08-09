// components/Video.tsx
import React from 'react';

const Video: React.FC = () => {
  return (
    <div>
      <video width="600" controls>
        <source src="../public/assets/screen3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
