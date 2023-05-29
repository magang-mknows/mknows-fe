import Image from "next/image";
import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { showDetailSertificate } from "../../store";
import { Modal } from "@mknows-frontend-services/components/molecules";
import { Button } from "@mknows-frontend-services/components/atoms";
import { IoMdCloudDownload } from "react-icons/io";

export const Sertificate: FC = (): ReactElement => {
  const [isModalOpen, setModalOpen] = useRecoilState(showDetailSertificate);
  return (
    <main className="flex max-h-[320px] min-h-[320px]  px-4 py-3 bg-neutral-50 rounded-md shadow-sm overflow-hidden flex-col items-center justify-start">
      <Image
        src={
          "https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682825462/sub_thumbnail_f7b760be-5193-4bd4-aaa6-b57322bdf347.png"
        }
        alt="sertificate-view"
        height={100}
        width={100}
        loading="eager"
        className="h-full bg-neutral-200 w-full mb-2 rounded-md cursor-pointer"
        onClick={() => setModalOpen(true)}
      />
      <p className="text-neutral-900 w-full text-sm font-bold md:text-base">
        Pelatihan Keterampilan Manajerial
      </p>
      <p className="text-neutral-600 text-xs md:text-sm  w-full">Pelatihan</p>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <section className="flex flex-col gap-2">
          <figure className="max-h-[320px] min-h-[320px] bg-primary-400 object-cover bg-cover">
            <Image
              src={
                "https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682825462/sub_thumbnail_f7b760be-5193-4bd4-aaa6-b57322bdf347.png"
              }
              alt="sertificate-view"
              height={100}
              width={100}
              loading="lazy"
              className="max-h-[320px] min-h-[320px] bg-primary-300 w-[500px] mb-2 rounded-md"
            />
          </figure>
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              onClick={() => {
                setModalOpen(false);
              }}
              className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 w-full text-sm py-4"
            >
              <IoMdCloudDownload className="text-xl" />
              <h1>Unduh</h1>
            </Button>
            <Button
              type="button"
              onClick={() => {
                setModalOpen(false);
              }}
              className="bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400  font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 w-full text-sm py-4"
            >
              <h1>Kembali</h1>
            </Button>
          </div>
        </section>
      </Modal>
    </main>
  );
};
