import { FC, ReactElement, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { SubjectDetailsState } from './store';
import imgCourseHome from './assets/course-home-1.svg';
import { SessionSection } from './session';

let isExecuted = false;

export const SubjectDetailsModule: FC = (): ReactElement => {
  const [courseDatas, setCourseDatas] = useRecoilState(SubjectDetailsState);

  const updatedCourses = useMemo(() => {
    const changedCourseDatas = courseDatas?.map((course) => {
      const { module, quiz, assignment, disscussion } = course.status;
      const progress = [module, quiz, assignment, disscussion];
      return { ...course, progress };
    });

    for (let i = 0; i < changedCourseDatas.length; i++) {
      if (!changedCourseDatas[i].progress.includes('In Progress')) {
        changedCourseDatas[i + 1].isOpen = true;
      }
    }

    return changedCourseDatas;
  }, [courseDatas]);

  useEffect(() => {
    if (!isExecuted) {
      setCourseDatas(updatedCourses);
    }
    isExecuted = true;
  }, [updatedCourses, setCourseDatas]);

  return (
    <div className="mx-auto px-[7%] my-8 flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-[30px] items-center">
        <h3 className="text-black text-[28px] text-center font-bold">
          Manajemen Keuangan
        </h3>
        <div className="w-[95%] h-[253px]">
          <Image
            src={imgCourseHome}
            alt="Course images"
            className="h-full object-cover rounded-lg mx-auto"
          />
        </div>
        <p className="text-lg font-normal text-neutral-800 text-justify">
          Manajemen Keuangan belajar tentang bagaimana merencanakan, mengelola,
          serta menggunakan sumber daya keuangan perusahaan. Perkuliahan jurusan
          ini juga tentang lembaga perbankan, kinerja perusahaan, perpajakan,
          akuntansi, perdagangan internasional, perencanaan modal, asuransi,
          anggaran, analisis keuangan, akuisisi dana, manajemen utang dan aset,
          hingga portofolio dan manajemen investasi. Pengawasan berbagai aspek
          keuangan guna mencegah kesalahan atau kecurangan juga dipelajari
          selama kuliah.
        </p>
      </div>

      <div className="flex flex-col gap-[25px] select-none">
        {courseDatas.map((conference, i) => (
          <SessionSection
            key={`Accordion-${i}`}
            conference={conference}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};
