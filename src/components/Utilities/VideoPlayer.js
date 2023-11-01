"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ ytId }) => {
  const option = {
    width: "540",
    height: "250",
  };

  return (
    <div className="border-2 border-secondary shadow-md rounded-md">
      <YouTube
        videoId={ytId}
        opts={option}
        onError={() => alert("Sorry, trailer is not available!")}
        iframeClassName="w-full"
      />
    </div>
  );
};

export default VideoPlayer;
