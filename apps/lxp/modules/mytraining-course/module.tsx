import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { HeroSection } from "./hero";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingCourseBreadCumbs } from "./const";
import { ContentSection } from "./content";
import { ContentFooter } from "../common/footer/footer-content";
import { params } from "./type";
import { useRouter } from "next/router";
import { useGetMyWorkCourse } from "./hooks";

export const MyTrainingCourseModule: FC = (): ReactElement => {
  const { query } = useRouter();
  const params: params = {
    subjectID: query.subjectID as string,
    lastSession: query.lastSession as string,
    batchID: query.batchID as string,
  };

  const { data } = useGetMyWorkCourse(params);
  return (
    <ClientProvider>
      <BreadCrumb
        items={myTrainingCourseBreadCumbs(data?.data?.dataSubject?.name)}
        textColor="text-version2-400"
      />
      <HeroSection />
      <ContentSection />
      <ContentFooter />
    </ClientProvider>
  );
};
