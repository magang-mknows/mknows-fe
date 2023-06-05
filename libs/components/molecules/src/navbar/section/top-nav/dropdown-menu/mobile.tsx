import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import { MobileNavbarState } from "./store";
import { TMobileMenuProps } from "./typed";
import Image from "next/image";
import Avatar from "react-avatar";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSession } from "next-auth/react";

export const HamburgerIcon: FC = (): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  return (
    <div className="lg:hidden">
      <button
        name="mobile-menu"
        id="mobile-menu"
        aria-label="mobile-menu"
        className="flex flex-col bg-neutral-100  h-9 w-9  p-2 rounded-md justify-center items-center group lg:hidden"
        onClick={() => setMobileNavbar(!getMobileNavbar)}
      >
        <AiOutlineMenu className="text-xl " />
      </button>
    </div>
  );
};

export const NavbarMobileMenu: FC<TMobileMenuProps> = ({
  items,
  mobileitems,
  userData,
  button,
  logo,
}): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  const { data: session } = useSession();

  return (
    <div
      className={`${
        getMobileNavbar ? "top-0" : "-top-[100vh]"
      } px-4 py-4 absolute left-0 lg:hidden right-0 bg-white transition-all ease-in-out duration-300`}
    >
      <section className="w-full flex justify-between pr-4 py-1.5 mb-4 pl-1">
        <Image
          src={logo as string}
          alt="platform-logo"
          loading="eager"
          width={40}
          height={45}
          className="w-auto h-6 md:h-8 lg:h-9"
          quality={75}
          priority
        />
        <AiOutlineClose
          className="text-neutral-base font-bold text-xl"
          onClick={() => setMobileNavbar(!getMobileNavbar)}
        />
      </section>
      {session ? (
        <section className="w-full pb-4 mb-4 px-1  flex items-center gap-3 border-b-[1px] border-neutral-200">
          {userData?.avatar ? (
            <Image
              src={userData.avatar}
              alt={"user avatar"}
              width={36}
              height={36}
              className="bg-white  flex text-neutral-600 items-center justify-center font-[700]"
            />
          ) : (
            <Avatar
              name={userData?.full_name}
              color="#F26800"
              className=" w-[36px] rounded-md h-[36px]"
              size="36"
            />
          )}

          <section>
            <h1 className="text-sm text-neutral-900 ">{userData?.full_name}</h1>
            <p className="text-xs text-neutral-500 ">{userData?.email}</p>
          </section>
        </section>
      ) : null}
      <section className="border-b-[1px] border-neutral-200 pb-4 flex flex-col gap-y-4">
        {mobileitems.map((item, index) => {
          return (
            <Link href={item.href} key={index} className="flex items-center gap-2">
              {item.icon}
              <h1 className="font-bold text-sm text-neutral-700">{item.name}</h1>
            </Link>
          );
        })}
      </section>
      {session ? (
        <section className=" px-1 py-2">
          {items.map(({ icon, name, onClick }, index) => (
            <div key={index} className={"flex gap-3 items-center  py-3 "}>
              {icon}
              <button type="submit" onClick={onClick}>
                <h1 className="text-[#171717]  group:hover:text-neutral-100 text-sm text-center">
                  {name}
                </h1>
              </button>
            </div>
          ))}
        </section>
      ) : (
        <section className="flex gap-2 py-4 px-1">{button}</section>
      )}
    </div>
  );
};
