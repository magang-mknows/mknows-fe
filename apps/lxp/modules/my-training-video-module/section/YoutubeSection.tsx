import React, { ReactElement } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { videoMytrainingTypes } from "../type";

const YoutubeSection = (props: videoMytrainingTypes): ReactElement => {
  const { url } = props;

  const onPlayerReady: YouTubeProps["onReady"] = (event: any) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <YouTube
        iframeClassName="xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-full h-[320px] disabled "
        videoId={url}
        opts={opts}
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default YoutubeSection;
