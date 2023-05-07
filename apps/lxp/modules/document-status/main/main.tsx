'use client';
import { Tab } from '@headlessui/react';
import { FC, ReactElement } from 'react';
import { DocumentStatusTab } from './tab';
import { DocumentStatusCard } from './status-card';

export const DocumentStatusMain: FC = (): ReactElement => {
  const dummyStoredDocument = [
    {
      title: 'Surat Keterangan KIP',
      status: 'processed',
      desc: '3 - 5 Hari',
    },
    {
      title: 'Surat Keterangan Cuti ',
      status: 'rejected',
      desc: 'Dokumen kurang jelas',
    },
    {
      title: 'Surat Keterangan Kinerja',
      status: 'accepted',
    },
  ];

  return (
    <nav className="mx-8 md:mx-16 lg:mx-40 mt-10 pb-10 bg-neutral-50 rounded-md shadow-sm min-h-[80vh]">
      <Tab.Group as="div" className="py-4">
        <DocumentStatusTab />
        <Tab.Panels as="div" className="py-8 px-8 md:px-14 lg:px-16">
          <Tab.Panel>
            {dummyStoredDocument.map((item, index) => {
              return (
                <DocumentStatusCard
                  key={index}
                  title={item?.title}
                  status={item?.status}
                  description={item?.desc}
                />
              );
            })}
          </Tab.Panel>
          <Tab.Panel>
            {dummyStoredDocument
              .filter((doc) => {
                return doc.status === 'processed';
              })
              .map((item, index) => {
                return (
                  <DocumentStatusCard
                    key={index}
                    title={item?.title}
                    status={item?.status}
                    description={item?.desc}
                  />
                );
              })}
          </Tab.Panel>
          <Tab.Panel>
            {dummyStoredDocument
              .filter((doc) => {
                return doc.status === 'rejected';
              })
              .map((item, index) => {
                return (
                  <DocumentStatusCard
                    key={index}
                    title={item?.title}
                    status={item?.status}
                    description={item?.desc}
                  />
                );
              })}
          </Tab.Panel>
          <Tab.Panel>
            {dummyStoredDocument
              .filter((doc) => {
                return doc.status === 'accepted';
              })
              .map((item, index) => {
                return (
                  <DocumentStatusCard
                    key={index}
                    title={item?.title}
                    status={item?.status}
                  />
                );
              })}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </nav>
  );
};
