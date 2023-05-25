import { NextPage } from "next";
import { ForgotModule, LoginIllustration } from "../modules";
import { ReactElement } from "react";
import { GetSessionParams, getSession } from "next-auth/react";
import { AuthLayout } from "../modules";

const ForgotPages: NextPage = (): ReactElement => {
  return (
    <AuthLayout
      title="Lupa Kata Sandi"
      illustration={<LoginIllustration />}
      desc="Silahkan masukkan email yang sebelumnya sudah di daftarkan"
    >
      <ForgotModule />
    </AuthLayout>
  );
};

export async function getServerSideProps(context: GetSessionParams | undefined) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ForgotPages;
