export const NAVBAR_MENU = [];

export const navbarMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Penugasan",
    link: "/penugasan",
  },
  {
    name: "Rencana Studi",
    link: "/rencana-studi",
  },
  {
    name: "Nilai & Sertifikat",
    link: "/nilai-sertifikat",
  },
];

export const featureList = [
  { link: "/", name: "Administrasi" },
  { link: "/", name: "Rencana Study" },
  { link: "/", name: "Studi-ku" },
  { link: "/", name: "Program Study" },
  { link: "/", name: "Pelatihan-ku" },
  { link: "/", name: "Nilai & Sertifikat" },
  { link: "/", name: "Penugasan" },
  { link: "/", name: "Forum Diskusi" },
  { link: "/", name: "Lainnya" },
];

export const notifListDummy = [
  { link: "/", name: "Lorem ipsum 1 ", time: "now" },
  { link: "/", name: "Lorem ipsum 2", time: "now" },
];

export const publicRoutes = [
  "/",
  "/auth/login",
  "/auth/register",
  "/auth/forgot",
  "/penugasan",
  "/dashboard",
  "/studiku",
  "/administrasi",
  "/rencana-studi",
  "/kontrak-krs",
  "/program-studi",
  "/nilai-sertifikat",
  "/detail",
  "/drill-simulasi",
  "/ubah-profile",
  "/ubah-password",
  "/event",
  "/semua-fitur",
  "/papan-skor",
];

export const assigmentBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Penugasan",
    link: "/penugasan",
  },
];

export const administrationBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Administrasi",
    link: "/administrasi",
  },
];
export const discussionRoomBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Ruang Diskusi",
    link: "/ruang-diskusi",
  },
];

export const myStudyBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
];

export const studyPlanBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
];

export const studyContractBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
  {
    name: "Program Studi",
    link: "/rencana-studi/fakultas/{id}",
  },
  {
    name: "Kontrak KRS",
    link: "/kontrak-krs/{matkul}",
  },
];

export const courseBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Menejemen Keuangan",
    link: "/studi-ku/course",
  },
];

export const modulCourseBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Menejemen Keuangan",
    link: "/studi-ku/course",
  },
  {
    name: "Menejemen Keuangan",
    link: "/studi-ku/course",
  },
];

export const quizBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Course",
    link: "/studi-ku/course",
  },
  {
    name: "Quiz",
    link: "/studi-ku/course/quiz",
  },
];

export const modulBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
];

export const tugasBreadCumbs = [
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Course",
    link: "/studi-ku/course",
  },
  {
    name: "Modul",
    link: "/studi-ku/modul",
  },
];

export const contentModulBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Studi-ku",
    link: "/studi-ku",
  },
  {
    name: "Course",
    link: "/studi-ku/course",
  },
  {
    name: "Modul",
    link: "/studi-ku/couse/modul",
  },
  {
    name: "Modul 1",
    link: "/studi-ku/modul/modul1",
  },
];

export const studyProgramBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
  {
    name: "Program Studi",
    link: "/program-studi",
  },
];

export const contractStudyBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Fakultas",
    link: "/rencana-studi",
  },
  {
    name: "Program Studi",
    link: "/rencana-studi/fakultas/teknik",
  },
  {
    name: "Kontrak KRS",
    link: "/kontrak-krs",
  },
];

export const scoreBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Nilai & Sertfikat",
    link: "/nilai-sertifikat",
  },
];
export const dashboardBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
];
export const leaderBoardBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Papan Skor",
    link: "/papan-skor",
  },
];
export const acaraKampusBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Acara Kampus",
    link: "/acara-kampus",
  },
];
export const drillSimulation = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Simulasi, Drill & Assessment",
    link: "/simulasi-drill",
  },
];
export const allFeatures = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Semua Fitur",
    link: "/semmua-fitur",
  },
];

export const rescheduleSimulationBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Simulasi, Drill & Assessment",
    link: "/drill-simulasi",
  },
  {
    name: "Pengajuan Perubahan Jadwal Simulasi",
    link: "/drill-simulasi/perubahan-jadwal",
  },
];

