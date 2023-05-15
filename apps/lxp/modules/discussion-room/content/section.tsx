import { FC, ReactElement } from 'react';
import { useRecoilState } from 'recoil';
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
  PostCreateEditModal,
} from './post/modal';
import ReportSuccessModal from './post/modal/post-report-success/section';

export const DiscussionContent: FC = (): ReactElement => {
  const [isOptionOpen, setOptionOpen] = useRecoilState(isModalOpen);
  const [getSelectedOption, setSelectedOption] = useRecoilState(selectedOption);

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
    <section className="bg-neutral-50 rounded-md shadow-sm my-8 mx-8 md:mx-14 lg:mx-16 py-8 px-8 md:px-14 lg:px-16 ">
      <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
        <label
          htmlFor="searchDiscussion"
          className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-neutral-100  text-neutral-500 h-[42px] lg:h-[50px]"
        >
          <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 " />
          <input
            type="text"
            className="px-2 text-xs bg-neutral-100 w-full outline-none text-neutral-700  md:text-sm"
            id="searchDiscussion"
            placeholder="Cari Topik Diskusi"
          />
        </label>
        <section className="w-full md:w-[200px] gap-10 lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
          <Button
            type="button"
            onClick={() => {
              setOptionOpen(true);
              setSelectedOption('create');
            }}
            className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 w-full text-sm py-4 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
          >
            <h1>Buat Diskusi</h1>
            <IoMdAddCircleOutline className="text-xl text-neutral-50" />
          </Button>
        </section>
      </section>
      <section className="py-4 relative w-fit">
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
              <section className="w-full border-2 rounded-md border-neutral-100  shadow-sm gap-5 mb-6">
                <label
                  htmlFor="postComment"
                  className="flex justify-between py-3 px-3 w-full gap-4 items-center rounded-md   bg-neutral-100 text-neutral-500 "
                >
                  <input
                    type="text"
                    className="  bg-neutral-100 w-full outline-none text-neutral-700 bg-transparent md:text-sm text-xs px-2"
                    id="postComment"
                    placeholder="Ketikan Balasan Disini"
                  />
                  <section className="flex gap-2 items-center text-lg lg:text-xl">
                    <TiCamera className="text-neutral-600 " />
                    <FaTelegramPlane className="text-version3-500  " />
                  </section>
                </label>
              </section>
              <section>
                <h1 className="mb-6 md:mb-8 lg:mb-10 text-version2-400  font-bold text-sm">
                  {dummyComments.length} balasan
                </h1>
                <section>
                  {dummyComments.map((comment, index) => {
                    return (
                      <section
                        key={index}
                        className="mb-10 pl-6 md:pl-8 lg:pl-14"
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
        {getSelectedOption === 'create' && (
          <PostCreateEditModal type="create" />
        )}
        {getSelectedOption === 'edit' && <PostCreateEditModal type="edit" />}
        {getSelectedOption === 'report' && <PostReportModal />}
        {getSelectedOption === 'reportDetail' && <PostSpamModal />}
        {getSelectedOption === 'reportSuccess' && <ReportSuccessModal />}
        {getSelectedOption === 'delete' && <DeleteConfirmModal />}
      </Modal>
    </section>
  );
};
