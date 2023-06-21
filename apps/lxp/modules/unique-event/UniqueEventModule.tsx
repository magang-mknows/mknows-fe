import { useRouter } from "next/router";
import React, { FC, ReactElement } from "react";
import { UniqueEventBreadCumbs } from "./const";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { UniqueEventSidebar } from "./event-sidebar/UniqueEventSidebar";
import { UniqueEventContent } from "./event-content";
import { ClientProvider } from "../common/provider";
import { ContentFooter } from "../common/footer/footer-content";

export const UniqueEventModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = router.asPath;

  const eventPath = [
    "/event-pelatihan?tab=daftar",
    "/event-pelatihan?tab=terdaftar",
    "/event-pelatihan?tab=riwayat",
  ];

  if (!eventPath.includes(pathname)) {
    router.push("/event-pelatihan?tab=daftar");
  }

  return (
    <ClientProvider>
      <section className=" min-h-[100vh] pb-20">
        <BreadCrumb items={UniqueEventBreadCumbs} textColor="text-version2-400" />
        <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
          <UniqueEventSidebar />
          <UniqueEventContent />
        </section>
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
