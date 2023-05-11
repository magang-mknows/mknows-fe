import { FC, ReactElement } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isModalOpen, selectedOption } from './store';
import { Button } from '@mknows-frontend-services/components/atoms';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import DiscussionCard from './post/section';
import { DiscussionPostOption } from './post/option';
import { FaTelegramPlane } from 'react-icons/fa';
import { TiCamera } from 'react-icons/ti';
import { Modal } from '@mknows-frontend-services/components/molecules';
import {
  DeleteConfirmModal,
  PostReportModal,
  PostSpamModal,
} from './post/modal';
import ReportSuccessModal from './post/modal/post-report-success/section';

export const DiscussionContent: FC = (): ReactElement => {
  const [isOptionOpen, setOptionOpen] = useRecoilState(isModalOpen);
  const getSelectedOption = useRecoilValue(selectedOption);

  const dummyComments = [
    {
      hasImage: false,
      text: 'Dalam dunia bisnis, manajemen keuangan adalah kegiatan perencanaan, pengaturan, pengarahan, dan pengendalian keuangan suatu perusahaan. Dengan adanya pengelolaan keuangan secara profesional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.',
      userName: 'Bambang S',
      time: '10 detik',
      countLikes: 10,
      type: 'comment',
    },
    {
      hasImage: true,
      imgSource:
        'https://res.cloudinary.com/dvsqy8n1a/image/upload/v1683630203/sub_thumbnail_c63ea956-d2ae-48bb-851b-64c4ad74e580.png',
      text: 'pengendalian keuangan suatu perusahaan.esional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.',
      userName: 'Surti B',
      time: '10 detik',
      countLikes: 3,
      type: 'comment',
    },
  ];

  return (
    <section className="px-8 py-8 mx-8 my-8 bg-white rounded-md shadow-sm md:mx-14 lg:mx-16 md:px-14 lg:px-16 ">
      <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
        <label
          htmlFor="searchDiscussion"
          className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-neutral-100  text-neutral-500 h-[42px] lg:h-[50px]"
        >
          <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 " />
          <input
            type="text"
            className="w-full px-2 text-xs outline-none bg-neutral-100 text-neutral-700 md:text-sm"
            id="searchDiscussion"
            placeholder="Cari Topik Diskusi"
          />
        </label>
        <section className="w-full md:w-[200px] gap-10 lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
          <Button
            type="button"
            className="relative z-10 flex items-center justify-center w-full gap-2 py-4 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-[#106FA4]-200/70 disabled:border-none bg-[#106FA4] text-neutral-100 hover:opacity-50 hover:border-version2-300"
          >
            <h1>Buat Diskusi</h1>
            <IoMdAddCircleOutline className="text-xl text-neutral-50" />
          </Button>
        </section>
      </section>
      <section className="relative py-4 w-fit">
        {[...Array(2)].map((item, index) => {
          return (
            <DiscussionCard
              key={index}
              type="post"
              hasImage={false}
              countLikes={3}
              time="100 hari"
              userName="Bandi Sukanto"
              text="Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?"
              title="Diskusi Manajemen Keuangan"
              option={
                <DiscussionPostOption
                  id={`test id ${(index + 1) as unknown as string}`}
                />
              }
            >
              <section className="w-full gap-5 mb-6 border-2 rounded-md shadow-sm border-neutral-100">
                <label
                  htmlFor="postComment"
                  className="flex items-center justify-between w-full gap-4 px-3 py-3 rounded-md bg-neutral-100 text-neutral-500 "
                >
                  <input
                    type="text"
                    className="w-full px-2 text-xs bg-transparent outline-none bg-neutral-100 text-neutral-700 md:text-sm"
                    id="postComment"
                    placeholder="Ketikan Balasan Disini"
                  />
                  <section className="flex items-center gap-2 text-lg lg:text-xl">
                    <TiCamera className="text-neutral-600 " />
                    <FaTelegramPlane className="text-version3-500 text-[#106FA4]" />
                  </section>
                </label>
              </section>
              <section>
                <h1 className="mb-6 text-sm font-bold md:mb-8 lg:mb-10 text-[#106FA4]">
                  {dummyComments.length} balasan
                </h1>
                <section>
                  {dummyComments.map((comment, index) => {
                    return (
                      <section
                        key={index}
                        className="pl-6 mb-10 md:pl-8 lg:pl-14"
                      >
                        <DiscussionCard
                          hasImage={comment.hasImage}
                          countLikes={comment.countLikes}
                          time={comment.time}
                          type="comment"
                          userName={comment.userName}
                          text={comment.text}
                          imgSource={comment.imgSource as unknown as string}
                          title={''}
                          option={
                            <DiscussionPostOption
                              id={`test id ${(index + 1) as unknown as string}`}
                            />
                          }
                        ></DiscussionCard>
                      </section>
                    );
                  })}
                </section>
              </section>
            </DiscussionCard>
          );
        })}
      </section>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isOptionOpen}
        onClose={() => setOptionOpen(false)}
      >
        {getSelectedOption === 'report' ? <PostReportModal /> : null}
        {getSelectedOption === 'reportDetail' ? <PostSpamModal /> : null}
        {getSelectedOption === 'reportSuccess' ? <ReportSuccessModal /> : null}
        {getSelectedOption === 'delete' ? <DeleteConfirmModal /> : null}
      </Modal>
    </section>
  );
};
