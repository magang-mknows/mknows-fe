import { FC, Fragment, ReactElement, useState, Suspense, useEffect } from "react";
import { Dialog, Disclosure, Tab, Transition } from "@headlessui/react";
import { CardCS, DateRangePickerComponent } from "@mknows-frontend-services/components/molecules";
import { useQueryParams } from "../common/hooks";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconArrow,
  IconClose,
  IconFilter,
  Search,
} from "@mknows-frontend-services/components/atoms";
import RequestQuotaTab from "./request-quota";
import RequestHistoryTab from "./request-history";

const RequestQuota: FC = (): ReactElement => {
  const [active, setActive] = useState("permintaan");
  const query = useQueryParams();
  console.log(query.get("tab"));
  const navigate = useNavigate();
  // const [isOption, setOption] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);

  function closeModal() {
    setFilterOpen(false);
  }

  function openModal() {
    setFilterOpen(true);
  }

  useEffect(() => {
    if (query.get("tab") === "permintaan") {
      setActive("permintaan");
    }
    if (query.get("tab") === "riwayat") {
      setActive("riwayat");
    }
  }, []);
  // const handleRangeChange = (data: any) => {
  //   const startDate = new Date(data.startDate).toISOString();
  //   const endDate = new Date(data.endDate).toISOString();
  //   setOption((prev) => ({ ...prev, date_from: startDate, date_to: endDate }));
  // };
  return (
    <Suspense>
      <Tab.Group>
        <section className="w-full flex h-fit relative py-2 justify-center lg:justify-end lg:pr-4">
          <CardCS className="w-full h-fit rounded-lg bg-white">
            <div className="px-10 py-4 flex flex-col w-full">
              <div className="flex flex-col xl:flex-row xl:justify-between justify-center w-full xl:gap-y-0 gap-y-4">
                <Tab.List className="flex flex-row w-fit h-fit gap lg:gap-x-3 md:gap-x-2 text-base font-semibold rounded-lg bg-neutral-100 px-4 py-2">
                  <Tab as={Fragment}>
                    <button>
                      <div
                        className={`inline-block p-2 ${
                          active === "permintaan" ? "text-neutral-800 bg-white rounded-lg" : ""
                        }       text-neutral-400 text-xs md:text-base px-4 py-2`}
                        aria-current="page"
                        onClick={() => {
                          navigate("/admin/quota-request?tab=permintaan", { replace: true });
                          setActive("permintaan");
                        }}
                      >
                        Permintaan Kuota
                      </div>
                    </button>
                  </Tab>
                  <Tab as={Fragment}>
                    <button>
                      <div
                        className={`inline-block p-2 ${
                          active === "riwayat" ? "text-neutral-800 bg-white rounded-lg" : ""
                        }       text-neutral-400 text-xs md:text-base px-4 py-2`}
                        aria-current="page"
                        onClick={() => {
                          navigate("/admin/quota-request?tab=riwayat", { replace: true });
                          setActive("riwayat");
                        }}
                      >
                        Riwayat Permintaan Kuota
                      </div>
                    </button>
                  </Tab>
                </Tab.List>
                <div className="flex flex-row items-center gap-x-3">
                  <DateRangePickerComponent
                    onRangeChange={() => <>belum bang</>}
                    width="xl:w-[205px] w-[200px]"
                  />
                  <div
                    onClick={openModal}
                    className="cursor-pointer flex items-center flex-row gap-x-3 border-2 border-neutral-300 rounded-md px-4 py-2 text-neutral-800 "
                  >
                    <IconFilter />
                    <span className="font-semibold text-sm">Filter</span>
                  </div>
                  <div className="xl:w-[200px] w-full">
                    <Search value="" placeholder="Search NIK & Nama" />
                  </div>
                </div>
              </div>
              {/* content */}
              <Tab.Panels>
                <Suspense fallback="loading ...">
                  {active === "permintaan" && <RequestQuotaTab />}
                </Suspense>
                <Suspense fallback="loading ...">
                  {active === "riwayat" && <RequestHistoryTab />}
                </Suspense>
              </Tab.Panels>
            </div>

            {/* Modal Filter */}
            <Transition appear show={isFilterOpen} as={Fragment}>
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
                      <Dialog.Panel className="space-y-[9px] w-full max-w-[312px] transform overflow-hidden rounded-[4px] bg-white py-3 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title className=" border-neutral-400 flex flex-col items-center">
                          <div className="flex w-full justify-end px-3">
                            <div onClick={closeModal} className="hover:cursor-pointer ">
                              <IconClose />
                            </div>
                          </div>
                          <div className="flex flex-row w-full justify-between pt-3 px-9">
                            <div className="font-bold text-base text-black">Filters</div>
                            <div className="text-secondary-blue-400 font-semibold text-sm">
                              Clear All
                            </div>
                          </div>
                        </Dialog.Title>
                        <Disclosure>
                          {({ open }) => (
                            <div className="mx-9">
                              <Disclosure.Button className="pt-2 pb-3 border-b-2 broder-neutral-200 flex w-full justify-between">
                                <span>Jenis Produk</span>
                                <div
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 flex items-center p-1`}
                                >
                                  <IconArrow />
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel className=" pt-4 pb-2 text-xs">
                                <ul className="w-full space-y-3">
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">AI Identitiy Scoring</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">AI Identitiy Scoring</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">AI Identitiy Scoring</label>
                                    </div>
                                  </li>
                                </ul>
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                        <Disclosure>
                          {({ open }) => (
                            <div className="mx-9">
                              <Disclosure.Button className=" pb-3 border-b-2 broder-neutral-200 flex w-full justify-between">
                                <span>Status Pembayaran</span>
                                <div
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 flex items-center p-1`}
                                >
                                  <IconArrow />
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel className=" pt-4 pb-2 text-xs">
                                <ul className="w-full space-y-3">
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">Menunggu</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">Selesai</label>
                                    </div>
                                  </li>
                                </ul>
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                        <Disclosure>
                          {({ open }) => (
                            <div className="mx-9">
                              <Disclosure.Button className=" pb-3 border-b-2 broder-neutral-200 flex w-full justify-between">
                                <span>Jumlah Kuota</span>
                                <div
                                  className={`${
                                    open ? "rotate-180 transform" : ""
                                  } h-5 w-5 flex items-center p-1`}
                                >
                                  <IconArrow />
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel className=" pt-4 pb-2 text-xs">
                                <ul className="w-full space-y-3">
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">1.000</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">5.000</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">10.000</label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="flex gap-x-2 items-center">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="w-6 h-6  text-primary-400 border-1 bg-primary-400 border-primary-400 "
                                      />
                                      <label className="w-full">50.000</label>
                                    </div>
                                  </li>
                                </ul>
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                        <div className="w-full flex justify-center pt-5">
                          <Button
                            onClick={closeModal}
                            type="submit"
                            className="bg-primary-400 text-white rounded-md px-8 py-[6px]"
                          >
                            Submit
                          </Button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </CardCS>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default RequestQuota;
