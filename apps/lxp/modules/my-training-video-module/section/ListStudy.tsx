import React, { ReactElement, useState } from "react";
import Image from "next/image";
import VideoImage from "../assets/video.svg";
import DocumentImage from "../assets/document.svg";
import { useGetMyWorkVideoModule } from "./hooks";
import { docMytrainingTypes, TVideoModuleParams, videoMytrainingTypes } from "../type";
import { useRouter } from "next/router";
import Link from "next/link";
import { usePopupConfirmModul } from "../pop-up/hooks";
import { ModulePopup } from "../pop-up";

const ListStudy = (): ReactElement => {
  const { setPopupStatus } = usePopupConfirmModul();
  // const [popup, setpopup] = useState(false);
  const { query } = useRouter();
  const params: TVideoModuleParams = {
    subjectID: query.subjectID as string,
    moduleID: query.moduleID as string,
    videoID: query.videoID as string,
  };
  const { data } = useGetMyWorkVideoModule(params);
  const videoModule = data?.data?.material?.module_moduleVideos;
  const docModule = data?.data?.material?.module_moduleDocs;
  return (
    <div className="flex flex-col w-full shadow-lg rounded-lg p-6">
      <div className="flex flex-col h-[40%]">
        <h1 className="font-bold text-xl">Video Lainnya</h1>
        <div className="flex items-center gap-y-4 py-4 gap-x-2">
          {videoModule?.map((item: videoMytrainingTypes, index: number) => {
            return (
              <div key={index} className="flex items-center">
                <Image src={VideoImage} width={200} height={200} className="w-auto" alt="icon" />
                <p className="font-bold">Introduce Manajemen Keuangan</p>
              </div>
            );
          }, [])}
        </div>
      </div>
      <div className="flex flex-col h-[60%]">
        <h1 className="font-bold text-xl">Dokumen Lainnya</h1>
        <div className="flex items-center gap-x-3  gap-y-4 py-4">
          {docModule?.map((item: docMytrainingTypes, index: number) => {
            return (
              <Link href={item.url as string} className="flex items-center gap-2" key={index}>
                <Image src={DocumentImage} width={200} height={200} className="w-auto" alt="icon" />
                <p className="font-bold">{item.title}</p>
              </Link>
            );
          }, [])}
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-2">
        <button
          onClick={() => setPopupStatus(true)}
          className="bg-[#F26800] flex items-center w-[217px] h-[48px] rounded-[8px] justify-center gap-2"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.0889 10.915L11.0011 16.0049L8.49951 16.5052L8.99982 14.0036L14.0903 8.91377C14.3548 8.64886 14.7137 8.5 15.088 8.5C15.4622 8.5 15.8212 8.64886 16.0856 8.91377L16.0916 8.91911C16.6419 9.47105 16.6407 10.3645 16.0889 10.915Z"
              stroke="white"
              stroke-width="1.5"
            />
            <path
              d="M6.4958 14.5042H2.4933C1.94067 14.5042 1.49268 14.0562 1.49268 13.5036V2.49672C1.49268 1.94409 1.94067 1.49609 2.4933 1.49609H12.4996C13.0522 1.49609 13.5002 1.94409 13.5002 2.49672V6.99953"
              stroke="white"
              stroke-width="1.5"
            />
            <path d="M6.49561 4.49609H10.4981" stroke="white" stroke-width="1.5" />
            <path d="M4.49463 7.5H10.4984" stroke="white" stroke-width="1.5" />
            <path d="M4.49463 10.5H9.49775" stroke="white" stroke-width="1.5" />
          </svg>
          <h1 className="text-[#FFFF]">Selesaikan Modul</h1>
        </button>
      </div>
      <ModulePopup />
    </div>
  );
};

export default ListStudy;
