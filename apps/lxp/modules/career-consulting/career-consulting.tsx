import React, { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { CareerConsultingBreadCumbs } from "./const";
import { CareerChatList } from "./chat-list";
import { ConsultingChatContainer } from "./chat-container";

export const CareerConsultingModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={CareerConsultingBreadCumbs} textColor="text-version2-400" />
      <section className="pb-6 py-10 relative px-8 md:px-14 lg:px-14 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-neutral-900 font-bold">Konsultasi Karir dan Cita-Cita</h1>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 px-8 md:px-14 lg:px-16">
        <section className="px-0 md:px-5 lg:px-6 mb-10">
          <CareerChatList />
        </section>
        <section className="col-span-2 bg-neutral-50 px-20 min-h-[80vh]">
          <ConsultingChatContainer />
        </section>
      </section>
    </ClientProvider>
  );
};
