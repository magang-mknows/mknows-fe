import { useRouter } from "next/router";
import React, { FC, ReactElement } from "react";
import { UniqueEventBreadCumbs } from "./const";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { UniqueEventSidebar } from "./event-sidebar/UniqueEventSidebar";
import { UniqueEventContent } from "./event-content";

export const UniqueEventModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = router.asPath;

  const eventPath = ["/acara-unik", "/acara-unik/terdaftar", "/acara-unik/riwayat"];

  if (!eventPath.includes(pathname)) {
    router.push("/acara-unik");
  }

  return (
    <section className="bg-neutral-100/30 min-h-[100vh] pb-20">
      <BreadCrumb items={UniqueEventBreadCumbs} textColor="text-version2-400" />
      <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
        <UniqueEventSidebar />
        <UniqueEventContent />
      </section>
    </section>
  );
};
