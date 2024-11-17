import React from 'react';

function LiveStreamPlayer({ streamUrl }) {
  return (
    <div>
      <h2>Live Stream</h2>
      <video width="640" height="360" controls>
        <source src={streamUrl} type="application/x-mpegURL" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default LiveStreamPlayer;