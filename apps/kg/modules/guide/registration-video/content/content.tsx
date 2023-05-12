import { FC, Fragment, ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import { filterOption } from './store';
import { useRouter } from 'next/router';
import { ListVideo } from '../list-video';
import { Description } from '../description';
import { YoutubeSection } from '../youtube/youtube';

export const ContentSection: FC = (): ReactElement => {
  const { query } = useRouter();
  const getOption = useRecoilValue(
    filterOption(query.videoId as unknown as string)
  );
  return (
    <Fragment>
      {getOption.map((item, index) => {
        return (
          <div
            key={index}
            className="lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap lg:p-[50px] p-5"
          >
            <div className="w-full">
              <YoutubeSection videoId={item.videoId} />
              <Description
                titleVideo={item.titleVideo}
                descVideo={item.descVideo}
              />
            </div>
            <div className="w-full">
              <ListVideo />
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
