import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement, useEffect } from "react";
import { FeaturesBreadCumbs } from "./const";
import { ContentSection } from "./content";
import { useSetRecoilState } from "recoil";
import { FeaturesListState } from "./content/store";
import { KGFeaturesList, LXPFeaturesList } from "./content/const";

type TFeaturesPageProps = {
  accessFrom: "KG" | "LXP";
};

export const FeaturesModule: FC<TFeaturesPageProps> = ({ accessFrom }): ReactElement => {
  const setFeatures = useSetRecoilState(FeaturesListState);

  useEffect(() => {
    if (accessFrom === "KG") {
      setFeatures(KGFeaturesList);
    } else {
      setFeatures(LXPFeaturesList);
    }
  }, [accessFrom, setFeatures]);

  return (
    <section className="bg-light min-h-[100vh]">
      <BreadCrumb items={FeaturesBreadCumbs} textColor="text-version2-400" />
      <section className=" px-8 md:px-14 lg:px-16 py-2 md:py-4 lg:py-8 flex flex-col justify-center items-center mb-3 ">
        <div className="max-w-[720px] text-center">
          <h1 className="font-bold text-neutral-900 text-3xl mb-4">Fitur LMS M-Knows</h1>
          <p className="text-neutral-400 text-sm font-medium">
            Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
            Berbagai macam jenis materi tersedia.
          </p>
        </div>
      </section>
      <ContentSection />
    </section>
  );
};
