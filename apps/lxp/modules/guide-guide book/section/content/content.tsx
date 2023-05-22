import React, { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Book from '../../assets/book.svg';

const dummyGuide = [
  {
    title: 'Panduan pendaftaran',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Panduan masuk',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Bagaimana caranya jika mengalami kesulitan',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Bagaimana caranya jika saya ingin melakukan diskusi pada dosen',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Panduan mendaftar studi',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Hal apa saja yang saya lakukan saat melakukan quiz',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Panduan diskusi global',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Panduan  perencanaan karir',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
  {
    title: 'Panduan mendapatkan sertifikat',
    img: Book,
    href: '/panduan/buku-panduan/panduan-pendaftaran',
  },
];

export const ContentSection = (): ReactElement => {
  return (
    <div className="px-8 md:14 lg:px-16">
      <div className="w-full container lg:mx-auto mt-[30px] lg: mb-[50px]">
        <div className="title">
          <h1 className="font-[700] text-[16px]">Buku panduan lainnya</h1>
        </div>
        <div className="mt-[24px] mb-[54px]">
          {dummyGuide.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <div className="content bg-white  w-full h-[54px] shadow-neutral-300 shadow-sm sha rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                  <h1 className="font-[600] text-[16px]">{item.title}</h1>
                  <Image src={item.img} alt={'book'} width={30} height={30} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
