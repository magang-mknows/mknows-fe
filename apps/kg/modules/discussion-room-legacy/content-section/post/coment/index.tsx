import { FC, Fragment, ReactElement } from 'react';

import { useDiscussionId } from './hooks';

import PostCard from '../PostCard';
import PostOption from '../PostOption';
import { AddComent } from './add-coment';

import dummyCourse from '../../../assets/dummyCourse.png';

export const Comment: FC = (): ReactElement => {
  const { setDiscussionId } = useDiscussionId();
  const dummyComments = [
    {
      hasImage: false,
      text: 'Dalam dunia bisnis, manajemen keuangan adalah kegiatan perencanaan, pengaturan, pengarahan, dan pengendalian keuangan suatu perusahaan. Dengan adanya pengelolaan keuangan secara profesional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.',
      userName: 'Bambang S',
      time: '10 detik',
      countLikes: 10,
      type: 'comment',
      id: '',
    },
    {
      hasImage: true,
      imgSource: dummyCourse,
      text: 'pengendalian keuangan suatu perusahaan.esional, suatu usaha bisa mengurangi resiko kerugian. Pengontrolan keuangan di perusahaan dimulai dari pengadaan dana perusahaan.',
      userName: 'Surti B',
      time: '10 detik',
      countLikes: 3,
      type: 'comment',
      id: '',
    },
  ];

  return (
    <Fragment>
      <AddComent />
      <section>
        <h1 className="mb-6 md:mb-8 lg:mb-10 text-primary-500 dark:text-[#17A2B8] font-bold text-sm">
          {dummyComments.length} balasan
        </h1>
        <section>
          {dummyComments.map((comment, index) => {
            return (
              <section key={index} className="pl-6 mb-10 md:pl-8 lg:pl-14">
                <PostCard
                  hasImage={comment.hasImage}
                  countLikes={comment.countLikes}
                  time={comment.time}
                  type="comment"
                  userName={comment.userName}
                  text={comment.text}
                  imgSource={comment.imgSource}
                >
                  <PostOption onClick={() => setDiscussionId(comment.id)} />
                </PostCard>
              </section>
            );
          })}
        </section>
      </section>
    </Fragment>
  );
};
