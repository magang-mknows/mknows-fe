import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxSlider } from 'react-icons/rx';
import dummyCertificate from '../../assets/dummy-certificate.svg';
import download from '../../assets/download.svg';
import ImageNull from '../../../assignment/assets/data-null.svg';
import { usePopupCertificate } from './hooks';
import { useCertficate } from './hooks';
import { certificateTypes } from './type';
import {
  Card,
  PopupModal,
} from '@mknows-frontend-services/components/molecules';
import { useGetAllCertificate } from '../../hook';

export const CertificateSection = (): ReactElement => {
  const { data } = useGetAllCertificate();
  console.log('cek certificate', data?.data);

  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('semua');
  const { setPopupStatus, getPopupStatus } = usePopupCertificate();
  const { getCertificate } = useCertficate();
  return (
    <div className="w-full">
      <div className="flex justify-end  ">
        <button
          className="w-[109px] h-[40px] rounded-[8px] text-center border-[3px] border-[#106FA4] relative "
          onClick={() => setOpen(open == true ? false : true)}
        >
          <div className="my-auto flex justify-center gap-[10px] items-center">
            <p className="text-[#106FA4] text-[14px] dark:text-white">Filter</p>
            <RxSlider className="text-[#106FA4] dark:text-white" />
          </div>
          {open && (
            <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-32 ease-in-out ">
              <div className="w-[160px] h-[114px] rounded-[8px] text-center  overflow-hidden shadow-2xl ">
                <button
                  className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
                  onClick={() => setFilter('semua')}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == 'semua' ? 'bg-[#67A5C8]' : 'bg-[#FFFF]'
                    } absolute left-0 overflow-hidden hover:hover:bg-[#F5F5F5]`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">
                    Semua
                  </p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
                  onClick={() => setFilter('mata-kuliah')}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == 'mata-kuliah' ? 'bg-[#67A5C8]' : 'bg-[#FFFF]'
                    } absolute left-0 overflow-hidden hover:hover:bg-[#F5F5F5]`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">
                    Mata Kuliah
                  </p>
                </button>
                <button
                  className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
                  onClick={() => setFilter('webinar')}
                >
                  <div
                    className={`h-full w-[5px] ${
                      filter == 'webinar' ? 'bg-[#67A5C8]' : 'bg-[#FFFF]'
                    } absolute left-0 overflow-hidden`}
                  ></div>
                  <p className="text-[#262626] text-[14px] my-auto ml-3">
                    Webinar
                  </p>
                </button>
              </div>
            </div>
          )}
        </button>
      </div>

      <div className={'lg:grid grid-cols-12 gap-[36px] relative mt-4'}>
        {filter == 'semua' ? (
          getCertificate.map((item: certificateTypes) => {
            return (
              <div className="lg:col-span-4 w-full h-full " key={item.id}>
                <Card
                  hasImage={true}
                  src={dummyCertificate}
                  className={
                    'container mx-auto w-full h-full  rounded-[8px] p-[12px] bg-white dark:bg-[#08405e] '
                  }
                  onClick={() => setPopupStatus(true)}
                >
                  <div className="w-full mt-[12px]">
                    <h1 className="text-center text-[#171717] text-[18px] font-[500] dark:text-white">
                      {item.name}
                    </h1>
                    <p className="text-center text-[#A3A3A3] dark:text-white text-[16px] font-[500]">
                      {item.type}
                    </p>
                  </div>
                </Card>
                <div className="w-[1000px]">
                  <PopupModal
                    lookup={getPopupStatus}
                    image={dummyCertificate}
                    hasImg
                    onClose={() => setPopupStatus(false)}
                    className={'!py-2'}
                  >
                    <div className="flex md:flex-row flex-col md:gap-3 gap-0 items-center ">
                      <Link href={item.urlDownload}>
                        <button className="w-[230px] h-[56px]  bg-[#106FA4] rounded-[8px] text-white mb-3 md:mb-0">
                          <div className=" flex justify-center gap-3">
                            <div>
                              <Image src={download} alt={'download-icon'} />
                            </div>

                            <div>Unduh</div>
                          </div>
                        </button>
                      </Link>

                      <button
                        className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                        onClick={() => setPopupStatus(false)}
                      >
                        Kembali
                      </button>
                    </div>
                  </PopupModal>
                </div>
              </div>
            );
          })
        ) : getCertificate.filter((item) => item.type.includes(filter))
            .length == 0 ? (
          <div className=" col-span-12 grid place-content-center  ">
            <Image src={ImageNull} alt="image-null" className="w-full" />
          </div>
        ) : (
          getCertificate
            .filter((item: certificateTypes) => item.type.includes(filter))
            .map((item: certificateTypes) => {
              return (
                <div
                  className="lg:col-span-4 w-full h-full mb-10 lg:mb-0 "
                  key={item.id}
                >
                  <Card
                    hasImage={true}
                    src={dummyCertificate}
                    className={
                      'container mx-auto w-full h-full  rounded-[8px] p-[12px] bg-white dark:bg-[#08405e] '
                    }
                    onClick={() => setPopupStatus(true)}
                  >
                    <div className="w-full mt-[12px]">
                      <h1 className="text-center text-[#171717] text-[18px] font-[500] dark:text-white">
                        {item.name}
                      </h1>
                      <p className="text-center text-[#A3A3A3] text-[16px] font-[500] dark:text-white">
                        {item.type}
                      </p>
                    </div>
                  </Card>
                  <div className="w-[1000px]">
                    <PopupModal
                      lookup={getPopupStatus}
                      image={dummyCertificate}
                      hasImg
                      onClose={() => setPopupStatus(false)}
                      className={'!py-2'}
                    >
                      <div className="flex md:flex-row flex-col md:gap-3 gap-0 items-center ">
                        <Link href={item.urlDownload}>
                          <button className="w-[230px] h-[56px]  bg-[#106FA4] rounded-[8px] text-white mb-3 md:mb-0">
                            <div className=" flex justify-center gap-3">
                              <div>
                                <Image src={download} alt={'download-icon'} />
                              </div>

                              <div>Unduh</div>
                            </div>
                          </button>
                        </Link>

                        <button
                          className="w-[230px] h-[56px] border-[#106FA4] border-2 rounded-[8px] text-[#106FA4] "
                          onClick={() => setPopupStatus(false)}
                        >
                          Kembali
                        </button>
                      </div>
                    </PopupModal>
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};
