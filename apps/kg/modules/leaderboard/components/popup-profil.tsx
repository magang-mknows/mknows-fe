import { FC, ReactElement } from 'react';
import { PopupProfilProps } from './type';
import Like from '../assets/like.svg';
import Chat from '../assets/chat.svg';
import Clock from '../assets/clock.svg';
import Circle from '../assets/circle.svg';
import Building from '../assets/building.svg';
import Avatar from '../assets/avatar.svg';
import { Modal } from '@mknows-frontend-services/components/molecules';
import Image from 'next/image';

export const PopupProfil: FC<PopupProfilProps> = ({
  lookup,
  onClose,
  widthModal,
  ...props
}): ReactElement => {
  const data = [
    {
      src: Like,
      title: 'Jumlah like yang didapat',
      desc: 100,
      colorBg: 'bg-[#CDF5FA]',
      colorText: 'text-[#106FA4]',
    },
    {
      src: Chat,
      title: 'Jumlah Diskusi',
      desc: 50.0,
      colorBg: 'bg-[#FEF6D0]',
      colorText: 'text-[#FAB317]',
    },
    {
      src: Clock,
      title: 'IPK',
      desc: '4.00',
      colorBg: 'bg-[#E3FBDA]',
      colorText: 'text-[#3EB449]',
    },
    {
      src: Building,
      title: 'Sertifikat',
      desc: '10.000',
      colorBg: 'bg-[#FEDBD7]',
      colorText: 'text-[#ED3768]',
    },
  ];

  return (
    <Modal
      lookup={lookup as boolean}
      withClose={true}
      widthModal={widthModal}
      onClose={onClose}
    >
      <div>
        <h1 className="mb-5 text-[#737373] font-[500] text-[18px]">
          Rank{' '}
          <span className="text-[#106FA4] font-[600] text-[28px]">
            {props.subjectCount}
          </span>{' '}
          Global
        </h1>
        <div className="flex sm:flex-row flex-col outline sm:justify-between justify-start outline-[#E5E5E5] bg-[#FAFAFA] rounded-[8px] md:px-10 px-0 h-[125px] w-full items-center">
          <div className="flex items-center sm:gap-7 gap-4 sm:-mt-3">
            <Image src={Avatar} alt={'avatar'} className="w-24 h-24 mt-4" />
            <div className="sm:mt-0 -mt-5">
              <p className="text-[#171717] font-[600] sm:text-[24px] text-[20px] text-left">
                {props.student_name}
              </p>
              <div className="flex flex-row text-[#737373] sm:text-[20px] text-[16px] font-[500] gap-2">
                <p>Teknik</p>
                <Image src={Circle} alt={'circle'} />
                <p>Semester 1</p>
              </div>
            </div>
          </div>
          <div className="flex item-center sm:ml-0 ml-8 sm:mt-0 -mt-8">
            <button className="bg-[#FAB317] text-white sm:text-[16px] text-[14px] font-[600] rounded-[8px] px-2 py-1 ">
              {props.averageScore} Poin
            </button>
          </div>
        </div>
        <div className="content w-full mt-5">
          <div className="flex flex-row w-full justify-around flex-wrap gap-5">
            {data.map((items, i) => (
              <div
                key={i}
                className={`px-3 py-3 ${items.colorBg}  rounded-[8px] lg:w-[340px] w-full h-[101px] flex flex-row items-center gap-3 `}
              >
                <Image src={items.src} alt={'like'} className="w-18" />
                <div
                  className={`lg:text-[16px] text-[14px] font-[500] text-left ${items.colorText}`}
                >
                  <p>{items.title}</p>
                  <p className="lg:text-[24px] text-[22px]">{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="mt-5 mb-5 rounded-[8px] bg-[#106FA4] text-white text-[16px] font-[600] w-full h-[56px]">
          Lihat Profile
        </button>
      </div>
    </Modal>
  );
};

export default PopupProfil;
