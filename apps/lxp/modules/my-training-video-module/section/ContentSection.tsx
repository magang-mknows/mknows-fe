import React, { FC, ReactElement } from 'react';
import { useRecoilValue } from 'recoil';
import Description from './Description';
import ListStudy from './ListStudy';
import YoutubeSection from './YoutubeSection';
import { filterOption } from '../store';
import { useRouter } from 'next/router';

const ContentSection: FC = (): ReactElement => {
  const { query } = useRouter();
  const getOption = useRecoilValue(
    filterOption(query.videoId as unknown as string)
  );
  console.log(query);
  return (
    <div className="mx-6 md:mx-8 lg:px10 my-2  bg-[#FFFF] shadow-sm rounded-[8px]">
      <h1 className="text-center font-[700] lg:text-[25px] text-[20px] pt-[50px]">
        Pelatihan Keterampilan Komunikasi
      </h1>
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
              <ListStudy />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
