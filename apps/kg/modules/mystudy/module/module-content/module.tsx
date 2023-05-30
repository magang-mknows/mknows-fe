import Image from "next/image";
import { Fragment, ReactElement, useState } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import { PopupModal } from "../../discussion/components/modal/pop-up";
import { ModuleButton } from "../components/button";
import { useGetModuleContentById, usePopupConfirmModul } from "./hooks";
import { useConfirmModul } from "../hooks";

import Play from "../assets/button-play.svg";
import Document from "../assets/iconDoc.svg";
import { useRouter } from "next/router";
import { TModuleContentItem } from "./types";

export const ModuleContentModule = (): ReactElement => {
  const router = useRouter();
  const { data } = useGetModuleContentById(router.query.moduleContentId as string);
  const [videoId, setVideoId] = useState<string>("wqFzwWRdteM");

  const dataModuleContents: TModuleContentItem = data?.data as TModuleContentItem;

  const idVideoGroup = [
    { title: "Calo Tiket Panik", id: "MMrCXMpL8cA" },
    { title: "AI di Sekolah Cina", id: "Tu4H03vN838" },
    { title: "Intel vs AMD", id: "254PirhmZQk" },
  ];

  const documentsGroup = [
    {
      title: "Introduce Manajemen Keuangan",
      id: "",
    },
    {
      title: "Fungsi Manajemen Keuangan",
      id: "",
    },
    {
      title: "Tujuan Manajemen Keuangan",
      id: "",
    },
  ];

  function handleSidebarVideosClicked(val: string) {
    setVideoId(val);
  }

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "300",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };
  const { setPopupStatus, getPopupStatus } = usePopupConfirmModul();
  const { getConfirmModul, setConfirmModul } = useConfirmModul();

  return (
    <Fragment>
      {dataModuleContents && (
        <div className="flex flex-col h-full w-full items-center px-4 lg:px-32 ">
          <h1 className="mx-auto lg:text-3xl text-lg font-bold mt-4 mb-8">Mata Kuliah 1</h1>
          <div className="flex lg:flex-row flex-col w-full h-full gap-8">
            <section className="flex w-full md:w-fit">
              <div className="flex flex-col w-full h-auto gap-4 justify-center items-center">
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={onPlayerReady}
                  iframeClassName="xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-[360px] h-[320px]"
                />
                <div className="shadow-md rounded-lg lg:p-10 w-full h-full">
                  <h1 className="font-bold text-xl">{dataModuleContents.title}</h1>
                  <p className="text-gray-500 py-4">{dataModuleContents.description}</p>
                </div>
              </div>
            </section>
            <section className="flex flex-col w-full shadow-lg rounded-lg p-6">
              <section className="flex flex-col">
                <h1 className="font-bold text-xl">Video Lainnya</h1>
                <div className="flex flex-col gap-y-4 py-4">
                  {idVideoGroup.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => handleSidebarVideosClicked(video.id)}
                      className="flex items-center gap-x-2"
                    >
                      <Image src={Play} alt="icon" />
                      <p className="font-bold">{video.title}</p>
                    </button>
                  ))}
                </div>
              </section>
              <section className="flex flex-col">
                <h1 className="font-bold text-xl">Dokumen Lainnya</h1>
                <div className="flex flex-col gap-y-4 py-4">
                  {documentsGroup.map((doc, i) => (
                    <button className="flex items-center gap-x-2">
                      <Image src={Document} alt="icon" />
                      <p className="font-bold">{doc.title}</p>
                    </button>
                  ))}
                </div>
              </section>
              <div className="flex w-full justify-center items-center mt-8">
                <ModuleButton
                  color={getConfirmModul ? "gray" : "blue"}
                  text="Selesaikan Modul"
                  size="regular"
                  onClick={() => setPopupStatus(true)}
                  icon={
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
                  }
                />
              </div>
            </section>
          </div>
        </div>
      )}

      <div>
        <PopupModal
          onClose={() => setPopupStatus(false)}
          lookup={getPopupStatus}
          className="!h-60 !w-[100%] text-md"
        >
          <h1 className="flex p-4 pt-2 rounded-md bg-yellow-400 text-white w-full">
            Apa Pelajaran yang kamu pelajari hari ini?
          </h1>
          <div className="shadow flex justify-start p-2 w-full my-3">
            <input
              className="w-full h-auto lg:p-5 p-2 rounded-md outline-none"
              type="text"
              placeholder="Tulis materi yang kamu dapat disini..."
            />
          </div>
          <p className="text-gray-400 lg:text-lg text-sm">
            Materi kamu akan di-review oleh dosen atau pembimbing kamu. Pastikan kamu mengisi dengan
            sesuai!
          </p>
          <div className="p-4 flex w-full justify-end items-end">
            <ModuleButton
              onClick={() => {
                setPopupStatus(false);
                setConfirmModul(true);
              }}
              text="Kirim"
              color="yellow"
              size="base"
            />
          </div>
        </PopupModal>
      </div>
    </Fragment>
  );
};
