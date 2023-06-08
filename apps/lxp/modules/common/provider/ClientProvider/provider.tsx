import { ReactElement, FC } from "react";
import { TProviderProps } from "../types";
import { Montserrat } from "next/font/google";
import { Modal, Navbar } from "@mknows-frontend-services/components/molecules";
import { MdLogout, MdDashboard, MdEmojiPeople } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { logoutRequest } from "../../../../modules/auth/logout/api";
import { useProfile } from "../../../../modules/profile/hooks";
import { Button } from "@mknows-frontend-services/components/atoms";
import { _bottom_nav_items, _nav_rules } from "./const";
import { useRecoilState } from "recoil";
import { LoginFormPopup, LoginPopupState } from "../../../../modules";

import logo from "../../assets/mknows-logo.svg";
import { BsFileEarmarkPlus, BsFileEarmarkTextFill, BsFillBuildingFill } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { BiBuilding } from "react-icons/bi";
import { MdOutlineContactPage } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export const ClientProvider: FC<TProviderProps> = ({
  children,
  sectionClassName,
}): ReactElement => {
  const router = useRouter();
  const { data } = useSession();
  const { data: profileData } = useProfile();

  const _pop_up_menu = [
    {
      name: "Dashboard",
      onClick: () => router.push("/dashboard"),
      icon: <MdDashboard size={20} className="text-[#2C97EB]" />,
    },
    {
      name: "Profile",
      onClick: () => router.push("/user/profile"),
      icon: <FaUserCircle size={20} className="text-[#FAB317]" />,
    },
    {
      name: "Administrasi",
      icon: <BsFileEarmarkTextFill size={20} className="text-[#3EB449]" />,
      onClick: () => router.push("/administrasi"),
    },
    {
      name: "Keluar",
      icon: <MdLogout size={20} className="text-error-base" />,
      onClick: async () => {
        await logoutRequest({
          refresh_token: data?.user?.token?.refresh_token as string,
        });
      },
    },
  ];

  const [getLoginPopup, setLoginPopup] = useRecoilState(LoginPopupState);

  const _features = [
    {
      name: "Administrasi",
      link: "/administrasi",
      icon: (
        <BsFileEarmarkPlus className="bg-[#FBCB50] text-neutral-100 rounded-md p-2" size={32} />
      ),
    },

    {
      name: "Pelatihan-ku",
      link: "/pelatihanku",
      icon: <MdEmojiPeople className="bg-[#3EB449] text-neutral-50 rounded-md p-2" size={32} />,
    },
    {
      name: "Rencana Pelatihan",
      link: "/rencana-pelatihan",
      icon: (
        <BsFillBuildingFill className="bg-[#106FA4] text-neutral-100 rounded-md p-2" size={32} />
      ),
    },
    {
      name: "Analitik",
      link: "/analitik",
      icon: (
        <IoAnalyticsOutline className="bg-[#F9868F] text-neutral-100 rounded-md p-2" size={32} />
      ),
    },
  ];

  const _profile_user = {
    email: profileData?.data?.email as string,
    full_name: profileData?.data?.full_name as string,
    avatar: profileData?.data?.avatar as string,
  };

  const _mobile_menu_item = [
    {
      name: "Tentang",
      icon: <BiBuilding className="text-neutral-500 p-1 text-3xl" />,
      href: "/tentang",
    },
    {
      name: "Kontak kami",
      icon: <MdOutlineContactPage className="text-neutral-500 p-1 text-3xl" />,
      href: "/kontak",
    },
    {
      name: "Semua Fitur",
      icon: <TbCategory2 className="text-neutral-500 p-1 text-3xl" />,
      href: "/semua-fitur",
    },
  ];

  const topNavLinks = [
    {
      name: "Tentang",
      href: "/tentang",
    },
    {
      name: "Kontak Kami",
      href: "/kontak",
    },
  ];

  return (
    <div className={`${montserrat.className} max-w-[2200px]  container mx-auto`}>
      <Navbar
        items={_pop_up_menu}
        features={_features}
        avatar={profileData?.data?.avatar as string}
        logo={logo}
        logoStyle="w-auto h-auto"
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        withSearch
        topNavLinks={topNavLinks}
        bottomNavRules={_nav_rules}
        mobileMenuItems={_mobile_menu_item}
        bottomNavItemStyle={`w-auto h-auto p-2 text-[14px] rounded-lg bg-version3-500 text-white font-reguler`}
        button={
          <section className="flex gap-4 w-full items-center justify-center">
            <Button
              onClick={() => {
                setLoginPopup(true);
              }}
              type="button"
              className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 text-sm py-2 w-full lg:w-24"
            >
              <h1>Masuk</h1>
            </Button>
            <Button
              type="button"
              onClick={() => {
                router.push("auth/register");
              }}
              className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-2 lg:w-24  w-full disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
            >
              <h1>Daftar</h1>
            </Button>
          </section>
        }
      />
      <section className={`bg-neutral-100 min-h-[120vh] ${sectionClassName}`}>{children}</section>
      <Modal withClose lookup={getLoginPopup} onClose={() => setLoginPopup(false)}>
        <LoginFormPopup />
      </Modal>
    </div>
  );
};
