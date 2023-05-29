import { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import Daftar from "../../assets/daftar.svg";
import Form from "../../assets/form.svg";
import Check from "../../assets/check.svg";
import Login from "../../assets/login.svg";

export const ContentSection = (): ReactElement => {
  return (
    <div className=" w-full px-6 md:px-8 lg:px-16 ">
      <div className="title">
        <h1 className="text-[16px] font-[500]">
          Halo , silakan ikuti panduan di bawah ini apabila kamu kebingungan terkait{" "}
        </h1>
      </div>
      <div className="lg:flex mt-[34px] justify-between mb-5">
        <div>
          <div className="step-1">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] dark:bg-[#232529] flex items-center justify-center">
                <span className="text-white">1</span>
              </div>
              <h1 className="text-black dark:text-white">
                Silahkan buka <span className="font-[700]">website</span>
                <span className="text-[#106FA4] font-[700] ml-1">
                  <Link href={"/"}>https://kampusgratis.id</Link>
                </span>
              </h1>
            </div>
          </div>
          <div className="step-2 mt-[28px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] dark:bg-[#232529] flex items-center justify-center">
                <span className="text-white">2</span>
              </div>
              <h1 className="text-black dark:text-white">
                Klik pojok kanan atas <span className="font-[700]">&lsquo;Daftar&lsquo;</span>
              </h1>
            </div>
            <Image src={Daftar} alt={"daftar"} />
          </div>
          <div className="step-3">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] dark:bg-[#232529] flex items-center justify-center">
                <span className="text-white">3</span>
              </div>
              <h1 className="text-black dark:text-white">
                Silahkan masukan <span className="font-[700]"> data diri </span>
                yang diperlukan
              </h1>
            </div>
            <Image src={Form} alt={"form"} />
          </div>
        </div>
        <div className="lg:-mt-5">
          <div className="step-4 mt-[28px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] dark:bg-[#232529] flex items-center justify-center">
                <span className="text-white">4</span>
              </div>
              <h1 className="text-black dark:text-white">
                Klik
                <span className="font-[700]"> centang </span>
                untuk menyetujui syarat & ketentuan
              </h1>
            </div>
            <Image src={Check} alt={"check"} className={"ml-[20px] mt-[20px]"} />
          </div>
          <div className="step-5 mt-[28px]">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] dark:bg-[#232529] flex items-center justify-center">
                <span className="text-white">5</span>
              </div>
              <h1 className="text-black dark:text-white">
                Klik tombol
                <span className="font-[700]"> daftar </span>untuk melakukan pendaftaran akun Klik
                pojok kanan atas
              </h1>
            </div>
            <Image src={Login} alt={"login"} className={"ml-[20px] mt-[20px]"} />
          </div>
          <div className="step-6">
            <div className="flex items-center gap-[14px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#D4D4D4] dark:bg-[#232529] flex items-center justify-center">
                <span className="text-white">6</span>
              </div>
              <h1 className="text-black dark:text-white">
                <span className="font-[700]"> Cek email </span>
                untuk melakukan verifikasi emai
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
