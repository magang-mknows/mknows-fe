import { FC, ReactElement } from "react";
import NextImage from "next/image";
import { TNavbarProps } from "../../types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  HamburgerIcon,
  NavMenuDropDown,
  NavbarFeatureMenu,
  NavbarMobileMenu,
  NavbarNotification,
  NavbarUserMenu,
} from "./dropdown-menu";
import { useRouter } from "next/router";

export const TopNav: FC<TNavbarProps> = ({
  logo,
  logoStyle,
  button,
  userData,
  withSearch,
  mobileMenuItems,
  ...props
}): ReactElement => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <header className="flex w-full justify-between bg-white">
      <div className="flex gap-2 md:gap-4 items-center">
        <Link href={"/"} className="flex items-center">
          <NextImage
            src={logo}
            alt="platform-logo"
            loading="eager"
            width={40}
            height={45}
            className={`${logoStyle} w-auto h-2 md:h-8 lg:h-9`}
            quality={75}
            priority
          />
        </Link>
        {session && props?.bottomNavRules?.includes(router.pathname) && (
          <NavMenuDropDown
            bottomNavItems={props.bottomNavItems}
            bottomNavItemStyle={props.bottomNavItemStyle}
          />
        )}
      </div>
      <div className="flex gap-2 md:gap-3 lg:gap-4 items-center ">
        <NavbarFeatureMenu features={props.features} />
        {session ? (
          <>
            <NavbarNotification />
            <NavbarUserMenu
              userData={{
                full_name: userData?.full_name,
                email: userData?.email,
                avatar: userData?.avatar,
              }}
              {...props}
            />
          </>
        ) : (
          <section className="lg:inline-block hidden">{button}</section>
        )}

        <HamburgerIcon />
      </div>
      <NavbarMobileMenu
        mobileitems={mobileMenuItems}
        userData={{
          full_name: userData?.full_name,
          email: userData?.email,
          avatar: userData?.avatar,
        }}
        button={button}
        logo={logo}
        {...props}
      />
    </header>
  );
};
