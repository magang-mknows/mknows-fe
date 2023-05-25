import { LoadingSpinner } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import { lazily } from "react-lazily";
import { ErrorBoundary } from "react-error-boundary";
import Link from "next/link";
import { useRouter } from "next/router";

const { AuthLayout } = lazily(() => import("@mknows-frontend-services/modules"));

export const EmailSentModule: FC = (): ReactElement => {
  const router = useRouter();
  const [getError] = useState<string | undefined>(undefined);
  const [getTimer, setTimer] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setTimer((prev) => (prev !== 0 ? prev - 1 : prev));
    }, 1000);
    if (getTimer === 0) {
      router.push("/auth/login");
    }
  }, [getTimer, router]);

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={getError}
          title="Email Berhasil terkirim!"
          description="Silahkan cek Kotak masuk email anda untuk melanjutkan prosess reset kata sandi"
        >
          <section className="flex flex-col w-full justify-start">
            <div className="flex flex-col my-4">
              <span>Anda Akan Redirect ke halaman login dalam {getTimer} Detik</span>

              <div className="flex w-full items-start justify-start my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Tidak Redirect?</span>
                <Link className="text-primary-600" href={"/auth/login"}>
                  Klik Disini
                </Link>
              </div>
            </div>
          </section>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
