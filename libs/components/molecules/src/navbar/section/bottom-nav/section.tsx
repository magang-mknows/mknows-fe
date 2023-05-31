import Link from "next/link";
import { FC, ReactElement } from "react";
import { TBottomNavProps } from "./types";
import { useRouter } from "next/router";

export const BottomNav: FC<TBottomNavProps> = ({
  bottomNavItemStyle,
  bottomNavItems,
}): ReactElement => {
  const router = useRouter();
  return (
    <nav className="bg-neutral-50 hidden border-b-[1px] border-t-[1px] border-neutral-100 py-3 w-full px-8 md:-px-14 lg:px-16 lg:flex gap-4">
      {bottomNavItems.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            className={`${
              router.pathname === item.link ? bottomNavItemStyle : "hover:text-version3-500 "
            }  px-4 py-2.5 text-sm transition-all ease-in-out duration-300`}
          >
            <p>{item.name}</p>
          </Link>
        );
      })}
    </nav>
  );
};
