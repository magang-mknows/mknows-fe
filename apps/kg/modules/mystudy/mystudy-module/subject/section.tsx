import { FC, ReactElement } from "react";
import Image from "next/image";
import { Card } from "@mknows-frontend-services/components/molecules";
import { TDataSubject } from "../types";
import OrangBingungIcon from "../assets/orang-bingung.svg";

export const SubjectSection: FC<{ dataSubjectProps: Array<TDataSubject> }> = ({
  dataSubjectProps,
}): ReactElement => {
  return (
    <div className="w-[85%] mx-auto">
      <h1 className="w-fit mx-auto font-bold text-2xl">Mata Kuliah</h1>
      <div className="relative grid lg:grid-cols-3 grid-cols-1 gap-y-7 gap-x-9 mt-[30px] pb-40">
        {dataSubjectProps?.length === 0 ? (
          <div className="w-full absolute">
            <div className="w-fit m-auto p-1 lg:p-4 bg-gray-100 dark:bg-gray-600">
              <Image src={OrangBingungIcon} alt="simulasi-null" />
              <h1 className="text-xl font-bold text-center">Tidak Ada Data Mata Kuliah</h1>
            </div>
          </div>
        ) : (
          <>
            {dataSubjectProps?.length > 0 &&
              dataSubjectProps?.map((subject) => {
                const thumbnailImg = subject.thumbnail.includes(".") ? subject.thumbnail : "";
                return (
                  <Card
                    href={`/studi-ku/${subject.name}/${subject.id}`}
                    key={subject.id}
                    className="rounded-lg px-3 shadow-xl"
                    hasImage={true}
                    imgwidth={240}
                    imgheight={240}
                    imgStyle="rounded-lg lg:h-[240px] lg:w-full object-cover mx-auto md:mx-0"
                    src={thumbnailImg}
                    titleStyle={"text-xl font-bold mt-0 text-primary-500"}
                    icon={
                      <div className="flex justify-end gap-2">
                        <div className="text-yellow-500 py-1 px-2 my-3 text-[12px] font-semibold rounded-lg bg-yellow-100">
                          {subject.credit} SKS
                        </div>
                        <div className="text-primary-500 py-1 px-2 my-3 text-[12px] font-semibold rounded-lg bg-primary-100">
                          {subject.session_count} Pertemuan
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col w-full">
                      <p className="text-sm text-neutral-base">{subject.subject_code}</p>
                      <h1 className="text-base font-bold mt-0 text-primary-500 w-full">
                        Matkul {subject.name}
                      </h1>
                      <p className="text-sm text-neutral-base pb-5">{subject.teacher_name}</p>
                      <div className="flex w-full bg-neutral-350 rounded-full h-2.5">
                        <div
                          className="bg-success-500 h-2.5 rounded-full"
                          style={{ width: `${subject.progress_percentage}%` }}
                        />
                      </div>
                    </div>
                    <p className="text-neutral-base text-base pt-[76px] pl-2">
                      {subject.progress_percentage}%
                    </p>
                  </Card>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};
