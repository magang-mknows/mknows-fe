import { FC, Fragment, ReactElement } from "react";
import Image from "next/image";
import Dummy from "@/assets/myStudy/Dummy.svg";
import Card from "../../../../libs/components/molecules/src/card/index"
// import CardStudy from "./CardMatkul/Card";
import { useDataCard } from "./hooks";

const MyStudy: FC = (): ReactElement => {
  //api
  const { getData } = useDataCard();

  return (
    <Fragment>
      <div className="flex lg:flex-row flex-col w-screen lg:px-24 px-2 py-8">
        <div>
          <Image width={400} src={Dummy} alt={"dummy"} className="pl-4 lg:p-1 p-10" />
        </div>
        <div className="p-2 px-4">
          <h1 className="text-xl font-bold">Data Science</h1>
          <p className="text-gray-500 py-2">
            Akuntasi adalah belajar cara memelihara keuangan. Ini mempersiapkan siswa untuk menjadi
            akuntan dengan mengajar mereka tentang prinsip-prinsip akuntansi seperti audit,
            pelaporan, penganggaran dan peraturan pajak.
          </p>
          <div className="grid lg:grid-cols-4 md:grid-rows-1 sm:grid-rows-1 gap-x-3 rounded-lg py-4 gap-y-4">
            {getData.map((x, i) => {
              return (
                <div
                  key={i}
                  style={{ background: x.warna }}
                  className="flex py-2 justify-center rounded-lg items-center"
                >
                  <Card hasImage={true} src={x.icon} />
                  <div className="flex flex-col py-4 text-black">
                    <p className="font-bold">{x.jumlah}</p>
                    <p className="">{x.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="px-6">
        <CardStudy />
      </div> */}
    </Fragment>
  );
};

export default MyStudy;
