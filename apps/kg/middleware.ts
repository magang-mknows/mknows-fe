import { withAuth } from "next-auth/middleware";

export default withAuth(
  function (req) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return !!token;
      },
    },
  },
);

export const config = {
  matcher: [
    "/acara-kampus",
    "/acara-kampus/:path*",
    "/administrasi",
    "/analitik",
    "/dashboard",
    "/kalender-saya",
    "/konsultasi-dan-layanan",
    "/kontrak-krs",
    "/kontrak-krs/:path*",
    "/nilai-dan-sertifikat",
    "/papan-skor",
    "/penugasan",
    "/penyaluran-kerja",
    "/perencanaan-karir",
    "/profile",
    "/profile/:path*",
    "/rencana-studi",
    "/ruang-diskusi",
    "/simulasi-drill-dan-assestment",
    "/studi-ku",
  ],
};
