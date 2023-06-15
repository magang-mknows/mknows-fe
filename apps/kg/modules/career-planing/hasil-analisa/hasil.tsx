import { FC, ReactElement } from "react";
import Image from "next/image";
import Checked from "../assets/checked.svg";
import Figma from "../assets/logo-figma.svg";
import Adobe from "../assets/logo-adobe.svg";
import Framer from "../assets/logo-framer.svg";
import { AnalyticRecent } from "./recent";

export const AnalysisResult: FC = (): ReactElement => {
  const dataSkill = [
    {
      data: "Kemampuan berkomunikasi serta berkolaborasi yang baik dengan team & stakeholder.",
    },
    {
      data: "Memahami perilaku android dan iOS dan web.",
    },
    {
      data: "Familiar dan bisa menggunakan design tools seperti Figma, Sketch, Adobe XD.",
    },
    {
      data: "Kemampuan berkomunikasi serta berkolaborasi yang baik dengan team & stakeholder.",
    },
    {
      data: "Melakukan usability testing & mempresentasikan hasil test design kepada stakeholder.",
    },
    {
      data: "Membuat solusi desain dengan memerhatikan fungsional, keindahan, dan interaktif.",
    },
  ];

  const dataTool = [
    {
      img: Figma,
      name: "Figma",
      category: "Software Gratis",
    },
    {
      img: Adobe,
      name: "Adobe XD",
      category: "Software Gratis",
    },
    {
      img: Framer,
      name: "Framer",
      category: "Software Gratis",
    },
  ];

  return (
    <section className="lg:px-16 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md min-h-screen bg-grey-100 pb-10">
      <div className="flex md:flex-row flex-col lg:gap-16 md:gap-8 gap-10">
        <div className=" md:basis-1/3">
          <section className="grafik-anaysis">
            <div className="w-full bg-white text-center px-5 py-10 rounded-[8px] shadow-md">
              <AnalyticRecent />
              <p className="lg:text-[18px] text-[16px] font-[500] text-black">
                Karir yang cocok untuk kamu adalah
              </p>
              <h1 className="lg:text-[28px] text-[24px] font-[600] text-black">
                User Interface Designer
              </h1>
            </div>
          </section>
        </div>
        <div className=" md:basis-2/3">
          <section className="card-ringkasan text-neutral-800">
            <div className="w-full bg-white lg:px-20 md:px-14 px-8 py-10 rounded-[8px] shadow-md">
              <h1 className="lg:text-[24px] font-[600] mb-4 text-[20px]">Ringkasan</h1>
              <p className="text-[16px] font-[500] text-justify mb-6">
                User Interface Designer (UID) adalah seseorang yang bertanggung jawab dalam
                membangun sebuah tampilan antarmuka aplikasi mobile atau website (UI) yang
                interaktif. Dalam bekerja, fokus utama User Interface Designer yaitu membuat UI yang
                menarik dan mudah diterima oleh user.
              </p>
              <h1 className="lg:text-[24px] font-[600] mb-4 md:text-[20px]">
                Skill yang dikembangkan
              </h1>
              {dataSkill.map((skill, index) => (
                <div className="flex flex-row mb-2 content-center" key={index}>
                  <Image src={Checked} alt="photo" className="me-3" />
                  <p className="text-[16px] font-[500]">{skill.data}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="card-tools">
            <h1 className="text-[24px] font-[600] text-black mb-4 mt-8">Tools yang dipelajari</h1>
            <div className="flex md:flex-row flex-col lg:flex-nowrap md:flex-wrap gap-10 ">
              {dataTool.map((tool, i) => (
                <div className="w-full bg-white px-10 py-10 shadow-md" key={i}>
                  <Image src={tool.img} alt="photo-logo" />
                  <h3 className="text-blue-base text-[18px] font-[600] mt-4">{tool.name}</h3>
                  <p className=" text-grey-base text-[16px] font-[300]">{tool.category}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};
