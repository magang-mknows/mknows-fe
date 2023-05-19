import { Button } from '@mknows-frontend-services/components/atoms';
import { FC, ReactElement, useState, Fragment } from 'react';
import Card from '../../components/molecules/card';
import { useRequestData } from '../request/hooks';
import { Dialog, Transition } from '@headlessui/react';

import cursorLoading from '/assets/quota/cursor-loading.webp';

const AlokasiKuota: FC = (): ReactElement => {
  const { getRequestData } = useRequestData();
  const [Quota, setQuota] = useState<number>(0);
  const [ProductName, setProductName] = useState<string>('default');
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah1000 = () => {
    setQuota(Quota * 0 + 1000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah5000 = () => {
    setQuota(Quota * 0 + 5000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah10000 = () => {
    setQuota(Quota * 0 + 10000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah50000 = () => {
    setQuota(Quota * 0 + 50000);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="my-14 lg:mx-0 mx-0 w-full">
      <div className="font-bold text-2xl text-[#444444]">Alokasi Kuota</div>
      {/* content */}
      <div className="flex xl:flex-row flex-col gap gap-x-10 py-6">
        {/* content 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col gap gap-y-2">
            <span className="font-semibold text-base text-[#262626]">
              Jenis Produk
            </span>
            <span className="font-semibold text-sm text-neutral-400">
              Pilih satu jenis
            </span>
          </div>
          <div className="w-fit justify-center">
            <div className="grid lg:gap-5 md:gap-4 md:grid-cols-2 grid-cols-1 gap-1 my-3">
              {getRequestData.slice(0, 4).map((item, index) => {
                return (
                  <Card
                    className="hover:cursor-pointer w-full h-[107px] relative shadow-md hover:shadow-xl py-8 px-4"
                    key={index}
                    onClick={() => setProductName(item.name)}
                  >
                    <div className="flex flex-row w-full h-full space-x-[10px]">
                      <div>
                        <img
                          src={item.icon}
                          alt="icon"
                          className="w-16 hidden md:flex"
                        />
                      </div>

                      <div className="flex-col w-full space-y-1">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="text-neutral-400 font-normal text-xs">
                          Data Masuk {item.totalData}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="flex flex-col pt-6 pb-3 gap gap-y-2">
              <span className="font-semibold text-base text-[#262626]">
                Jumlah Kuota
              </span>
              <span className="font-semibold text-sm text-neutral-400">
                Pilih Jumlah Kuota
              </span>
            </div>
            <div className="grid md:gap-2 lg:grid-cols-4 grid-cols-2 gap-1 mt-5 font-bold">
              <span
                onClick={handleTambah1000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                1.000
              </span>
              <span
                onClick={handleTambah5000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                5.000
              </span>
              <span
                onClick={handleTambah10000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                10.000
              </span>
              <span
                onClick={handleTambah50000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-[#D4D4D4] cursor-pointer hover:text-[#4AC1A2] hover:border-[#4AC1A2]"
              >
                50.000
              </span>
            </div>
          </div>
        </div>

        {/* content 2 */}
        {ProductName === 'default' ? (
          <div className="lg:w-[60%] w-full lg:my-0 my-14 mr-8 shadow-lg">
            <div className="flex flex-col gap-y-5 h-full justify-center lg:my-0 my-20 px-10 items-center">
              <img src={cursorLoading} alt="loading..." />
              <span className="font-semibold text-base text-[#000000]">
                Silahkan pilih jenis produk terlebih dahulu
              </span>
            </div>
          </div>
        ) : (
          <div className="lg:w-[60%] w-full lg:my-0 my-14 mr-8 shadow-lg">
            <div className="flex flex-col">
              <span className="lg:px-28 px-10 pt-7 w-full justify-center font-bold text-lg">
                Request Summary
              </span>
              <div className="px-8 py-11">
                <div className="px-3 py-2 flex items-center flex-row rounded-[4px] lg:justify-between justify-normal bg-warning-100">
                  <div className="w-full flex flex-row items-center gap gap-x-3">
                    <img
                      src="/assets/mdi_mobile-phone-information.webp"
                      alt="information"
                      className="w-fit h-fit"
                    />
                    <span className="w-full lg:text-lg text-sm font-semibold">
                      {ProductName}
                    </span>
                    <span className="flex items-center md:w-[35%] w-full justify-end text-neutral-400 lg:text-sm text-xs font-normal">
                      x {Quota}
                    </span>
                  </div>
                </div>
                <div className="lg:text-sm text-xs font-normal flex flex-col px-11 my-2 gap gap-y-2 justify-normal">
                  <span>AI Document Verification</span>
                  <span>AI Location & Movement</span>
                  <span>AI Digital FootPrint</span>
                </div>
                <div className="font-bold flex justify-between items-center mt-11 border-t-[1px] border-[#A3A3A3] pt-4">
                  <span className="text-primary-600">Total Request</span>
                  <span className="text-[#000000]">{Quota}</span>
                </div>
                <div className="pt-20 w-full flex justify-center">
                  <Button
                    type="button"
                    className="py-3 px-7 bg-primary-400 text-white rounded-[4px] font-bold"
                    onClick={openModal}
                  >
                    Confirm Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="space-y-[9px] w-full max-w-[464px] transform overflow-hidden rounded-[4px] bg-white px-9 py-7 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="bg-[#EAFBD7] rounded-full w-[34px] h-[34px] flex items-center justify-center"
                  >
                    <img src="/assets/Vceort.webp" alt="check" />
                  </Dialog.Title>
                  <Dialog.Title>
                    <span className="font-semibold text-base">
                      Permintaan Kuota Terkirim
                    </span>
                  </Dialog.Title>
                  <div>
                    <p className="text-sm text-gray-500">
                      Proses permintaan kuota Anda sedang berlangsung. Untuk
                      memantau status pembaruan kuota, silakan masuk ke bagian
                      "Riwayat Kuota".
                    </p>
                  </div>

                  <div className="flex flex-row w-full gap gap-x-2 pt-3">
                    <button
                      type="button"
                      className="text-success-600 border-success-600 inline-flex justify-center items-center rounded-md border px-[14px] py-2 text-xs font-medium w-full"
                      onClick={closeModal}
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      className="inline-flex bg-success-600 text-white justify-center items-center rounded-md border border-transparent px-[14px] py-2 text-xs font-medium w-full"
                      onClick={closeModal}
                    >
                      Lihat Riwayat Alokasi Kuota
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default AlokasiKuota;
