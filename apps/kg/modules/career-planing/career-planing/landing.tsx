import { FC, Fragment, ReactElement } from "react";
import Image from "next/image";
import carrerPlaning from "../assets/carrer-planing.svg";
import Link from "next/link";

export const LandingCareer: FC = (): ReactElement => {
  return (
    <Fragment>
      <section className="lg:px-16 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md  min-h-screen">
        <div className="flex flex-col mx-48">
          <div className="text-[#171717] font-[700] lg:text-[36px] md:text-[30px]">
            Perencanaan Karir
          </div>
        </div>
        <div className="bg-[#ffff] pt-16 px-10 w-full mt-10 shadow-lg">
          <div className="flex flex-row gap-6">
            <div className=" basis-2/4">
              <div className="flex flex-col text-center mx-28">
                <div className="text-[20px] font-[500] ">
                  Perencanaan karir adalah fitur untuk mengetahui minat dan bakat kamu dalam hal
                  Akademik, mulai analisa sekarang untuk melihat karir yang cocok dengan kemampuan
                  kamu{" "}
                </div>
                <Link href={"/perencanaan-karir/hasil-analisa"}>
                  <button className=" mt-6 text-[20px] font-[600] bg-primary-500 w-full text-white py-3 rounded-md">
                    Mulai Analisa
                  </button>
                </Link>
              </div>
            </div>
            <Image src={carrerPlaning} alt="perusahaan" className="-mt-60 " />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
