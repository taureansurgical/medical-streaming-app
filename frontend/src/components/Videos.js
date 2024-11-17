import React, { useEffect, useState } from 'react';

function Videos() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Videos</h1>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredVideos.map(video => (
          <div key={video._id}>
            <h2>{video.title}</h2>
            <video width="320" height="240" controls>
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;