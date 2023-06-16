import { FC, ReactElement, useState, Fragment } from "react";
import { Button } from "@mknows-frontend-services/components/atoms";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { useQuota, useQuotaData } from "./hooks";
import { CardCS } from "@mknows-frontend-services/components/molecules";

const AlokasiKuota: FC = (): ReactElement => {
  const { getQuotaData } = useQuotaData();
  const [Quota, setQuota] = useState<number>(0);
  const [Estimation, setEstimation] = useState<number>(0);
  const [ProductName, setProductName] = useState<string>("default");
  const [isOpen, setIsOpen] = useState(false);

  const dummyData = [
    {
      feature: "AI Identity Scoring",
    },
    {
      feature: "AI Capability Scoring",
    },
    {
      feature: "AI Character Scoring",
    },
    {
      feature: "AI Credit Scoring",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah1000 = () => {
    setQuota(Quota * 0 + 1000);
    setEstimation(Quota * 10000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah5000 = () => {
    setQuota(Quota * 0 + 5000);
    setEstimation(Quota * 10000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah10000 = () => {
    setQuota(Quota * 0 + 10000);
    setEstimation(Quota * 10000);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleTambah50000 = () => {
    setQuota(Quota * 0 + 50000);
    setEstimation(Quota * 10000);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const formatNumber = (number: number) => {
    return number.toLocaleString();
  };

  // const { data } = useQuota({
  //   date_from: "",
  // });

  return (
    <section className="my-14 lg:mx-0 mx-0 w-full">
      <div className="font-bold text-2xl text-gray-600">Alokasi Kuota</div>
      {/* content */}
      <div className="flex xl:flex-row flex-col gap gap-x-10 py-6">
        {/* content 1 */}
        <div className="flex flex-col">
          <div className="flex flex-col pt-6 pb-3">
            <span className="font-semibold text-base text-gray-700">Nama Departemen</span>
            <div className="flex flex-row w-full space-x-2 py-6">
              <select
                id="category"
                className="shadow-md cursor-pointer px-4 font-normal bg-white text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option defaultValue={""}>Pilih Departemen</option>
                <option value="pm">Pengelolaan Moneter</option>
                <option value="ssk">Surveilans Sistem Keuangan</option>
                <option value="km">Kebijakan Makroprudential</option>
                <option value="ks">Keuangan Syariah</option>
                <option value="pu">Pembangunan UMKM</option>
                <option value="pk">Perlindungan Konsumen</option>
              </select>
              <select
                id="category"
                className="shadow-md cursor-pointer px-4 font-normal bg-white text-neutral-700 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full h-[40px] "
              >
                <option defaultValue={""}>Pilih Cabang</option>
                <option value="kcp-bintaro">BCA KCP Bintaro Utama</option>
                <option value="kcp-bintaro-3">BCA KCP Bintaro Sektor 3</option>
                <option value="kcp-rempoa">BCA Kantor Kas Rempoa</option>
                <option value="kcp-radal">BCA KCP Radio Dalam</option>
                <option value="kcp-cirendeu">BCA KCP Cirendeu</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap gap-y-2">
            <span className="font-semibold text-base text-gray-700">Jenis Scoring</span>
            <span className="font-semibold text-sm text-neutral-400">Pilih satu jenis</span>
          </div>
          <div className="w-full justify-center">
            <div className="grid lg:gap-5 md:gap-4 md:grid-cols-2 grid-cols-1 gap-1 my-3">
              {dummyData.map((item, index) => {
                return (
                  <CardCS
                    className="hover:cursor-pointer w-full h-[107px] relative shadow-md hover:shadow-xl py-8 px-4 items-center"
                    key={index}
                    onClick={() => setProductName(item.feature)}
                  >
                    <div className="flex flex-row w-full h-full space-x-[10px]">
                      <div>
                        <img src={getQuotaData[index]} alt="icon" className="w-16 hidden md:flex" />
                      </div>

                      <div className="flex flex-col w-full h-full items-center space-y-1">
                        <p className="text-sm font-semibold">{item.feature}</p>
                      </div>
                    </div>
                  </CardCS>
                );
              })}
            </div>
            <div className="flex flex-col pt-6 pb-3 gap gap-y-2">
              <span className="font-semibold text-base text-gray-700">Jumlah Kuota</span>
              <span className="font-semibold text-sm text-neutral-400">Pilih Jumlah Kuota</span>
            </div>
            <div className="grid md:gap-2 lg:grid-cols-4 grid-cols-2 gap-1 mt-5 font-bold">
              <span
                onClick={handleTambah1000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-neutral-300 cursor-pointer hover:text-white hover:bg-primary-base hover:border-0"
              >
                1.000
              </span>
              <span
                onClick={handleTambah5000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-neutral-300 cursor-pointer hover:text-white hover:bg-primary-base hover:border-0"
              >
                5.000
              </span>
              <span
                onClick={handleTambah10000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-neutral-300 cursor-pointer hover:text-white hover:bg-primary-base hover:border-0"
              >
                10.000
              </span>
              <span
                onClick={handleTambah50000}
                className="flex justify-center border-[1px] rounded-md px-6 py-2 border-neutral-300 cursor-pointer hover:text-white hover:bg-primary-base hover:border-0"
              >
                50.000
              </span>
            </div>
            <div className="flex justify-end w-full text-primary-500 font-semibold text-xs mt-2">
              1 Token Rp 10.000,-
            </div>
          </div>
        </div>

        {/* content 2 */}
        {ProductName === "default" ? (
          <div className="lg:w-[60%] w-full lg:my-0 my-14 mr-8 shadow-lg min-h-[200px]">
            <div className="flex flex-col gap-y-5 h-full justify-center lg:my-0 my-20 px-10 items-center">
              <img src="/assets/quota/cursor-loading.webp" alt="loading..." />
              <span className="font-semibold text-base text-black">
                Silahkan pilih jenis produk terlebih dahulu
              </span>
            </div>
          </div>
        ) : (
          <div className="lg:w-[60%] w-full lg:my-0 my-14 mr-8 shadow-lg">
            <div className="flex flex-col">
              <span className="pt-7 w-full flex justify-center font-bold text-lg">
                Request Summary
              </span>
              <div className="px-8 py-11 flex justify-between flex-col">
                <div className="px-3 py-2 flex items-center flex-row rounded-[4px] lg:justify-between justify-normal bg-warning-100">
                  <div className="w-full flex flex-row items-center gap gap-x-3">
                    <img
                      src="/assets/quota/phone-information.webp"
                      alt="information"
                      className="w-fit h-fit"
                    />
                    <span className="w-full lg:text-lg text-sm font-semibold">{ProductName}</span>
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
                <div className="font-bold flex justify-between items-center mt-11 border-t-[1px] border-neutral-400 pt-4">
                  <span className="text-primary-600">Total Request</span>
                  <span className="text-black">{Quota}</span>
                </div>
                <div className="font-bold flex justify-between items-center pt-2">
                  <span className="text-primary-600">Total bayar</span>
                  <span className="text-black">Rp. {formatNumber(Estimation)}</span>
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
                    className="bg-success-100 rounded-full w-[34px] h-[34px] flex items-center justify-center"
                  >
                    <img src="/assets/Vceort.webp" alt="check" />
                  </Dialog.Title>
                  <Dialog.Title>
                    <span className="font-semibold text-base">Permintaan Kuota Terkirim</span>
                  </Dialog.Title>
                  <div>
                    <p className="text-sm text-gray-500">
                      Proses permintaan kuota Anda sedang berlangsung. Untuk memantau status
                      pembaruan kuota, silakan masuk ke bagian "Riwayat Kuota".
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
