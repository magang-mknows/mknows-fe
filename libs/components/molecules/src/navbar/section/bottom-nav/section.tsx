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
    <nav className="flex items-center gap-x-6 border-t-[1px] border-neutral-200 px-[75px] bg-white py-[20px]">
      {bottomNavItems.map((nav, key) => (
        <Link
          href={nav.link}
          key={key}
          className={
            router.pathname !== nav.link ? "text-neutral-base bg-none" : bottomNavItemStyle
          }
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};
