import React, { Fragment, ReactElement } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { videoGuideTypes } from '../type';

const YoutubeSection = (props: videoGuideTypes): ReactElement => {
  const { videoId } = props;

  const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
    event.target.pauseVideo();
  };
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <Fragment>
      <YouTube
        iframeClassName="xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-full h-[320px] disabled "
        videoId={videoId}
        opts={opts}
        onReady={onPlayerReady}
      />
    </Fragment>
  );
};

export default YoutubeSection;
