import { FC, ReactElement } from "react";
import { useRouter } from "next/router";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { GlimpseKnowledgeLayoutMain } from "./Main/GlimpseKnowledgeLayoutMain";

const GlimpseKnowledgeLayoutPage: FC = (): ReactElement => {
  const { query } = useRouter();

  const GlimpseKnowledgeBreadcumbs = [
    {
      name: "Home",
      link: "/",
    },
    { name: "Sekilas Ilmu", link: "/sekilas-ilmu" },
    { name: `${query.slug}`, link: `/${query.slug}` },
  ];
  return (
    <section className="min-h-[100vh] bg-neutral-50/60">
      <BreadCrumb items={GlimpseKnowledgeBreadcumbs} />
      <GlimpseKnowledgeLayoutMain />
    </section>
  );
};

export default GlimpseKnowledgeLayoutPage;
