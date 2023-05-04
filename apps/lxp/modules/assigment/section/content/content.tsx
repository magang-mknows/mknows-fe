import { Tab } from '@headlessui/react';
import { ReactElement } from 'react';
import AssigmentAssigned from '../../assets/assigned-assigment.svg';
import AssigmentDone from '../../assets/assigned-done.svg';
import AssignedAssesment from '../../assets/assigned-assesment.svg';
import AssignedLate from '../../assets/assigned-late.svg';
import AssigmentStatusTab from '../../common/AssigmenttStatusTab';
import AssigmentStatusCard from '../../common/AssigmentStatusCard';
import { useTabAssigment } from '../../hooks';

const AssigmentStatus = (): ReactElement => {
  const { getTabAssigment } = useTabAssigment();
  console.log(getTabAssigment);
  const dummyStoredDocument = [
    {
      id: 1,
      title: 'tes',
      course: 'Japanese-anime',
      category: 'Ditugaskan',
      date: '20-09-2021',
      time: '20:00:00',
    },
    {
      id: 2,
      title: 'tes',
      course: 'Japanese-culture',
      category: 'Terlambat',
      date: '20-09-2021',
      time: '20:00:00',
    },
    {
      id: 2,
      title: 'tes',
      course: 'Japanese-culture',
      category: 'Sedang Dinilai',
      date: '20-09-2021',
      time: '20:00:00',
    },
    {
      id: 2,
      title: 'tes',
      course: 'Japanese-culture',
      category: 'Selesai',
      date: '20-09-2021',
      time: '20:00:00',
    },
  ];

  return (
    <nav className="mx-8 md:mx-16 lg:mx-20 mt-10 pb-10 bg-neutral-50 rounded-md shadow-sm min-h-[80vh]">
      <Tab.Group as="div" className="py-4">
        <AssigmentStatusTab />
        <Tab.Panels as="div" className="px-8 md:px-14 lg:px-16 mt-5">
          {getTabAssigment == 'Semua Tugas' ? (
            <Tab.Panel>
              {dummyStoredDocument.map((item, index) => {
                return (
                  <AssigmentStatusCard
                    key={index}
                    titleAssigment={item.title}
                    category={item.category}
                    titleCourse={item.course}
                    date={item.date}
                    time={item.time}
                    bgLine={
                      item.category === 'Ditugaskan'
                        ? 'bg-[#003A63]'
                        : item.category === 'Terlambat'
                        ? 'bg-[#D79210]'
                        : item.category === 'Selesai'
                        ? 'bg-[#3EB449]'
                        : item.category === 'Sedang Dinilai'
                        ? 'bg-[#737373]'
                        : ''
                    }
                    classNameCategory={
                      item.category === 'Ditugaskan'
                        ? 'text-[#003A63]'
                        : item.category === 'Terlambat'
                        ? 'text-[#D79210]'
                        : item.category === 'Selesai'
                        ? 'text-[#3EB449]'
                        : item.category === 'Sedang Dinilai'
                        ? 'text-[#737373]'
                        : ''
                    }
                    imgAssigment={
                      item.category === 'Ditugaskan'
                        ? AssigmentAssigned
                        : item.category === 'Terlambat'
                        ? AssignedLate
                        : item.category === 'Selesai'
                        ? AssigmentDone
                        : item.category === 'Sedang Dinilai'
                        ? AssignedAssesment
                        : ''
                    }
                  />
                );
              })}
            </Tab.Panel>
          ) : (
            <div>
              {dummyStoredDocument
                .filter((doc) => {
                  return doc.category.includes(getTabAssigment);
                })
                .map((item, index) => {
                  console.log(item);
                  return (
                    <AssigmentStatusCard
                      key={index}
                      titleAssigment={item.title}
                      category={item.category}
                      titleCourse={item.course}
                      date={item.date}
                      time={item.time}
                      bgLine={
                        item.category === 'Ditugaskan'
                          ? 'bg-[#003A63]'
                          : item.category === 'Terlambat'
                          ? 'bg-[#D79210]'
                          : item.category === 'Selesai'
                          ? 'bg-[#3EB449]'
                          : item.category === 'Sedang Dinilai'
                          ? 'bg-[#737373]'
                          : ''
                      }
                      classNameCategory={
                        item.category === 'Ditugaskan'
                          ? 'text-[#003A63]'
                          : item.category === 'Terlambat'
                          ? 'text-[#D79210]'
                          : item.category === 'Selesai'
                          ? 'text-[#3EB449]'
                          : item.category === 'Sedang Dinilai'
                          ? 'text-[#737373]'
                          : ''
                      }
                      imgAssigment={
                        item.category === 'Ditugaskan'
                          ? AssigmentAssigned
                          : item.category === 'Terlambat'
                          ? AssignedLate
                          : item.category === 'Selesai'
                          ? AssigmentDone
                          : item.category === 'Sedang Dinilai'
                          ? AssignedAssesment
                          : ''
                      }
                    />
                  );
                })}
            </div>
          )}

          {/* <Tab.Panel>
            {dummyStoredDocument
              .filter((doc) => {
                return doc.status === "rejected";
              })
              .map((item, index) => {
                return (
                  <DocumentStatusCard
                    title={item?.title}
                    desc={item?.status}
                    key={index}
                    subTitle={item?.desc}
                  />
                );
              })}
          </Tab.Panel>
          <Tab.Panel>
            {dummyStoredDocument
              .filter((doc) => {
                return doc.status === "accepted";
              })
              .map((item, index) => {
                return <DocumentStatusCard title={item?.title} desc={item?.status} key={index} />;
              })}
          </Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </nav>
  );
};

export default AssigmentStatus;
