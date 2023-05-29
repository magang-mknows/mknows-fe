import { FC, ReactElement } from "react";
import Image from "next/image";
import { useUserSearch } from "../content/hook";
import { useRecoilValue } from "recoil";
import { FilteredFeatures } from "../content/store";
import notfound from "./assets/notFound.svg";

export const FeaturesNotFound: FC = (): ReactElement => {
  const { getUserSearch } = useUserSearch();
  const filteredFeatures = useRecoilValue(FilteredFeatures);

  return (
    <section>
      {filteredFeatures.length === 0 && (
        <div className="flex justify-center flex-col -mt-2 items-center w-full">
          <Image
            src={notfound}
            alt="nofound-view"
            className=" w-52 h-52 md:w-56 lg:w-60 md:h-56 lg:h-60 relative "
            height={10}
            width={10}
            loading="eager"
          />
          <h1 className="text-sm text-neutral-800">
            Yah.. Saat ini fitur <span className="font-bold">`{getUserSearch}`</span> belum
            tersedia,
          </h1>
          <h1 className="text-sm text-neutral-800">tunggu kabar dari kami ya!</h1>
        </div>
      )}
    </section>
  );
};
