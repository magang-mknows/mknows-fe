import { Disclosure, Transition } from '@headlessui/react';
import { FC, Fragment, ReactElement } from 'react';
import { IoAdd } from 'react-icons/io5';
import { HiOutlineMinusSmall } from 'react-icons/hi2';

export const ConsultingAndServiceQuestion: FC = (): ReactElement => {
  const dummyQuestionsList = [
    {
      title: 'Apa itu LMS M-Knows?',
      desc: 'LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update',
    },
    {
      title: 'Berapakah biaya kuliah di LMS M-Knows?',
      desc: 'LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update',
    },
    {
      title: 'Bagaimana alur pendaftaran di LMS M-Knows?',
      desc: 'LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update',
    },
    {
      title: 'Program studi apa saja yang ditawarkan oleh LMS M-Knows?',
      desc: 'LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update',
    },
    {
      title:
        'Bolehkah pegawai yang perusahaannya di bawah naungan Kementrian di luar Kemendikbud Ristek  mendaftar di LMS M-Knows',
      desc: 'LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update',
    },
    {
      title:
        'Jika ada perusahaan yang belum bermitra tetapi ingin ikut program LMS M-Knows?',
      desc: 'LMS M-Knows adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa diakses siapapun, kapanpun, dimanapun, dan selalu update',
    },
  ];

  return (
    <Fragment>
      <section className="px-8 md:px-14 lg:px-16 mb-14">
        <h1 className="text-2xl font-bold mb-2">
          Pertanyaan yang sering ditanyakan
        </h1>
        <p className="text-sm">
          Berikut list pertanyaan-pertanyaan yang sering ditanyakan kepada kami{' '}
        </p>
      </section>
      <section className="min-h-[90vh]">
        <section className="px-8 md:px-14 lg:px-16 pb-40 flex flex-col gap-6 ">
          {dummyQuestionsList.map((question, index) => {
            return (
              <Transition
                key={index}
                as="div"
                show={true}
                enter="transition ease duration-500 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-12"
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        as="div"
                        className="py-4 flex justify-between items-center text-sm cursor-pointer font-bold  bg-neutral-200/80 md:px-8 px-4 rounded-md w-full"
                      >
                        <p>{question.title}</p>
                        <section className="h-6 w-6flex items-center justify-center flex-shrink-0">
                          {!open ? <IoAdd /> : <HiOutlineMinusSmall />}
                        </section>
                      </Disclosure.Button>
                      <Disclosure.Panel
                        as="div"
                        className="text-neutral-500 text-xs md:text-sm px-4 md:px-8 py-2"
                      >
                        {question.desc}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </Transition>
            );
          })}
        </section>
      </section>
    </Fragment>
  );
};
