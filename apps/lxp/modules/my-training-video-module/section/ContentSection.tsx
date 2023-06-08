import React, { FC, ReactElement } from "react";
import Description from "./Description";
import ListStudy from "./ListStudy";
import YoutubeSection from "./YoutubeSection";
import { useRouter } from "next/router";
import { useGetMyWorkVideoModule } from "./hooks";
import { paramsVideoModule } from "../type";

const ContentSection: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: paramsVideoModule = {
    subjectID: query.subjectID as string,
    moduleID: query.moduleID as string,
    videoID: query.videoID as string,
  };
  const { data } = useGetMyWorkVideoModule(params);
  console.log(data);
  const material = data?.data?.material;
  const videoModule = material?.module_moduleVideos;
  return (
    <div className="mx-6 md:mx-8 lg:px10 my-2  bg-[#FFFF] shadow-sm rounded-[8px]">
      <h1 className="text-center font-[700] lg:text-[25px] text-[20px] pt-[50px]">
        Pelatihan Keterampilan Komunikasi
      </h1>
      <div className="lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap lg:p-[50px] p-5">
        <div className="w-full">
          {videoModule?.map((item: any, index: number) => {
            const url = item.url.split("https://www.youtube.com/watch?v=").slice(1);
            return <YoutubeSection key={index} url={url} />;
          }, [])}
          <Description title={material?.title} description={material?.description} />
        </div>
        <div className="w-full">
          <ListStudy />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
