import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("react js");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const onVideoSelect = (video) => { // we were providing this function to VideoList component to pass the video to setSelected video
  //   setSelectedVideo(video); // but we could just use setSelectedVideo and it will work the same
  // };

  return (
    <div>
      <div className="ui container">
        <Searchbar videoSearch={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
