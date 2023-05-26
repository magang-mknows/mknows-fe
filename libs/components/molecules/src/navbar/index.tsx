import { FC, ReactElement, Suspense } from "react";
import { TNavbarProps } from "./types";
import { lazily } from "react-lazily";
import { LBottomNav, LTopNav } from "./section";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const { BottomNav, TopNav } = lazily(() => import("./section"));

export const Navbar: FC<TNavbarProps> = (props): ReactElement => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="flex flex-col w-full sticky top-0 z-50">
      <Suspense fallback={<LTopNav />}>
        <TopNav {...props} />
      </Suspense>
      {session && props.bottomNavRules.includes(router.pathname) && (
        <Suspense fallback={<LBottomNav />}>
          <BottomNav {...props} />
        </Suspense>
      )}
    </header>
  );
};
