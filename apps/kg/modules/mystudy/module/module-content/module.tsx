import Image from "next/image";
import { Fragment, ReactElement, useEffect, useMemo, useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { ModuleButton } from "../components/button";
import { useGetModuleContentById, usePopupConfirmModul, useWatchedVideoSubmitById } from "./hooks";
import { useConfirmModul } from "../hooks";
import Play from "../assets/button-play.svg";
import Document from "../assets/iconDoc.svg";
import { useRouter } from "next/router";
import { TModuleContentItem } from "./types";
import { Button } from "@mknows-frontend-services/components/atoms";
import { ModulePopup } from "./pop-up";

export const ModuleContentModule = (): ReactElement => {
  const router = useRouter();
  const { data } = useGetModuleContentById(router.query.moduleContentId as string);
  const { mutate } = useWatchedVideoSubmitById();
  const dataModuleContents: TModuleContentItem = data?.data as TModuleContentItem;
  const idVideoGroup = useMemo(() => {
    return dataModuleContents?.module_moduleVideos.map((video, i) => {
      return {
        id: video.id,
        title: video.title,
        desc: video.description,
        youtubeId: video.url.match(
          /(?<=v=|v\/|vi\/|vi=|youtu\.be\/|\/v\/|\/embed\/|\/shorts\/|\/youtu.be\/|\/v=|\/e\/|\/u\/\w\/|\/embed\/|\/v\/|\/watch\?v=|youtube.com\/watch\?v=|youtu.be\/)([^#&?\n]*)/,
        )?.[0] as string,
      };
    });
  }, [dataModuleContents]);

  type TVideoItem = {
    id: string;
    title: string;
    desc: string;
    youtubeId: string;
  };

  const [isExecuted, setIsExecuted] = useState(false);
  const [videoItem, setVideoItem] = useState<TVideoItem>({
    title: "",
    id: "",
    desc: "",
    youtubeId: "",
  });

  useEffect(() => {
    setIsExecuted(true);
    if (idVideoGroup && isExecuted) {
      setVideoItem({
        id: idVideoGroup[0].id,
        title: idVideoGroup[0].title,
        desc: idVideoGroup[0].desc,
        youtubeId: idVideoGroup[0].youtubeId,
      });
      setIsExecuted(false);
    }
  }, [idVideoGroup, isExecuted]);

  function handleSidebarVideosClicked(val: TVideoItem) {
    setVideoItem(val);
  }

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const onPlayerStateChange = (event: { target: YouTubePlayer; data: number }): void => {
    if (event.data === YouTube.PlayerState.ENDED) {
      mutate(videoItem.id);
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "300",
    width: "800",
    playerVars: {
      autoplay: 0,
    },
  };
  const { setPopupStatus } = usePopupConfirmModul();
  const { getConfirmModul } = useConfirmModul();

  return (
    <Fragment>
      <ModulePopup moduleId={router.query.moduleContentId as string} />
      {dataModuleContents && (
        <div className="flex flex-col h-full w-full items-center px-4 lg:px-32 ">
          <h1 className="mx-auto lg:text-3xl text-lg font-bold mt-4 mb-8">
            {dataModuleContents?.title}
          </h1>
          <div className="flex lg:flex-row flex-col w-full h-full gap-8">
            <section className="flex w-full md:w-fit">
              <div className="flex flex-col w-full h-auto gap-4 justify-center items-center">
                <YouTube
                  videoId={videoItem.youtubeId}
                  opts={opts}
                  onReady={onPlayerReady}
                  onStateChange={onPlayerStateChange}
                  iframeClassName="xl:w-[728px] lg:w-full  xl:h-[398px] lg:h-[508px] w-[360px] h-[320px]"
                />
                <div className="shadow-md rounded-lg lg:p-10 w-full h-full">
                  <h1 className="font-bold text-xl">{videoItem.title}</h1>
                  <p className="text-gray-500 py-4">{videoItem.desc}</p>
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
                      onClick={() =>
                        handleSidebarVideosClicked({
                          title: video.title,
                          id: video.id,
                          desc: video.desc,
                          youtubeId: video.youtubeId,
                        })
                      }
                      className="flex justify-between items-center pr-8"
                    >
                      <div className="flex items-center gap-x-2">
                        <Image src={Play} alt="icon" />
                        <p className="font-bold">{video.title}</p>
                      </div>
                      {video.id === videoItem.id && (
                        <div className="bg-[#A3A3A3] py-2 px-3 rounded-lg">
                          <p className="text-white text-xs font-semibold">Sedang dibuka</p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
              <section className="flex flex-col">
                <h1 className="font-bold text-xl">Dokumen Lainnya</h1>
                <div className="flex flex-col gap-y-4 py-4">
                  {dataModuleContents.module_moduleDocuments.map((doc, i) => (
                    <Button
                      key={i}
                      type="button"
                      href={doc.document_file}
                      className="flex items-center gap-x-2"
                    >
                      <Image src={Document} alt="icon" />
                      <p className="font-bold">{doc.title}</p>
                    </Button>
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
    </Fragment>
  );
};
