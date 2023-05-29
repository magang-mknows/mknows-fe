import { NextPage } from "next";
import { AuthLayout, LoginIllustration, LoginModule } from "../modules";
import { ReactElement } from "react";
import { GetSessionParams, getSession } from "next-auth/react";

const LoginPages: NextPage = (): ReactElement => {
  return (
    <AuthLayout
      title="Masuk"
      illustration={<LoginIllustration />}
      desc="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
    >
      <LoginModule />
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

export default LoginPages;
