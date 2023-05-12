import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGuideVideo } from '../hooks';

export const ListVideo = (): ReactElement => {
  const { getGuideVideo } = useGuideVideo();
  return (
    <div className="w-full">
      <div className="title mb-[2px]">
        <h1 className="text-black font-[700] text-[20px]">
          Video panduan lainnya
        </h1>
      </div>
      {getGuideVideo
        .map((item, index) => {
          return (
            <Link
              key={index}
              href={`/panduan/video-panduan/${item.videoId as string}`}
            >
              <div
                key={index}
                className="w-full bg-white  h-fit lg:h-[120px] rounded-[8px] shadow-sm mt-[12px]"
              >
                <div className="flex px-[10px] py-[10px] gap-[16px]">
                  <Image
                    className={'rounded-[8px]'}
                    src={`https://i.ytimg.com/vi/${item.videoId}/hq720.jpg`}
                    width={187}
                    height={100}
                    alt={'thumbnail'}
                  />
                  <div>
                    <h1 className="text-[14px] font-[700] text-black">
                      {item.titleVideo}
                    </h1>
                    <p className="text-[12px] font-[400] text-black  text-justify mt-[4px]">
                      {item.descVideo?.substring(0, 120)} ...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
        .slice(0, 5)}
    </div>
  );
};