// private information section
export const optionsGender = [
  {
    value: "FEMALE",
    label: "Female",
  },
  {
    value: "MALE",
    label: "Male",
  },
];

export const optionsLastEducation = [
  {
    value: "NA",
    label: "Tidak lulus SD / belum tamat SD",
  },
  {
    value: "ELEMENTARY",
    label: "Tamat SD / setingkat",
  },
  {
    value: "HIGHSCHOOL",
    label: "Tamat SMP / setingkat",
  },
  {
    value: "SENIORHS",
    label: "Tamat SMA / setingkat",
  },
  {
    value: "DIPLOMA",
    label: "Diploma 1 / 2 / 3",
  },
  {
    value: "BACHELOR",
    label: "Sarjana (S1)",
  },
  {
    value: "MAGISTRATE",
    label: "Magister (S2)",
  },
  {
    value: "DOCTORATE",
    label: "Doktor (S3)",
  },
];

// job information section
export const optionOccupation = [
  {
    value: "pilih",
    label: "Pilih pekerjaan ayah",
  },
  {
    value: "BELUM_TIDAK_BEKERJA",
    label: "Belum / Tidak bekerja",
  },
  {
    value: "MENGURUS_RUMAH_TANGGA",
    label: "Mengurus Rumah Tangga",
  },
  {
    value: "PELAJAR_MAHASISWA",
    label: "Pelajar / Mahasiswa",
  },
  {
    value: "PENSIUNAN",
    label: "Pensiunan",
  },
  {
    value: "PEWAGAI_NEGERI_SIPIL",
    label: "Pegawai Negeri Sipil",
  },
  {
    value: "TENTARA_NASIONAL_INDONESIA",
    label: "Tentara Nasional Indonesia",
  },
  {
    value: "KEPOLISISAN_RI",
    label: "Kepolisian RI",
  },
  {
    value: "PERDAGANGAN",
    label: "Perdagangan",
  },
  {
    value: "PETANI_PEKEBUN",
    label: "Petani / Pekebun",
  },
  {
    value: "PETERNAK",
    label: "Peternak",
  },
  {
    value: "NELAYAN_PERIKANAN",
    label: "Nelayan / Perikanan",
  },
  {
    value: "INDUSTRI",
    label: "Industri",
  },
  {
    value: "KONSTRUKSI",
    label: "Konstruksi",
  },
  {
    value: "TRANSPORTASI",
    label: "Transportasi",
  },
  {
    value: "KARYAWAN_SWASTA",
    label: "Karyawan Swasta",
  },
  {
    value: "KARYAWAN_BUMN",
    label: "Karyawan BUMN",
  },
  {
    value: "KARYAWAN_BUMD",
    label: "Karyawan BUMD",
  },
  {
    value: "KARYAWAN_HONORER",
    label: "Karyawan Honorer",
  },
  {
    value: "BURUH_HARIAN_LEPAS",
    label: "Buruh Harian Lepas",
  },
  {
    value: "BURUH_TANI_PERKEBUNAN",
    label: "Buruh Tani Perkebunan",
  },
  {
    value: "BURUH_NELAYAN_PERIKANAN",
    label: "Buruh Nelayan Perikanan",
  },
  {
    value: "BURUH_PETERNAKAN",
    label: "Buruh Peternakan",
  },
  {
    value: "PEMBANTU_RUMAH_TANGGA",
    label: "Pembantu Rumah Tangga",
  },
  {
    value: "TUKANG_CUKUR",
    label: "Tukang Cukur",
  },
  {
    value: "TUKANG_LISTRIK",
    label: "Tukang Listrik",
  },
  {
    value: "TUKANG_BATU",
    label: "Tukang Batu",
  },
  {
    value: "TUKANG_KAYU",
    label: "Tukang Kayu",
  },
  {
    value: "TUKANG_SOL_SEPATU",
    label: "Tukang Sol Sepatu",
  },
  {
    value: "TUKANG_LAS_PANDAI_BESI",
    label: "Tukang Las / Pandai Besi",
  },
  {
    value: "TUKANG_JAHIT",
    label: "Tukang Jahit",
  },
  {
    value: "TUKANG_GIGI",
    label: "Tukang Gigi",
  },
  {
    value: "TUKANG_RIAS",
    label: "Tukang Rias",
  },
  {
    value: "TUKANG_BUSANA",
    label: "Tukang Busana",
  },
  {
    value: "TUKANG_RAMBUT",
    label: "Tukang Rambut",
  },
  {
    value: "MEKANIK",
    label: "Mekanik",
  },
  {
    value: "SENIMAN",
    label: "Seniman",
  },
  {
    value: "TABIB",
    label: "Tabib",
  },
  {
    value: "PARAJI",
    label: "Paraji",
  },
  {
    value: "PERANCANG_BUSANA",
    label: "Perancang Busana",
  },
  {
    value: "PENTERJEMAH",
    label: "Penterjemah",
  },
  {
    value: "IMAM_MASJID",
    label: "Imam Masjid",
  },
  {
    value: "PENDETA",
    label: "Pendeta",
  },
  {
    value: "PASTOR",
    label: "Pastor",
  },
  {
    value: "WARTAWAN",
    label: "Wartawan",
  },
  {
    value: "USTADZ_MUBALIGH",
    label: "Usatdz / Mubaligh",
  },
  {
    value: "JURU_MASAK",
    label: "Juru Masak",
  },
  {
    value: "PROMOTOR_ACARA",
    label: "Promotor Acara",
  },
  {
    value: "ANGGOTA_DPR_RI",
    label: "Anggota DPR RI",
  },
  {
    value: "ANGGOTA_DPD",
    label: "Anggota DPD",
  },
  {
    value: "ANGGOTA_BPK",
    label: "Anggota BPK",
  },
  {
    value: "PRESIDEN",
    label: "Presiden",
  },
  {
    value: "WAKIL PRESIDEN",
    label: "Wakil Presiden",
  },
  {
    value: "ANGGOTA_MAHKAMAH_KONSTITUSI",
    label: "Anggota Mahkamah Konstitusi",
  },
  {
    value: "ANGGOTA_KABINET_KEMENTERIAN",
    label: "Anggota Kabinet Kementrian",
  },
  {
    value: "DUTA_BESAR",
    label: "Duta Besar",
  },
  {
    value: "GUBERNUR",
    label: "Gubernur",
  },
  {
    value: "WAKIL_GUBERNUR",
    label: "Wakil Gubernur",
  },
  {
    value: "BUPATI",
    label: "Bupati",
  },
  {
    value: "WAKIL_BUPATI",
    label: "Wakil Bupati",
  },
  {
    value: "WALIKOTA",
    label: "Walikota",
  },
  {
    value: "WAKIL_WALIKOTA",
    label: "Wakil Walikota",
  },
  {
    value: "ANGGOTA_DPRD_PROVINSI",
    label: "Anggota DPRD Provinsi",
  },
  {
    value: "ANGGOTA_DPRD_KABUPATEN_KOTA",
    label: "Anggota DPRD Kabupaten Kota",
  },
  {
    value: "DOSEN",
    label: "Dosen",
  },
  {
    value: "Guru",
    label: "Guru",
  },
  {
    value: "PILOT",
    label: "Pilot",
  },
  {
    value: "PENGACARA",
    label: "Pengacara",
  },
  {
    value: "NOTARIS",
    label: "Notaris",
  },
  {
    value: "ARSITEK",
    label: "Arsitek",
  },
  {
    value: "AKUNTAN",
    label: "Akuntan",
  },
  {
    value: "KONSULTAN",
    label: "Konsultan",
  },
  {
    value: "DOKTER",
    label: "Dokter",
  },
  {
    value: "BIDAN",
    label: "Bidan",
  },
  {
    value: "PERAWAT",
    label: "Perawat",
  },
  {
    value: "APOTEKER",
    label: "Apoteker",
  },
  {
    value: "PSIKIATER_PSIKOLOG",
    label: "Psikiater Psikolog",
  },
  {
    value: "PENYIAR_TELEVISI",
    label: "Penyiar Televisi",
  },
  {
    value: "PENYIAR_RADIO",
    label: "Penyiar Radio",
  },
  {
    value: "PELAUT",
    label: "Pelaut",
  },
  {
    value: "PENELITI",
    label: "Peneliti",
  },
  {
    value: "SOPIR",
    label: "Sopir",
  },
  {
    value: "PIALANG",
    label: "Pialang",
  },
  {
    value: "PARANORMAL",
    label: "Paranormal",
  },
  {
    value: "PEDAGANG",
    label: "Pedagang",
  },
  {
    value: "PERANGKAT_DESA",
    label: "Perangkat Desa",
  },
  {
    value: "KEPALA_DESA",
    label: "Kepala Desa",
  },
  {
    value: "BIARAWATI",
    label: "Biarawati",
  },
  {
    value: "WIRASWASTA",
    label: "Wiraswasta",
  },
];

