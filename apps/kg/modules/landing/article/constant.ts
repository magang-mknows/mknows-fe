import Card1 from "./assets/card-1.png";
import Card2 from "./assets/card-2.png";
import Card3 from "./assets/card-3.png";
import { TArticleCardProps } from "./components/card/types";

export const CARD: Array<TArticleCardProps> = [
  {
    title: "5 Extension VSCode yang bakal ngebantu kamu pas ngoding. Nomer 2 sering dipake!",
    tag: "Programmer",
    desc: "Hi guys! Kali ini kita akan membahas 15 ekstensi pada VS Code yang sangat berguna untuk para Frontend Developer. Oke, langsung saja kita bahas. Seperti yang kita ketahui bahwa VS Code memiliki marketplacenya sendiri dan berisi",
    src: Card1,
  },
  {
    title: "4 Tips yang mungkin belum kamu tau saat menanam sayur agar tidak mudah diserang hama",
    desc: "Umumnya, masyarakat mengenal tanaman refugia sebagai tanaman budidaya saja. Padahal, tanaman refugia merupakan jenis tumbuhan yang dapat menyediakan tempat perlindungan, sumber pakan atau sumberdaya yang lain bagi musuh alami",
    tag: "Pertanian",
    src: Card2,
  },
  {
    title: "Perusahaanmu ada 5 poin penting ini dalam masalah keuangan mereka? ",
    desc: "Manajemen keuangan adalah salah satu faktor penting dalam menentukan kesuksesan sebuah bisnis. Mengingat keuangan adalah masalah vital, rincian aliran dana keluar dan masuk pun tentulah harus jelas. Keuntungan adalah tujuan yang sudah umum bagi setiap",
    tag: "Ekonomi",
    src: Card3,
  },
];
