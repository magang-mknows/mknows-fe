import { FC, ReactElement, useState } from 'react';
import Image from 'next/image';
import circle from '../assets/circle.svg';
import edit from '../assets/edit.svg';
import { MdDelete } from 'react-icons/md';
import { RiPencilFill } from 'react-icons/ri';
import more from '../assets/more.svg';
import { Modal } from '@mknows-frontend-services/components/molecules';
import { cardAuthor } from '../type';
import { usePopupDeleteDiscussion, usePopupEditDiscussion } from '../hooks';
import { LikeComment } from './likeComment';

export const CardComment: FC<cardAuthor> = ({
  title,
  avatar,
  time,
  content,
  author,
  role,
  styleCard,
}): ReactElement => {
  const [open, setOpen] = useState(false);
  const { setPopupEditStatus, getPopupEditStatus } = usePopupEditDiscussion();
  const { setPopupDeleteStatus, getPopupDeleteStatus } =
    usePopupDeleteDiscussion();
  return (
    <>
      <div
        className={`card px-10 py-8 bg-[#FFF] rounded-[8px] ml-14 mb-4 mt-8 relative  ${styleCard}`}
      >
        <div className="flex flex-row items-center justify-between gap-5 profile">
          <div className="flex flex-row gap-4 kiri">
            <Image src={avatar} alt={'img-profile'} />
            <div className="">
              <h1 className="text-[##171717] font-[600] text-[14px]">
                Komentar: {title}
              </h1>
              <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1 ">
                oleh{' '}
                <span className="text-[#2D9A41] dark:text-yellow-500">
                  {author} <span>({role})</span>
                </span>
                <Image src={circle} alt={'circle'} />
                <span className="text-[#737373]">{time}</span>
              </p>
            </div>
          </div>
          <button
            className="kanan"
            onClick={() => setOpen(open === true ? false : true)}
          >
            <Image src={more} alt={'more'} />
          </button>
        </div>
        {open && (
          <div className="absolute flex justify-end w-full -ml-20 min-w-max ">
            <div className=" bg-white px-6 py-4 rounded-[8px] flex flex-col gap-2 text-[#171717] font-[400] text-[16px]">
              <button
                className="flex flex-row justify-start gap-1 mb-2"
                onClick={() => setPopupEditStatus(true)}
              >
                <Image src={edit} alt={'edit'} />
                <p>Edit</p>
              </button>
              <button
                className="flex flex-row gap-1 ml-1"
                onClick={() => setPopupDeleteStatus(true)}
              >
                <MdDelete className="text-[#EE2D24] text-[20px]" />
                <p>Delete</p>
              </button>
            </div>
          </div>
        )}

        <p className="desc mt-8 text-[#171717] text-[14px] font-[400] ">
          {content}
        </p>
        <LikeComment />
      </div>

      <div className="edit-popup">
        <Modal
          lookup={getPopupEditStatus}
          onClose={() => setPopupEditStatus(false)}
          title={'Edit Komentar'}
        >
          <h1 className="flex justify-start w-full mb-4">Ubah Komentar</h1>
          <textarea className="h-[144px] w-[467px] outline outline-[#D4D4D4] rounded-[8px]"></textarea>
          <h5 className="text-[#A3A3A3] text-[12px] font-[500] flex justify-start mt-3 w-full">
            Maks. 1000 karater
          </h5>
          <div className="flex justify-end w-full mt-3 ">
            <button className="flex items-center rounded-[8px] bg-[#3EB449] gap-[8px] px-6 py-2">
              <>
                <RiPencilFill className="text-white text-[20px]" />
              </>
              <>
                <p className="text-white text-[14px] font-[400]">Ubah</p>
              </>
            </button>
          </div>
        </Modal>
      </div>
      <div className="delete-popup">
        <Modal
          // icon={deleteICon}
          lookup={getPopupDeleteStatus}
          onClose={() => setPopupDeleteStatus(false)}
          title={'Konfirmasi'}
          // description={"Apakah anda ingin menghapus postingan ini?"}
        >
          <div className="flex flex-row gap-6 mt-4">
            <button className="bg-white outline outline-[#106FA4] h-[46px] w-[236px] text-[#106FA4] font-[600] text-[16px] rounded-[8px]">
              Ya, Hapus
            </button>
            <button className="bg-[#106FA4] h-[46px] w-[236px] text-white font-[600] text-[16px] rounded-[8px]">
              Tidak
            </button>
          </div>
        </Modal>
      </div>
    </>
  );
};