export const optionSalary = [
  {
    value: "pilih",
    label: "Pilih penghasilan ayah",
  },
  {
    value: "TANPA_PENGHASILAN",
    label: "Tanpa Penghasilan",
  },
  {
    value: "INCOME_0_1",
    label: "1 - 999.999 per bulan",
  },
  {
    value: "INCOME_1_2",
    label: "1 - 1,99 juta per bulan",
  },
  {
    value: "INCOME_2_4",
    label: "2 - 3,99 juta per bulan",
  },
  {
    value: "INCOME_4_6",
    label: "4 - 5,99 juta per bulan",
  },
  {
    value: "INCOME_6_7_5",
    label: "6 - 7,5 juta per bulan",
  },
  {
    value: "INCOME_7_5_10",
    label: "7,5 - 10 juta per bulan",
  },
  {
    value: "INCOME_10_MORE",
    label: "Lebih dari 10 juta per bulan",
  },
];

export const optionLiveWith = [
  {
    label: "Pilih tinggal dengan",
    value: "pilih",
  },
  {
    value: "PARENT",
    label: "Orang tua",
  },
  {
    value: "RELATIVE",
    label: "Keluarga dekat (Paman, Bibi, Kakek atau Nenek)",
  },
  {
    value: "FRIEND",
    label: "Teman",
  },
  {
    value: "SELF",
    label: "Tinggal sendiri",
  },
];

