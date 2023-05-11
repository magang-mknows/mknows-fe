import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PlayButton from '../../assets/play-button.svg';
import { useGuideVideo } from './hooks';
import { Card } from '@mknows-frontend-services/components/molecules';

export const ContentSection = (): ReactElement => {
  const { getGuideVideo } = useGuideVideo();
  return (
    <div className="w-full px-6 md:px-8 lg:px-16">
      <div className="md:mt-[24px] mt-0 mb-[54px] justify-between grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 md:gap-x-8 md:gap-y-5 gap-y-5">
        {getGuideVideo.slice(0, 6).map((item, i) => {
          return (
            <Link href={`/panduan/video-panduan/${item.videoId}`} key={i}>
              <Card
                className="relative w-full min-h-min dark:bg-[#232529] shadow-[#969696]/10 rounded-lg px-3 shadow-md"
                src={`https://i.ytimg.com/vi/${item.videoId}/hq720.jpg`}
                imgwidth={380}
                imgheight={170}
                imgStyle="w-full rounded-[8px]"
                hasImage={true}
                titleStyle={'text-xl font-bold mt-2'}
                title={item.titleVideo}
                icon={
                  <div className="absolute bottom-[60%] left-[45%]">
                    <Image src={PlayButton} alt="play button" />
                  </div>
                }
              >
                <p className="w-full text-sm font-base mt-3.5 dark:text-white text-black">
                  {item.descVideo?.substring(0, 80)} ...
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
