import { FC, ReactElement, useState, useEffect } from "react";
import { IConDelete, IconBack } from "@mknows-frontend-services/components/atoms";
import { useDataProcess, useRequestData } from "../hooks";
import { useFilterAction } from "../../quota/hooks";
import { useDebounce } from "../../common/hooks";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mknows-frontend-services/components/atoms";
import { Dialog } from "@headlessui/react";
import { Search } from "@mknows-frontend-services/components/atoms";
import Table from "./table";
import { CardCS } from "@mknows-frontend-services/components/molecules";
import close from "/assets/request-page/close.webp";
import alert from "/assets/alert-circle.webp";

const CheckResult: FC = (): ReactElement => {
  const { getRequestData } = useRequestData();
  const { data } = useDataProcess();
  const [isOpen, setisOpen] = useState(false);
  const [isOpenDelete, setisOpenDelete] = useState(false);
  const [isOpenAlert, setisOpenAlert] = useState(false);

  const [option, setOption] = useState({
    search: "",
    feature: "",
    per_page: "",
    page: "",
  });

  const [deb, setDeb] = useState("");

  const { setFilterAction } = useFilterAction();

  useEffect(() => {
    setFilterAction(option);
  }, [option, setFilterAction]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, search: deb }));
    },
    [deb],
    400,
  );
  return (
    <section className="w-full flex h-fit relative pt-2 overflow-hidden justify-center lg:justify-end lg:pr-4">
      <CardCS className="w-full h-fit rounded-lg bg-white">
        <div className="px-8 py-4 flex flex-col w-full ">
          <div className="flex flex-row gap gap-x-5 items-center border-b-[1px] border-solid w-full h-fit py-7 text-primary-base font-bold text-base">
            <Link to={"/dashboard/request"}>
              <div className="flex gap-3 items-center">
                <div className="pl-2">
                  <IconBack />
                </div>
                <div className="hover:opacity-[50%]">Kembali</div>
              </div>
            </Link>
          </div>
          <div className="flex flex-col pl-8">
            <span className="pt-6 w-full font-semibold text-lg">Kuota yang digunakan</span>
            <div className="pt-7 grid grid-cols-4 gap-x-4 h-fit border-b-[1px] border-solid pb-10">
              {data?.data.slice(0, 4).map((item, index) => {
                return (
                  <CardCS className="shadow-md min-h-[103px] max-h-[103px]" key={index}>
                    <div className="flex flex-row py-6 px-5 w-full gap-x-4">
                      <div className="">
                        <img
                          src={getRequestData[index]}
                          alt="icon"
                          className="w-fit max-w-[45px] h-fit hidden md:flex"
                        />
                      </div>
                      <div className="flex flex-col w-full text-sm">
                        <div className="font-semibold  text-[#09162E]">{item.feature}</div>
                        <div className="text-[#737373] ">(10/100)</div>
                      </div>
                    </div>
                  </CardCS>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col  border-b mx-8 py-6 space-y-6">
            <span className="font-semibold text-lg">Fitur yang telah dipilih</span>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-6">
              {data?.data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-add2 rounded-[20px] text-sm font-semibold flex flex-row items-center justify-between gap-x-4 px-4 py-2"
                  >
                    <span>{item.feature}</span>
                    <button
                      onClick={() => setisOpenDelete(true)}
                      className="flex justify-center items-center w-4"
                    >
                      <img src={close} alt="close-button" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col  border-b mx-8 py-6 space-y-6">
            <span className="font-semibold text-lg">Fitur yang telah dipilih</span>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-6">
              {data?.data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-add2 rounded-[20px] text-sm font-semibold flex flex-row items-center justify-between gap-x-4 px-4 py-2"
                  >
                    <span>{item.name}</span>
                    <button
                      onClick={() => setisOpenDelete(true)}
                      className="flex justify-center items-center w-4"
                    >
                      <img src={close} alt="close-button" />
                    </button>
                  </div>
                );
              })}
              <div
                onClick={() => setisOpen(true)}
                className="bg-add2 cursor-pointer rounded-[20px] text-sm font-semibold flex flex-row items-center justify-between gap-x-4 px-4 py-2"
              >
                <span>+20</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-14">
            <Button
              type="button"
              className="w-1/4 h-10 bg-primary-400 text-white rounded-[4px] font-bold"
              onClick={() => setisOpenAlert(true)}
            >
              Cek Hasil
            </Button>
          </div>
        </div>
      </CardCS>

      {/* Modal Alert */}
      <Dialog
        open={isOpenAlert}
        onClose={() => setisOpenAlert(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <CardCS className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-[#F9B7B4] rounded-full w-fit p-1">
                  <img src={alert} alt="alert-icon" />
                </div>
                <p className="font-semibold text-gray-600">
                  Tidak Dapat Melanjutkan Proses Permintaan
                </p>
                <p className="font-base text-xs text-neutral-400 pb-2">
                  Maaf, saat ini kuota anda tidak mencukupi. Silahkan isi kuota permintaan terlebih
                  dahulu
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <Button
                    type="button"
                    className="w-full text-sm py-1 border-full border-[#CD261E] text-[#CD261E] font-semibold border-solid border-2 rounded-md"
                    onClick={() => setisOpenDelete(false)}
                  >
                    Kembali
                  </Button>
                  <Button
                    type="button"
                    className="w-full text-sm py-1 bg-[#CD261E] text-white rounded-md"
                  >
                    <NavLink to={"/dashboard/quota"}>Isi Kuota</NavLink>
                  </Button>
                </div>
              </div>
            </CardCS>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>

      {/* Modal Delete */}
      <Dialog
        open={isOpenDelete}
        onClose={() => setisOpenDelete(false)}
        className="absolute lg:left-[45%] md:left-[30%] top-[40%] left-[20%]"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <CardCS className="hover:cursor-pointer md:w-[348px] w-[300px]  h-fit shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col gap gap-y-2">
                <div className="bg-[#D0E6F5] rounded-full w-fit p-1">
                  <IConDelete />
                </div>
                <p className="font-semibold text-gray-600">Hapus Data</p>
                <p className="font-base text-xs text-neutral-400 pb-2">
                  Apakah anda setuju untuk menghapus data ini ?
                </p>
                <div className="flex flex-row w-full gap gap-x-3">
                  <Button
                    type="button"
                    className="w-full text-sm py-1 border-full border-secondary-blue-500 text-secondary-blue-500 font-semibold border-solid border-2 rounded-md"
                    onClick={() => setisOpenDelete(false)}
                  >
                    Tidak
                  </Button>
                  <Button
                    type="button"
                    className="w-full text-sm py-1 bg-secondary-blue-500 text-white rounded-md"
                  >
                    Iya
                  </Button>
                </div>
              </div>
            </CardCS>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>

      {/* MODAL */}
      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute md:left-[25%] top-[0%] bottom-[10%] left-[20%] w-[60%] rounded-lg"
      >
        <Dialog.Panel>
          <Dialog.Title>
            <CardCS className="hover:cursor-pointer h-screen shadow-2xl py-4 px-6">
              <div className="w-full flex flex-col">
                <div className="w-full px-6 py-5 border-b">
                  <span className="pb-4 pt-2 pl-9 font-semibold text-lg">
                    User yang telah dipilih
                  </span>
                </div>
                <div className="pt-5 w-full flex justify-end">
                  <div>
                    <Search
                      value={deb}
                      onChange={(e) => setDeb(e.target.value)}
                      placeholder="Search NIK, Nama"
                    />
                  </div>
                </div>
                <Table />
              </div>
            </CardCS>
          </Dialog.Title>
        </Dialog.Panel>
      </Dialog>
    </section>
  );
};

export default CheckResult;
