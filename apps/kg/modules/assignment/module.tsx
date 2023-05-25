import { FC, ReactElement } from "react";
import { BannerSection, ContentSection } from "./section";
import { BaseLayout } from "../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { assignmentBreadCumbs } from "./constanta";
import { useGetAssignment } from "./hooks";
import { Empty } from "./section/content/empty";

export const AssignmentModule: FC = (): ReactElement => {
  const { data } = useGetAssignment();

  return (
    <BaseLayout>
      <BreadCrumb items={assignmentBreadCumbs} bgColor={`bg-white`} />
      {data?.data?.length === 0 || undefined ? (
        <Empty />
      ) : (
        <>
          <BannerSection />
          <ContentSection />
        </>
      )}
    </BaseLayout>
  );
};