export const optionCollegeFeesPaid = [
  {
    value: "pilih",
    label: "Pilih biaya kuliah ditanggung oleh",
  },
  {
    value: "PARENT",
    label: "Orang tua",
  },
  {
    value: "RELATIVE",
    label: "Keluarga dekat (Paman, Bibi, Kakek atau Nenek)",
  },
  {
    value: "SCHOLARSHIP",
    label: "Beasiswa",
  },
  {
    value: "SELF",
    label: "Penghasilan sendiri",
  },
];

export const guideBookBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Panduan",
    link: "/panduan",
  },
  {
    name: "Buku Panduan",
    link: "/panduan/buku-panduan",
  },
];
export const guideVideoBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Panduan",
    link: "/panduan",
  },
  {
    name: "Video Panduan",
    link: "/panduan/video-panduan",
  },
];

export const guideRegistrationBreadCumbs = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Panduan",
    link: "/panduan",
  },
  {
    name: "Buku Panduan",
    link: "/panduan/buku-panduan",
  },
  {
    name: "Panduan Pendafataran",
    link: "/panduan/buku-panduan/panduan-pendaftaran",
  },
];

export const guideRegistrationVideo = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Panduan",
    link: "/panduan",
  },
  {
    name: "Video Panduan",
    link: "/video-panduan/buku-panduan",
  },
  {
    name: "Panduan Pendafataran",
    link: "/panduan/video-panduan/video-panduan-pendaftaran",
  },
];
