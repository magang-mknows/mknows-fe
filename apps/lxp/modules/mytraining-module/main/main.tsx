import { Card } from "@mknows-frontend-services/components/molecules";
import { useRouter } from "next/router";
import { FC, ReactElement } from "react";
import { HiDocumentText } from "react-icons/hi2";
import { RiVideoFill } from "react-icons/ri";
import { useGetMyWorkModule } from "../hooks";
import { MyTrainingModuleItem, params } from "../type";

export const MtTrainingModuleMain: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: params = {
    subjectID: query.subjectID as string,
    batchID: query.batchID as string,
  };
  const { data } = useGetMyWorkModule(params);
  console.log("tes data", data);
  return (
    <div className="min-h-[100vh] pt-10">
      <div className="mx-8 h-full md:mx-14 lg:mx-16 bg-neutral-50 rounded-md   pb-14">
        <h1 className="text-center pt-10 lg:pb-0 mb-4 pb-5 font-[700] text-[20px]">
          Pelatihan Keterampilan Komunikasi
        </h1>
        <div className="w-full justify-start lg:px-20 px-5 py-2 lg:py-5">
          {data?.data?.map((item: MyTrainingModuleItem, index: number) => {
            return (
              <Card
                hasImage={false}
                className="border-[#E5E5E5] border-2 text-start rounded-lg shadow-sm"
                href="/pelatihanku/modul/video-module/1"
                key={index}
              >
                <div className="flex flex-col p-4">
                  <h1 className="font-bold text-[18px]">
                    Modul {index + 1} <span className="text-gray-500">(Materi {index + 1})</span>
                  </h1>

                  <p className="text-[14px] text-gray-600 py-4">
                    Pertemuan {index + 1} |
                    <span className="text-[#737373]">{item.description}</span>
                  </p>
                  <div className="flex gap-3">
                    <div className=" flex gap-3 text-black px-2 py-2 my-[10px] text-[12px] rounded-[5px]  bg-[#E3FBDA]">
                      <RiVideoFill className="text-xl text-version2-300" />
                      <p>{item.total_videos} video</p>
                    </div>
                    <div className="flex items-center gap-3 text-black px-2 py-2 my-[10px] text-[12px] rounded-[5px]  bg-[#FEF6D0]">
                      <HiDocumentText className="text-xl text-warning-500" />
                      <p>{item.total_documents} Dokumen</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
