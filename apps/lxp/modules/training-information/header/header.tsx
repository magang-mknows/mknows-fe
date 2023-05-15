import { Button } from '@mknows-frontend-services/components/atoms';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { IoAlertCircle } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { TrainingConfirmPopup } from './store';
import { Modal } from '@mknows-frontend-services/components/molecules';

export const TrainingInformationHeader: FC = (): ReactElement => {
  const [getConfirmPopup, setConfirmPopup] =
    useRecoilState(TrainingConfirmPopup);

  return (
    <header className="px-8 pb-6 pt-6 md:px-14 lg:px-16 mb-8">
      <h1 className="text-xl text-neutral-800 font-bold mb-6">
        Pengajuan Pelatihan
      </h1>
      <section className="flex flex-wrap gap-y-2 justify-between items-end">
        <main>
          <h1 className="flex gap-4 mb-2 text-sm md:text-base">
            <span className="min-w-[140px] lg:min-w-[200px]">
              Tema Pelatihan
            </span>
            <span>:</span>
            <span> Pelatihan Keterampilan Interpersonal</span>
          </h1>
          <h1 className="flex gap-4 mb-2 text-sm md:text-base">
            <span className="min-w-[140px] lg:min-w-[200px]">Batch</span>
            <span>:</span>
            <span> 1 (Satu)</span>
          </h1>
          <h1 className="flex gap-4 mb-2 text-sm md:text-base">
            <span className="min-w-[140px] lg:min-w-[200px]">Total Poin</span>
            <span>:</span>
            <span> 144 Poin</span>
          </h1>
        </main>
        <aside>
          <Button
            type="button"
            className="!bg-[#3EB449] px-6 !border-none hover:!bg-[#319a3b] disabled:bg-version2-200/70 disabled:border-none  text-neutral-100  hover:border-version2-300 text-sm py-2 w-[180px] font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
            onClick={() => {
              setConfirmPopup(true);
            }}
          >
            <IoMdAdd />
            <h1>Mengajukan</h1>
          </Button>
        </aside>
      </section>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={getConfirmPopup}
        onClose={() => {
          setConfirmPopup(false);
        }}
      >
        <section className="flex w-full h-full flex-col px-10 py-6 bg-neutral-50">
          <header className="flex flex-col gap-2 mb-4 justify-center items-center">
            <IoAlertCircle className="text-3xl text-version3-400" />
            <h1 className="font-bold text-base">Konfirmasi</h1>
          </header>
          <main>
            <div className="w-full grid place-items-center mb-2">
              <section className="flex gap-2 w-fit items-center bg-warning-100/50 px-4 py-2 rounded-md shadow-sm">
                <IoAlertCircle className="text-xl text-warning-500" />
                <h1 className="text-xs text-warning-500">
                  Kamu tidak dapat mengganti pelatihan yang telah dipilih
                </h1>
              </section>
            </div>
            <h1 className="text-sm text-neutral-800 mb-6">
              Kamu akan mengajukan{' '}
              <span className="font-bold">
                Pelatihan Keterampilan Interpersonal
              </span>
            </h1>
            <section className="flex gap-4 flex-wrap md:flex-nowrap">
              <Button
                type="button"
                className="py-2.5 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 w-full text-sm "
                onClick={() => {
                  setConfirmPopup(false);
                }}
              >
                <h1>Batal</h1>
              </Button>
              <Link
                passHref
                href={'/rencana-pelatihan/kontrak-pelatihan/test'}
                className="w-full"
              >
                <Button
                  type="button"
                  className="py-2.5 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 w-full text-sm "
                  onClick={() => {
                    setConfirmPopup(false);
                  }}
                >
                  <h1>Konfrmasi</h1>
                </Button>
              </Link>
            </section>
          </main>
        </section>
      </Modal>
    </header>
  );
};
