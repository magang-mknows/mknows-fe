import { FC, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { ViewProfileBreadCumbs } from "./const";
import { ProfileSidebar } from "./sidebar";
import {
  ViewProfileModule,
  CVPortofolioModule,
  EditProfileSection,
  ChangePasswordSection,
} from "./section";
import { useRouter } from "next/router";

export const ProfileModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = router.asPath;

  const eventPath = [
    "/profile",
    "/profile/edit-profile",
    "/profile/ubah-password",
    "/profile/cv-portofolio",
  ];

  if (!eventPath.includes(pathname)) {
    router.push("/profile");
  }

  return (
    <section className="min-h-[120vh] bg-neutral-100 pb-20">
      <BreadCrumb items={ViewProfileBreadCumbs} textColor="text-version2-400" />
      <header className="px-8 pb-6 md:px-14 lg:px-16">
        <h1 className="text-xl font-bold text-neutral-800">Profile</h1>
      </header>
      <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
        <ProfileSidebar />
        <section className="col-span-2">
          {pathname === "/profile" && <ViewProfileModule />}
          {pathname === "/profile/edit-profile" && <EditProfileSection />}
          {pathname === "/profile/cv-portofolio" && <CVPortofolioModule />}
          {pathname === "/profile/ubah-password" && <ChangePasswordSection />}
        </section>
      </section>
    </section>
  );
};
